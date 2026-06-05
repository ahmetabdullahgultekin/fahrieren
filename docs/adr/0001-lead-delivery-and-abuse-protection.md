# ADR-0001 — Lead Delivery and Abuse Protection

| | |
|---|---|
| **Status** | Accepted |
| **Date** | 2026-06-05 |
| **Author** | Engineering |
| **Relates to** | [design/lead-pipeline.md](../design/lead-pipeline.md) |

---

## Context

fahrieren.com is a static SPA deployed to Hostinger. It is a lead-generation site for Fahri Eren
(Eren Ticaret / Eren Yumurta). Visitors browse listings and submit contact enquiries or
newsletter sign-ups. Leads are the primary value delivered by the site.

A code audit on 2026-06-05 found that both lead paths (contact form and newsletter) silently
drop submissions: they POST to a JSONBin placeholder API with invalid credentials, catch the
resulting 401/404, and return `{ success: true }` to the UI. The `contacts` and `newsletter`
Firestore collections are secured and ready but have zero writers.

Three interconnected decisions need to be made:

1. **Where are leads stored?** (Firestore vs a third-party API vs something else)
2. **How are leads delivered to the owner?** (Real-time notification vs polling vs manual check)
3. **How is abuse prevented?** (Anti-spam, quota exhaustion, GDPR/KVKK compliance)

---

## Decision 1 — Firestore as the lead store (not JSONBin, not a custom backend)

### Options considered

| Option | Summary | Verdict |
|--------|---------|---------|
| **A. Firestore (existing Firebase project)** | Write directly from the client browser via `addDoc`. Already configured; `contacts`/`newsletter` rules exist. | **Selected** |
| B. JSONBin (current broken path) | Third-party JSON store; placeholder credentials; 401 on every write; no persistence. | Rejected — broken |
| C. Custom backend / serverless API | An HTTP endpoint (Vercel function, Hostinger PHP) that receives the form and stores the lead. | Rejected — introduces a new server-side component with auth, CORS, hosting; adds complexity and infra cost for a site that already has Firebase. The tech-stack review explicitly says to keep Firebase. |
| D. Google Sheets via API | `sheets.googleapis.com` write from client requires a service-account token in the browser (insecure) or a proxy function. | Rejected — adds complexity; a proxy function is no simpler than option C. |
| E. Firebase Realtime Database | Alternative Firebase product; no built-in shape validation in rules; less expressive than Firestore rules for this use case. | Rejected — Firestore is already in use for products, analytics, admins. |

### Rationale for A

- The Firebase project `trader-e-commerce` is already live with `db = getFirestore(app)`.
- `firestore.rules` already declares `contacts`/`newsletter` as append-only with admin reads.
- Firestore is operated by Google; no infra to manage.
- Firestore provides a durable, indexed, queryable store that the admin view (S4) can read.
- The existing `AuthService.isAdmin()` pattern can gate the admin read path without a new
  auth system.
- Firestore security rules allow richer validation (field allowlist, size limits, `request.time`
  enforcement) than any client-side-only approach.

**Consequences:**
- The client writes directly to Firestore. The Firebase SDK transmits the App Check token
  automatically with every request when `initializeAppCheck` is called.
- Lead data lives in the `trader-e-commerce` Firestore instance. The operator must not delete
  this project; it is the source of truth for leads.
- GDPR/KVKK data-subject deletion requests are fulfilled by the operator via Firebase Console
  or Admin SDK (a documented operator step, not a user-facing self-service flow in this tier).

---

## Decision 2 — Cloud Functions 2nd gen `onDocumentCreated` for owner notification

### Options considered

| Option | Summary | Verdict |
|--------|---------|---------|
| **A. Cloud Functions 2nd gen `onDocumentCreated`** | Firebase-native trigger; fires when a document is created in `contacts/{id}` or `newsletter/{id}`; dispatches notification. | **Selected** |
| B. Client sends WhatsApp message directly | `window.open(whatsappUrl, '_blank')` after form submit. Already exists in `ContactPage`. | Partial — kept as a parallel UX path; not sufficient alone because the user must actively send the message; if they close the tab, the lead is lost. |
| C. Firebase Extension "Trigger Email from Firestore" | Official Firebase Extension; installs a Cloud Function under the hood; sends SMTP email on document create. | Selected as an alternative if custom function deployment is not desired. Requires Blaze plan + SMTP credentials. Has the same trigger model as option A. |
| D. Polling from the owner's browser | Admin page polls Firestore every N seconds for new leads. | Rejected as the primary notification mechanism — the owner must have the admin page open. Acceptable as a supplementary view (S4) but not a notification system. |
| E. Firebase Cloud Messaging (FCM push to owner's device) | Server sends push to the owner's registered device. | Deferred — requires the owner to install a PWA or native app; not worth the complexity for a solo SME site in this tier. |

### Rationale for A

Cloud Functions 2nd gen (`firebase-functions/v2/firestore`, `onDocumentCreated`) is the current
recommended approach for Firestore event-driven work (as of 2026). The 2nd gen functions are
powered by Cloud Run and Eventarc; they have lower cold-start latency than 1st gen and more
configuration options. The SDK version requirement is `firebase-functions >= 4.0.0`.

The function is decoupled from the lead write: Firestore is the source of truth, and the function
is a notification side-effect. If the function fails or is not yet deployed, leads are still
persisted. This is the key reliability guarantee: notification failure is non-fatal.

The function writes `notifiedAt: FieldValue.serverTimestamp()` back to the document after
dispatch, making dispatch idempotent across Cloud Functions at-least-once delivery retries.

For the initial tier (S3), the notification is a WhatsApp deep-link URL stored as a metadata
field on the document, visible to the admin. The owner clicks it from the admin view (S4) or
the Firebase Console. Optional Tier 2 enhancement: if SMTP credentials are configured via
Firebase secrets (`defineSecret`), the function sends an HTML email via nodemailer.

The Firebase Extension "Trigger Email from Firestore" is an acceptable drop-in if the owner
prefers zero custom code. It uses the same trigger model and requires the same Blaze plan.

**Consequences:**
- Requires the Firebase Blaze (pay-as-you-go) plan. The Spark plan does not support Cloud Functions.
- Function code lives in `functions/` within the repo and is deployed via `firebase deploy --only functions`.
- The function runs as the Firebase service account; it uses the Admin SDK and is not subject to
  Firestore security rules.
- Cold starts will occur on an infrequently triggered function (a low-volume lead-gen site may
  receive 0–5 leads per day). This is acceptable; leads are not lost during cold starts.

---

## Decision 3 — Firebase App Check (reCAPTCHA Enterprise) + rules-level validation for anti-abuse

### Options considered

| Option | Summary | Verdict |
|--------|---------|---------|
| **A. Firebase App Check (reCAPTCHA Enterprise) + Firestore rules shape validation** | App Check enforces that writes originate from the registered web app on `fahrieren.com`; rules validate document shape/size. | **Selected** |
| B. App Check with reCAPTCHA v3 (not Enterprise) | Older provider; still supported but Firebase now recommends reCAPTCHA Enterprise for new projects. Enterprise has per-action scoring and does not show a CAPTCHA to users. | Acceptable fallback if Enterprise is not available; same integration pattern. |
| C. Rules-only (no App Check) | Firestore rules validate shape and size; anyone can write. | Rejected — rules validate shape but cannot verify the caller is a real browser. Bots can construct valid-shape payloads and flood the collection. |
| D. Honeypot field + client-side bot detection | Hidden `<input>` field; if filled by a bot, request is dropped client-side. | Rejected as sole defence — bypassed by bots that read the DOM. Acceptable as an additional UX layer (not a security control). |
| E. Rate limiting via Cloud Functions (callable) | Make lead submit a callable function with `enforceAppCheck: true`; implement rate limiting in function code. | Considered; rejected for initial tier because it adds a round-trip and latency vs direct Firestore write. Can be adopted in a future tier if rules-level defence is insufficient. |

### Rationale for A

Firebase App Check (reCAPTCHA Enterprise) is the current recommended abuse-prevention layer for
Firebase web apps as of the Firebase JS SDK v12 era. The `initializeAppCheck` call with
`ReCaptchaEnterpriseProvider` is a one-time addition to `firebase.ts`; the SDK automatically
attaches the token to every Firestore request. The token is validated by Firebase before the
request reaches Firestore rules.

reCAPTCHA Enterprise requires a site key registered for `fahrieren.com` in Google Cloud Console
(operator step). The site key is a public value (safe to commit to the codebase / `.env`).

Rules-level shape validation is the second layer. Even if an attacker obtains a valid App Check
token (e.g., by running the legitimate site code in a headless browser), the document shape
validation in `isValidContactLead()` / `isValidNewsletterLead()` limits the damage:
- No extra fields → no arbitrary data injection.
- `message` capped at 2 000 chars → no multi-megabyte payloads.
- `status` must be `'new'` on create → client cannot pre-set `'followed-up'`.
- `consentAt` required → every stored lead has a consent record.

The existing `analytics`/`sessions`/`events` collections are not addressed by this ADR. They
remain under `allow create, update: if true` — an acknowledged risk deferred to a separate
design decision.

**Consequences:**
- App Check enforcement is enabled per-service in the Firebase Console. Until enabled, App Check
  operates in reporting mode (writes are logged but not blocked). This is the correct rollout
  order: report first, then enforce.
- A debug token must be configured in the Firebase Console for local development. The debug token
  is added via `self.FIREBASE_APPCHECK_DEBUG_TOKEN` in development only; never committed or
  shipped in production builds.
- reCAPTCHA Enterprise has a generous free tier (1 M assessments/month); at fahrieren.com's
  traffic scale this is effectively free.

---

## Summary of Decisions

| # | Decision | Rationale (one line) |
|---|----------|----------------------|
| 1 | **Firestore** as lead store | Already configured, secure rules exist, no new infra |
| 2 | **Cloud Functions 2nd gen `onDocumentCreated`** for notification | Decoupled from write; lead is never lost if notification fails |
| 3 | **App Check (reCAPTCHA Enterprise) + rules shape validation** | Two-layer defence; no CAPTCHA friction for real users |

---

## References

- Firebase App Check web setup: https://firebase.google.com/docs/app-check/web/recaptcha-enterprise-provider
- Cloud Firestore triggers (2nd gen): https://firebase.google.com/docs/functions/firestore-events
- Extend Firestore with Cloud Functions (2nd gen): https://firebase.google.com/docs/firestore/extend-with-functions-2nd-gen
- Firebase Extension "Trigger Email from Firestore": https://extensions.dev/extensions/firebase/firestore-send-email
- Firebase JS SDK release notes (v12.14.0): https://firebase.google.com/support/release-notes/js
- Cloud Functions 2nd gen App Check enforcement: https://firebase.google.com/docs/app-check/cloud-functions
- Firebase Functions SDK v4+ required for 2nd gen App Check: `npm install firebase-functions@">=4.0.0"`

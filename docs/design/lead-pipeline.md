# Design: Reliable Lead Pipeline (fahrieren.com)

> **How we build features (the process this doc enforces).**
> 1. Design-doc first — no non-trivial feature starts as code. This doc is reviewed before implementation.
> 2. ADR for each significant decision — `docs/adr/NNNN-title.md`, immutable, numbered.
> 3. Sequence diagrams in `docs/diagrams/*.mmd` (Mermaid) so they render in the docs site.
> 4. Contract-first — Firestore collection schemas and security rules are defined here before implementation.
> 5. Vertical-slice agile — break the feature into thin end-to-end slices (S1…S4), each independently shippable behind a feature flag (default OFF).
> 6. Reversible rollout — flag default-OFF = byte-identical to today; dark → staging → broad. Kill-switch by flag, never a redeploy.
> 7. TDD + green CI gate — tests written against the contract; CI (build + test + lint + typecheck) must be green.
> 8. Verify in the real product — a slice is "done" only when demonstrated end-to-end in the running app.

| | |
|---|---|
| **Status** | Accepted — S1 + client-resilience tier SHIPPED (2026-06-06) |
| **Author** | Engineering (2026-06-05) |
| **Reviewers** | Fahri Eren (owner) |
| **Feature flag** | `VITE_LEAD_PIPELINE_ENABLED` (default `false`) |
| **ADRs** | [ADR-0001 Lead delivery and abuse protection](../adr/0001-lead-delivery-and-abuse-protection.md) |
| **Tracking** | ROADMAP lead-pipeline → slices S1–S4 |

---

## 0. Implementation status (2026-06-06)

The **client-resilience tier** of this design has shipped behind the
`VITE_LEAD_PIPELINE_ENABLED` flag (default OFF):

- **Durable local outbox** (`src/services/leadOutbox.ts`) — every submitted lead
  is written to `localStorage` (`fahrieren.leadOutbox.v1`) *before* any network
  call, so it is never silently dropped. Survives reload/crash/offline.
- **Idempotency keys** — each lead carries a stable `id` (the outbox key),
  written to Firestore as `clientLeadId`; the outbox never re-delivers a `sent`
  item, and retries reuse the same key so the owner can dedupe at-least-once
  delivery.
- **Retry with exponential backoff** — failed deliveries are retried (base 2 s,
  ×2, capped 5 min, up to 6 attempts), automatically on mount and on `online`.
- **Explicit status, no swallowed catch** — `LeadService` returns
  `{success}` / `{queued}` / `{error}`; the UI shows success, a "saved &
  will retry" (queued) state, or a real error — never a fake success (the old
  `dataService` bug). See `src/services/leadService.ts`, `src/hooks/index.ts`.
- **Recovery affordance** — `LeadOutboxBanner` (mounted in `Layout`) lists
  queued/failed leads with per-item and bulk retry + discard.
- **Hardened Firestore rules** — `contacts`/`newsletter` now validate shape,
  size, field allowlist, required `consentAt`, server `createdAt`, and the
  `clientLeadId`. (Rules deploy is an operator step.)
- **KVKK/GDPR consent** — required checkbox on the contact form when the flag is
  ON; `consentAt` ISO timestamp stored on every lead.
- **Tests** — `leadOutbox.test.ts` (durability, idempotency, backoff, retry,
  failure-parking, storage-failure resilience), `leadService.test.ts`
  (success/queued/no-fake-success/idempotency), `leadHooks.test.tsx`
  (explicit status surfacing).

**Operator-gated, NOT yet shipped** (require Firebase Console / Blaze plan):
App Check enforcement (reCAPTCHA Enterprise), Cloud Functions notification
(S3), admin LeadsPage (S4). The durable client path works correctly without
them — leads accumulate in Firestore (or the outbox if offline) regardless.

---

## 1. Context & Problem

fahrieren.com is a bilingual (TR/EN) multi-category trading and lead-generation site for Fahri
Eren (Eren Ticaret / Eren Yumurta). It lists emlak, araç, tarım, and inşaat ürünleri, monetised
via Google AdSense. The site's primary revenue mechanism is lead generation: a visitor sees a
listing they want and contacts the owner.

**The current situation silently drops every lead.**

A code-quality audit on 2026-06-05 (`docs/CODE_QUALITY_2026-06-05.md`, finding P1-2) confirmed:

- `src/hooks/index.ts` — `useNewsletter` and `useContactForm` both call `apiManager`, which
  POSTs to `https://api.jsonbin.io/v3/bins/{binId}/...` using placeholder credentials from
  `src/config/apiConfig.ts` (`API_KEY: '$2a$10$...'`, `BIN_ID: '67123...'`). Every request
  returns HTTP 401 or 404.
- `src/services/dataService.ts:37-42` — `submitContactForm` catches the 401/404 and returns
  `{ success: true }` regardless. The caller sees success toast; the lead vanishes.
- `firestore.rules:50-58` — `contacts` and `newsletter` are secured, append-only, and ready.
  Nothing writes to them. The secured collections are dead.
- `src/pages/ContactPage.tsx:38-66` — the contact form submits to WhatsApp redirect only, with
  no persistence path; the form data is formatted into a WhatsApp URL and opened in a new tab.
  If the user closes before sending, the message is lost.

Beyond lead loss, the analytics/sessions/events collections allow unbounded unauthenticated
writes (`allow create, update: if true`) with no shape validation, creating a quota-exhaustion
attack surface. Lead capture must not share this pattern.

**Why now:** the business is live and AdSense traffic is being acquired. Every lead lost to the
placeholder is direct revenue foregone.

---

## 2. Goals / Non-goals

### Goals

- **Zero silent drops.** A visitor who submits the contact or newsletter form gets a record
  persisted in Firestore and a notification dispatched to the owner within seconds.
- **Hardened write path.** Lead collections use strict Firestore security rules (shape
  validation, size limits, field allowlist) + Firebase App Check (reCAPTCHA Enterprise) to
  prevent abuse.
- **Owner notification.** A Firestore-triggered Cloud Function (2nd gen, `onDocumentCreated`)
  dispatches a WhatsApp message (via the configured WhatsApp URL) or email when a new lead lands.
  Leads are never silently lost even if the notification fails — Firestore is the source of truth.
- **Lightweight admin view.** A protected admin page in the existing SPA lists and marks leads
  as read/followed-up, reading from Firestore directly (admin-authenticated).
- **Quota abuse prevention.** App Check enforces that writes originate from a verified browser
  context. Per-IP and per-document rate-limiting via rules prevents bulk flooding.
- **GDPR/KVKK compliance surface.** Consent checkbox on both forms; `consentAt` timestamp
  stored on the document; data-deletion path available via Firestore Console / Admin SDK.
- **Flag-gated rollout.** The new Firestore path is behind `VITE_LEAD_PIPELINE_ENABLED`. When
  the flag is `false` the existing (broken) behaviour is byte-identical to today. No regression.

### Non-goals (this tier)

- A full CRM (pipeline stages, assignment, SLA timers) — out of scope.
- Email delivery via SMTP / third-party email API in the initial tier. Notification via
  WhatsApp deep-link (existing `config.contact.whatsappUrl(message)`) is the first tier.
  Cloud Function → email is designed in (S3) but treated as optional enhancement.
- Server-side rendering or a dedicated backend. The site is and remains a static SPA on Hostinger.
- Replacing the existing WhatsApp contact button — it stays as a parallel fast path. The form
  adds persistence on top.
- Deduplication across leads (same email submitting twice is stored twice; dedup is a CRM concern).

---

## 3. Current State

### What exists and is reused

| File | Role | Status |
|------|------|--------|
| `src/config/firebase.ts` | Firebase app init, `db` export | Healthy, reused as-is |
| `firestore.rules` | `contacts`/`newsletter` append-only, default-deny | Healthy skeleton; needs hardening (shape/size/App Check enforcement) |
| `src/pages/ContactPage.tsx` | Contact form UI (name, email, phone, subject, message) | Reused; handler rewired |
| `src/hooks/index.ts` `useContactForm` / `useNewsletter` | State management hooks | Rewired to Firestore; JSONBin path deleted |
| `src/services/translationService.ts` | TR/EN i18n dictionary | Extended with new keys |
| `src/services/firebaseService.ts` | `AuthService.isAdmin()` + `ProductService` | Reused; `LeadService` added here |
| `src/contexts/AuthContext.tsx` | Admin auth state | Reused for admin view gate |

### What is removed

| File / Symbol | Reason |
|---|---|
| `src/config/apiConfig.ts` — `JSONBIN.*` keys, `NEWSLETTER`/`CONTACT` endpoints | Dead placeholder; replaced by Firestore path |
| `src/services/apiManager.ts` — `subscribeNewsletter`, `sendContactMessage` | Dead paths; removed |
| `src/services/dataService.ts` — `submitContactForm`, `subscribeNewsletter` (the fake-success catch) | Replaced; fake-success removed |

The `apiManager` singleton itself survives if other callers exist; only the lead-path methods are
removed. `apiConfig.ts` survives for any remaining feature-flag config but the JSONBin section
is excised.

### What is introduced (new)

- `src/services/leadService.ts` — `LeadService` with `submitContact()` and `subscribeNewsletter()` writing to Firestore via `addDoc`.
- `functions/` directory — Firebase Cloud Functions (2nd gen) project for the `onNewLead` trigger.
- `src/pages/admin/LeadsPage.tsx` — Admin-gated lead list (read via Firestore, admin-authenticated).
- Hardened `firestore.rules` — shape/size/field allowlist validation on `contacts`/`newsletter`.
- `firebase.json` — extended to include the `functions` deploy target.

---

## 4. Proposed Design

The design has four concerns resolved in this document:

1. **Lead capture** — `addDoc` to Firestore with App Check token attached.
2. **Anti-abuse** — rules-level field/size validation + App Check enforcement + per-IP Firestore
   throttle (rule-based).
3. **Notification** — Cloud Function triggered on `onDocumentCreated` for `contacts/{id}` and
   `newsletter/{id}`, dispatching a notification to the owner.
4. **Admin view** — a protected React page that queries Firestore as an authenticated admin.

See `docs/diagrams/lead-pipeline.mmd` for the full sequence diagram.

### 4.1 Lead Capture Flow

```
Visitor fills form
       │
       ▼
ContactPage / NewsletterSection
  (form validation: Yup schema on client)
       │
       ▼  addDoc(collection(db,'contacts'), payload)
LeadService.submitContact()
  — App Check token auto-attached by SDK
  — payload: { name, email, phone, subject, message,
               category, source, language, consentAt,
               userAgent, createdAt: serverTimestamp() }
       │
       ▼
Firestore /contacts/{autoId}           ← source of truth, never lost
  (rules: shape + size + no update + no delete by client)
       │
       ▼  onDocumentCreated trigger (Cloud Function, 2nd gen)
onNewContactLead(event)
  — reads event.data.data()
  — formats WhatsApp deep-link message (or email payload)
  — calls NOTIFY_TARGET (env var): WhatsApp URL open or HTTP email trigger
       │
       ▼
Owner receives WhatsApp / email notification
```

The key invariant: **Firestore write happens first, synchronously from the client's perspective.**
Notification failure (network down, WhatsApp timeout) does not affect persistence. Leads accumulate
in Firestore even if no function has been deployed yet.

### 4.2 Anti-abuse

Three layers compound:

1. **Firebase App Check (reCAPTCHA Enterprise)** — the Firebase client SDK enforces App Check
   before any Firestore write. Bots and non-browser clients that cannot prove they are the
   registered web app (domain: `fahrieren.com`) are rejected at the SDK level before reaching
   Firestore. Firebase JS SDK v12+ ships `firebase/app-check`; enable enforcement in the Firebase
   Console (Settings > App Check > fahrieren.com web app > Enforce). See ADR-0001.

2. **Firestore security rules — field allowlist and size limits** — even if App Check is bypassed
   (e.g., during the debug-token grace period), rules validate the document shape:
   - Only the declared fields are allowed (no extra fields).
   - `message` and `name` are capped at 2 000 characters; `email` at 254 chars; `phone` at 20 chars.
   - `createdAt` must be `request.time` (prevents backdating).
   - `consentAt` must be present (GDPR/KVKK: no lead stored without consent signal).
   - No `update` or `delete` from client (append-only).

3. **Client-side rate limiting (UX)** — the submit button is disabled for 30 seconds after a
   successful submission, and the hook tracks a `submittedAt` timestamp in `sessionStorage` to
   prevent accidental double-submit.

Note on `analytics`/`sessions`/`events`: these collections allow unbounded unauthenticated writes
and are an acknowledged quota-exhaustion risk (see Risks section). Hardening those is a separate
follow-up; this design does not widen the problem.

### 4.3 Notification Path

Cloud Functions 2nd gen (`firebase-functions >= 4.0.0`, Node 20) using `onDocumentCreated` from
`firebase-functions/v2/firestore`:

```
functions/
  src/
    index.ts            — exports onNewContactLead, onNewNewsletterLead
    notify.ts           — WhatsApp URL format + email dispatch (nodemailer optional)
    config.ts           — reads defineSecret / process.env for NOTIFY_WHATSAPP_NUMBER,
                           NOTIFY_EMAIL_TO, SMTP_* (all optional)
```

The function reads the new document, formats a human-readable summary (in Turkish, matching the
owner's preference), and:

- **Primary:** logs the lead to Cloud Functions log (always, free, never fails).
- **WhatsApp (Tier 1):** constructs the same `config.contact.whatsappUrl(message)` URL and stores
  it as a meta-field on the document so the admin can click it from the admin view.
  (Opening a URL from a server context is not useful; the owner sees it in the admin view or in
  the raw Firestore Console.)
- **Email (Tier 2, optional):** if `NOTIFY_EMAIL_TO` and `SMTP_*` secrets are set, sends a
  structured HTML email via nodemailer.
- **Firebase Extension alternative:** if custom function deployment is not feasible, the official
  Firebase Extension "Trigger Email from Firestore" (published by Firebase team, current as of
  2026) can be installed from the Extensions Hub — it triggers on `contacts/{id}` creates and
  sends SMTP email with zero custom code.

The function is idempotent: it checks `event.data.data().notifiedAt` before acting; if set, it
exits immediately. This guard handles Cloud Functions at-least-once delivery.

### 4.4 Admin View

A protected route `/admin/leads` reads `contacts` and `newsletter` from Firestore using the
existing `AuthContext` admin-auth gate (`isAdmin()` checks the `admins/{uid}` doc).

Features:
- Paginated list (newest first, `orderBy('createdAt','desc')`, `limit(50)`).
- Filter by lead type (contact vs newsletter), category, and status (`new` / `followed-up`).
- Mark as followed-up (`updateDoc` setting `status: 'followed-up'`; allowed because the admin
  write rule on `contacts`/`newsletter` is `allow read, update, delete: if isAdmin()`).
- WhatsApp deep-link button per contact lead (opens the owner's WhatsApp with the lead's context
  pre-filled).
- Export to CSV (client-side, no server required).

---

## 5. Data Model — Firestore Collections

### 5.1 `contacts/{autoId}`

Field contract (all fields required unless marked optional):

| Field | Type | Constraint | Notes |
|-------|------|------------|-------|
| `name` | string | 1–200 chars | Lead's full name |
| `email` | string | 1–254 chars, RFC 5321 | Lead's email address |
| `phone` | string | 0–20 chars | Optional; TR mobile format preferred |
| `subject` | string | 1–200 chars | Enquiry subject |
| `message` | string | 1–2000 chars | Body text |
| `category` | string | one of `realestate`, `vehicles`, `construction`, `farm`, `general` | Which product category triggered contact |
| `source` | string | `contact_form`, `product_detail` | Which form submitted |
| `language` | string | `tr`, `en` | UI language at time of submission |
| `consentAt` | string (ISO 8601) | required | GDPR/KVKK consent timestamp (set by client) |
| `createdAt` | timestamp | `request.time` | Server-set; no client override |
| `status` | string | `new`, `followed-up` | Admin-managed; default `new` |
| `notifiedAt` | timestamp (optional) | set by Cloud Function on dispatch | Idempotency guard |
| `userAgent` | string (optional) | max 500 chars | Browser UA for spam analysis |

### 5.2 `newsletter/{autoId}`

| Field | Type | Constraint | Notes |
|-------|------|------------|-------|
| `email` | string | 1–254 chars | Subscriber email |
| `language` | string | `tr`, `en` | UI language |
| `consentAt` | string (ISO 8601) | required | GDPR/KVKK explicit consent |
| `createdAt` | timestamp | `request.time` | Server-set |
| `status` | string | `active`, `unsubscribed` | Admin-managed; default `active` |
| `notifiedAt` | timestamp (optional) | Cloud Function dispatch guard | |

### 5.3 Hardened Firestore Security Rules (sketch)

The full implementation replaces the current permissive `allow create: if true` with:

```javascript
// contacts — append-only with shape validation
match /contacts/{contactId} {
  allow create: if
    // App Check enforcement (enabled via Firebase Console for the web app)
    // When App Check is enforced, the SDK attaches a token automatically;
    // rules need no extra check — the token is validated at the transport layer.
    isValidContactLead(request.resource.data);

  // Admin reads/updates/deletes (e.g., mark followed-up, CSV export)
  allow read, update, delete: if isAdmin();
}

function isValidContactLead(data) {
  return data.keys().hasOnly([
      'name','email','phone','subject','message',
      'category','source','language','consentAt',
      'createdAt','status','userAgent'
    ])
    && data.name is string && data.name.size() >= 1 && data.name.size() <= 200
    && data.email is string && data.email.size() >= 5 && data.email.size() <= 254
    && (data.phone == null || (data.phone is string && data.phone.size() <= 20))
    && data.subject is string && data.subject.size() >= 1 && data.subject.size() <= 200
    && data.message is string && data.message.size() >= 1 && data.message.size() <= 2000
    && data.category in ['realestate','vehicles','construction','farm','general']
    && data.source in ['contact_form','product_detail']
    && data.language in ['tr','en']
    && data.consentAt is string && data.consentAt.size() > 0
    && data.createdAt == request.time
    && data.status == 'new'
    && (data.userAgent == null || (data.userAgent is string && data.userAgent.size() <= 500));
}

// newsletter — append-only with shape validation
match /newsletter/{subscriberId} {
  allow create: if isValidNewsletterLead(request.resource.data);
  allow read, update, delete: if isAdmin();
}

function isValidNewsletterLead(data) {
  return data.keys().hasOnly(['email','language','consentAt','createdAt','status','userAgent'])
    && data.email is string && data.email.size() >= 5 && data.email.size() <= 254
    && data.language in ['tr','en']
    && data.consentAt is string && data.consentAt.size() > 0
    && data.createdAt == request.time
    && data.status == 'active'
    && (data.userAgent == null || (data.userAgent is string && data.userAgent.size() <= 500));
}
```

Note on App Check enforcement and rules: when App Check enforcement is enabled in the Firebase
Console for `firestore.googleapis.com`, requests without a valid App Check token are rejected
before rules even run. The rules above are the defence-in-depth layer that validates document
shape even if a token passes (e.g., during the debug-token grace window).

---

## 6. Contract

### 6.1 LeadService (TypeScript interface)

```typescript
// src/services/leadService.ts — contract only (implementation in S1)

export interface ContactLeadPayload {
  name: string;           // 1–200
  email: string;          // 1–254
  phone?: string;         // 0–20
  subject: string;        // 1–200
  message: string;        // 1–2000
  category: LeadCategory;
  source: LeadSource;
  language: 'tr' | 'en';
  consentAt: string;      // ISO 8601, required
}

export type LeadCategory = 'realestate' | 'vehicles' | 'construction' | 'farm' | 'general';
export type LeadSource = 'contact_form' | 'product_detail';

export interface NewsletterLeadPayload {
  email: string;          // 1–254
  language: 'tr' | 'en';
  consentAt: string;      // ISO 8601, required
}

export interface LeadResult {
  success: boolean;
  docId?: string;         // Firestore document ID on success
  error?: string;
}

export interface ILeadService {
  submitContact(payload: ContactLeadPayload): Promise<LeadResult>;
  subscribeNewsletter(payload: NewsletterLeadPayload): Promise<LeadResult>;
}
```

### 6.2 Cloud Function contract

Trigger: `onDocumentCreated('contacts/{contactId}')` and `onDocumentCreated('newsletter/{subscriberId}')` (2nd gen, `firebase-functions/v2/firestore`).

Input: the new Firestore document snapshot (`event.data`).

Side effects:
- Writes `notifiedAt: FieldValue.serverTimestamp()` back to the document on success (admin SDK, bypasses rules).
- Logs structured JSON to Cloud Functions log.
- (Optional Tier 2) Sends SMTP email if `NOTIFY_EMAIL_TO` environment secret is set.

No output to caller (Firestore trigger, not callable function).

### 6.3 i18n keys (TR/EN additions)

New keys required in `src/services/translationService.ts`:

| Key path | TR value (example) | EN value (example) |
|---|---|---|
| `leads.consent_label` | `{privacy_link} metnini okudum ve kabul ediyorum.` | `I have read and accept the {privacy_link}.` |
| `leads.consent_required` | `Devam etmek için onay gereklidir.` | `Consent is required to continue.` |
| `leads.contact_success` | `Mesajınız alındı! En kısa sürede dönüş yapacağız.` | `Your message was received! We will get back to you shortly.` |
| `leads.newsletter_success` | `Aboneliğiniz başarıyla oluşturuldu.` | `You have successfully subscribed.` |
| `leads.submit_error` | `Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin.` | `An error occurred during submission. Please try again.` |
| `admin.leads.title` | `İletişim Talepleri` | `Lead Inbox` |
| `admin.leads.status_new` | `Yeni` | `New` |
| `admin.leads.status_followed` | `Takip Edildi` | `Followed Up` |
| `admin.leads.mark_followed` | `Takip Edildi Olarak İşaretle` | `Mark as Followed Up` |
| `admin.leads.export_csv` | `CSV Olarak Dışa Aktar` | `Export as CSV` |

All keys must be added to both the TR and EN sections of `translationService.ts`. No hardcoded
strings in component files.

---

## 7. Files to Add / Change

```
fahrieren/
  src/
    config/
      apiConfig.ts                      (~) remove JSONBIN.* keys + NEWSLETTER/CONTACT endpoints
      firebase.ts                       (~) add initializeAppCheck() call (S2)

    services/
      leadService.ts                    (+) ILeadService implementation: addDoc to contacts/newsletter
      firebaseService.ts                (~) export LeadService singleton (or keep in leadService.ts)
      dataService.ts                    (~) remove fake-success submitContactForm/subscribeNewsletter
      apiManager.ts                     (~) remove subscribeNewsletter, sendContactMessage dead paths

    hooks/
      index.ts                          (~) useContactForm + useNewsletter: rewire to LeadService
                                            add consentGiven state; remove JSONBin apiManager calls

    pages/
      ContactPage.tsx                   (~) add consentAt capture; rewire handleSubmit to LeadService;
                                            add consent checkbox (i18n key leads.consent_label)
      admin/
        LeadsPage.tsx                   (+) admin-gated lead list (contacts + newsletter) with
                                            status filter, mark-followed-up, CSV export,
                                            WhatsApp deep-link per lead

    types/
      index.ts                          (~) add ContactLeadPayload, NewsletterLeadPayload, LeadResult,
                                            LeadCategory, LeadSource types

    services/
      translationService.ts             (~) add leads.* + admin.leads.* i18n keys (TR + EN)

    components/
      leads/
        ConsentCheckbox.tsx             (+) reusable consent checkbox with privacy link
        NewsletterForm.tsx              (~) if newsletter form is extracted; add consentAt

  firestore.rules                       (~) replace permissive contacts/newsletter allow create
                                            with isValidContactLead() / isValidNewsletterLead()
                                            (shape + size + field allowlist validation)

  functions/                            (+) Cloud Functions project (2nd gen, Node 20)
    package.json                        (+) firebase-functions >= 4.0.0, typescript, nodemailer
    tsconfig.json                       (+)
    src/
      index.ts                          (+) exports onNewContactLead, onNewNewsletterLead
      notify.ts                         (+) WhatsApp meta-field write + optional email dispatch
      config.ts                         (+) env/secret readers

  firebase.json                         (~) add "functions" deploy target

  docs/
    design/
      lead-pipeline.md                  (+) this document
    adr/
      0001-lead-delivery-and-abuse-protection.md  (+)
    diagrams/
      lead-pipeline.mmd                 (+) Mermaid sequence diagram
```

---

## 8. Rollout & Flags

### Feature flag: `VITE_LEAD_PIPELINE_ENABLED`

Defined in `.env` (local dev) and the GitHub Actions secret / Hostinger deploy environment.

| Value | Behaviour |
|-------|-----------|
| `false` (default) | `useContactForm` / `useNewsletter` continue to call `apiManager` (unchanged, still broken but byte-identical to today). No Firestore writes from lead forms. |
| `true` | `LeadService` is used; Firestore writes + App Check active; admin page accessible. |

The flag guards the service selection in `useContactForm` and `useNewsletter` hooks:

```typescript
// hooks/index.ts (conceptual — no code changes in this doc)
const service = import.meta.env.VITE_LEAD_PIPELINE_ENABLED === 'true'
  ? leadService
  : legacyApiManager;
```

### Rollout stages

1. **Dark (S1 complete):** flag `false` in all environments. `LeadService` exists but is never
   called. Firestore rules hardened. Verify rules in the Firestore Emulator.

2. **Staging / dev preview (S2 complete):** flag `true` in a dev deploy (a separate Hostinger
   subdirectory, or a branch deploy). App Check in debug-token mode. Manually submit test leads;
   verify Firestore documents appear; verify the hardened rules reject malformed payloads.

3. **Production (S3 complete + operator steps done):**
   - App Check enforcement enabled in Firebase Console.
   - reCAPTCHA Enterprise site key added to `.env.production`.
   - Cloud Functions deployed (`firebase deploy --only functions`).
   - `VITE_LEAD_PIPELINE_ENABLED=true` in production build environment.
   - Flag `true` pushed to master → auto-deploy via GitHub Actions.

4. **Broad (S4 complete):** admin view live; old JSONBin code deleted; CLAUDE.md updated.

### Backwards compatibility

- The flag default `false` means the current (broken) path is preserved identically — no user
  experience change until the operator deliberately flips the flag.
- Firestore rules are hardened before the flag is flipped (S1) — they are additive restrictions
  on collections that currently have no writers anyway.
- The Cloud Function does not modify the document in a way that breaks client reads.

---

## 9. Agile Iteration Plan

Each slice is independently shippable behind the feature flag. "Done =" is the acceptance
criterion verified in the running app.

### S1 — Hardened rules + LeadService (no live traffic yet)

**Scope:** write `LeadService`, harden `firestore.rules`, add i18n keys, add types.
Flag stays `false`. No UI changes.

**Done =** Firestore Emulator accepts a well-formed `contacts` and `newsletter` document; rejects
a document with a missing `consentAt`, an oversized `message`, or an unexpected field. `LeadService`
unit tests green. CI green.

### S2 — Wired forms + App Check (dev deploy, flag true)

**Scope:** rewire `useContactForm` and `useNewsletter` to call `LeadService` when flag is `true`.
Add consent checkbox to `ContactPage` and newsletter form. Add `initializeAppCheck` (debug-token
in dev). Deploy to staging with `VITE_LEAD_PIPELINE_ENABLED=true`.

**Done =** submitting the contact form on the dev deploy creates a real document in Firestore
`contacts` collection (verified in Firebase Console). Submitting without the consent checkbox
is blocked by client validation. A malformed payload (missing required field) is rejected by
Firestore rules (rules test verifies). App Check debug token accepted. CI green.

### S3 — Cloud Function notification (production-ready)

**Scope:** write `functions/src/index.ts` (2nd gen `onDocumentCreated`). Writes `notifiedAt`
back to document. Optionally dispatches email via nodemailer if `NOTIFY_EMAIL_TO` is set.
Admin reviews WhatsApp link per lead in Firebase Console (pre-admin-view).

**Done =** when a test contact is submitted on prod, a Cloud Functions log entry appears within
10 seconds for that document ID, and the document gains a `notifiedAt` timestamp. No double-fire
on function retry (idempotency guard). Operator can open the WhatsApp link from the Firestore
Console and it pre-fills the lead context in WhatsApp.

### S4 — Admin lead view (production)

**Scope:** `src/pages/admin/LeadsPage.tsx`. Protected by `isAdmin()`. Paginated contact and
newsletter leads, filter by status, mark-followed-up, CSV export, WhatsApp deep-link button.
Delete JSONBin stack (`apiConfig.ts` JSONBIN section, dead paths in `apiManager`, fake-success
in `dataService`). Update CLAUDE.md.

**Done =** the admin (signed in as the `admins/{uid}` user) can see all leads, mark one as
followed-up (Firestore `status` field updates), export the list as CSV, and open the WhatsApp
pre-fill link. Old JSONBin code is gone from the repo. 0 lint errors. CI green.

---

## 10. Test Plan

### Unit tests (Vitest)

| Test | Target | Assertion |
|------|--------|-----------|
| `leadService.submitContact — happy path` | `LeadService` | `addDoc` called with correct payload; returns `{ success: true, docId: ... }` |
| `leadService.submitContact — Firestore error` | `LeadService` | Returns `{ success: false, error: '...' }` without throwing; no fake success |
| `leadService.subscribeNewsletter — duplicate email` | `LeadService` | If Firestore rejects (rules), returns error; does not return `success: true` |
| `useContactForm — submit without consent` | Hook | Submit button disabled; no `LeadService` call |
| `useContactForm — submit with valid payload` | Hook | Calls `LeadService.submitContact`; sets status to `success` |
| `useNewsletter — empty email` | Hook | Does not call `LeadService` |
| `ConsentCheckbox — renders i18n key` | Component | Renders `t('leads.consent_label')` |

### Firestore rules tests (Firebase Emulator + `@firebase/rules-unit-testing`)

| Test | Collection | Assertion |
|------|-----------|-----------|
| Create with full valid payload | `contacts` | Allowed |
| Create with missing `consentAt` | `contacts` | Denied |
| Create with `message` > 2000 chars | `contacts` | Denied |
| Create with extra unknown field | `contacts` | Denied |
| Create with `status` != `'new'` | `contacts` | Denied |
| Update by unauthenticated client | `contacts` | Denied |
| Update by admin | `contacts` | Allowed |
| Read by unauthenticated client | `contacts` | Denied |
| Create valid newsletter | `newsletter` | Allowed |
| Create newsletter without `consentAt` | `newsletter` | Denied |

### Cloud Function integration test (Firebase Emulator)

| Test | Assertion |
|------|-----------|
| `onNewContactLead` fires on new `contacts` document | Function log entry appears; `notifiedAt` set on document |
| `onNewContactLead` called twice (at-least-once delivery) | Second call exits early (idempotency guard); only one log entry |
| Function receives document with all required fields | Structured log contains `name`, `email`, `subject`, `category` |

### End-to-end (manual, staging deploy)

1. Submit contact form with all fields filled + consent checked → Firestore document appears.
2. Submit newsletter form with valid email + consent → Firestore document appears.
3. Submit contact form without consent → form rejects client-side; no Firestore write.
4. Admin signs in → navigates to `/admin/leads` → sees both submissions.
5. Mark a lead as followed-up → `status` field changes in Firestore Console.
6. Export CSV → downloaded file contains the two test leads.
7. Open WhatsApp link on a lead → WhatsApp opens with pre-filled context.

---

## 11. Risks & Open Questions

| Risk | Severity | Mitigation |
|------|----------|------------|
| **Firestore write quotas (spam flood)** | High | App Check (primary), rules shape validation (secondary), `consentAt` required (friction). Quota alert set in Firebase Console (operator step). If quotas are hit, flag `false` kills the write path in minutes without redeploy. |
| **App Check debug tokens in prod** | High | Debug token only added via `.env.development`; never committed or shipped in prod build. App Check enforcement enabled in Console only after S2 is verified. |
| **GDPR/KVKK consent drift** | Medium | `consentAt` field required in rules (enforced at DB level). Privacy policy URL must be linked from the consent checkbox. Data-deletion path: operator deletes document from Firestore Console / Admin SDK. A formal KVKK privacy policy page is out of scope for this tier but is a prerequisite for going broad. |
| **Cloud Function cold start (notification delay)** | Low | 2nd gen functions have lower cold-start overhead than 1st gen. For a low-traffic site the delay is acceptable (leads are not lost; only the notification is delayed). |
| **analytics / sessions / events unbounded writes** | Medium | Acknowledged existing risk (separate from this feature). These collections are NOT hardened in this tier. This design adds no new unvalidated open-write collections. Follow-up: scope + rate-limit analytics writes. |
| **Owner doesn't see WhatsApp link in Console** | Low | S4 admin view provides a purpose-built UI. In the interim, Cloud Functions log + Firebase Console are sufficient for a low-volume site. |
| **Firebase project `trader-e-commerce` — App Check not yet enabled** | Operator | Enabling App Check in the Firebase Console is an operator step. Until enabled, App Check is in reporting (non-enforcing) mode and does not block writes. The design works correctly in reporting mode; enforcement is an additive step. |
| **Functions billing (Blaze plan required)** | Operator | Cloud Functions require the Firebase Blaze pay-as-you-go plan. The Spark (free) plan does not support Cloud Functions. For a low-volume lead-gen site the cost is negligible (free tier covers 2 M invocations/month). The Firebase Extension "Trigger Email from Firestore" is an alternative that also requires Blaze. |

---

## 12. Rollback

The feature flag `VITE_LEAD_PIPELINE_ENABLED` is the kill-switch.

| Action | Effect | Requires redeploy? |
|--------|--------|-------------------|
| Set `VITE_LEAD_PIPELINE_ENABLED=false` in CI/CD environment, push | Builds without the Firestore lead path; `useContactForm` / `useNewsletter` revert to the old (broken but harmless) JSONBin calls | Yes (Vite env var is build-time) |
| Disable Cloud Function in Firebase Console | Notification function stops firing; Firestore writes still accepted | No |
| Unenforce App Check in Firebase Console | Open writes allowed again (grace period) | No |

**Data safety:** Firestore documents already written are not affected by flag reversal. All lead
data is retained. Migrations are additive (new fields only); no existing collection is deleted
or restructured.

**If S4 was completed and JSONBin code was deleted:** the JSONBin stack was dead code (401 on
every request) — reverting to it provides no value. Rolling back to the previous Git tag restores
the code if needed, but it re-introduces the silent-drop bug.

// Types for the Fahri Eren Trading Platform
export interface Product {
    id: string;
    title: LocalizedText;
    description: LocalizedText;
    price: number;
    currency: string;
    category: ProductCategory;
    images: string[];
    featured?: boolean;
    inStock: boolean;
    rating?: number;
    reviews?: number;
    views: number;
    favoriteCount?: number; // Gerçek favori sayısı (Firebase'den)
    contactCount?: number;  // Gerçek iletişim talebi sayısı (Firebase'den)
    specifications?: Record<string, string>;
    priceText?: string;
    location?: LocalizedText;
    date?: string;
    seller?: {
        name: string;
        phone?: string;
        email?: string;
    };
    features?: {
        tr: string[];
        en: string[];
    };
}

export type ProductCategory = 'realestate' | 'vehicles' | 'construction' | 'farm';

export interface LocalizedText {
    tr: string;
    en: string;
}

export interface ContactForm {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export interface FilterOptions {
    category: ProductCategory | 'all';
    priceRange: {
        min: string;
        max: string;
    };
    sortBy: SortOption;
    searchQuery: string;
}

export type SortOption = 'newest' | 'oldest' | 'priceLow' | 'priceHigh' | 'rating' | 'popular';

export type Language = 'tr' | 'en';

export interface PersonalInfo {
    name: string;
    title: LocalizedText;
    bio: LocalizedText;
    phone: string;
    email: string;
    photo?: string;
    address?: LocalizedText;
    workHours?: LocalizedText;
    socialMedia?: {
        linkedin?: string;
        twitter?: string;
        instagram?: string;
        facebook?: string;
    };
    social: {
        linkedin?: string;
        twitter?: string;
        instagram?: string;
    };
}

// Additional types for newsletter and API responses
export interface NewsletterSubscription {
    email: string;
    timestamp: number;
}

// ---------------------------------------------------------------------------
// Reliable Lead Pipeline (no silent drops)
//
// A submitted lead is first written to a durable local OUTBOX (localStorage),
// then flushed to the backend. The outbox survives reloads/crashes so a lead
// is never lost if the network is down or the write fails. See
// docs/design/lead-pipeline.md.
// ---------------------------------------------------------------------------

export type LeadCategory = 'realestate' | 'vehicles' | 'construction' | 'farm' | 'general';
export type LeadSource = 'contact_form' | 'product_detail';
export type LeadKind = 'contact' | 'newsletter';

/** Status of a lead while it lives in the local outbox. */
export type OutboxStatus = 'pending' | 'sending' | 'sent' | 'failed';

/** Payload for a contact-form lead (the durable record we persist). */
export interface ContactLeadPayload {
    name: string;        // 1–200
    email: string;       // 1–254
    phone?: string;      // 0–20
    subject: string;     // 1–200
    message: string;     // 1–2000
    category: LeadCategory;
    source: LeadSource;
    language: Language;
    consentAt: string;   // ISO 8601, required (KVKK/GDPR)
}

/** Payload for a newsletter sign-up lead. */
export interface NewsletterLeadPayload {
    email: string;       // 1–254
    language: Language;
    consentAt: string;   // ISO 8601, required
}

export type LeadPayload = ContactLeadPayload | NewsletterLeadPayload;

/** One durable entry in the local outbox. */
export interface OutboxItem {
    /** Stable idempotency key — dedupes retries of the SAME submission. */
    id: string;
    kind: LeadKind;
    payload: LeadPayload;
    status: OutboxStatus;
    /** Number of delivery attempts made so far. */
    attempts: number;
    /** ms epoch the item was first enqueued. */
    createdAt: number;
    /** ms epoch of the last attempt (undefined before the first). */
    lastAttemptAt?: number;
    /** Earliest ms epoch the next attempt may run (backoff schedule). */
    nextAttemptAt: number;
    /** Last error message, surfaced to the user for recovery. */
    lastError?: string;
    /** Backend document id once the write succeeds. */
    docId?: string;
}

/** Result of attempting to deliver a single lead. */
export interface LeadResult {
    success: boolean;
    /** The outbox id (idempotency key) — always returned, even on failure. */
    id: string;
    docId?: string;
    error?: string;
    /** True when the lead is safely persisted in the outbox but not yet delivered. */
    queued?: boolean;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    error?: string;
    timestamp: number;
}

// Partner interface for partners page
export interface Partner {
    id: string;
    name: string;
    logo: string;
    description: LocalizedText;
    website?: string;
    category: string;
    services: {
        tr: string[];
        en: string[];
    };
}

// SEO related types
export interface SEOData {
    title: string;
    description: string;
    keywords: string;
    image?: string;
    url?: string;
    type?: string;
    siteName?: string;
}

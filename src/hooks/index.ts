import React, {useCallback, useEffect, useState} from 'react';
import apiManager from '../services/apiManager';
import {isLeadPipelineEnabled, leadService} from '../services/leadService';
import {leadOutbox} from '../services/leadOutbox';
import type {ContactForm, FilterOptions, Language, LeadCategory, LeadSource, Product} from '../types';

// Re-export the translation hook from the context definition (non-component module)
export {useTranslation, useLanguage} from '../contexts/LanguageContextDef';

// SEO Hook
export const useSEO = () => {
    const updateProductSEO = useCallback((product?: Product) => {
        if (product) {
            document.title = `${product.title.tr} - Fahri Eren Ticaret`;

            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', product.description.tr.substring(0, 160));
            }
        }
    }, []);

    return {
        updateProductSEO
    };
};

// Global products cache to prevent duplicate loading
let productsCache: Product[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Products hook with Firebase integration
export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [favorites, setFavorites] = useState<string[]>([]);
    const [filters, setFilters] = useState<FilterOptions>({
        category: 'all',
        priceRange: {min: '', max: ''},
        sortBy: 'newest',
        searchQuery: ''
    });

    // Load products from Firebase with caching
    const loadProducts = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            // Check cache first
            const now = Date.now();
            if (productsCache && (now - cacheTimestamp) < CACHE_DURATION) {
                setAllProducts(productsCache);
                setProducts(productsCache);
                setLoading(false);
                return;
            }

            // Load products from Firebase only
            let firebaseProducts: Product[] = [];

            try {
                const {productService} = await import('../services/firebaseService');
                firebaseProducts = await productService.getProducts();
            } catch (firebaseError) {
                console.error('Firebase error:', firebaseError);
                // No fallback - Firebase is the only source
                setError('Ürünler yüklenirken hata oluştu');
            }

            // Update cache
            productsCache = firebaseProducts;
            cacheTimestamp = now;

            setAllProducts(firebaseProducts);
            setProducts(firebaseProducts);
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'Beklenmeyen bir hata oluştu');
            console.warn('Products loading failed, using empty array:', err);

            // Use empty array as fallback
            setAllProducts([]);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    }, []);

    // Apply filters
    const applyFilters = useCallback(() => {
        let filtered = [...allProducts];

        // Category filter
        if (filters.category !== 'all') {
            filtered = filtered.filter(product => product.category === filters.category);
        }

        // Search filter
        if (filters.searchQuery) {
            const query = filters.searchQuery.toLowerCase();
            filtered = filtered.filter(product =>
                product.title.tr.toLowerCase().includes(query) ||
                product.title.en.toLowerCase().includes(query) ||
                product.description.tr.toLowerCase().includes(query) ||
                product.description.en.toLowerCase().includes(query)
            );
        }

        // Price range filter
        if (filters.priceRange.min) {
            filtered = filtered.filter(product => product.price >= parseFloat(filters.priceRange.min));
        }
        if (filters.priceRange.max) {
            filtered = filtered.filter(product => product.price <= parseFloat(filters.priceRange.max));
        }

        // Sorting
        filtered.sort((a, b) => {
            switch (filters.sortBy) {
                case 'priceLow':
                    return a.price - b.price;
                case 'priceHigh':
                    return b.price - a.price;
                case 'rating':
                    return (b.rating || 0) - (a.rating || 0);
                case 'popular':
                    return (b.views || 0) - (a.views || 0);
                default:
                    return 0;
            }
        });

        setProducts(filtered);
    }, [allProducts, filters]);

    // Update filters
    const updateFilters = useCallback((newFilters: Partial<FilterOptions>) => {
        setFilters(prev => ({...prev, ...newFilters}));

        // Track filter usage
        apiManager.trackAnalytics('filter_applied', newFilters);
    }, []);

    // Clear filters
    const clearFilters = useCallback(() => {
        const defaultFilters: FilterOptions = {
            category: 'all',
            priceRange: {min: '', max: ''},
            sortBy: 'newest',
            searchQuery: ''
        };
        setFilters(defaultFilters);
    }, []);

    // Track ongoing favorite updates to prevent duplicates
    const favoriteUpdateInProgress = React.useRef<Set<string>>(new Set());

    // Favorites management
    const toggleFavorite = useCallback(async (productId: string) => {
        // Prevent duplicate calls
        if (favoriteUpdateInProgress.current.has(productId)) {
            return;
        }

        favoriteUpdateInProgress.current.add(productId);

        try {
            setFavorites(prev => {
                const newFavorites = prev.includes(productId)
                    ? prev.filter(id => id !== productId)
                    : [...prev, productId];

                localStorage.setItem('favorites', JSON.stringify(newFavorites));

                const isAdding = newFavorites.includes(productId);

                // Track favorite action
                apiManager.trackAnalytics('favorite_toggle', {
                    productId,
                    action: isAdding ? 'add' : 'remove'
                });

                // Update Firebase favoriteCount
                (async () => {
                    try {
                        const {doc, updateDoc, increment} = await import('firebase/firestore');
                        const {db} = await import('../config/firebase');

                        const productRef = doc(db, 'products', productId);

                        // Doğrudan increment kullan - Firebase otomatik olarak field yoksa oluşturur
                        await updateDoc(productRef, {
                            favoriteCount: increment(isAdding ? 1 : -1)
                        });

                        if (import.meta.env.DEV) {
                            console.log(`✅ Favori ${isAdding ? 'eklendi' : 'çıkarıldı'}: ${productId}`);
                        }

                        // Cache'i temizle
                        productsCache = null;
                        cacheTimestamp = 0;
                    } catch (error) {
                        console.error('❌ Firebase favoriteCount güncelleme hatası:', error);
                        if (import.meta.env.DEV) {
                            console.error('Product ID:', productId);
                            console.error('İşlem:', isAdding ? 'Ekleme' : 'Çıkarma');
                        }
                    } finally {
                        // Remove from in-progress set after a short delay
                        setTimeout(() => {
                            favoriteUpdateInProgress.current.delete(productId);
                        }, 500);
                    }
                })();

                return newFavorites;
            });
        } catch (error) {
            favoriteUpdateInProgress.current.delete(productId);
            throw error;
        }
    }, []);

    // Load favorites from localStorage
    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    // Apply filters when filters change
    useEffect(() => {
        applyFilters();
    }, [applyFilters]);

    // Load products on mount
    useEffect(() => {
        loadProducts();
    }, [loadProducts]);

    return {
        products,
        allProducts,
        loading,
        error,
        filters,
        updateFilters,
        clearFilters,
        favorites,
        toggleFavorite,
        refetch: loadProducts
    };
};

// A lead submission can end in one of four explicit states. `queued` means the
// lead is durably saved in the local outbox but not yet delivered — it will be
// retried; the user is told it is safe, never that it failed silently.
export type LeadStatus = 'idle' | 'success' | 'queued' | 'error';

// Newsletter hook.
//
// When VITE_LEAD_PIPELINE_ENABLED is true, submissions go through the durable
// LeadService (outbox + retry + idempotency) and can never be silently dropped.
// When the flag is OFF the legacy apiManager path is used, byte-identical to
// today (reversible kill-switch).
export const useNewsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<LeadStatus>('idle');

    const subscribe = useCallback(async (language: Language = 'tr') => {
        if (!email || isSubmitting) return;

        setIsSubmitting(true);

        if (isLeadPipelineEnabled()) {
            // Durable path: enqueue + try-deliver. A network failure leaves the
            // lead queued for retry, NOT lost.
            const result = await leadService.subscribeNewsletter({
                email,
                language,
                consentAt: new Date().toISOString(),
            });
            if (result.success) {
                setStatus('success');
                setEmail('');
                apiManager.trackAnalytics('newsletter_subscribe', {email});
            } else if (result.queued) {
                setStatus('queued');
                setEmail('');
            } else {
                setStatus('error');
            }
            setIsSubmitting(false);
            setTimeout(() => setStatus('idle'), 4000);
            return;
        }

        // Legacy path (flag OFF) — unchanged.
        try {
            const response = await apiManager.subscribeNewsletter(email);

            if (response.success) {
                setStatus('success');
                setEmail('');

                // Track successful subscription
                apiManager.trackAnalytics('newsletter_subscribe', {email});
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
            console.error('Newsletter subscription error:', error);
        } finally {
            setIsSubmitting(false);
        }

        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
    }, [email, isSubmitting]);

    return {
        email,
        setEmail,
        subscribe,
        isSubmitting,
        status
    };
};

// Contact form hook
export const useContactForm = () => {
    const [formData, setFormData] = useState<ContactForm>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<LeadStatus>('idle');

    const updateField = useCallback((field: keyof ContactForm, value: string) => {
        setFormData(prev => ({...prev, [field]: value}));
    }, []);

    const submitForm = useCallback(async (opts?: {
        language?: Language;
        category?: LeadCategory;
        source?: LeadSource;
    }) => {
        if (isSubmitting) return;

        setIsSubmitting(true);

        if (isLeadPipelineEnabled()) {
            // Durable path: the lead is persisted in the outbox before any
            // network call, so it is never silently dropped.
            const result = await leadService.submitContact({
                name: formData.name,
                email: formData.email,
                phone: formData.phone || undefined,
                subject: formData.subject,
                message: formData.message,
                category: opts?.category ?? 'general',
                source: opts?.source ?? 'contact_form',
                language: opts?.language ?? 'tr',
                consentAt: new Date().toISOString(),
            });
            if (result.success || result.queued) {
                setStatus(result.success ? 'success' : 'queued');
                setFormData({name: '', email: '', phone: '', subject: '', message: ''});
                apiManager.trackAnalytics('contact_form_submit', {subject: formData.subject});
            } else {
                setStatus('error');
            }
            setIsSubmitting(false);
            setTimeout(() => setStatus('idle'), 6000);
            return;
        }

        // Legacy path (flag OFF) — unchanged.
        try {
            const response = await apiManager.sendContactMessage(formData);

            if (response.success) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });

                // Track form submission
                apiManager.trackAnalytics('contact_form_submit', {subject: formData.subject});
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
            console.error('Contact form error:', error);
        } finally {
            setIsSubmitting(false);
        }

        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
    }, [formData, isSubmitting]);

    const resetForm = useCallback(() => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
        setStatus('idle');
    }, []);

    return {
        formData,
        updateField,
        submitForm,
        resetForm,
        isSubmitting,
        status
    };
};

// Lead outbox hook — powers the recovery affordance.
//
// Exposes any leads that are still queued or have permanently failed, and a
// `retry`/`flushNow` action to re-attempt delivery. It flushes due items on
// mount and whenever the browser reconnects, so a lead saved while offline is
// delivered automatically once connectivity returns. No-op when the pipeline
// flag is OFF.
export const useLeadOutbox = () => {
    const [items, setItems] = useState(() =>
        isLeadPipelineEnabled() ? leadOutbox.pending() : []);
    const [isFlushing, setIsFlushing] = useState(false);

    const refresh = useCallback(() => {
        setItems(leadOutbox.pending());
    }, []);

    const flushNow = useCallback(async () => {
        if (!isLeadPipelineEnabled() || isFlushing) return;
        setIsFlushing(true);
        try {
            await leadService.flush();
        } finally {
            setIsFlushing(false);
            refresh();
        }
    }, [isFlushing, refresh]);

    const retry = useCallback(async (id: string) => {
        if (!isLeadPipelineEnabled()) return;
        await leadService.retry(id).catch(() => undefined);
        refresh();
    }, [refresh]);

    const discard = useCallback((id: string) => {
        leadOutbox.remove(id);
        refresh();
    }, [refresh]);

    useEffect(() => {
        if (!isLeadPipelineEnabled()) return;

        // Flush anything left over from a previous session on first mount.
        void flushNow();

        const onOnline = () => void flushNow();
        window.addEventListener('online', onOnline);
        return () => window.removeEventListener('online', onOnline);
        // flushNow is stable enough for mount; intentionally run once.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        items,
        failedCount: items.filter(i => i.status === 'failed').length,
        pendingCount: items.filter(i => i.status !== 'failed').length,
        isFlushing,
        flushNow,
        retry,
        discard,
        refresh,
    };
};
/**
 * Reklam Konfigürasyonu
 *
 * KULLANIM:
 * 1. Google AdSense hesabınızdan Publisher ID alın
 * 2. Her reklam birimi için Ad Slot ID oluşturun
 * 3. Bu dosyadaki ID'leri güncelleyin
 */

export const ADS_CONFIG = {
    // Google AdSense Publisher ID
    PUBLISHER_ID: 'ca-pub-2016267232144093',

    // Reklam Aktif/Pasif
    ENABLED: true, // false yaparsanız hiç reklam gösterilmez

    // Reklam Birimleri - Her pozisyon için farklı slot ID
    //
    // ⚠️ TODO(#97)(operator): These are PLACEHOLDER slot IDs — they do NOT exist in
    // the ca-pub-2016267232144093 AdSense account, so units will stay blank
    // until replaced. Create one ad unit per position in the AdSense console
    // (Ads → By ad unit → Display ads), copy each numeric data-ad-slot value,
    // and paste it below. The AdSense loader script is already wired in
    // index.html. Empty string ('') = unconfigured → GoogleAdSense renders
    // nothing for that position (no broken/empty <ins>).
    SLOTS: {
        // Ana sayfa reklamları
        HOME_TOP_BANNER: 'PLACEHOLDER_HOME_TOP_BANNER',
        HOME_INLINE: 'PLACEHOLDER_HOME_INLINE',
        HOME_SIDEBAR: 'PLACEHOLDER_HOME_SIDEBAR',

        // Ürünler sayfası
        PRODUCTS_TOP: 'PLACEHOLDER_PRODUCTS_TOP',
        PRODUCTS_SIDEBAR: 'PLACEHOLDER_PRODUCTS_SIDEBAR',
        PRODUCTS_INLINE: 'PLACEHOLDER_PRODUCTS_INLINE',

        // Blog sayfası
        BLOG_TOP: 'PLACEHOLDER_BLOG_TOP',
        BLOG_INLINE: 'PLACEHOLDER_BLOG_INLINE',
        BLOG_SIDEBAR: 'PLACEHOLDER_BLOG_SIDEBAR',

        // Genel
        FOOTER_BANNER: 'PLACEHOLDER_FOOTER_BANNER'
    },

    // A slot is "real" once it's all-numeric (AdSense slot IDs are numeric).
    // Placeholder/empty values are treated as unconfigured.
    isRealSlot: (slot: string): boolean => /^\d{6,}$/.test(slot),

    // Reklam Formatları
    FORMATS: {
        HORIZONTAL: 'horizontal',
        VERTICAL: 'vertical',
        RECTANGLE: 'rectangle',
        RESPONSIVE: 'auto'
    },

    // Minimum ekran genişliği (mobile'da bazı reklamları gizlemek için)
    MIN_WIDTH: {
        SIDEBAR: 768, // tablet ve üstü
        TOP_BANNER: 0  // her zaman göster
    }
};

// Test modu için mock reklam gösterimi.
// NOTE: Vite client builds expose env via import.meta.env, NOT process.env
// (process is undefined in the browser). Use import.meta.env.DEV.
export const TEST_MODE = import.meta.env.DEV;

// Reklam pozisyonları ve özellikleri
export const AD_POSITIONS = {
    TOP_BANNER: {
        height: 90,
        minWidth: 728,
        className: 'ad-top-banner',
        label: 'Üst Banner'
    },
    SIDEBAR: {
        width: 300,
        minHeight: 250,
        className: 'ad-sidebar',
        label: 'Yan Panel',
        sticky: true
    },
    INLINE: {
        className: 'ad-inline',
        label: 'İçerik Arası',
        responsive: true
    },
    FOOTER: {
        height: 90,
        minWidth: 728,
        className: 'ad-footer',
        label: 'Alt Banner'
    }
};
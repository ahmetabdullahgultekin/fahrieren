import React from 'react';
import GoogleAdSense from './GoogleAdSense';
import {ADS_CONFIG} from '../../config/adsConfig';

interface AdBannerProps {
    position: 'top' | 'sidebar' | 'inline' | 'bottom';
    className?: string;
}

/**
 * Ad Banner Component - Farklı pozisyonlar için önceden yapılandırılmış reklam banner'ları.
 * Slot ID'leri tek kaynaktan (adsConfig.ts SLOTS) okunur — operatör gerçek ID'leri
 * orada günceller. Yer tutucu/boş slot olduğunda GoogleAdSense hiçbir şey render etmez.
 */
const AdBanner: React.FC<AdBannerProps> = ({position, className = ''}) => {
    const adConfigs = {
        top: {
            adSlot: ADS_CONFIG.SLOTS.HOME_TOP_BANNER,
            adFormat: 'horizontal' as const,
            style: {display: 'block', minHeight: '90px'},
            className: 'mb-6'
        },
        sidebar: {
            adSlot: ADS_CONFIG.SLOTS.HOME_SIDEBAR,
            adFormat: 'vertical' as const,
            style: {display: 'block', minHeight: '250px'},
            className: 'sticky top-24'
        },
        inline: {
            adSlot: ADS_CONFIG.SLOTS.HOME_INLINE,
            adFormat: 'fluid' as const,
            style: {display: 'block', minHeight: '150px'},
            className: 'my-8'
        },
        bottom: {
            adSlot: ADS_CONFIG.SLOTS.FOOTER_BANNER,
            adFormat: 'horizontal' as const,
            style: {display: 'block', minHeight: '90px'},
            className: 'mt-6'
        }
    };

    const config = adConfigs[position];

    // Don't render an empty/placeholder ad slot (avoids broken <ins> + AdSense
    // policy violations for empty units). Only real numeric slot IDs render.
    if (!ADS_CONFIG.ENABLED || !ADS_CONFIG.isRealSlot(config.adSlot)) {
        return null;
    }

    return (
        <div className={`ad-banner ad-banner-${position} ${className}`}>
            {/* Reklam etiketi */}
            <div className="text-xs text-gray-400 text-center mb-1">
                Reklam
            </div>

            <GoogleAdSense
                adSlot={config.adSlot}
                adFormat={config.adFormat}
                adStyle={config.style}
                className={config.className}
            />
        </div>
    );
};

export default AdBanner;
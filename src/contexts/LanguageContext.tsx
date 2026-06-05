import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import translationService from '../services/translationService';
import apiManager from '../services/apiManager';
import type {Language} from '../types';
import {LanguageContext} from './LanguageContextDef';

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({children}) => {
    const [language, setLanguage] = useState<Language>('tr');

    const changeLanguage = useCallback((newLanguage: Language) => {
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);

        // Track language change
        try {
            apiManager.trackAnalytics('language_change', {from: language, to: newLanguage});
        } catch (err) {
            console.warn('Analytics tracking failed:', err);
        }

        // Update URL parameter
        try {
            const url = new URL(window.location.href);
            url.searchParams.set('lang', newLanguage);
            window.history.replaceState({}, '', url.toString());
        } catch (err) {
            console.warn('URL update failed:', err);
        }
    }, [language]);

    const t = useCallback((key: string): string => {
        try {
            translationService.setLanguage(language);
            return translationService.translate(key);
        } catch {
            console.warn('Translation failed for key:', key);
            return key;
        }
    }, [language]);

    // Initialize language from URL or localStorage
    useEffect(() => {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const urlLang = urlParams.get('lang') as Language;
            const storedLang = localStorage.getItem('language') as Language;

            const initialLang = urlLang || storedLang || 'tr';
            if (initialLang !== language && (initialLang === 'tr' || initialLang === 'en')) {
                setLanguage(initialLang);
            }
        } catch (err) {
            console.warn('Language initialization failed:', err);
        }
    }, [language]);

    const value = {
        language,
        changeLanguage,
        t
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

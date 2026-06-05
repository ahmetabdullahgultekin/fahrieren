import {createContext, useContext} from 'react';
import type {Language} from '../types';

export interface LanguageContextType {
    language: Language;
    changeLanguage: (newLanguage: Language) => void;
    t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

// Backward compatibility - keep the old hook working
export const useTranslation = () => {
    return useLanguage();
};

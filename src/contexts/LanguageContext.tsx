import React, { createContext, useState, useEffect } from "react";
import * as ptBr from '@translations/pt-br';
import * as en from '@translations/en';

export type Language = "pt-br" | "en";

export type Translations = typeof ptBr;

const translations: Record<Language, Translations> = {
  "pt-br": ptBr,
  "en": en,
};

export interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string, namespace?: keyof Translations) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage && ['pt-br', 'en'].includes(savedLanguage) ? savedLanguage : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const toggleLanguage = () => {
    const newLanguage = language === "pt-br" ? "en" : "pt-br";
    setLanguage(newLanguage);
  };

  const t = (key: string, namespace: keyof Translations = 'common'): string => {
    try {
      const translationNamespace = translations[language][namespace];
      if (translationNamespace && typeof translationNamespace === 'object') {
        return (translationNamespace as Record<string, string>)[key] || key;
      }
      return key;
    } catch {
      console.warn(`Translation key "${key}" not found for language "${language}"`);
      return key;
    }
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}; 
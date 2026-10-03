import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { english } from './en';

export type Language = 'de' | 'en';
const STORAGE_KEY = 'vozicis-language';
export function translate<T>(value: T, language: Language): T {
  if (language === 'de' || typeof value !== 'string') return value;
  const key = value.replace(/\s+/g, ' ').trim();
  const translated = english[key];
  if (translated !== undefined) {
    return (value.match(/^\s*/)?.[0] + translated + value.match(/\s*$/)?.[0]) as T;
  }
  if (/^(?:\d{1,3}(?:\.\d{3})+|\d+) €$/.test(key)) {
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
      .format(Number(key.replaceAll('.', '').replace(' €', ''))) as T;
  }
  return value;
}

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try { return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'de'; }
    catch { return 'de'; }
  });
  useEffect(() => {
    document.documentElement.lang = language;
    const title = language === 'en'
      ? 'VOZICIS IMMOBILIEN · Strategic real estate advice & capital partnerships'
      : 'VOZICIS IMMOBILIEN · Strategische Immobilienberatung & Kapitalpartnerschaften';
    const description = language === 'en'
      ? 'Strategic real estate advice, capital partnerships and an investor network. Personal advice and a strategy check with Ioannis Vozicis.'
      : 'Strategische Immobilienberatung · Kapitalpartnerschaften · Investorennetzwerk. Exklusive Beratung und Strategie-Check mit Ioannis Vozicis (Geschäftsführer & Gesellschafter Arventas).';
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    try { localStorage.setItem(STORAGE_KEY, language); } catch { /* Storage can be disabled. */ }
  }, [language]);
  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('LanguageProvider is required');
  return {
    ...context,
    locale: context.language === 'en' ? 'en-GB' : 'de-DE',
    t: <T,>(value: T): T => translate(value, context.language),
    localizedImage: (src: string) => context.language === 'en' && /^\/images\/review\/[^/]+\.svg$/.test(src)
      ? src.replace('/review/', '/review/en/') : src,
  };
}

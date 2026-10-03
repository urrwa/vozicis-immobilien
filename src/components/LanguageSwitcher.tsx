import { Globe2 } from 'lucide-react';
import { useLanguage, type Language } from '../i18n/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <div role="group" aria-label={language === 'en' ? 'Website language' : 'Sprache der Website'} className="flex items-center gap-1 text-xs">
      <Globe2 aria-hidden="true" className="mr-1 h-3.5 w-3.5 text-[#8B9CB3]" />
      {(['de', 'en'] as Language[]).map(code => (
        <button key={code} type="button" lang={code} aria-label={code === 'de' ? 'Deutsch' : 'English'}
          aria-pressed={language === code} onClick={() => setLanguage(code)}
          className={`min-h-9 min-w-11 rounded-md px-2.5 font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6AE70] ${language === code ? 'bg-[#D6AE70] text-[#050B16]' : 'text-[#8B9CB3] hover:bg-white/10 hover:text-white'}`}>
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

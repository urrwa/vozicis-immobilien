import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';
import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  onOpenStrategyCheck: () => void;
  onOpenConsultation: () => void;
  onOpenLookbook?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenStrategyCheck,
  onOpenConsultation,
  onOpenLookbook
}) => {
  const { t, locale, localizedImage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Line (Subtle luxury accent at very top) */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 z-50 transition-all duration-150 ease-out opacity-90"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Refined Navigation Header */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#050B16]/95 backdrop-blur-xl border-b border-[#162744] py-3 shadow-lg shadow-black/20' 
            : 'bg-[#050B16]/75 backdrop-blur-md border-b border-[#162744]/60 py-4'
        }`}
      >
        <div className="xl:hidden max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-end pb-1"><LanguageSwitcher /></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-5">
          
          {/* Brand Identity: VOZICIS IMMOBILIEN */}
          <div 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="cursor-pointer group flex items-center gap-3"
          >
            <div className="w-8.5 h-8.5 rounded-lg bg-[#0A1324] border border-[#D6AE70]/40 flex items-center justify-center shadow-inner group-hover:border-[#D6AE70] transition-colors">
              <span className="font-brand-crest text-sm font-bold text-[#D6AE70] tracking-tight">{t("V")}</span>
            </div>
            <div>
              <div className="font-semibold text-xs sm:text-base tracking-[0.12em] text-white group-hover:text-[#D6AE70] transition-colors font-sans">{t("VOZICIS IMMOBILIEN")}</div>
              <div className="text-[9px] text-[#8B9CB3] tracking-widest uppercase font-mono">{t("Strategische Beratung")}</div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-4 text-[12px] font-medium text-[#8B9CB3]">
            <a 
              href="#positioning" 
              className="text-white hover:text-[#D6AE70] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#D6AE70]"
            >{t("Strategie")}</a>
            <a 
              href="#ioannis" 
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#D6AE70] after:transition-all"
            >{t("Über Ioannis")}</a>
            <a 
              href="#zielgruppen" 
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#D6AE70] after:transition-all"
            >{t("Investoren")}</a>
            <a 
              href="#netzwerk" 
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#D6AE70] after:transition-all"
            >{t("Partnerschaften")}</a>
            <a 
              href="#wissen" 
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#D6AE70] after:transition-all"
            >{t("Insights")}</a>
          </nav>

          {/* Right-Side CTA: Strategie-Check */}
          <div className="hidden xl:flex items-center gap-4"><LanguageSwitcher />
            <button
              onClick={onOpenStrategyCheck}
              className="group px-5 py-2.5 rounded-full bg-[#D6AE70] hover:bg-[#E2C492] text-[#050B16] font-semibold text-xs tracking-wider transition-all duration-300 shadow-lg shadow-[#D6AE70]/15 flex items-center gap-2 cursor-pointer"
            >
              <span>{t("Strategie-Check")}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200 ease-out" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={onOpenStrategyCheck}
              className="px-3.5 py-1.5 rounded-full bg-[#D6AE70] text-[#050B16] text-xs font-semibold"
            >{t("Check")}</button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#8B9CB3] hover:text-white bg-[#0A1324] border border-[#162744]"
              aria-label={t("Navigation umschalten")} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="xl:hidden bg-[#050B16]/98 backdrop-blur-2xl border-b border-[#162744] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3 text-sm text-[#8B9CB3]">
              <a 
                href="#positioning" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#162744]/60 text-white hover:text-[#D6AE70]"
              >{t("Strategie")}</a>
              <a 
                href="#ioannis" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#162744]/60 hover:text-white"
              >{t("Über Ioannis")}</a>
              <a 
                href="#zielgruppen" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#162744]/60 hover:text-white"
              >{t("Investoren")}</a>
              <a 
                href="#netzwerk" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#162744]/60 hover:text-white"
              >{t("Partnerschaften")}</a>
              <a 
                href="#wissen" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#162744]/60 hover:text-white"
              >{t("Insights")}</a>
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStrategyCheck();
                }}
                className="w-full py-3 rounded-full bg-amber-400 text-slate-950 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <span>{t("Strategie-Check starten")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-full bg-white/[0.05] text-slate-300 text-xs font-medium border border-white/[0.08]"
              >{t("1:1 Gespräch mit Ioannis")}</button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};


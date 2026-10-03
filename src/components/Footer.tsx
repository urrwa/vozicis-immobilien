import { useLanguage } from '../i18n/LanguageContext';
import { ALL_BRAND_IMAGES } from '../data/brandAssets';
import React from 'react';
import { BRAND_IMAGES } from '../data/brandAssets';
import { 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  LockKeyhole, 
  Building, 
  PhoneCall, 
  Mail, 
  MapPin, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface FooterProps {
  onOpenStrategyCheck: () => void;
  onOpenConsultation: () => void;
  onOpenLookbook?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenStrategyCheck,
  onOpenConsultation,
  onOpenLookbook
}) => {
  const { t, locale, localizedImage } = useLanguage();
  return (
    <footer className="bg-[#050B16] text-[#8B9CB3] relative overflow-hidden border-t border-[#162744]">
      
      {/* FINAL CINEMATIC CTA HERO BANNER */}
      <section className="relative min-h-[520px] flex items-center justify-center overflow-hidden border-b border-[#162744] bg-tech-grid">
        {/* Full-Bleed Architectural Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#12243b] via-[#0A1324] to-[#050B16]" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-[#050B16]/85 to-[#050B16]/50" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-20 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#050B16]/80 border border-[#162744] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D6AE70] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#D6AE70] font-mono">{t("Der erste Schritt zu geprüfter Klarheit")}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-sans text-white tracking-tight leading-[1.1]">{t("Bereit für die nächste Ebene ")}<br />
            <span className="text-[#D6AE70]">{t("Ihrer Immobilienstrategie?")}</span>
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#8B9CB3] font-light leading-relaxed">{t("Ob strukturierter Holding-Thesaurierungshebel oder krisenfeste Einzelliegenschaft: Wir analysieren Ihre Ausgangssituation diskret und auf Augenhöhe.")}</p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="footer-start-strategy-check"
              onClick={onOpenStrategyCheck}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#D6AE70] hover:bg-[#E2C492] text-[#050B16] transition-all duration-300 shadow-xl shadow-[#D6AE70]/15 hover:shadow-[#D6AE70]/25 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#050B16]" />
              <span>{t("1. Strategie-Check starten")}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="footer-book-consultation"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#8B9CB3] hover:text-white bg-[#050B16] hover:bg-[#0D182E] border border-[#162744] hover:border-[#D6AE70]/40 transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
            >
              <Calendar className="w-4 h-4 text-[#D6AE70]" />
              <span>{t("2. Gespräch mit Ioannis Vozicis vereinbaren")}</span>
            </button>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-[#8B9CB3] font-light">
            <span className="flex items-center gap-1.5">
              <LockKeyhole className="w-3.5 h-3.5 text-[#D6AE70]" />{t("100% vertraulich & diskret")}</span>
            <span>•</span>
            <span>{t("Unverbindliche Ersteinschätzung")}</span>
            <span>•</span>
            <span>{t("Keine Datenweitergabe")}</span>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL FOOTER BOTTOM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mandate */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#D6AE70] flex items-center justify-center text-[#050B16] font-bold text-sm font-sans">{t("V")}</div>
              <div>
                <div className="font-bold text-sm tracking-widest text-white uppercase font-sans">{t("VOZICIS IMMOBILIEN")}</div>
                <div className="text-[10px] text-[#D6AE70] tracking-wider uppercase font-light">{t("Strategische Beratung & Kapitalpartnerschaften")}</div>
              </div>
            </div>

            <p className="text-xs text-[#8B9CB3] font-light leading-relaxed">{t("Persönliche Vertrauensmarke von Ioannis Vozicis (Geschäftsführer & Gesellschafter Arventas). Wir verbinden Kapital, Immobilien und Menschen durch fundierte Analyse und dauerhafte Partnerschaften.")}</p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] font-sans">{t("Navigation")}</div>
            <ul className="space-y-2 font-light text-[#8B9CB3]">
              <li><a href="#positioning" className="hover:text-[#D6AE70] transition-colors">{t("Strategie")}</a></li>
              <li><a href="#ioannis" className="hover:text-[#D6AE70] transition-colors">{t("Über Ioannis Vozicis")}</a></li>
              <li><a href="#methodik" className="hover:text-[#D6AE70] transition-colors">{t("6-Stufen Methodik")}</a></li>
              <li><a href="#matching" className="hover:text-[#D6AE70] transition-colors">{t("Geprüfte Opportunitäten")}</a></li>
              <li><a href="#netzwerk" className="hover:text-[#D6AE70] transition-colors">{t("Ökosystem & Partner")}</a></li>
              <li><a href="#wissen" className="hover:text-[#D6AE70] transition-colors">{t("Executive Journal")}</a></li>
              {onOpenLookbook && (
                <li>
                  <button
                    onClick={onOpenLookbook}
                    className="text-[#D6AE70] hover:text-[#E2C492] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{t("Brand-Bildband (")}{t(ALL_BRAND_IMAGES.length)}{t(" Motive)")}</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Asset Classes */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] font-sans">{t("Schwerpunkte")}</div>
            <ul className="space-y-2 font-light text-[#8B9CB3]">
              <li>{t("KfW-40 Neubau mit Sonder-AfA")}</li>
              <li>{t("Denkmal-AfA (§ 7i EStG) Bestlagen")}</li>
              <li>{t("Value-Add Wohnportfolios")}</li>
              <li>{t("Vermögensverwaltende Holdings (vGmbH)")}</li>
              <li>{t("Strukturierung von Zins- & Eigenkapitalhebeln")}</li>
            </ul>
          </div>

          {/* Contact / Impressum */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] font-sans">{t("Kontakt & Diskretion")}</div>
            <div className="space-y-2 font-light text-[#8B9CB3]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D6AE70] shrink-0 mt-0.5" />
                <span>{t("München · Deutschland")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D6AE70] shrink-0" />
                <span>{t("kontakt@vozicis-immobilien.de")}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-[#D6AE70] shrink-0" />
                <span>+49 (0) 89 215 389 0</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#162744] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B9CB3] font-light">
          <div>
            © {t(new Date().getFullYear())}{t(" VOZICIS IMMOBILIEN · Alle Rechte vorbehalten.")}</div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">{t("Impressum")}</span>
            <span className="hover:text-white cursor-pointer transition-colors">{t("Datenschutz")}</span>
            <span className="hover:text-white cursor-pointer transition-colors">{t("Compliance")}</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

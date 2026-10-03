import { TopicVisual } from './TopicVisual';
import { useLanguage } from '../i18n/LanguageContext';
import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  LockKeyhole,
  Calendar
} from 'lucide-react';
import { BRAND_IMAGES } from '../data/brandAssets';

interface StrategyCheckSectionProps {
  onOpenStrategyCheck: () => void;
  onOpenConsultation: () => void;
}

export const StrategyCheckSection: React.FC<StrategyCheckSectionProps> = ({
  onOpenStrategyCheck,
  onOpenConsultation
}) => {
  const { t, locale, localizedImage } = useLanguage();
  return (
    <section id="strategie-check-section" className="py-24 lg:py-36 bg-[#050B16] relative overflow-hidden border-t border-[#162744] bg-tech-grid">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[700px] bg-[#D6AE70]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Invitation Stage */}
        <div className="rounded-2xl bg-[#0A1324] border border-[#162744] shadow-2xl shadow-black/80 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-8">
              
              <div className="space-y-4">
                <div className="gold-eyebrow">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t("Exklusive Mandats-Initialisierung")}</span>
                </div>

                {/* Prompt Mandated Headline */}
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-sans leading-[1.12] tracking-tight">{t("Was ist Ihre nächste ")}<br />
                  <span className="text-[#D6AE70]">{t("Immobilien-")}<wbr />{t("entscheidung?")}</span>
                </h2>

                {/* Prompt Mandated Supporting Text */}
                <p className="text-base sm:text-lg text-[#8B9CB3] font-light leading-relaxed max-w-xl">{t("Im kostenfreien Immobilienstrategie-Check analysieren wir Ziele, Kapitalstruktur, Finanzierungsmöglichkeiten und passende Strategien.")}</p>
              </div>

              {/* 3 Trust Criteria Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-[#8B9CB3] font-light">
                  <Clock className="w-4 h-4 text-[#D6AE70] shrink-0" />
                  <span>{t("Dauer: Ca. 3 Minuten")}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#8B9CB3] font-light">
                  <LockKeyhole className="w-4 h-4 text-[#D6AE70] shrink-0" />
                  <span>{t("100% Vertraulich & diskret")}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#8B9CB3] font-light">
                  <ShieldCheck className="w-4 h-4 text-[#D6AE70] shrink-0" />
                  <span>{t("Unverbindliches Dossier")}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  id="section-strategy-check-cta"
                  onClick={onOpenStrategyCheck}
                  className="px-8 py-4 rounded-full bg-[#D6AE70] hover:bg-[#E2C492] text-[#050B16] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#D6AE70]/15 hover:shadow-[#D6AE70]/25 flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <span>{t("Strategie-Check starten")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-4 rounded-full bg-[#050B16] hover:bg-[#0D182E] text-[#8B9CB3] hover:text-white border border-[#162744] hover:border-[#D6AE70]/40 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#D6AE70]" />
                  <span>{t("1:1 Gespräch mit Ioannis")}</span>
                </button>
              </div>

            </div>

            {/* Right Architectural Real-Estate Image */}
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden bg-[#050B16] min-h-[380px]">
              <TopicVisual index={8} title="Strategie-Check" labels={["Ziele", "Kapital", "Finanzierung"]} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1324] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0A1324] lg:to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#050B16]/85 backdrop-blur-md border border-[#162744] text-xs">
                <div className="text-[10px] font-mono text-[#D6AE70] uppercase tracking-wider mb-0.5">{t("Off-Market Prüfbericht")}</div>
                <div className="font-sans text-white font-medium">{t("Präzise Steuer- & Zinsberechnung vor jeder Vor-Ort-Besichtigung.")}</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

import { useLanguage } from '../i18n/LanguageContext';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Building2,
  Camera,
  Users,
  Compass,
  Coins
} from 'lucide-react';
import { BRAND_IMAGES } from '../data/brandAssets';
import { FOUNDER_PHOTOS } from '../data/founderPhotos';

interface FounderProfileProps {
  onOpenConsultation: () => void;
  onOpenStrategyCheck: () => void;
  onOpenLookbook?: () => void;
}

export const FounderProfile: React.FC<FounderProfileProps> = ({
  onOpenConsultation,
  onOpenStrategyCheck,
  onOpenLookbook
}) => {
  const { t, locale, localizedImage } = useLanguage();
  const [activePortraitIndex, setActivePortraitIndex] = useState<number>(0);

  const portraitOptions = [
    {
      id: 'editorial',
      label: 'Persönlich',
      image: FOUNDER_PHOTOS.profile[0],
      fallback: BRAND_IMAGES.founderPortraitEditorial.cdnSrc,
      caption: 'Ihr Ansprechpartner: Ioannis Vozicis'
    },
    {
      id: 'executive',
      label: 'Immobilien',
      image: FOUNDER_PHOTOS.profile[1],
      fallback: BRAND_IMAGES.luxuryVillaInspection.cdnSrc,
      caption: 'Persönlich vor Ort'
    },
    {
      id: 'onsite',
      label: 'On-Site',
      image: FOUNDER_PHOTOS.profile[2],
      fallback: BRAND_IMAGES.countrysideEstate.cdnSrc,
      caption: 'Bundesweite Vor-Ort-Begutachtung'
    }
  ];

  const currentPortrait = portraitOptions[activePortraitIndex];

  // Visual Relationship Chain Steps (Prompt requirement)
  const ecosystemFlow = [
    {
      step: '01',
      title: 'Investor',
      icon: Users,
      desc: 'Kapital, Ziele & steuerliche Ausgangslage'
    },
    {
      step: '02',
      title: 'Strategie',
      icon: Compass,
      desc: 'Hebel- & Zinsarchitektur, Holding & AfA'
    },
    {
      step: '03',
      title: 'Immobilie',
      icon: Building2,
      desc: 'Vorselektierte Off-Market Sachwerte'
    },
    {
      step: '04',
      title: 'Partnerschaft',
      icon: Coins,
      desc: 'Langfristige Begleitung & Wertsteigerung'
    }
  ];

  return (
    <section id="ioannis" className="py-24 lg:py-36 bg-[#050B16] relative overflow-hidden border-t border-[#162744] bg-tech-grid">
      {/* Ambient subtle glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#D6AE70]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching ARVENTAS aesthetic */}
        <div className="max-w-4xl mb-16 lg:mb-20">
          <div className="gold-eyebrow mb-4">{t("Der menschliche Dreh- und Angelpunkt")}</div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-sans">{t("Zwischen Kapital, Immobilien ")}<br />
            <span className="text-[#D6AE70]">{t("und den richtigen Menschen.")}</span>
          </h2>
          
          <p className="mt-5 text-base sm:text-lg text-[#8B9CB3] font-light leading-relaxed max-w-2xl">{t("Als ")}<strong className="text-white font-medium">{t("Geschäftsführer und Gesellschafter von Arventas")}</strong>{t(" agiert Ioannis Vozicis nicht als anonymer Vermittler, sondern als persönlicher Sparringspartner für vermögende Investoren, Family Offices und Unternehmer.")}</p>
        </div>

        {/* Main 12-Col Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          
          {/* Left Column: Large Professional Portrait with Perspective Switcher */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="relative rounded-2xl overflow-hidden bg-[#0A1324] border border-[#162744] shadow-2xl shadow-black/80 group">
              
              {/* Perspective Controls Bar */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#050B16]/80 backdrop-blur-md border border-[#162744]">
                  {portraitOptions.map((opt, idx) => (
                    <button
                      key={opt.id}
                      onClick={() => setActivePortraitIndex(idx)}
                      className={`px-3 py-1 rounded-lg text-[10px] font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                        activePortraitIndex === idx
                          ? 'bg-[#D6AE70] text-[#050B16] shadow-sm'
                          : 'text-[#8B9CB3] hover:text-white'
                      }`}
                    >
                      {t(opt.label)}
                    </button>
                  ))}
                </div>

                {onOpenLookbook && (
                  <button
                    onClick={onOpenLookbook}
                    className="p-2 rounded-xl bg-[#050B16]/80 hover:bg-[#D6AE70]/20 text-[#8B9CB3] hover:text-[#D6AE70] backdrop-blur-md border border-[#162744] transition-colors cursor-pointer"
                    title={t("Brand-Lookbook öffnen")}
                  >
                    <Camera className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Portrait Frame */}
              <div className="aspect-[4/5] w-full overflow-hidden relative bg-[#050B16]">
                <img
                  key={currentPortrait.image}
                  src={localizedImage(currentPortrait.image)}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = currentPortrait.fallback;
                  }}
                  alt={t(currentPortrait.caption)}
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105 transition-all duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1324] via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Founder Details Bar */}
              <div className="p-5 bg-[#08101E] border-t border-[#162744] flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-white tracking-wider font-sans">{t("IOANNIS VOZICIS")}</div>
                  <div className="text-[11px] text-[#D6AE70] font-light">{t("Geschäftsführer & Gesellschafter Arventas")}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono uppercase text-[#8B9CB3]">{t("Verantwortung")}</div>
                  <div className="text-xs text-slate-200 font-medium">{t("1:1 Mandatsführung")}</div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Visual Relationship Chain & Core Conviction */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Conviction Statement */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0A1324] border border-[#162744] relative shadow-xl shadow-black/40">
              <div className="gold-eyebrow mb-3">{t("Persönliches Leitmotiv")}</div>
              <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed italic font-sans">{t("„Erfolgreiche Immobilieninvestitionen sind kein Zufall. Sie sind das Resultat klarer Zahlen, steuerlicher Weitsicht und vertrauensvoller Partnerschaften auf Augenhöhe.“")}</blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#D6AE70]" />
                <span className="text-xs tracking-wider text-slate-200 font-semibold font-sans">{t("IOANNIS VOZICIS")}</span>
              </div>
            </div>

            {/* The Visual Relationship Chain */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-[#8B9CB3] pl-1">{t("Die strategische Wertschöpfungskette:")}</div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
                {ecosystemFlow.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={item.step}
                      className="p-4 rounded-xl bg-[#0A1324] border border-[#162744] flex flex-col justify-between space-y-2 relative group hover:border-[#D6AE70]/40 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-[#D6AE70] font-bold">
                          {t(item.step)}
                        </span>
                        <Icon className="w-4 h-4 text-[#8B9CB3] group-hover:text-[#D6AE70] transition-colors" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm font-sans">
                          {t(item.title)}
                        </div>
                        <p className="text-[11px] text-[#8B9CB3] font-light leading-snug mt-0.5">
                          {t(item.desc)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions: Direct 1:1 Consultation & Strategy Check */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-3.5 rounded-full bg-[#D6AE70] hover:bg-[#E2C492] text-[#050B16] font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#D6AE70]/15 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#050B16]" />
                <span>{t("1:1 Gespräch mit Ioannis buchen")}</span>
              </button>

              <button
                onClick={onOpenStrategyCheck}
                className="px-7 py-3.5 rounded-full bg-transparent hover:bg-[#0A1324] text-[#8B9CB3] hover:text-white border border-[#162744] hover:border-[#D6AE70]/40 font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t("Strategie-Check durchführen")}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D6AE70]" />
              </button>
            </div>

          </div>

        </div>

        {/* 21:9 Wide Architectural Panoramic Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-[#162744] shadow-2xl aspect-[21/9] sm:aspect-[24/9] w-full bg-[#050B16]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#16304a] via-[#0A1324] to-[#050B16]" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B16]/90 via-[#050B16]/50 to-transparent" />
          
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end max-w-xl">
            <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#D6AE70] mb-1">{t("Präsenz in den wirtschaftsstärksten Regionen Deutschlands")}</div>
            <div className="text-xl sm:text-3xl font-extrabold text-white leading-snug font-sans">{t("Direkter Zugang zu Standorten mit stabiler Kaufkraft und planbarem Mietwachstum.")}</div>
          </div>
        </div>

      </div>
    </section>
  );
};

import { SectionPhoto } from './SectionPhoto';
import { useLanguage } from '../i18n/LanguageContext';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  Coins, 
  Building2, 
  Users,
  CheckCircle2,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { BRAND_IMAGES } from '../data/brandAssets';

export const ThreePillars: React.FC<{ onOpenStrategyCheck: () => void }> = ({ onOpenStrategyCheck }) => {
  const { t, locale, localizedImage } = useLanguage();
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 'kapital',
      number: '01',
      title: 'KAPITAL',
      tagline: 'Liquidität, Fremdkapitalhebel & Steuerarchitektur',
      description: 'Kapital braucht Struktur: Wir analysieren Holding- und Thesaurierungsstrukturen, maßgeschneiderte Zinsabsicherungen und steuerliche Hebel (§ 7i Denkmal & degressive AfA), bevor eine Liegenschaft gewählt wird.',
      image: BRAND_IMAGES.dealClosingPartnership.localSrc,
      fallback: BRAND_IMAGES.dealClosingPartnership.cdnSrc,
      caption: 'Strategische Kapitalstrukturierung vor Metropolen-Skyline',
      objectPosition: '50% 12%',
      metrics: [
        { label: 'Steuerhebel', val: 'Bis 40% Steuerersparnis (§ 7i / AfA)' },
        { label: 'Finanzierung', val: 'Bankenunabhängiger Zinshebel' },
        { label: 'Struktur', val: 'Holding, vGmbH & Privatvermögen' }
      ]
    },
    {
      id: 'immobilien',
      number: '02',
      title: 'IMMOBILIEN',
      tagline: 'Geprüfte Sachwerte mit robuster Bausubstanz',
      description: 'Kein Massenmarkt: Nur ca. 4 von 100 Objekten bestehen unsere 5-Stufen Due-Diligence hinsichtlich Mikrolage, energetischer Zukunftsfähigkeit (KfW-40), Mietdynamik und planbarem Cashflow.',
      image: BRAND_IMAGES.projectDevelopmentBlueprints.localSrc,
      fallback: BRAND_IMAGES.projectDevelopmentBlueprints.cdnSrc,
      caption: 'Bautechnische Bauplanprüfung & Due-Diligence direkt vor Ort',
      objectPosition: '50% 14%',
      metrics: [
        { label: 'Selektionsquote', val: 'Nur ca. 4% aller Vorlagen' },
        { label: 'Asset-Klassen', val: 'KfW-40 QNG, Denkmal & Value-Add' },
        { label: 'Prüfstandard', val: '5-Stufen Stresstest & ESG-Audit' }
      ]
    },
    {
      id: 'menschen',
      number: '03',
      title: 'MENSCHEN',
      tagline: 'Persönliche Handschlagqualität auf Augenhöhe',
      description: 'Immobilien sind Vertrauenssache. Ioannis Vozicis koordiniert das gesamte Netzwerk aus spezialisierten Steuerkanzleien, Private-Banking-Kontakten und Gutachtern mit persönlicher Verantwortung.',
      image: BRAND_IMAGES.institutionalHospitality.localSrc,
      fallback: BRAND_IMAGES.institutionalHospitality.cdnSrc,
      caption: 'Diskrete, persönliche Begleitung auf institutionellem Niveau',
      objectPosition: '50% 5%',
      metrics: [
        { label: 'Betreuung', val: 'Direkt durch Ioannis Vozicis' },
        { label: 'Ökosystem', val: 'Steuerkanzleien, Notare, Banken' },
        { label: 'Horizont', val: 'Generationenübergreifend' }
      ]
    }
  ];

  const current = pillars[activePillar];

  return (
    <section id="pillars" className="py-24 lg:py-36 bg-[#050B16] relative overflow-hidden border-t border-[#162744] bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching ARVENTAS aesthetic */}
        <div className="max-w-4xl mb-16 lg:mb-20">
          <div className="gold-eyebrow mb-4">{t("Die 3 Säulen unseres Handelns")}</div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-sans">{t("„Wir verbinden ")}<span className="text-[#D6AE70]">{t("Kapital")}</span>,{t(' ')}
            <span className="text-[#D6AE70]">{t("Immobilien")}</span>{t(" und")}{t(' ')}
            <span className="text-[#D6AE70]">{t("Menschen")}</span>.“
          </h2>
          
          <p className="mt-5 text-base sm:text-lg text-[#8B9CB3] font-light leading-relaxed max-w-2xl">{t("Vermögenssicherung ohne Spekulation: Erst wenn Kapitalstruktur, bauliche Substanz und vertrauensvolle Partnerschaften präzise aufeinander abgestimmt sind, entsteht krisensicherer Wohlstand.")}</p>
        </div>

        {/* Architectural Triptych Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Pillar Selector Track (Left 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {pillars.map((p, idx) => {
                const isSelected = activePillar === idx;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePillar(idx)}
                    className={`w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer flex items-start justify-between border ${
                      isSelected
                        ? 'bg-[#0D182E] border-[#D6AE70] shadow-xl shadow-[#D6AE70]/5'
                        : 'bg-[#0A1324]/60 border-[#162744] hover:bg-[#0A1324] hover:border-[#1E3156]'
                    }`}
                  >
                    <div className="space-y-1.5 pr-4">
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-sm font-semibold ${isSelected ? 'text-[#D6AE70]' : 'text-[#8B9CB3]/60'}`}>
                          {t(p.number)}
                        </span>
                        <h3 className={`text-xl sm:text-2xl font-bold tracking-wide font-sans ${isSelected ? 'text-white' : 'text-[#8B9CB3]'}`}>
                          {t(p.title)}
                        </h3>
                      </div>
                      <p className={`text-xs font-light line-clamp-2 ${isSelected ? 'text-slate-200' : 'text-[#8B9CB3]'}`}>
                        {t(p.tagline)}
                      </p>
                    </div>

                    <div className={`mt-1.5 shrink-0 transition-transform duration-300 ${isSelected ? 'text-[#D6AE70] translate-x-1' : 'text-[#8B9CB3]/40'}`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* In-Section Direct Trigger */}
            <div className="pt-4 p-5 rounded-2xl bg-[#0A1324] border border-[#162744] space-y-3 shadow-xl">
              <div className="text-xs text-[#D6AE70] font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D6AE70] shrink-0" />
                <span>{t("Individuelle Hebel-Analyse")}</span>
              </div>
              <p className="text-xs text-[#8B9CB3] font-light leading-relaxed">{t("Finden Sie heraus, welche Säule für Ihr Portfolio das größte Optimierungspotenzial bietet.")}</p>
              <button
                onClick={onOpenStrategyCheck}
                className="w-full py-3 px-4 rounded-full bg-[#D6AE70] hover:bg-[#E2C492] text-[#050B16] font-semibold text-xs tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#D6AE70]/15"
              >
                <span>{t("Hebel-Analyse anfordern")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Active Pillar Showcase Stage (Right 7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0A1324] border border-[#162744] overflow-hidden flex flex-col justify-between shadow-2xl shadow-black/80">
            
            {/* Cinematic Imagery */}
            <div className="relative min-h-[300px] w-full overflow-hidden bg-[#050B16]">
              <SectionPhoto group="pillars" index={activePillar} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1324]/40 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#050B16]/80 backdrop-blur-md border border-[#162744] text-xs font-mono font-semibold text-[#D6AE70]">{t("SÄULE ")}{t(current.number)} · {t(current.title)}
              </div>

              <div className="absolute bottom-3 left-4 right-4 text-xs text-[#8B9CB3] font-light truncate">
                {t(current.tagline)}
              </div>
            </div>

            {/* Content & Metrics */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 font-sans">
                  {t(current.tagline)}
                </h4>
                <p className="text-sm text-[#8B9CB3] font-light leading-relaxed">
                  {t(current.description)}
                </p>
              </div>

              {/* 3 Metric Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#162744]">
                {current.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="p-3.5 rounded-xl bg-[#050B16] border border-[#162744]">
                    <div className="text-[10px] uppercase font-mono text-[#8B9CB3] tracking-wider">
                      {t(m.label)}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white mt-1">
                      {t(m.val)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

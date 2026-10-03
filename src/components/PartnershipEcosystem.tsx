import { useLanguage } from '../i18n/LanguageContext';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BRAND_IMAGES } from '../data/brandAssets';
import { 
  Building2, 
  Coins, 
  Scale, 
  Compass, 
  Users, 
  Briefcase, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Landmark
} from 'lucide-react';

export const PartnershipEcosystem: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const { t, locale, localizedImage } = useLanguage();
  const [activeNode, setActiveNode] = useState<number>(0);

  const ecosystemNodes = [
    {
      id: 'kapital',
      title: 'Kapital',
      sub: 'Holding & Liquiditätsplanung',
      desc: 'Optimale Eigen- und Fremdkapitalquote, Holding-Strukturen und steuerbegünstigte Re-Investments ohne Substanzverlust.',
      icon: Coins
    },
    {
      id: 'investoren',
      title: 'Investoren',
      sub: 'Family Offices & Privatanleger',
      desc: 'Kapitalstarke, diskrete Persönlichkeiten und Familien, die langfristige Werte vor Inflation und Vermögensabgaben schützen.',
      icon: Users
    },
    {
      id: 'entwickler',
      title: 'Entwickler',
      sub: 'Projektgesellschaften & Bauträger',
      desc: 'Ausgewählte Bauträger aus dem Arventas-Umfeld für exklusiven Vorab-Zugang zu Denkmal- und KfW-40 Liegenschaften.',
      icon: Building2
    },
    {
      id: 'finanzierung',
      title: 'Finanzierung',
      sub: 'Banken & Zinsabsicherung',
      desc: 'Direkte Zuleitung zu spezialisierten Kreditinstituten für maßgeschneiderte Zinsfestschreibungen und KfW-Förderdarlehen.',
      icon: Briefcase
    },
    {
      id: 'steuerberatung',
      title: 'Steuerberatung',
      sub: 'Kanzleien & Gutachter',
      desc: 'Fokussierte Ausnutzung von § 7i Denkmal-AfA, degressiver Abschreibung und vermögensverwaltenden Rechtsformen.',
      icon: Scale
    },
    {
      id: 'architektur',
      title: 'Architektur',
      sub: 'Due-Diligence & Bausubstanz',
      desc: 'Unabhängige Gutachter und Sachverständige zur Absicherung von Werthaltigkeit, Energieeffizienz und baulicher Güte.',
      icon: Compass
    },
    {
      id: 'unternehmernetzwerke',
      title: 'Unternehmernetzwerke',
      sub: 'Synergien & Co-Investments',
      desc: 'Erfahrungsaustausch und Co-Investments unter Gleichgesinnten – von Gründern bis zu gestandenen Mittelständlern.',
      icon: Landmark
    }
  ];

  const current = ecosystemNodes[activeNode];

  return (
    <section id="netzwerk" className="py-24 lg:py-36 bg-[#050B16] relative overflow-hidden border-t border-[#162744] bg-tech-grid">
      {/* Ambient subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D6AE70]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="gold-eyebrow mb-4">{t("Strategisches Netzwerk")}</div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-sans">{t("Das ")}<span className="text-[#D6AE70]">{t("VOZICIS Ökosystem")}</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#8B9CB3] font-light leading-relaxed">{t("Keine geschlossene Einzelkanzlei, sondern ein lebendiges, eingespieltes Netzwerk aus erstklassigen Spezialisten. Alle Fäden laufen vertraulich bei Ioannis Vozicis zusammen.")}</p>
        </div>

        {/* Visual Strategic Constellation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Visual Constellation Map (Left 7 cols) */}
          <div className="lg:col-span-7 relative p-6 sm:p-10 rounded-2xl bg-[#0A1324] border border-[#162744] shadow-2xl shadow-black/80 overflow-hidden min-h-[440px] flex items-center justify-center">
            
            {/* Subtle Circular Orbit Guidelines in Background */}
            <div className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-[#162744] pointer-events-none" />
            <div className="absolute w-[440px] h-[440px] rounded-full border border-[#162744]/60 pointer-events-none" />

            {/* Central Node: VOZICIS IMMOBILIEN */}
            <div className="relative z-20 text-center p-6 rounded-2xl bg-[#08101E] border border-[#D6AE70]/50 shadow-2xl shadow-[#D6AE70]/15 max-w-[200px]">
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-[#D6AE70] text-[#050B16] flex items-center justify-center font-bold text-lg shadow-md font-sans">{t("V")}</div>
              <div className="font-bold text-xs tracking-wider text-white font-sans">{t("VOZICIS IMMOBILIEN")}</div>
              <div className="text-[10px] text-[#D6AE70] font-light mt-0.5">{t("Zentraler Mandatsknoten")}</div>
            </div>

            {/* 7 Surrounding Interactive Satellite Nodes */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {ecosystemNodes.map((node, idx) => {
                const total = ecosystemNodes.length;
                const angle = (idx * (2 * Math.PI)) / total - Math.PI / 2;
                const radius = 175; // px distance from center
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const isSelected = activeNode === idx;

                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(idx)}
                    onMouseEnter={() => setActiveNode(idx)}
                    style={{
                      transform: `translate(${x}px, ${y}px)`
                    }}
                    className={`absolute pointer-events-auto p-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer border backdrop-blur-md ${
                      isSelected
                        ? 'bg-[#D6AE70] text-[#050B16] border-[#D6AE70] shadow-xl shadow-[#D6AE70]/25 scale-110 z-30'
                        : 'bg-[#050B16]/90 text-[#8B9CB3] border-[#162744] hover:border-[#D6AE70]/50 hover:text-white z-10'
                    }`}
                  >
                    <node.icon className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-xs font-semibold whitespace-nowrap hidden sm:inline">
                      {t(node.title)}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right Column: Node Details & Concrete Synergies */}
          <div className="lg:col-span-5 p-7 sm:p-9 rounded-2xl bg-[#0A1324] border border-[#162744] shadow-2xl shadow-black/80 space-y-6">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#050B16]/80 border border-[#162744] text-[#D6AE70] text-xs font-mono">
                <span>{t("ÖKOSYSTEM-KOMPONENTE")}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                {t(current.title)}
              </h3>
              <div className="text-sm font-semibold text-[#D6AE70]">
                {t(current.sub)}
              </div>
              <p className="text-sm sm:text-base text-[#8B9CB3] font-light leading-relaxed pt-2">
                {t(current.desc)}
              </p>
            </div>

            {/* Hub Quick List Navigation */}
            <div className="pt-2 border-t border-[#162744] space-y-1.5">
              <div className="text-[11px] font-mono text-[#8B9CB3] uppercase mb-2">{t("Weitere Partner-Dimensionen:")}</div>
              <div className="flex flex-wrap gap-1.5">
                {ecosystemNodes.map((n, idx) => (
                  <button
                    key={n.id}
                    onClick={() => setActiveNode(idx)}
                    className={`px-3 py-1 rounded-lg text-xs transition-colors cursor-pointer ${
                      activeNode === idx
                        ? 'bg-[#D6AE70] text-[#050B16] font-semibold'
                        : 'bg-[#050B16] text-[#8B9CB3] hover:text-white border border-[#162744]'
                    }`}
                  >
                    {t(n.title)}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 rounded-full bg-[#D6AE70] hover:bg-[#E2C492] text-[#050B16] font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#D6AE70]/15"
              >
                <span>{t("Zugang zum Partnernetzwerk anfragen")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import { useLanguage } from '../i18n/LanguageContext';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Coins, 
  ShieldAlert, 
  MapPin, 
  Scale, 
  Check, 
  X, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { BRAND_IMAGES } from '../data/brandAssets';

export const BrandPhilosophy: React.FC<{ onOpenStrategyCheck: () => void }> = ({ onOpenStrategyCheck }) => {
  const { t, locale, localizedImage } = useLanguage();
  const [selectedParam, setSelectedParam] = useState<number>(0);

  const parameters = [
    {
      id: 'ziele',
      num: '01',
      title: 'Investmentziele & Horizont',
      subtitle: 'Definition vor Objektsuche',
      icon: Target,
      highlight: 'Steuerstundung, Cashflow oder Generationenerhalt',
      description: 'Vor jeder Besichtigung klären wir den präzisen Zweck: Sofortiger steuerlicher Rückfluss über § 7i EStG / degressive AfA, planbarer Netto-Cashflow oder langfristiger Familienvermögensaufbau.',
      benchmark: 'Horizont: 10–25+ Jahre strategisch gesichert',
      image: BRAND_IMAGES.marketAnalysisPresentation.localSrc,
      fallback: BRAND_IMAGES.marketAnalysisPresentation.cdnSrc
    },
    {
      id: 'kapital',
      num: '02',
      title: 'Kapitalstruktur & Hebel',
      subtitle: 'Mathematische Zins- & Tilgungsarchitektur',
      icon: Coins,
      highlight: 'Sinnvoller Fremdkapitalhebel ohne Überschuldung',
      description: 'Zins und Tilgung dürfen den Cashflow auch in volatilen Zinsphasen nicht gefährden. Wir berechnen den optimalen Eigenkapitaleinsatz und sichern zinsstabile Zinsbindungen.',
      benchmark: 'Stresstest: +200 Basispunkte Zinsanstieg gepuffert',
      image: BRAND_IMAGES.dealClosingPartnership.localSrc,
      fallback: BRAND_IMAGES.dealClosingPartnership.cdnSrc
    },
    {
      id: 'risiko',
      num: '03',
      title: 'Risikoprofil & Bausubstanz',
      subtitle: 'Sicherheitsmargen & Due Diligence',
      icon: ShieldAlert,
      highlight: '5-Stufen Due-Diligence vor jedem Ankauf',
      description: 'Jedes Investment birgt Instandhaltungs- und Mietausfallrisiken. Bei VOZICIS werden nur Objekte zugelassen, die über liquide Rücklagenkonzepte und beste Mieterbonitäten verfügen.',
      benchmark: 'Mindestpuffer: 6 Monate Bewirtschaftungsrücklage',
      image: BRAND_IMAGES.projectDevelopmentBlueprints.localSrc,
      fallback: BRAND_IMAGES.projectDevelopmentBlueprints.cdnSrc
    },
    {
      id: 'standort',
      num: '04',
      title: 'Standort- & Demografiedaten',
      subtitle: 'Mikro- & Makroanalyse in Deutschland',
      icon: MapPin,
      highlight: 'Metropolen & prosperierende Wachstumsachsen',
      description: 'Mietrenditen hängen von Zuzug, Beschäftigung und Kaufkraft ab. Wir meiden spekulative Lagen und konzentrieren uns auf krisenfeste Regionen mit echter Nachfrage.',
      benchmark: 'Fokus: München, Leipzig, Rhein-Ruhr, Stuttgart',
      image: BRAND_IMAGES.heroBoardroom.localSrc,
      fallback: BRAND_IMAGES.heroBoardroom.cdnSrc
    },
    {
      id: 'steuer',
      num: '05',
      title: 'Steuer- & Rechtsarchitektur',
      subtitle: 'Rechtsformwahl & AfA-Abschreibung',
      icon: Scale,
      highlight: 'Holding-Strukturen (vGmbH) & AfA-Hebel',
      description: 'Ob Privatkauf mit 10-jähriger Spekulationsfrist (§ 23 EStG) oder vermögensverwaltende GmbH mit 15,825% KSt: Die steuerliche Hülle entscheidet oft über bis zu 50% der Gesamtrendite.',
      benchmark: 'Optimierung: EStG § 7b / § 7i / Holding',
      image: BRAND_IMAGES.wealthAdvisorySuite.localSrc,
      fallback: BRAND_IMAGES.wealthAdvisorySuite.cdnSrc
    }
  ];

  const current = parameters[selectedParam];

  return (
    <section id="positioning" className="py-24 lg:py-36 bg-[#050B16] border-t border-b border-[#162744] relative bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Headline matching ARVENTAS aesthetic */}
        <div className="max-w-4xl mb-16 lg:mb-20">
          <div className="gold-eyebrow mb-4">{t("Philosophie & Methodik")}</div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-sans">{t("Strategische Entscheidungen ")}<br />
            <span className="text-[#D6AE70]">{t("statt Bauchgefühl.")}</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#8B9CB3] font-light leading-relaxed max-w-2xl">{t("Immobilien sind keine isolierte Einzelentscheidung. Sie sind der Kernbaustein einer durchdachten, generationenübergreifenden Vermögensarchitektur.")}</p>
        </div>

        {/* Visual Strategy Diagram & Dimension Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
          
          {/* Left Column: 5 Parameter Navigation */}
          <div className="lg:col-span-5 space-y-2.5 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest text-[#8B9CB3] font-mono mb-3 pl-1">{t("Die 5 strategischen Prüfdimensionen:")}</div>
              {parameters.map((param, index) => {
                const isSelected = selectedParam === index;
                return (
                  <button
                    key={param.id}
                    onClick={() => setSelectedParam(index)}
                    className={`w-full text-left p-4 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between border ${
                      isSelected
                        ? 'bg-[#D6AE70] text-[#050B16] border-[#D6AE70] shadow-xl shadow-[#D6AE70]/15'
                        : 'bg-[#0A1324]/60 hover:bg-[#0A1324] text-[#8B9CB3] hover:text-white border-[#162744]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`font-mono text-xs font-semibold ${isSelected ? 'text-[#050B16]' : 'text-[#D6AE70]'}`}>
                        {t(param.num)}
                      </span>
                      <div>
                        <div className="text-xs sm:text-sm font-bold tracking-wide">
                          {t(param.title)}
                        </div>
                        <div className={`text-[11px] font-light ${isSelected ? 'text-[#050B16]/80' : 'text-[#8B9CB3]'}`}>
                          {t(param.subtitle)}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${isSelected ? 'translate-x-1 text-[#050B16]' : 'opacity-30'}`} />
                  </button>
                );
              })}
            </div>

            <button
              onClick={onOpenStrategyCheck}
              className="mt-4 w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-transparent hover:bg-[#0A1324] text-[#8B9CB3] hover:text-white border border-[#162744] hover:border-[#D6AE70]/40 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#D6AE70]" />
              <span>{t("Parameter im Strategie-Check analysieren")}</span>
            </button>
          </div>

          {/* Right Column: High-Resolution Photographic Canvas for Active Dimension */}
          <div className="lg:col-span-7 rounded-2xl border border-[#162744] relative overflow-hidden flex flex-col justify-between min-h-[420px] bg-[#0A1324] shadow-2xl shadow-black/80">
            {/* Cinematic Background Image */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#12243b] via-[#0A1324] to-[#050B16]" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1324] via-[#0A1324]/85 to-[#0A1324]/50" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 p-7 sm:p-10 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#050B16]/80 border border-[#162744] text-[#D6AE70] text-xs font-mono backdrop-blur-md">
                <span>{t("DIMENSION ")}{t(current.num)}</span>
                <span className="text-[#162744]">|</span>
                <span className="text-white font-sans">{t(current.title)}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-3 font-sans">
                  {t(current.highlight)}
                </h3>
                <p className="text-sm sm:text-base text-[#8B9CB3] font-light leading-relaxed">
                  {t(current.description)}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#050B16]/80 backdrop-blur-md border border-[#162744] flex items-center justify-between">
                <span className="text-xs text-[#8B9CB3] uppercase tracking-wider font-mono">{t("VOZICIS Standard")}</span>
                <span className="text-xs sm:text-sm font-semibold text-[#D6AE70]">
                  {t(current.benchmark)}
                </span>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 p-6 sm:p-8 pt-4 border-t border-[#162744] flex items-center justify-between bg-[#08101E]/90 backdrop-blur-sm">
              <span className="text-xs text-[#8B9CB3] font-light">{t("Individuelle Steuer- & Zinsrechnung")}</span>
              <button
                onClick={onOpenStrategyCheck}
                className="text-xs font-semibold text-[#D6AE70] hover:text-[#E2C492] flex items-center gap-1.5 cursor-pointer"
              >
                <span>{t("Jetzt für Ihr Profil kalkulieren")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Contrast Matrix: Traditional Makler vs. VOZICIS IMMOBILIEN */}
        <div className="border-t border-[#162744] pt-16">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="gold-eyebrow mb-3 mx-auto justify-center">{t("Der fundamentale Unterschied")}</div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">{t("Klassischer Immobilienmakler ")}<br />
              <span className="text-[#D6AE70]">{t("versus Strategischer Kapitalpartner")}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            
            {/* Traditional Broker Box */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0A1324]/50 border border-[#162744] space-y-4">
              <div className="text-xs uppercase tracking-widest text-[#8B9CB3] font-mono font-semibold flex items-center gap-2">
                <X className="w-4 h-4 text-red-400" />
                <span>{t("Klassischer Immobilienmakler")}</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#8B9CB3] font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400/70 font-mono">✕</span>
                  <span>{t("Verkauf um jeden Preis zur schnellen Provisionserzielung")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400/70 font-mono">✕</span>
                  <span>{t("Keine Prüfung von Steuerstruktur, AfA-Potenzial oder Zinsstresstests")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400/70 font-mono">✕</span>
                  <span>{t("Massenvermarktung auf öffentlichen Portalen mit Bieterkämpfen")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400/70 font-mono">✕</span>
                  <span>{t("Betreuung endet sofort nach Unterzeichnung des Notarvertrags")}</span>
                </li>
              </ul>
            </div>

            {/* VOZICIS Strategic Partner Box */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0A1324] border border-[#D6AE70]/40 space-y-4 shadow-xl shadow-black/50">
              <div className="text-xs uppercase tracking-widest text-[#D6AE70] font-mono font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D6AE70]" />
                <span>{t("VOZICIS IMMOBILIEN · Strategischer Partner")}</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#D6AE70] font-mono">✓</span>
                  <span>{t("Strategie zuerst: Liegenschaften müssen exakt zur Steuer- & Kapitalarchitektur passen")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#D6AE70] font-mono">✓</span>
                  <span>{t("Diskreter Off-Market Dealflow aus dem Arventas- und Partnernetzwerk")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#D6AE70] font-mono">✓</span>
                  <span>{t("Konsequente 5-Stufen Due-Diligence (nur ca. 4% aller Objekte bestehen)")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#D6AE70] font-mono">✓</span>
                  <span>{t("Langfristige Partnerschaft: Begleitung von der Finanzierung bis zum Exit")}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

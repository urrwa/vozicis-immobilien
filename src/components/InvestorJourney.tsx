import { SectionPhoto } from './SectionPhoto';
import { JourneyVideo } from './JourneyVideo';
import { FOUNDER_PHOTOS } from '../data/founderPhotos';
import { useLanguage } from '../i18n/LanguageContext';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronLeft, ChevronRight,
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { BRAND_IMAGES } from '../data/brandAssets';

interface InvestorJourneyProps {
  onOpenStrategyCheck: () => void;
  onOpenConsultation: () => void;
}

export const InvestorJourney: React.FC<InvestorJourneyProps> = ({
  onOpenStrategyCheck,
  onOpenConsultation
}) => {
  const { t, locale, localizedImage } = useLanguage();
  // Stage 01 is active by default as requested
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const activeStep = selectedStep;

  const stages = [
    {
      step: '01',
      title: 'Neuer Kontakt',
      subtitle: 'Erster Impuls & Werteabgleich',
      description: 'Diskrete Kontaktaufnahme über Empfehlungen oder eine gezielte Anfrage. Wir klären in wenigen Momenten, ob ein gegenseitiger strategischer Werteabgleich zwischen Investor und VOZICIS IMMOBILIEN besteht.',
      deliverable: 'Unverbindliche gegenseitige Orientierung & Erst-Einordnung',
      badge: 'Diskret & vertraulich',
      image: '/images/review/contact.svg',
      fallback: '/images/review/contact.svg',
      caption: 'Von Ihrer Anfrage zum persönlichen Austausch',
      objectPosition: '50% 15%'
    },
    {
      step: '02',
      title: 'Strategie-Check',
      subtitle: '3-Minuten Profil- & Potenzialanalyse',
      description: 'Über unseren strukturierten Fragebogen erfassen Sie Zielrendite, Zeithorizont, Eigenkapitalspanne und steuerliche Präferenzen (z. B. degressive AfA, Denkmal § 7i, vGmbH-Thesaurierung).',
      deliverable: 'Automatische Profilauswertung & Eignungsmatrix',
      badge: 'Kostenfrei & sofort',
      image: '/images/review/strategy.svg',
      fallback: '/images/review/strategy.svg',
      caption: 'Datenbasierte Analyse & steuerliche Hebel',
      objectPosition: '50% 12%'
    },
    {
      step: '03',
      title: 'Qualifizierter Investor',
      subtitle: 'Aufnahme in das Investorennetzwerk',
      description: 'Nach positiver Passung werden Sie in das persönliche Partnernetzwerk von Ioannis Vozicis aufgenommen. Sie erhalten Vorab-Zugriff auf Off-Market Opportunitäten vor jeder öffentlichen Streuung.',
      deliverable: 'Priorisierter Zugang zum Off-Market Dealflow',
      badge: 'Exklusiver Kreis',
      image: '/images/review/network.svg',
      fallback: '/images/review/network.svg',
      caption: 'Aufnahme in das Investorennetzwerk',
      objectPosition: '50% 14%'
    },
    {
      step: '04',
      title: 'Strategieberatung',
      subtitle: '1:1 Deep-Dive mit Ioannis Vozicis',
      description: 'Im persönlichen Gespräch besprechen wir Ihre Vermögensarchitektur, Liquiditätsplanung und Finanzierungsstruktur im Detail. Wir kalkulieren Zinsszenarien und steuerliche Netto-Effekte durch.',
      deliverable: 'Individuelle Immobilien- & Steuerstrategie',
      badge: 'Persönliche Begleitung',
      image: BRAND_IMAGES.executiveConsultingLounge.localSrc,
      fallback: BRAND_IMAGES.executiveConsultingLounge.cdnSrc,
      caption: 'Vertrauliche 1:1 Beratung in der Consulting Lounge',
      objectPosition: '50% 15%'
    },
    {
      step: '05',
      title: 'Immobilienmatching',
      subtitle: '5-Stufen geprüfte Liegenschaften',
      description: 'Erst jetzt präsentieren wir konkrete Objekte, die exakt zu Ihrem Profil passen: Ob KfW-40 Neubau mit Sonder-AfA, denkmalgeschützte Sanierung mit Spitzensteuersatzhebel oder rentables Wohnportfolio.',
      deliverable: 'Vollständige Due-Diligence Dokumentation',
      badge: 'Strenge Vorselektion',
      image: '/images/review/matching.svg',
      fallback: '/images/review/matching.svg',
      caption: 'Ihr Profil und geprüfte Objekte zusammenführen',
      objectPosition: '50% 12%'
    },
    {
      step: '06',
      title: 'Partnerschaft',
      subtitle: 'Notarielle Umsetzung & Lebenszyklus',
      description: 'Begleitung bei Bankfinanzierung, Notartermin und Objektübergabe. Wir bleiben auch nach dem Kauf Ihr strategischer Ansprechpartner für Wertsteigerungen, Refinanzierungen und Folgechancen.',
      deliverable: 'Langfristige Begleitung & Re-Investment Betreuung',
      badge: 'Dauerhafte Partnerschaft',
      image: '/images/review/partnership.svg',
      fallback: '/images/review/partnership.svg',
      caption: 'Von der Abstimmung zur langfristigen Begleitung',
      objectPosition: '50% 15%'
    }
  ];

  const current = stages[activeStep];

  return (
    <section id="methodik" className="py-24 lg:py-36 bg-[#050B16] border-t border-b border-[#162744] relative bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-3xl">
            <div className="gold-eyebrow mb-4">{t("Methodik & Consulting-Prozess")}</div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-sans">{t("Die 6-Stufen ")}<span className="text-[#D6AE70]">{t("Investoren-Journey")}</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#8B9CB3] font-light leading-relaxed">{t("Vom ersten unverbindlichen Impuls bis zur generationenübergreifenden Partnerschaft: Ein transparenter, reproduzierbarer Pfad für maximale Kapitalsicherheit.")}</p>
          </div>

          <div className="shrink-0 lg:pb-1">
            <button
              id="journey-header-cta"
              onClick={onOpenStrategyCheck}
              className="px-6 py-3.5 rounded-full bg-[#D6AE70] hover:bg-[#E2C492] text-[#050B16] font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#D6AE70]/15 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#050B16]" />
              <span>{t("Direkt bei Stufe 02 einsteigen")}</span>
            </button>
          </div>
        </div>

        <nav aria-label={t('Investoren-Journey Stufen')} className="mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex gap-2 min-w-[860px] lg:min-w-0 h-[300px]">
            {stages.map((stage, idx) => {
              const active = idx === selectedStep;
              return <button key={stage.step} type="button" aria-label={t(stage.title)} aria-current={active ? 'step' : undefined}
                onClick={() => setSelectedStep(idx)}
                className={`relative min-w-0 overflow-hidden rounded-[24px] border text-left transition-all duration-500 focus-visible:outline-2 focus-visible:outline-[#D6AE70] ${active ? 'flex-[3] border-[#D6AE70]' : 'flex-1 border-[#162744] hover:border-[#D6AE70]/60'}`}>
                <SectionPhoto group="journey" index={idx} />
                <div className={`absolute inset-0 bg-gradient-to-t from-[#050B16] via-[#050B16]/20 to-[#050B16]/20 transition-opacity ${active ? 'opacity-85' : 'opacity-95 bg-[#050B16]/50'}`} />
                {active ? <>
                  <span className="absolute top-6 left-5 rounded-full bg-[#050B16]/85 px-3 py-1 text-[10px] text-[#D6AE70] font-mono">{t('STUFE ')}{stage.step} · {t(stage.badge)}</span>
                  <div className="absolute bottom-6 left-5 right-5 flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D6AE70] text-[#050B16] text-xs font-bold">{stage.step}</span>
                    <div><div className="text-xl font-bold text-white">{t(stage.title)}</div><div className="mt-1 text-xs text-[#D6AE70]">{t(stage.subtitle)}</div></div>
                  </div>
                </> : <>
                  <span className="absolute top-4 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-[#D6AE70]/60" />
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.18em] text-white/80"><span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{t(stage.title)}</span></span>
                  <span className="absolute bottom-5 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-[#050B16]/85 text-xs text-[#B9C6D7]">{stage.step}</span>
                </>}
              </button>;
            })}
          </div>
        </nav>

        {/* Detailed Active Stage Premium Card */}
        <div aria-live="polite" aria-atomic="true" className="rounded-2xl bg-[#0A1324] border border-[#162744] overflow-hidden shadow-2xl shadow-black/80">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row items-stretch min-h-[480px]"
            >
              {/* Left Column: approx 48% content */}
              <div className="w-full lg:w-[48%] p-6 sm:p-8 lg:p-12 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#050B16] border border-[#162744] text-[#D6AE70] text-xs font-mono tracking-widest uppercase">
                    <span>{t("STUFE ")}{t(current.step)}</span>
                    <span className="text-[#162744]">|</span>
                    <span className="text-[#8B9CB3] font-sans tracking-normal">{t(current.badge)}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight font-sans tracking-tight">
                    {t(current.title)}
                  </h3>

                  <div className="text-sm sm:text-base font-semibold text-[#D6AE70]">
                    {t(current.subtitle)}
                  </div>

                  <p className="text-sm sm:text-base text-[#8B9CB3] font-light leading-relaxed">
                    {t(current.description)}
                  </p>
                </div>

                {/* Refined Inset Deliverable Panel */}
                <div className="p-4 sm:p-5 rounded-xl bg-[#050B16] border border-[#162744] space-y-1.5">
                  <div className="text-[11px] uppercase font-mono tracking-wider text-[#8B9CB3]">{t("Konkretes Ergebnis dieser Stufe:")}</div>
                  <div className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D6AE70] shrink-0" />
                    <span>{t(current.deliverable)}</span>
                  </div>
                </div>

                {/* CTA Action Bar */}
                <div className="pt-2">
                  {activeStep === 1 ? (
                    <button
                      onClick={onOpenStrategyCheck}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#D6AE70] hover:bg-[#E2C492] text-[#050B16] font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-[#D6AE70]/15"
                    >
                      <span>{t("Strategie-Check jetzt starten")}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#050B16]" />
                    </button>
                  ) : (
                    <button
                      onClick={onOpenConsultation}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-transparent hover:bg-[#D6AE70] text-[#D6AE70] hover:text-[#050B16] border border-[#D6AE70] font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-[#D6AE70]/15"
                    >
                      <span>{t("Stufe mit Ioannis besprechen")}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </div>

              {/* Right Column: approx 52% photographic showcase */}
              <div className="w-full lg:w-[52%] relative flex flex-col justify-center min-h-[360px] overflow-hidden bg-[#050B16]">
                {[0, 4].includes(activeStep)
                  ? <JourneyVideo src={`/videos/journey/0${activeStep + 1}.mp4`} poster={FOUNDER_PHOTOS.journey[activeStep]} />
                  : <SectionPhoto group="journey" index={activeStep} />}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1324] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0A1324]/50 lg:via-transparent lg:to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 z-10 px-4 py-2.5 rounded-xl bg-[#050B16]/85 backdrop-blur-md border border-[#162744] text-xs text-[#8B9CB3] font-light">
                  {t(current.caption)}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

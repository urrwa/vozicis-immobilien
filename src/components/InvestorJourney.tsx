import { SectionPhoto } from './SectionPhoto';
import { useLanguage } from '../i18n/LanguageContext';
import { StrategyCheckInfographic, InvestorNetworkInfographic, PartnershipJourneyInfographic } from './JourneyInfographics';
import React, { useState } from 'react';
import {
  Sparkles
} from 'lucide-react';

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
      activeImg: '/images/sections/journey-01-contact.jpg',
      activePos: '50% 30%',
    },
    {
      step: '02',
      title: 'Strategie-Check',
      subtitle: '3-Minuten Profil- & Potenzialanalyse',
      description: 'Über unseren strukturierten Fragebogen erfassen Sie Zielrendite, Zeithorizont, Eigenkapitalspanne und steuerliche Präferenzen (z. B. degressive AfA, Denkmal § 7i, vGmbH-Thesaurierung).',
      deliverable: 'Automatische Profilauswertung & Eignungsmatrix',
      badge: 'Kostenfrei & sofort',
      activeImg: '',
      activePos: '50% 25%',
      visualType: 'infographic-strategy' as const,
    },
    {
      step: '03',
      title: 'Qualifizierter Investor',
      subtitle: 'Aufnahme in das Investorennetzwerk',
      description: 'Nach positiver Passung werden Sie in das persönliche Partnernetzwerk von Ioannis Vozicis aufgenommen. Sie erhalten Vorab-Zugriff auf Off-Market Opportunitäten vor jeder öffentlichen Streuung.',
      deliverable: 'Priorisierter Zugang zum Off-Market Dealflow',
      badge: 'Exklusiver Kreis',
      activeImg: '/images/sections/journey-03-network.jpg',
      activePos: '50% 30%',
    },
    {
      step: '04',
      title: 'Strategieberatung',
      subtitle: '1:1 Deep-Dive mit Ioannis Vozicis',
      description: 'Im persönlichen Gespräch besprechen wir Ihre Vermögensarchitektur, Liquiditätsplanung und Finanzierungsstruktur im Detail. Wir kalkulieren Zinsszenarien und steuerliche Netto-Effekte durch.',
      deliverable: 'Individuelle Immobilien- & Steuerstrategie',
      badge: 'Persönliche Begleitung',
      activeImg: '/images/sections/journey-04-consultation.jpg',
      activePos: '50% 25%',
    },
    {
      step: '05',
      title: 'Immobilienmatching',
      subtitle: '5-Stufen geprüfte Liegenschaften',
      description: 'Erst jetzt präsentieren wir konkrete Objekte, die exakt zu Ihrem Profil passen: Ob KfW-40 Neubau mit Sonder-AfA, denkmalgeschützte Sanierung mit Spitzensteuersatzhebel oder rentables Wohnportfolio.',
      deliverable: 'Vollständige Due-Diligence Dokumentation',
      badge: 'Strenge Vorselektion',
      activeImg: '/images/sections/journey-05-viewing.jpg',
      activePos: '50% 35%',
    },
    {
      step: '06',
      title: 'Partnerschaft',
      subtitle: 'Notarielle Umsetzung & Lebenszyklus',
      description: 'Begleitung bei Bankfinanzierung, Notartermin und Objektübergabe. Wir bleiben auch nach dem Kauf Ihr strategischer Ansprechpartner für Wertsteigerungen, Refinanzierungen und Folgechancen.',
      deliverable: 'Langfristige Begleitung & Re-Investment Betreuung',
      badge: 'Dauerhafte Partnerschaft',
      activeImg: '/images/sections/journey-06-handover.jpg',
      activePos: '50% 30%',
    }
  ];

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
                onMouseEnter={() => setSelectedStep(idx)}
                className={`relative min-w-0 overflow-hidden rounded-[24px] border text-left transition-all duration-500 focus-visible:outline-2 focus-visible:outline-[#D6AE70] ${active ? 'flex-[3] border-[#D6AE70]' : 'flex-1 border-[#162744] hover:border-[#D6AE70]/60'}`}>
                {stage.visualType === 'infographic-strategy' ? (
                  <StrategyCheckInfographic collapsed={!active} />
                ) : stage.visualType === 'infographic-network' ? (
                  <InvestorNetworkInfographic collapsed={!active} />
                ) : stage.visualType === 'infographic-partnership' ? (
                  <PartnershipJourneyInfographic collapsed={!active} />
                ) : active ? (
                  <img src={stage.activeImg} alt={t(stage.title)} loading="eager" decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ objectPosition: stage.activePos }} />
                ) : (
                  <SectionPhoto group="journey" index={idx} />
                )}
                {!stage.visualType && (
                  <div className={`absolute inset-0 transition-opacity ${active ? 'bg-gradient-to-t from-[#050B16]/70 via-[#050B16]/20 to-transparent opacity-80' : 'bg-[#050B16]/50'}`} />
                )}
                {active ? <>
                  <span className="absolute top-6 left-5 rounded-full bg-[#050B16]/85 px-3 py-1 text-[10px] text-[#D6AE70] font-mono">{t('STUFE ')}{stage.step} · {t(stage.badge)}</span>
                  <div className="absolute bottom-6 left-5 right-5 flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D6AE70] text-[#050B16] text-xs font-bold">{stage.step}</span>
                    <div><div className="text-xl font-bold text-white">{t(stage.title)}</div><div className="mt-1 text-xs text-[#D6AE70]">{t(stage.subtitle)}</div></div>
                  </div>
                </> : <>
                  {!stage.visualType && <>
                    <span className="absolute top-4 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-[#D6AE70]/60" />
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.18em] text-white/80"><span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{t(stage.title)}</span></span>
                  </>}
                  <span className="absolute bottom-5 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-[#050B16]/85 text-xs text-[#B9C6D7]">{stage.step}</span>
                </>}
              </button>;
            })}
          </div>
        </nav>

        {/* Active stage detail panel */}
        {(() => {
          const s = stages[selectedStep];
          const detailItems: Record<number, string[]> = {
            0: ['Diskrete Kontaktaufnahme', 'Strategischer Werteabgleich', 'Gegenseitige Erst-Einordnung'],
            1: ['Zielrendite & Zeithorizont', 'Eigenkapitalspanne', 'Steuerliche Präferenzen (AfA, §7i)'],
            2: ['Off-Market Dealflow Zugang', 'Priorisierte Objekt-Einladungen', 'Persönliches Partnernetzwerk'],
            3: ['Vermögensarchitektur', 'Finanzierungsstruktur', 'Steuerliche Netto-Effekte'],
            4: ['KfW-40 Neubau mit Sonder-AfA', 'Denkmal §7i Sanierung', 'Renditestarkes Wohnportfolio'],
            5: ['Bankfinanzierung & Notartermin', 'Objektübergabe & Onboarding', 'Re-Investment Betreuung'],
          };
          const items = detailItems[selectedStep] || [];
          return (
            <div key={selectedStep} className="journey-detail flex flex-col lg:flex-row gap-0 bg-[#0A1628] border border-[#162744] rounded-2xl overflow-hidden">
              {/* Text content */}
              <div className="flex flex-col sm:flex-row gap-6 p-6 flex-1 min-w-0">
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-mono text-[#D6AE70] uppercase tracking-widest mb-2">STUFE {s.step} · {t(s.badge)}</div>
                  <div className="text-lg font-bold text-white mb-1">{t(s.title)}</div>
                  <div className="text-xs text-[#D6AE70] mb-3">{t(s.subtitle)}</div>
                  <p className="text-sm text-[#8B9CB3] leading-relaxed">{t(s.description)}</p>
                </div>
                <div className="sm:w-52 shrink-0">
                  <div className="text-[10px] font-mono text-[#D6AE70] uppercase tracking-widest mb-3">{t('Leistungen dieser Stufe')}</div>
                  <ul className="space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/75">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#D6AE70] shrink-0" />
                        {t(item)}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 px-3 py-2 rounded-lg bg-[#162744] text-[11px] text-[#8B9CB3]">
                    <span className="text-[#D6AE70] font-medium">{t('Ergebnis: ')}</span>{t(s.deliverable)}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};

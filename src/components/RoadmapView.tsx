import { SectionPhoto } from './SectionPhoto';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ROADMAP_PHASES } from '../data/mockData';
import { BRAND_IMAGES } from '../data/brandAssets';
import { 
  TrendingUp, 
  CheckCircle2, 
  Calendar, 
  Share2, 
  Target, 
  Compass, 
  Sparkles, 
  Layers, 
  Search, 
  Linkedin, 
  Globe, 
  FileCheck,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const RoadmapView: React.FC = () => {
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState<number>(0);

  const phaseImages = [
    {
      image: BRAND_IMAGES.marketAnalysisPresentation.localSrc,
      fallback: BRAND_IMAGES.marketAnalysisPresentation.cdnSrc,
      caption: 'Phase 1: Fundament & Strategie-Setup'
    },
    {
      image: BRAND_IMAGES.heroBoardroom.localSrc,
      fallback: BRAND_IMAGES.heroBoardroom.cdnSrc,
      caption: 'Phase 2: Reichweite & Lead-Generierung'
    },
    {
      image: BRAND_IMAGES.dealClosingPartnership.localSrc,
      fallback: BRAND_IMAGES.dealClosingPartnership.cdnSrc,
      caption: 'Phase 3: Skalierung & Partner-Ökosystem'
    },
    {
      image: BRAND_IMAGES.institutionalHospitality.localSrc,
      fallback: BRAND_IMAGES.institutionalHospitality.cdnSrc,
      caption: 'Phase 4: Etablierung als führende Marke'
    }
  ];

  const marketingChannels = [
    {
      title: 'Google Ads',
      tag: 'High-Intent Suchanfragen',
      icon: Search,
      description: 'Gezieltes Abfangen von Kauf- und Beratungsabsichten rund um Immobilieninvestment, Denkmal-AfA, Kapitalanlage München/Leipzig und strategische Vermögensberatung.'
    },
    {
      title: 'LinkedIn',
      tag: 'B2B & Unternehmernetzwerk',
      icon: Linkedin,
      description: 'Hauptkanal für Geschäftsführer, Gründer und vermögende Selbstständige. Positionierung von Ioannis Vozicis durch Fallstudien, Denkmodelle und Marktanalysen.'
    },
    {
      title: 'Content Marketing',
      tag: 'Autorität & Vertrauensaufbau',
      icon: FileCheck,
      description: 'Veröffentlichung fundierter Fachbeiträge entlang der 7 Säulen. Vertrauen und strategische Qualifizierung bereits vor dem ersten persönlichen Beratungsgespräch.'
    },
    {
      title: 'Personal Brand Website',
      tag: 'Conversion & Qualifizierung',
      icon: Globe,
      description: 'Konvertierung qualifizierter Webseitenbesucher in konkrete Investorenprofile über den interaktiven "Kostenfreien Immobilienstrategie-Check".'
    }
  ];

  const brandAssets = [
    'Professionelle persönliche Website mit geschütztem Design',
    'Detailliertes Geschäftsführer-Profil & Gesellschafter-Mandat',
    'Interaktiver Immobilienstrategie-Check mit CRM-Anbindung',
    'Geprüfte Referenzen, Kennzahlen und Deal-Cases',
    'Exklusive Quartals-Marktanalysen & Zins-Stresstests',
    'Authentische Investor Stories & Unternehmer-Interviews',
    'Hochwertige institutionelle Präsentationen & Dossiers'
  ];

  const currentPhase = ROADMAP_PHASES[selectedPhaseIndex];
  const currentVisual = phaseImages[selectedPhaseIndex];

  return (
    <section className="py-16 bg-[#07090e] min-h-[85vh] text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Hero Banner */}
        <div className="bg-[#0b0f17] border border-white/[0.08] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/[0.08] border border-amber-400/20 text-amber-300 text-xs font-mono uppercase tracking-widest mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Strategischer Wachstumsplan · 12-Monats-Horizont</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-slate-100 tracking-tight leading-tight">
              Growth Strategy &amp; <br />
              <span className="font-editorial italic text-amber-200">Personal Brand Positioning</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-light">
              Vorbereitet für: <strong className="text-amber-300 font-semibold">Ioannis Vozicis</strong> (Geschäftsführer &amp; Gesellschafter Arventas).
              <br />
              Systematischer Aufbau einer wiedererkennbaren, hochprofitablen Investorenmarke mit planbarer Akquisitions- und Platzierungsmechanik.
            </p>
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-black/60 border border-amber-400/30 text-xs sm:text-sm text-amber-200 font-serif-luxury italic flex items-center gap-3 max-w-2xl relative z-10">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              „Wir verbinden Kapital, Immobilien und Menschen durch strategische Entscheidungen und langfristige Partnerschaften.“
            </span>
          </div>
        </div>

        {/* Interactive Horizontal Timeline Navigator */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="text-xs uppercase font-mono tracking-widest text-slate-400 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Die 4 Entwicklungsphasen im 12-Monats-Überblick</span>
            </div>
            <div className="text-xs text-amber-300 font-mono">
              Phase {selectedPhaseIndex + 1} von 4 aktiv
            </div>
          </div>

          {/* Horizontal Track Selector */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {ROADMAP_PHASES.map((phase, idx) => {
              const isSelected = selectedPhaseIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedPhaseIndex(idx)}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-xl shadow-amber-400/20'
                      : 'bg-[#0a0e16] text-slate-300 border-white/[0.06] hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                    <span className={isSelected ? 'text-slate-900 font-bold' : 'text-amber-400'}>
                      {phase.phase}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] uppercase font-bold tracking-wider ${
                      isSelected
                        ? 'bg-slate-950 text-amber-300'
                        : phase.status === 'In Umsetzung'
                        ? 'bg-amber-400/20 text-amber-300'
                        : 'bg-white/[0.05] text-slate-400'
                    }`}>
                      {phase.status}
                    </span>
                  </div>
                  <div className={`text-sm sm:text-base font-serif-luxury font-medium line-clamp-1 ${
                    isSelected ? 'text-slate-950' : 'text-slate-100'
                  }`}>
                    {phase.headline}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Phase Showcase */}
          <div className="rounded-3xl bg-[#0a0e16] border border-white/[0.08] p-8 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Milestones & Deliverables */}
              <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase text-amber-300 tracking-wider mb-1">
                    {currentPhase.phase} · {currentPhase.status}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif-luxury text-slate-100 font-normal">
                    {currentPhase.headline}
                  </h3>

                  <div className="mt-6 space-y-3">
                    <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
                      Strategische Meilensteine:
                    </div>
                    {currentPhase.milestones.map((m, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-light">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.06]">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2">
                    Key Deliverables:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentPhase.deliverables.map((deliv, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-black/60 border border-white/[0.08] text-xs text-amber-200">
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Stage for this Phase */}
              <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto overflow-hidden rounded-2xl bg-slate-950 min-h-[300px]">
                <SectionPhoto group="roadmap" index={selectedPhaseIndex} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-200 font-light bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  {currentVisual.caption}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Marketing Acquisition Engine */}
        <div className="bg-[#0b0f17] border border-white/[0.08] rounded-3xl p-8 sm:p-10 space-y-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-amber-300 mb-1">
              Abschnitt 7: Marketing-Wachstumsstrategie
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury text-slate-100 font-normal">
              Die 4 Säulen des Akquisitionssystems
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {marketingChannels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <div key={i} className="bg-[#080b11] p-6 rounded-2xl border border-white/[0.06] space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-300 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="font-serif-luxury font-medium text-slate-100 text-base">
                      {channel.title}
                    </div>
                    <div className="text-[11px] text-amber-300 font-mono">
                      {channel.tag}
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed pt-2 border-t border-white/[0.04]">
                    {channel.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust & Brand Assets Overview */}
        <div className="bg-[#0b0f17] border border-white/[0.08] rounded-3xl p-8 sm:p-10 space-y-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-amber-300 mb-1">
              Abschnitt 10: Trust &amp; Brand Assets
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury text-slate-100 font-normal">
              Erforderliche Marken- und Vertrauensbausteine
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {brandAssets.map((asset, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#080b11] p-4 rounded-xl border border-white/[0.06]">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-200 font-light">{asset}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

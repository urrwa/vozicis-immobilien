import { useLanguage } from './i18n/LanguageContext';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ThreePillars } from './components/ThreePillars';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { TargetAudiences } from './components/TargetAudiences';
import { FounderProfile } from './components/FounderProfile';
import { InvestorJourney } from './components/InvestorJourney';
import { OpportunitiesShowcase } from './components/OpportunitiesShowcase';
import { ContentLibrary } from './components/ContentLibrary';
import { PartnershipEcosystem } from './components/PartnershipEcosystem';
import { StrategyCheckModal } from './components/StrategyCheckModal';
import { ConsultationModal } from './components/ConsultationModal';
import { BrandLookbookModal } from './components/BrandLookbookModal';
import { StrategyCheckSection } from './components/StrategyCheckSection';
import { Footer } from './components/Footer';

import { INITIAL_PIPELINE_LEADS } from './data/mockData';
import { PipelineLead, StrategyCheckData } from './types';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  const { t, locale, localizedImage } = useLanguage();
  const [isStrategyCheckOpen, setIsStrategyCheckOpen] = useState(false);
  const [strategyCheckAudience, setStrategyCheckAudience] = useState<string>('unternehmer');
  
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationProject, setConsultationProject] = useState<string | undefined>(undefined);
  const [consultationData, setConsultationData] = useState<StrategyCheckData | null>(null);

  const [isLookbookOpen, setIsLookbookOpen] = useState(false);

  const [, setLeads] = useState<PipelineLead[]>(INITIAL_PIPELINE_LEADS);
  const [notification, setNotification] = useState<string | null>(null);

  // If an old secondary-page URL, hash, or search query is opened, redirect to root landing page
  useEffect(() => {
    const pathname = window.location.pathname;
    const hash = window.location.hash;
    const search = window.location.search;
    if (
      pathname.includes('/crm') || 
      pathname.includes('/pipeline') || 
      pathname.includes('/roadmap') ||
      hash === '#crm' ||
      hash === '#pipeline' ||
      hash === '#roadmap' ||
      search.includes('view=crm') ||
      search.includes('view=roadmap') ||
      search.includes('view=pipeline')
    ) {
      window.history.replaceState(null, '', window.location.origin + '/');
    }
  }, []);

  const showToast = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 4500);
  };

  const handleLeadCreated = (newLead: PipelineLead) => {
    setLeads(prev => [newLead, ...prev]);
    showToast(`${t('Investorenprofil für')} ${newLead.fullName} ${t('erfolgreich übermittelt.')}`);
  };

  const openStrategyCheckWithAudience = (audienceId: string) => {
    setStrategyCheckAudience(audienceId);
    setIsStrategyCheckOpen(true);
  };

  const openConsultationWithProject = (projectTitle?: string) => {
    setConsultationProject(projectTitle);
    setConsultationData(null);
    setIsConsultationOpen(true);
  };

  const openConsultationWithData = (data: StrategyCheckData) => {
    setConsultationProject(undefined);
    setConsultationData(data);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050B16] text-slate-100 flex flex-col selection:bg-[#D6AE70]/30 selection:text-[#D6AE70]">
      
      {/* Global Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0A1324] border border-[#D6AE70]/40 text-[#D6AE70] text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-3">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="font-medium">{t(notification)}</span>
        </div>
      )}

      {/* Main Navigation Header */}
      <Header
        onOpenStrategyCheck={() => {
          setStrategyCheckAudience('unternehmer');
          setIsStrategyCheckOpen(true);
        }}
        onOpenConsultation={() => openConsultationWithProject()}
        onOpenLookbook={() => setIsLookbookOpen(true)}
      />

      {/* Main Landing Page Experience */}
      <main className="flex-1">
        {/* 01: Hero Section — Monumental Architectural Background & Core Manifesto */}
        <Hero
          onOpenStrategyCheck={() => {
            setStrategyCheckAudience('unternehmer');
            setIsStrategyCheckOpen(true);
          }}
          onOpenConsultation={() => openConsultationWithProject()}
          onOpenLookbook={() => setIsLookbookOpen(true)}
        />

        {/* 02: The 3 Pillars — KAPITAL · IMMOBILIEN · MENSCHEN */}
        <ThreePillars
          onOpenStrategyCheck={() => {
            setStrategyCheckAudience('unternehmer');
            setIsStrategyCheckOpen(true);
          }}
        />

        {/* 03: Strategy & Philosophy — Strategische Entscheidungen statt Bauchgefühl & The 5 Dimensions */}
        <BrandPhilosophy
          onOpenStrategyCheck={() => {
            setStrategyCheckAudience('unternehmer');
            setIsStrategyCheckOpen(true);
          }}
        />

        {/* 04: Personal Brand — Ioannis Vozicis ("Kapital braucht Klarheit") */}
        <FounderProfile
          onOpenConsultation={() => openConsultationWithProject()}
          onOpenStrategyCheck={() => {
            setStrategyCheckAudience('unternehmer');
            setIsStrategyCheckOpen(true);
          }}
          onOpenLookbook={() => setIsLookbookOpen(true)}
        />

        {/* 05: The Investor Journey — 6-Stufen Methodik */}
        <InvestorJourney
          onOpenStrategyCheck={() => {
            setStrategyCheckAudience('unternehmer');
            setIsStrategyCheckOpen(true);
          }}
          onOpenConsultation={() => openConsultationWithProject()}
        />

        {/* 06: Target Audience Strategy (Unternehmer, Privatinvestoren, Bauträger) */}
        <TargetAudiences
          onSelectAudienceForCheck={openStrategyCheckWithAudience}
        />

        {/* 07: Curated Opportunities & Matching (Flagship + Curated Selection) */}
        <OpportunitiesShowcase
          onOpenConsultation={openConsultationWithProject}
          onOpenStrategyCheck={() => {
            setStrategyCheckAudience('unternehmer');
            setIsStrategyCheckOpen(true);
          }}
        />

        {/* 08: Partnership Ecosystem (Central Node Architecture) */}
        <PartnershipEcosystem
          onOpenConsultation={() => openConsultationWithProject()}
        />

        {/* 09: Content & Authority Strategy (The 7 Pillars & Executive Journal) */}
        <ContentLibrary
          onOpenConsultation={() => openConsultationWithProject()}
          onOpenStrategyCheck={() => {
            setStrategyCheckAudience('unternehmer');
            setIsStrategyCheckOpen(true);
          }}
        />

        {/* 10: Dedicated High-Conversion Strategy-Check Section */}
        <StrategyCheckSection
          onOpenStrategyCheck={() => {
            setStrategyCheckAudience('unternehmer');
            setIsStrategyCheckOpen(true);
          }}
          onOpenConsultation={() => openConsultationWithProject()}
        />
      </main>

      {/* Footer & Final Cinematic CTA */}
      <Footer
        onOpenStrategyCheck={() => {
          setStrategyCheckAudience('unternehmer');
          setIsStrategyCheckOpen(true);
        }}
        onOpenConsultation={() => openConsultationWithProject()}
        onOpenLookbook={() => setIsLookbookOpen(true)}
      />

      {/* Floating CTA Trigger for Strategy-Check on Desktop */}
      <aside aria-label={t("Schnellstart Strategie-Check")} className="fixed bottom-6 left-6 z-30 hidden sm:block">
        <button
          onClick={() => {
            setStrategyCheckAudience('unternehmer');
            setIsStrategyCheckOpen(true);
          }}
          className="px-4 py-2.5 rounded-full bg-[#0A1324]/90 hover:bg-[#0A1324] border border-[#D6AE70]/40 text-[#D6AE70] text-xs font-semibold shadow-2xl shadow-[#D6AE70]/10 hover:shadow-[#D6AE70]/20 flex items-center gap-2 backdrop-blur-md transition-all group cursor-pointer"
        >
          <div className="w-2 h-2 rounded-full bg-[#D6AE70] animate-pulse" />
          <Sparkles className="w-3.5 h-3.5 text-[#D6AE70]" />
          <span>{t("Kostenfreier Strategie-Check")}</span>
        </button>
      </aside>

      {/* Interactive 6-Step Strategy Check Modal */}
      <StrategyCheckModal
        isOpen={isStrategyCheckOpen}
        onClose={() => setIsStrategyCheckOpen(false)}
        onLeadCreated={handleLeadCreated}
        initialAudience={strategyCheckAudience}
        onOpenConsultationWithData={openConsultationWithData}
      />

      {/* 1:1 Consultation Scheduling Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        projectName={consultationProject}
        prefilledData={consultationData}
      />

      {/* 18-Image Brand Lookbook & Lightbox Modal */}
      <BrandLookbookModal
        isOpen={isLookbookOpen}
        onClose={() => setIsLookbookOpen(false)}
        onOpenConsultation={() => {
          setIsLookbookOpen(false);
          openConsultationWithProject();
        }}
      />

    </div>
  );
}

import { TopicVisual } from './TopicVisual';
import { useLanguage } from '../i18n/LanguageContext';
import React, { useState } from 'react';
import { OPPORTUNITIES } from '../data/mockData';
import { InvestmentOpportunity } from '../types';
import { 
  Building2, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Filter, 
  Calendar,
  X,
  FileText,
  BadgePercent,
  CheckCircle2,
  LockKeyhole
} from 'lucide-react';

interface OpportunitiesShowcaseProps {
  onOpenConsultation: (projectName?: string) => void;
  onOpenStrategyCheck: () => void;
}

export const OpportunitiesShowcase: React.FC<OpportunitiesShowcaseProps> = ({
  onOpenConsultation,
  onOpenStrategyCheck
}) => {
  const { t, locale, localizedImage } = useLanguage();
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [selectedOpp, setSelectedOpp] = useState<InvestmentOpportunity | null>(null);

  const filteredList = OPPORTUNITIES.filter(opp => {
    if (filterCategory === 'all') return true;
    return opp.category === filterCategory;
  });

  const flagshipOpp = OPPORTUNITIES[0]; // München KfW-40 QNG
  const secondaryList = filteredList.filter(o => o.id !== flagshipOpp.id || filterCategory !== 'all');

  return (
    <section id="matching" className="py-24 lg:py-36 bg-[#050B16] border-t border-b border-[#162744] relative bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="gold-eyebrow mb-3">{t("Geprüfter Off-Market Dealflow")}</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight">{t("Selektierte ")}<span className="text-[#D6AE70]">{t("Immobilienchancen")}</span>
            </h2>
            <p className="mt-4 text-[#8B9CB3] text-sm sm:text-base font-light leading-relaxed">{t("Jede Opportunität durchläuft Ioannis Vozicis’ 5-Stufen Due-Diligence. Nach Ihrem Strategie-Check stellen wir Ihnen exakt die Objekte vor, die zu Ihrem Eigenkapital und Ihrer steuerlichen Zielstruktur passen.")}</p>
          </div>

          <button
            onClick={onOpenStrategyCheck}
            className="self-start md:self-auto px-6 py-3.5 rounded-full text-xs font-semibold bg-[#D6AE70] hover:bg-[#E2C492] text-[#050B16] flex items-center gap-2 shadow-lg shadow-[#D6AE70]/15 transition-all shrink-0 cursor-pointer uppercase tracking-wider"
          >
            <Sparkles className="w-4 h-4 text-[#050B16]" />
            <span>{t("Eigenes Profil matchen")}</span>
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'Alle Opportunitäten' },
            { id: 'neubau_wohn', label: 'KfW-40 Neubau (Degressive AfA)' },
            { id: 'denkmal_sanierung', label: 'Denkmal-AfA § 7i EStG' },
            { id: 'bestand_wohn', label: 'Value-Add Wohnportfolios' },
            { id: 'gewerbe_logistik', label: 'Gewerbe & Logistik' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilterCategory(f.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filterCategory === f.id
                  ? 'bg-[#D6AE70] text-[#050B16] font-semibold shadow-sm'
                  : 'bg-[#0A1324] text-[#8B9CB3] hover:text-white border border-[#162744]'
              }`}
            >
              {t(f.label)}
            </button>
          ))}
        </div>

        {/* Flagship Opportunity Display (When 'all' is selected) */}
        {filterCategory === 'all' && (
          <div className="mb-14 rounded-2xl overflow-hidden bg-[#0A1324] border border-[#162744] shadow-2xl shadow-black/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Large Image Showcase */}
              <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-auto overflow-hidden bg-[#050B16]">
                <TopicVisual index={Number(flagshipOpp.id.replace('opp-', ''))} title={flagshipOpp.assetType} labels={[flagshipOpp.location]} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1324] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0A1324]" />
                
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-[#D6AE70] text-[#050B16] text-[11px] font-bold tracking-wide">{t("Flagship Opportunity")}</span>
                  <span className="px-3 py-1 rounded-full bg-[#050B16]/80 backdrop-blur-md border border-[#162744] text-white text-[11px]">
                    {t(flagshipOpp.location)}
                  </span>
                </div>
              </div>

              {/* Narrative & Metrics Column */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#D6AE70] font-mono font-medium mb-1">
                    {t(flagshipOpp.assetType)} · {t(flagshipOpp.cityType)}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans mb-2">
                    {t(flagshipOpp.title)}
                  </h3>
                  <div className="text-xs text-[#D6AE70] font-medium mb-3">
                    {t(flagshipOpp.subtitle)}
                  </div>
                  <p className="text-xs sm:text-sm text-[#8B9CB3] font-light leading-relaxed">
                    {t(flagshipOpp.description)}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#050B16] border border-[#162744]">
                  {flagshipOpp.kpiList.map((k, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="text-[10px] uppercase tracking-wider text-[#8B9CB3] font-mono">{t(k.label)}</div>
                      <div className="text-xs sm:text-sm font-bold text-white">{t(k.value)}</div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => onOpenConsultation(flagshipOpp.title)}
                    className="flex-1 py-3 rounded-full text-xs font-semibold bg-[#D6AE70] hover:bg-[#E2C492] text-[#050B16] transition-all text-center cursor-pointer shadow-lg shadow-[#D6AE70]/15 uppercase tracking-wider"
                  >{t("Exposé anfordern")}</button>
                  <button
                    onClick={() => setSelectedOpp(flagshipOpp)}
                    className="px-5 py-3 rounded-full text-xs text-[#8B9CB3] hover:text-white bg-[#050B16] hover:bg-[#0D182E] border border-[#162744] hover:border-[#D6AE70]/40 transition-colors cursor-pointer"
                  >{t("Details")}</button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Secondary Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(filterCategory === 'all' ? secondaryList : filteredList).map((opp) => (
            <div
              key={opp.id}
              className="rounded-2xl overflow-hidden bg-[#0A1324] border border-[#162744] hover:border-[#D6AE70]/40 transition-all duration-300 group flex flex-col justify-between shadow-xl shadow-black/60"
            >
              <div>
                {/* Visual Image */}
                <div className="relative min-h-[300px] overflow-hidden bg-[#050B16]">
                  <TopicVisual index={Number(opp.id.replace('opp-', ''))} title={opp.assetType} labels={[opp.location]} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1324] via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#050B16]/80 backdrop-blur-md border border-[#162744] text-[#D6AE70] text-[10px] font-medium tracking-wide">
                      {t(opp.location)}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-4 text-xs font-bold text-[#D6AE70] font-mono">
                    {t(opp.targetYield)}% {t(opp.yieldType)}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <div className="text-[10px] uppercase tracking-widest text-[#8B9CB3] font-mono font-medium">
                    {t(opp.assetType)}
                  </div>
                  <h4 className="text-xl font-extrabold text-white group-hover:text-[#D6AE70] transition-colors font-sans">
                    {t(opp.title)}
                  </h4>
                  <p className="text-xs text-[#8B9CB3] line-clamp-2 leading-relaxed font-light">
                    {t(opp.description)}
                  </p>

                  <div className="pt-2 border-t border-[#162744] flex items-center justify-between text-xs">
                    <span className="text-[#8B9CB3]">{t("Volumen:")}</span>
                    <span className="font-semibold text-white">{t(opp.volume)}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#8B9CB3]">{t("Eigenkapital:")}</span>
                    <span className="font-semibold text-[#D6AE70]">{t(opp.minEquity)}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => setSelectedOpp(opp)}
                  className="w-full py-2.5 rounded-full text-xs font-medium bg-[#050B16] hover:bg-[#0D182E] text-[#8B9CB3] hover:text-white border border-[#162744] hover:border-[#D6AE70]/40 transition-colors cursor-pointer"
                >{t("Prüfdaten ansehen")}</button>
                <button
                  onClick={() => onOpenConsultation(opp.title)}
                  className="w-full py-2.5 rounded-full text-xs font-semibold bg-[#D6AE70] hover:bg-[#E2C492] text-[#050B16] transition-colors cursor-pointer shadow-lg shadow-[#D6AE70]/15 uppercase tracking-wider"
                >{t("Anfragen")}</button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Due Diligence Examination Modal */}
      {selectedOpp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0A1324] rounded-2xl border border-[#162744] p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl shadow-black">
            <button
              onClick={() => setSelectedOpp(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-[#8B9CB3] hover:text-white bg-[#050B16] border border-[#162744] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="space-y-1">
                <span className="gold-eyebrow">{t("Due-Diligence Prüfdokumentation · Off-Market")}</span>
                <h3 className="text-2xl font-extrabold text-white font-sans mt-2">
                  {t(selectedOpp.title)}
                </h3>
                <p className="text-xs text-[#D6AE70] font-medium">
                  {t(selectedOpp.subtitle)}
                </p>
              </div>

              <div className="min-h-[260px] w-full rounded-xl overflow-hidden bg-[#050B16]">
                <TopicVisual index={Number(selectedOpp.id.replace('opp-', ''))} title={selectedOpp.assetType} labels={[selectedOpp.location]} />
              </div>

              <p className="text-sm text-[#8B9CB3] leading-relaxed font-light">
                {t(selectedOpp.description)}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#050B16] border border-[#162744]">
                {selectedOpp.kpiList.map((kpi, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-[10px] uppercase font-mono text-[#8B9CB3]">{t(kpi.label)}</div>
                    <div className="text-xs font-bold text-white">{t(kpi.value)}</div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#0D182E] border border-[#D6AE70]/30 text-xs text-[#D6AE70] space-y-1">
                <span className="font-semibold">{t("Steuerlicher & struktureller Hebel: ")}</span>
                <span className="text-slate-200">{t(selectedOpp.specialFeature)}</span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedOpp(null)}
                  className="px-5 py-2.5 text-xs text-[#8B9CB3] hover:text-white cursor-pointer"
                >{t("Schließen")}</button>
                <button
                  onClick={() => {
                    const oppName = selectedOpp.title;
                    setSelectedOpp(null);
                    onOpenConsultation(oppName);
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#D6AE70] hover:bg-[#E2C492] text-[#050B16] cursor-pointer shadow-lg shadow-[#D6AE70]/15 uppercase tracking-wider"
                >{t("Exklusives Exposé anfordern")}</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

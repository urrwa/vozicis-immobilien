import { useLanguage } from '../i18n/LanguageContext';
import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { StrategyCheckData, PipelineLead, InvestmentOpportunity } from '../types';
import { OPPORTUNITIES } from '../data/mockData';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Target, 
  Wallet, 
  Landmark, 
  Gauge, 
  MapPin, 
  UserCheck, 
  Calendar,
  Download,
  Building2,
  Percent,
  Check
} from 'lucide-react';

interface StrategyCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadCreated: (lead: PipelineLead) => void;
  initialAudience?: string;
  onOpenConsultationWithData?: (leadData: StrategyCheckData) => void;
}

export const StrategyCheckModal: React.FC<StrategyCheckModalProps> = ({
  isOpen,
  onClose,
  onLeadCreated,
  initialAudience = 'unternehmer',
  onOpenConsultationWithData
}) => {
  const { t, locale, localizedImage } = useLanguage();
  const [step, setStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const [formData, setFormData] = useState<StrategyCheckData>({
    primaryGoal: 'steueroptimierung',
    timeHorizon: 'lang',
    equityVolume: 350000,
    plannedTotalVolume: 1200000,
    financingReadiness: 'optimierter_hebel',
    existingRealEstate: true,
    portfolioCount: 2,
    riskProfile: 'core_plus',
    targetYield: 5.2,
    locationPreference: ['a_staedte', 'wachstums_b_staedte'],
    assetClasses: ['neubau_wohn', 'denkmal_sanierung'],
    audienceType: (initialAudience as any) || 'unternehmer',
    fullName: '',
    email: '',
    phone: '',
    company: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 6) {
      setStep(step + 1);
    } else {
      // Complete
      finishCheck();
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const finishCheck = () => {
    setIsCompleted(true);
    
    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }

    // Create a new pipeline lead
    const newLead: PipelineLead = {
      id: `lead-${Date.now()}`,
      fullName: formData.fullName || 'Interessent (Strategie-Check)',
      email: formData.email || 'investor@example.com',
      phone: formData.phone || '+49 170 0000000',
      audienceType: formData.audienceType,
      equityVolume: formData.equityVolume,
      stage: 'strategie_check_abgeschlossen',
      source: 'Strategie-Check',
      notes: `Strategie-Check abgeschlossen: Ziel: ${formData.primaryGoal}, Zeithorizont: ${formData.timeHorizon}, EK: ${formData.equityVolume.toLocaleString(locale)} €, Hebel: ${formData.financingReadiness}. Risikoprofil: ${formData.riskProfile}.`,
      riskProfile: formData.riskProfile,
      createdAt: new Date().toISOString().split('T')[0],
      lastContact: 'Gerade eben',
      assignedTo: 'Ioannis Vozicis',
      matchingScore: calculateMatchingScore(formData)
    };

    onLeadCreated(newLead);
  };

  const calculateMatchingScore = (data: StrategyCheckData): number => {
    let score = 85;
    if (data.equityVolume >= 200000) score += 5;
    if (data.existingRealEstate) score += 4;
    if (data.phone) score += 3;
    return Math.min(score, 98);
  };

  // Best matching opportunities
  const matchedOpportunities = OPPORTUNITIES.filter(opp => {
    if (formData.riskProfile === 'core' && opp.riskProfile === 'core') return true;
    if (formData.primaryGoal === 'steueroptimierung' && opp.category === 'denkmal_sanierung') return true;
    if (formData.assetClasses.includes(opp.category as any)) return true;
    return false;
  }).slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-start justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-3xl bg-[#0A1324] border border-[#162744] rounded-2xl shadow-2xl shadow-black overflow-hidden my-auto">
        
        {/* Modal Top Header */}
        <div className="bg-[#050B16] border-b border-[#162744] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#D6AE70]/20 border border-[#D6AE70]/40 text-[#D6AE70] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-extrabold font-sans text-white">{t("Kostenfreier Immobilienstrategie-Check")}</h2>
              <p className="text-xs text-[#D6AE70] font-medium font-mono">{t("Vorbereitet für Ioannis Vozicis · Persönliche Analyse")}</p>
            </div>
          </div>
          
          <button
            id="close-strategy-check"
            aria-label={t('Schließen')}
            onClick={onClose}
            className="p-1.5 text-[#8B9CB3] hover:text-white hover:bg-[#050B16] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar (Only during steps) */}
        {!isCompleted && (
          <div className="bg-[#050B16] px-6 py-3 border-b border-[#162744]">
            <div className="flex justify-between items-center text-xs text-[#8B9CB3] mb-1.5">
              <span>{t("Schritt ")}{t(step)}{t(" von 6")}</span>
              <span className="text-[#D6AE70] font-medium font-mono">
                {t(step === 1 && '1. Investmentziele')}
                {t(step === 2 && '2. Kapitalstruktur & Eigenkapital')}
                {t(step === 3 && '3. Finanzierung & Bonität')}
                {t(step === 4 && '4. Risikoprofil & Rendite')}
                {t(step === 5 && '5. Standort & Assetklassen')}
                {t(step === 6 && '6. Investor-Profil & Kontaktdaten')}
              </span>
            </div>
            <div className="w-full bg-[#0D182E] h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-[#D6AE70] h-full rounded-full transition-all duration-300"
                style={{ width: `${(step / 6) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          
          {!isCompleted ? (
            <div>
              {/* Step 1: Goals & Time Horizon */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif-luxury font-bold text-slate-100 mb-1 flex items-center gap-2">
                      <Target className="w-5 h-5 text-amber-400" />{t("Was ist Ihr primäres Ziel bei Immobilieninvestitionen?")}</h3>
                    <p className="text-xs text-slate-400">{t("Ihre strategische Zielsetzung bestimmt den optimalen Objekttyp und die steuerliche Rechtsform.")}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'steueroptimierung', title: 'Steueroptimierung & AfA', desc: 'Spitzensteuerbelastung senken über Denkmal (§ 7i) oder 5% Neubau-AfA.' },
                      { id: 'vermoegensaufbau', title: 'Langfristiger Vermögensaufbau', desc: 'Kontinuierlicher Substanzaufbau durch Tilgung und Wertsteigerung.' },
                      { id: 'cashflow', title: 'Planbarer Netto-Cashflow', desc: 'Monatliche Mietüberschüsse für laufende Liquidität & finanzielle Freiheit.' },
                      { id: 'inflationsschutz', title: 'Inflationsschutz & Sachwert', desc: 'Sicherung von Liquidität aus operativen Gewinnen vor Geldentwertung.' }
                    ].map(goal => (
                      <div
                        key={goal.id}
                        onClick={() => setFormData({ ...formData, primaryGoal: goal.id as any })}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          formData.primaryGoal === goal.id
                            ? 'bg-amber-500/10 border-amber-500/80 text-slate-100 shadow-md shadow-amber-500/10'
                            : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-sm text-slate-100">{t(goal.title)}</span>
                          {formData.primaryGoal === goal.id && <Check className="w-4 h-4 text-amber-400" />}
                        </div>
                        <p className="text-xs text-slate-400 leading-snug">{t(goal.desc)}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-semibold text-slate-300 mb-2">{t("Geplanter Anlagehorizont:")}</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'mittel', label: '5 – 10 Jahre' },
                        { id: 'lang', label: '10 – 20 Jahre (steuerfrei)' },
                        { id: 'generationen', label: 'Generationenübergreifend' }
                      ].map(item => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeHorizon: item.id as any })}
                          className={`py-2 px-3 rounded-lg text-xs font-medium border transition-colors ${
                            formData.timeHorizon === item.id
                              ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {t(item.label)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Capital Structure */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif-luxury font-bold text-slate-100 mb-1 flex items-center gap-2">
                      <Wallet className="w-5 h-5 text-amber-400" />{t("Kapitalstruktur & Investitionsvolumen")}</h3>
                    <p className="text-xs text-slate-400">{t("Welches Eigenkapital möchten Sie für Ihre nächste Immobilienphase einsetzen?")}</p>
                  </div>

                  {/* Equity Slider */}
                  <div className="bg-slate-950/70 p-5 rounded-xl border border-slate-800 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-400">{t("Geplantes Eigenkapital:")}</span>
                      <span className="text-lg font-bold text-amber-400">
                        {t(formData.equityVolume >= 2000000 
                          ? '2.000.000 €+' 
                          : `${formData.equityVolume.toLocaleString(locale)} €`)}
                      </span>
                    </div>

                    <input
                      type="range"
                      min="50000"
                      max="2000000"
                      step="25000"
                      value={formData.equityVolume}
                      onChange={(e) => {
                        const eq = Number(e.target.value);
                        setFormData({
                          ...formData,
                          equityVolume: eq,
                          plannedTotalVolume: Math.round(eq * 3.5)
                        });
                      }}
                      className="w-full accent-amber-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                    />

                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>{t('50.000 €')}</span>
                      <span>{t('500.000 €')}</span>
                      <span>{t('1.000.000 €')}</span>
                      <span>{t('2.000.000 €+')}</span>
                    </div>
                  </div>

                  {/* Leverage Calculator Preview */}
                  <div className="grid grid-cols-2 gap-3 text-xs bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    <div>
                      <div className="text-slate-400">{t("Mögliches Gesamtvolumen (mit Hebel):")}</div>
                      <div className="text-base font-bold text-slate-100 mt-1">{t("ca. ")}{t((formData.equityVolume * 3.5).toLocaleString(locale))} €
                      </div>
                      <div className="text-[10px] text-slate-500">{t("Bei solider 28% Eigenkapitalquote")}</div>
                    </div>
                    <div>
                      <div className="text-slate-400">{t("Objektkategorie:")}</div>
                      <div className="text-base font-bold text-amber-300 mt-1">
                        {t(formData.equityVolume < 150000 ? '1 – 2 Eigentumswohnungen' :
                         formData.equityVolume < 500000 ? 'Mehrere Einheiten / Block' :
                         formData.equityVolume < 1500000 ? 'Mehrfamilienhaus / Portfolio' :
                         'Großportfolio / Globalankauf')}
                      </div>
                      <div className="text-[10px] text-slate-500">{t("Im Off-Market Netzwerk selektiert")}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Financing & Structure */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif-luxury font-bold text-slate-100 mb-1 flex items-center gap-2">
                      <Landmark className="w-5 h-5 text-amber-400" />{t("Finanzierungsstruktur & bestehendes Portfolio")}</h3>
                    <p className="text-xs text-slate-400">{t("Wie soll das Fremdkapital strukturiert werden?")}</p>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      { id: 'optimierter_hebel', title: 'Optimierter Hebel (Bank + KfW-Förderung)', desc: 'Maximale Eigenkapitalrendite durch Einbindung von KfW-Krediten (ab 1,8% Zins).' },
                      { id: 'holding_finanzierung', title: 'Holding / vermögensverwaltende GmbH', desc: 'Steueroptimierte Strukturierung mit 15,82% KöSt für Unternehmer.' },
                      { id: 'standard_kredit', title: 'Klassische Bankfinanzierung (Privat)', desc: 'Standard-Annuitätendarlehen mit 10–15 Jahren Zinsbindung.' },
                      { id: 'eigenkapital_only', title: 'Ausschließlich Eigenkapital / Barzahler', desc: 'Höchste Flexibilität und Schnelligkeit bei Off-Market Opportunitäten.' }
                    ].map(f => (
                      <div
                        key={f.id}
                        onClick={() => setFormData({ ...formData, financingReadiness: f.id as any })}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          formData.financingReadiness === f.id
                            ? 'bg-amber-500/10 border-amber-500 text-slate-100'
                            : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-100">
                          <span>{t(f.title)}</span>
                          {formData.financingReadiness === f.id && <Check className="w-4 h-4 text-amber-400" />}
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">{t(f.desc)}</p>
                      </div>
                    ))}
                  </div>

                  {/* Existing Real Estate Question */}
                  <div className="pt-2 flex items-center justify-between bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div>
                      <div className="text-xs font-semibold text-slate-200">{t("Besitzen Sie bereits Immobilien?")}</div>
                      <div className="text-[11px] text-slate-400">{t("Ermöglicht Nachbeleihung und freie Grundschulden.")}</div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, existingRealEstate: true })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                          formData.existingRealEstate
                            ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                            : 'bg-slate-900 border-slate-800 text-slate-400'
                        }`}
                      >{t("Ja")}</button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, existingRealEstate: false })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                          !formData.existingRealEstate
                            ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                            : 'bg-slate-900 border-slate-800 text-slate-400'
                        }`}
                      >{t("Nein")}</button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Risk Profile */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif-luxury font-bold text-slate-100 mb-1 flex items-center gap-2">
                      <Gauge className="w-5 h-5 text-amber-400" />{t("Ihr Risikoprofil & Renditeerwartung")}</h3>
                    <p className="text-xs text-slate-400">{t("Welches Rendite-Risiko-Verhältnis passt zu Ihrer Gesamtvermögensstrategie?")}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'core', title: 'Core (Konservativ)', yield: '3,8% – 4,8% Rendite', desc: 'Erstklassige A-Lagen, Neubau, solvente Mieter, minimaler Verwaltungsaufwand.' },
                      { id: 'core_plus', title: 'Core+ (Solide Wertsteigerung)', yield: '4,8% – 6,0% Rendite', desc: 'Gepflegte Bestände in B-Städten oder Denkmalimmobilien mit hohem Steuerhebel.' },
                      { id: 'value_add', title: 'Value-Add (Aktives Potenzial)', yield: '6,0% – 8,5% Rendite', desc: 'Mehrfamilienhäuser mit Mietanpassungs- und energetischem Sanierungshebel.' },
                      { id: 'project', title: 'Co-Investment / Mezzanine', yield: '8,5% – 12%+ Rendite', desc: 'Strategische Beteiligung an Projektentwicklungen unseres Partnernetzwerks.' }
                    ].map(r => (
                      <div
                        key={r.id}
                        onClick={() => setFormData({ ...formData, riskProfile: r.id as any })}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          formData.riskProfile === r.id
                            ? 'bg-amber-500/10 border-amber-500 text-slate-100'
                            : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-sm text-slate-100">{t(r.title)}</span>
                          <span className="text-xs font-bold text-amber-400">{t(r.yield)}</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 leading-snug">{t(r.desc)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Location & Asset Class */}
              {step === 5 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif-luxury font-bold text-slate-100 mb-1 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-amber-400" />{t("Standortpräferenzen & Assetklassen")}</h3>
                    <p className="text-xs text-slate-400">{t("Wählen Sie Ihre favorisierten Regionen und Objekttypen (Mehrfachauswahl möglich).")}</p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-slate-300 mb-2">{t("Standortkategorien:")}</div>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'a_staedte', label: 'Metropolen (München, FFM, etc.)' },
                        { id: 'wachstums_b_staedte', label: 'Wachstumsstarke B-Städte (Leipzig, etc.)' },
                        { id: 'speckguertel', label: 'Ballungsraum-Speckgürtel & Achsen' },
                        { id: 'denkmal_standorte', label: 'Historische Denkmal-Standorte' }
                      ].map(loc => {
                        const selected = formData.locationPreference.includes(loc.id as any);
                        return (
                          <button
                            key={loc.id}
                            type="button"
                            onClick={() => {
                              const curr = formData.locationPreference;
                              setFormData({
                                ...formData,
                                locationPreference: selected 
                                  ? curr.filter(x => x !== loc.id) 
                                  : [...curr, loc.id as any]
                              });
                            }}
                            className={`p-3 text-left rounded-xl text-xs font-medium border flex items-center justify-between transition-colors ${
                              selected 
                                ? 'bg-amber-500/20 border-amber-400 text-amber-300' 
                                : 'bg-slate-900 border-slate-800 text-slate-400'
                            }`}
                          >
                            <span>{t(loc.label)}</span>
                            {selected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="text-xs font-semibold text-slate-300 mb-2">{t("Bevorzugte Assetklassen:")}</div>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'neubau_wohn', label: 'KfW-40 Neubauwohnungen (Degr. AfA)' },
                        { id: 'denkmal_sanierung', label: 'Denkmal-Sanierung (§ 7i EStG)' },
                        { id: 'bestand_wohn', label: 'Mehrfamilienhäuser / Wohnanlagen' },
                        { id: 'gewerbe_logistik', label: 'Gewerbe / Light Industrial' }
                      ].map(asset => {
                        const selected = formData.assetClasses.includes(asset.id as any);
                        return (
                          <button
                            key={asset.id}
                            type="button"
                            onClick={() => {
                              const curr = formData.assetClasses;
                              setFormData({
                                ...formData,
                                assetClasses: selected 
                                  ? curr.filter(x => x !== asset.id) 
                                  : [...curr, asset.id as any]
                              });
                            }}
                            className={`p-3 text-left rounded-xl text-xs font-medium border flex items-center justify-between transition-colors ${
                              selected 
                                ? 'bg-amber-500/20 border-amber-400 text-amber-300' 
                                : 'bg-slate-900 border-slate-800 text-slate-400'
                            }`}
                          >
                            <span>{t(asset.label)}</span>
                            {selected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Contact & Verification */}
              {step === 6 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif-luxury font-bold text-slate-100 mb-1 flex items-center gap-2">
                      <UserCheck className="w-5 h-5 text-amber-400" />{t("Persönliche Daten für Ihre Auswertung")}</h3>
                    <p className="text-xs text-slate-400">{t("Ioannis Vozicis bereitet Ihre individuelle Strategieauswertung persönlich vor.")}</p>
                  </div>

                  {/* Investor Category */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">{t("Ihre Anleger-Kategorie:")}</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'unternehmer', label: 'Unternehmer' },
                        { id: 'kapitalanleger', label: 'Kapitalanleger' },
                        { id: 'privatinvestor', label: 'Privatinvestor' },
                        { id: 'partner', label: 'Netzwerkpartner' }
                      ].map(cat => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, audienceType: cat.id as any })}
                          className={`py-2 px-2.5 rounded-lg text-xs font-medium border transition-colors ${
                            formData.audienceType === cat.id
                              ? 'bg-amber-500 text-slate-950 font-bold border-amber-500'
                              : 'bg-slate-900 border-slate-800 text-slate-400'
                          }`}
                        >
                          {t(cat.label)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">{t("Vor- & Nachname *")}</label>
                      <input
                        id="strategy-check-name"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={t("z.B. Dr. Thomas Weber")}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">{t("E-Mail-Adresse *")}</label>
                      <input
                        id="strategy-check-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t("t.weber@holding.de")}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">{t("Telefonnummer (für diskrete Rücksprache) *")}</label>
                      <input
                        id="strategy-check-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t("+49 170 1234567")}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">{t("Unternehmen / Holding (Optional)")}</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={t("Weber Beteiligungs GmbH")}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-[11px] text-slate-400">
                    🔒 <strong>{t("Diskretionsgarantie:")}</strong>{t(" Ihre Daten werden vertraulich behandelt und keinesfalls an Dritte oder Werbeplattformen weitergegeben.")}</div>
                </div>
              )}

              {/* Navigation Footer */}
              <div className="mt-8 pt-4 border-t border-slate-800 flex justify-between items-center">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{t("Zurück")}</span>
                  </button>
                ) : <div />}

                <button
                  id="strategy-check-next-btn"
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D6AE70] hover:bg-[#E2C492] text-[#050B16] flex items-center gap-2 shadow-lg shadow-[#D6AE70]/15 transition-all cursor-pointer"
                >
                  <span>{t(step === 6 ? 'Strategie-Check auswerten' : 'Weiter')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6">
              
              <div className="text-center max-w-xl mx-auto space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold font-sans text-white">{t("Ihre strategische Immobilienanalyse liegt bereit")}</h3>
                <p className="text-xs text-[#8B9CB3]">{t("Erstellt für ")}<strong className="text-[#D6AE70]">{t(formData.fullName || 'den Investor')}</strong>{t(" · Profil erfolgreich im CRM-System qualifiziert.")}</p>
              </div>

              {/* Calculated Strategy Card */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-[#0b0f17] border border-amber-500/40 p-6 rounded-2xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <div className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider">{t("Ihr berechnetes Investoren-Profil")}</div>
                    <div className="text-lg font-serif-luxury font-bold text-slate-100">
                      {t(formData.primaryGoal === 'steueroptimierung' 
                        ? 'Substanz- & Steuerhebel-Stratege' 
                        : formData.riskProfile === 'value_add'
                        ? 'Dynamischer Value-Add Portfolio-Builder'
                        : 'Sicherheitsorientierter Core-Anleger')}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">{t("Match-Score: ")}{t(calculateMatchingScore(formData))}%
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                    <div className="text-slate-400">{t("Eigenkapital")}</div>
                    <div className="font-bold text-slate-100 mt-1">{t(formData.equityVolume.toLocaleString(locale))} €</div>
                  </div>
                  <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                    <div className="text-slate-400">{t("Hebel-Volumen")}</div>
                    <div className="font-bold text-slate-100 mt-1">{t("ca. ")}{t((formData.equityVolume * 3.5).toLocaleString(locale))} €</div>
                  </div>
                  <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                    <div className="text-slate-400">{t("Risikoklasse")}</div>
                    <div className="font-bold text-amber-300 mt-1 uppercase">{t(formData.riskProfile)}</div>
                  </div>
                  <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                    <div className="text-slate-400">{t("Zeithorizont")}</div>
                    <div className="font-bold text-slate-100 mt-1 capitalize">{t(formData.timeHorizon)}</div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="font-semibold text-slate-200">{t("Handlungsempfehlung von Ioannis Vozicis:")}</div>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>{t("Fokus auf ")}<strong>{t(formData.primaryGoal === 'steueroptimierung' ? 'Denkmal-Sanierung (§ 7i) & KfW-40 Neubau' : 'Mehrfamilienhäuser mit Mietanpassungspotenzial')}</strong>{t(" zur Maximierung Ihrer Nachsteuer-Rendite.")}</li>
                    <li>{t("Prüfung einer ")}<strong>{t(formData.audienceType === 'unternehmer' ? 'vermögensverwaltenden GmbH (Holding)' : 'steuerfreien Privathaltung nach 10 Jahren')}</strong>.
                    </li>
                    <li>{t("Verbindung mit bankenunabhängigen Finanzierungspartnern für Zinskonditionen unter Marktdurchschnitt.")}</li>
                  </ul>
                </div>
              </div>

              {/* Matched Opportunities Previews */}
              <div>
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">{t("Passende Opportunitäten im aktuellen Netzwerk:")}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {matchedOpportunities.map(opp => (
                    <div key={opp.id} className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-slate-100">{t(opp.title)}</div>
                        <div className="text-[11px] text-amber-400">{t(opp.location)} · {t(opp.targetYield)}% {t(opp.yieldType)}</div>
                      </div>
                      <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded-md border border-slate-700">
                        {t(opp.status)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  id="result-book-consultation"
                  onClick={() => {
                    onClose();
                    if (onOpenConsultationWithData) {
                      onOpenConsultationWithData(formData);
                    }
                  }}
                  className="flex-1 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D6AE70] hover:bg-[#E2C492] text-[#050B16] flex items-center justify-center gap-2 shadow-lg shadow-[#D6AE70]/15 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t("1:1 Strategiegespräch mit Ioannis terminieren")}</span>
                </button>

                <button
                  onClick={() => {
                    window.print();
                  }}
                  className="py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#050B16] hover:bg-[#0D182E] text-white border border-[#162744] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#D6AE70]" />
                  <span>{t("Dossier drucken / PDF")}</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};

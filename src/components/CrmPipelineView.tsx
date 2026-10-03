import React, { useState } from 'react';
import { PipelineLead, PipelineStage, AudienceType } from '../types';
import { 
  Kanban, 
  Users, 
  Plus, 
  Filter, 
  Search, 
  CheckCircle2, 
  Calendar, 
  ChevronRight, 
  PhoneCall, 
  Mail, 
  Building2, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck,
  X
} from 'lucide-react';

interface CrmPipelineViewProps {
  leads: PipelineLead[];
  onUpdateLeadStage: (leadId: string, newStage: PipelineStage) => void;
  onAddNewLead: (lead: PipelineLead) => void;
}

const STAGES: { id: PipelineStage; title: string; stepNumber: number; desc: string }[] = [
  { id: 'neuer_kontakt', title: '1. Neuer Kontakt', stepNumber: 1, desc: 'Lead-Quelle & Basisdaten erfasst' },
  { id: 'strategie_check_abgeschlossen', title: '2. Strategie-Check', stepNumber: 2, desc: 'Investorenprofil & Ziele erstellt' },
  { id: 'qualifizierter_investor', title: '3. Qualifizierter Investor', stepNumber: 3, desc: 'Budget & Bonität geprüft' },
  { id: 'strategieberatung', title: '4. Strategieberatung', stepNumber: 4, desc: '1:1 Analyse mit Ioannis' },
  { id: 'immobilienmatching', title: '5. Immobilienmatching', stepNumber: 5, desc: 'Geprüfte Deals vorgestellt' },
  { id: 'partnerschaft_abschluss', title: '6. Partnerschaft / Abschluss', stepNumber: 6, desc: 'Notar & Langzeitbetreuung' },
];

export const CrmPipelineView: React.FC<CrmPipelineViewProps> = ({
  leads,
  onUpdateLeadStage,
  onAddNewLead
}) => {
  const [selectedAudience, setSelectedAudience] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLead, setSelectedLead] = useState<PipelineLead | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // New Lead Form State
  const [newLeadForm, setNewLeadForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    audienceType: 'unternehmer' as AudienceType,
    equityVolume: 300000,
    source: 'LinkedIn' as any,
    notes: '',
    riskProfile: 'core_plus' as any
  });

  const filteredLeads = leads.filter(lead => {
    if (selectedAudience !== 'all' && lead.audienceType !== selectedAudience) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        lead.fullName.toLowerCase().includes(q) ||
        lead.email.toLowerCase().includes(q) ||
        lead.notes.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // Calculate stats
  const totalVolume = leads.reduce((acc, l) => acc + l.equityVolume, 0);
  const qualifiedCount = leads.filter(l => l.stage !== 'neuer_kontakt').length;

  const handleCreateLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadForm.fullName) return;

    const lead: PipelineLead = {
      id: `lead-${Date.now()}`,
      fullName: newLeadForm.fullName,
      email: newLeadForm.email,
      phone: newLeadForm.phone,
      audienceType: newLeadForm.audienceType,
      equityVolume: Number(newLeadForm.equityVolume),
      stage: 'neuer_kontakt',
      source: newLeadForm.source,
      notes: newLeadForm.notes || 'Manuell im CRM-Cockpit angelegt.',
      riskProfile: newLeadForm.riskProfile,
      createdAt: new Date().toISOString().split('T')[0],
      lastContact: 'Heute',
      assignedTo: 'Ioannis Vozicis',
      matchingScore: 88
    };

    onAddNewLead(lead);
    setShowAddModal(false);
    setNewLeadForm({
      fullName: '',
      email: '',
      phone: '',
      audienceType: 'unternehmer',
      equityVolume: 300000,
      source: 'LinkedIn',
      notes: '',
      riskProfile: 'core_plus'
    });
  };

  const getNextStage = (current: PipelineStage): PipelineStage | null => {
    const idx = STAGES.findIndex(s => s.id === current);
    if (idx < STAGES.length - 1) {
      return STAGES[idx + 1].id;
    }
    return null;
  };

  return (
    <section className="py-10 bg-[#090d14] min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Top Cockpit Header */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1.5">
                <Kanban className="w-4 h-4" />
                <span>Executive CRM & Sales Cockpit · Ioannis Vozicis</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-slate-100">
                6-Stufen Investoren-Pipeline & Beziehungsmanagement
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Visualisierung des strategischen Akquisitionsfunnels: Von der Lead-Generierung über den Strategie-Check bis zur langfristigen Kapitalallianz.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center gap-2 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Neuen Kontakt anlegen</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-800 text-xs">
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <div className="text-slate-400">Aktive Pipeline-Kontakte</div>
              <div className="text-lg font-bold text-slate-100 mt-1">{leads.length} Investoren</div>
            </div>
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <div className="text-slate-400">Gebundenes Eigenkapital</div>
              <div className="text-lg font-bold text-amber-400 mt-1">
                {(totalVolume / 1000000).toFixed(2)} Mio. €
              </div>
            </div>
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <div className="text-slate-400">Qualifizierungsquote</div>
              <div className="text-lg font-bold text-emerald-400 mt-1">
                {Math.round((qualifiedCount / leads.length) * 100)}%
              </div>
            </div>
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <div className="text-slate-400">Zuständiger Partner</div>
              <div className="text-lg font-bold text-slate-100 mt-1">Ioannis Vozicis</div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-4 border-t border-slate-800 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-400 flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5" />
                Filter:
              </span>
              {[
                { id: 'all', label: 'Alle Zielgruppen' },
                { id: 'unternehmer', label: 'Unternehmer' },
                { id: 'kapitalanleger', label: 'Kapitalanleger' },
                { id: 'privatinvestor', label: 'Privatinvestoren' },
                { id: 'partner', label: 'Partner' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setSelectedAudience(f.id)}
                  className={`px-3 py-1.5 rounded-lg font-medium border transition-colors cursor-pointer ${
                    selectedAudience === f.id
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-semibold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Investor suchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500 w-full sm:w-48"
              />
            </div>
          </div>
        </div>

        {/* 6-Stage Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 overflow-x-auto pb-6">
          {STAGES.map(stage => {
            const stageLeads = filteredLeads.filter(l => l.stage === stage.id);
            const stageVolume = stageLeads.reduce((acc, l) => acc + l.equityVolume, 0);

            return (
              <div 
                key={stage.id}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between min-w-[240px]"
              >
                <div>
                  {/* Column Header */}
                  <div className="pb-3 border-b border-slate-800 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-slate-100">{stage.title}</span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] font-bold text-amber-400">
                        {stageLeads.length}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">{stage.desc}</div>
                    <div className="text-[10px] text-amber-400/90 font-medium mt-1">
                      EK: {(stageVolume / 1000).toLocaleString('de-DE')} k€
                    </div>
                  </div>

                  {/* Cards inside stage */}
                  <div className="space-y-3">
                    {stageLeads.map(lead => (
                      <div
                        key={lead.id}
                        onClick={() => setSelectedLead(lead)}
                        className="bg-slate-950/80 hover:bg-slate-950 border border-slate-800 hover:border-amber-500/40 p-3 rounded-xl transition-all cursor-pointer group shadow-sm"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-bold text-xs text-slate-200 group-hover:text-amber-300">
                            {lead.fullName}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 font-medium border border-amber-500/20">
                            {lead.source}
                          </span>
                        </div>

                        <div className="text-[11px] text-slate-400 flex items-center justify-between">
                          <span>EK-Budget:</span>
                          <span className="font-semibold text-slate-200">
                            {(lead.equityVolume / 1000).toLocaleString('de-DE')} k€
                          </span>
                        </div>

                        <p className="text-[10px] text-slate-500 mt-2 line-clamp-2 italic">
                          "{lead.notes}"
                        </p>

                        {/* Fast Advance Action */}
                        {getNextStage(lead.stage) && (
                          <div className="mt-3 pt-2 border-t border-slate-800/80 flex justify-end">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const next = getNextStage(lead.stage);
                                if (next) onUpdateLeadStage(lead.id, next);
                              }}
                              className="text-[10px] text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800"
                            >
                              <span>Weiterstufen</span>
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    ))}

                    {stageLeads.length === 0 && (
                      <div className="text-center py-8 text-[11px] text-slate-600 border border-dashed border-slate-800/80 rounded-xl">
                        Keine Leads in dieser Stufe
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-[#0d131f] border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-serif-luxury font-bold text-slate-100">
                  {selectedLead.fullName}
                </h3>
                <div className="text-xs text-amber-400 font-medium">
                  {selectedLead.audienceType.toUpperCase()} · Quelle: {selectedLead.source}
                </div>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <div className="text-slate-500">Eigenkapital</div>
                  <div className="font-bold text-slate-100 text-sm mt-0.5">
                    {selectedLead.equityVolume.toLocaleString('de-DE')} €
                  </div>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <div className="text-slate-500">Risikoprofil</div>
                  <div className="font-bold text-amber-300 text-sm mt-0.5 uppercase">
                    {selectedLead.riskProfile}
                  </div>
                </div>
              </div>

              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>{selectedLead.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>{selectedLead.phone}</span>
                </div>
              </div>

              <div>
                <div className="text-slate-400 font-semibold mb-1">Strategische Notizen:</div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-slate-300 text-xs leading-relaxed">
                  {selectedLead.notes}
                </div>
              </div>

              <div>
                <div className="text-slate-400 font-semibold mb-1">Pipeline-Stufe ändern:</div>
                <select
                  value={selectedLead.stage}
                  onChange={(e) => {
                    const newStage = e.target.value as PipelineStage;
                    onUpdateLeadStage(selectedLead.id, newStage);
                    setSelectedLead({ ...selectedLead, stage: newStage });
                  }}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                >
                  {STAGES.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedLead(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Lead Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-[#0d131f] border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <h3 className="text-lg font-serif-luxury font-bold text-slate-100">
                Neuen Investor anlegen
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateLead} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-400 mb-1">Name *</label>
                <input
                  type="text"
                  required
                  value={newLeadForm.fullName}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, fullName: e.target.value })}
                  placeholder="z.B. Dr. Klaus Reuter"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-100 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-400 mb-1">E-Mail</label>
                  <input
                    type="email"
                    value={newLeadForm.email}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, email: e.target.value })}
                    placeholder="klaus@reuter.de"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-100 focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Telefon</label>
                  <input
                    type="tel"
                    value={newLeadForm.phone}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
                    placeholder="+49 171 123456"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-100 focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-400 mb-1">Zielgruppe</label>
                  <select
                    value={newLeadForm.audienceType}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, audienceType: e.target.value as any })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-100 focus:border-amber-500 focus:outline-none"
                  >
                    <option value="unternehmer">Unternehmer</option>
                    <option value="kapitalanleger">Kapitalanleger</option>
                    <option value="privatinvestor">Privatinvestor</option>
                    <option value="partner">Partner</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Quelle</label>
                  <select
                    value={newLeadForm.source}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, source: e.target.value as any })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-100 focus:border-amber-500 focus:outline-none"
                  >
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Google Ads">Google Ads</option>
                    <option value="Strategie-Check">Strategie-Check</option>
                    <option value="Netzwerk / Empfehlung">Netzwerk / Empfehlung</option>
                    <option value="Persönlicher Kontakt">Persönlicher Kontakt</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Eigenkapital (in EUR)</label>
                <input
                  type="number"
                  step="25000"
                  value={newLeadForm.equityVolume}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, equityVolume: Number(e.target.value) })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-100 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Notizen / Zielsetzung</label>
                <textarea
                  rows={3}
                  value={newLeadForm.notes}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, notes: e.target.value })}
                  placeholder="Ziele, bisheriges Portfolio, Prioritäten..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-100 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400"
                >
                  Anlegen
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};

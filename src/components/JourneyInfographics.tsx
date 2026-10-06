import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

// ─── Stage 02: Strategy Check Infographic ─────────────────────────────────
export const StrategyCheckInfographic: React.FC<{ collapsed?: boolean }> = ({ collapsed = false }) => {
  const { t } = useLanguage();
  if (collapsed) {
    return (
      <div className="absolute inset-0 bg-[#060D1C] flex flex-col items-center justify-center gap-2 px-2">
        <div className="w-full max-w-[80px] space-y-1.5">
          {['Rendite', 'Kapital', 'AfA'].map((label, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="h-1.5 rounded-full bg-[#D6AE70]/30" style={{ width: `${[70, 50, 85][i]}%` }} />
              <span className="text-[7px] text-[#8B9CB3] whitespace-nowrap">{label}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 w-[60px] h-[1px] bg-[#D6AE70]/40" />
        <div className="text-[8px] text-[#D6AE70] font-mono tracking-wider">{t('PROFIL')}</div>
      </div>
    );
  }
  return (
    <div className="absolute inset-0 bg-[#060D1C] flex items-center justify-center p-6 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(#D6AE70 1px, transparent 1px), linear-gradient(90deg, #D6AE70 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      <div className="relative w-full max-w-[380px] space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[10px] font-mono text-[#D6AE70] uppercase tracking-widest">{t('Investor-Profil · 3-Min')}</div>
            <div className="text-base font-bold text-white mt-0.5">{t('Strategie-Check')}</div>
          </div>
          <div className="h-8 w-8 rounded-full border border-[#D6AE70]/40 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v12M1 7h12" stroke="#D6AE70" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Questionnaire rows */}
        {[
          { label: t('Zielrendite'), value: '4–6 % p.a.', bar: 65 },
          { label: t('Zeithorizont'), value: '10–15 Jahre', bar: 80 },
          { label: t('Eigenkapital'), value: '150–300 k €', bar: 55 },
          { label: t('Steuer'), value: 'AfA · §7i · vGmbH', bar: 90 },
        ].map((row, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-[11px] text-[#8B9CB3]">{row.label}</span>
              <span className="text-[11px] text-[#F0E4C8] font-mono">{row.value}</span>
            </div>
            <div className="h-[3px] w-full rounded-full bg-[#162744]">
              <div className="h-full rounded-full bg-gradient-to-r from-[#B8944A] to-[#D6AE70] transition-all duration-1000"
                style={{ width: `${row.bar}%` }} />
            </div>
          </div>
        ))}

        {/* Result badge */}
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#D6AE70]/30 bg-[#D6AE70]/8 px-4 py-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D6AE70]/20">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3.5 3.5L12 3" stroke="#D6AE70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className="text-[10px] text-[#D6AE70] font-mono uppercase tracking-wider">{t('Eignungsmatrix')}</div>
            <div className="text-xs text-white/80 mt-0.5">{t('Automatische Profilauswertung')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Stage 03: Qualified Investor Network ─────────────────────────────────
export const InvestorNetworkInfographic: React.FC<{ collapsed?: boolean }> = ({ collapsed = false }) => {
  const { t } = useLanguage();
  if (collapsed) {
    return (
      <div className="absolute inset-0 bg-[#060D1C] flex flex-col items-center justify-center gap-3">
        {/* Simple network dots */}
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="8" fill="#D6AE70" fillOpacity="0.2" stroke="#D6AE70" strokeWidth="1"/>
          <circle cx="30" cy="30" r="3" fill="#D6AE70"/>
          {[[10,10],[50,10],[10,50],[50,50],[30,5],[30,55]].map(([x,y], i) => (
            <g key={i}>
              <line x1="30" y1="30" x2={x} y2={y} stroke="#D6AE70" strokeOpacity="0.2" strokeWidth="0.75"/>
              <circle cx={x} cy={y} r="2" fill="#8B9CB3"/>
            </g>
          ))}
        </svg>
        <div className="text-[7px] text-[#D6AE70] font-mono tracking-wider uppercase">{t('Netzwerk')}</div>
      </div>
    );
  }
  return (
    <div className="absolute inset-0 bg-[#060D1C] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #D6AE70 1px, transparent 1px)',
        backgroundSize: '28px 28px'
      }} />

      <div className="relative w-full max-w-[360px] px-6">
        <div className="text-[10px] font-mono text-[#D6AE70] uppercase tracking-widest mb-1">{t('Investorennetzwerk')}</div>
        <div className="text-base font-bold text-white mb-5">{t('Qualifizierter Zugang')}</div>

        {/* Network SVG */}
        <div className="relative flex justify-center mb-5">
          <svg width="280" height="160" viewBox="0 0 280 160" fill="none">
            {/* Connecting lines */}
            <line x1="140" y1="80" x2="50" y2="30" stroke="#D6AE70" strokeOpacity="0.25" strokeWidth="1"/>
            <line x1="140" y1="80" x2="230" y2="30" stroke="#D6AE70" strokeOpacity="0.25" strokeWidth="1"/>
            <line x1="140" y1="80" x2="50" y2="130" stroke="#D6AE70" strokeOpacity="0.25" strokeWidth="1"/>
            <line x1="140" y1="80" x2="230" y2="130" stroke="#D6AE70" strokeOpacity="0.25" strokeWidth="1"/>
            <line x1="140" y1="80" x2="20" y2="80" stroke="#D6AE70" strokeOpacity="0.15" strokeWidth="1"/>
            <line x1="140" y1="80" x2="260" y2="80" stroke="#D6AE70" strokeOpacity="0.15" strokeWidth="1"/>

            {/* Center node — qualified investor */}
            <circle cx="140" cy="80" r="28" fill="#D6AE70" fillOpacity="0.12" stroke="#D6AE70" strokeWidth="1.5"/>
            <circle cx="140" cy="80" r="18" fill="#D6AE70" fillOpacity="0.15"/>
            <text x="140" y="77" textAnchor="middle" fill="#D6AE70" fontSize="9" fontFamily="monospace">INVESTOR</text>
            <text x="140" y="88" textAnchor="middle" fill="#F0E4C8" fontSize="7" fontFamily="monospace">QUALIFIZIERT</text>

            {/* Satellite nodes */}
            {[
              { cx: 50, cy: 30, label: 'Off-Market' },
              { cx: 230, cy: 30, label: 'Dealflow' },
              { cx: 50, cy: 130, label: 'Netzwerk' },
              { cx: 230, cy: 130, label: 'Portfolio' },
            ].map((node, i) => (
              <g key={i}>
                <circle cx={node.cx} cy={node.cy} r="20" fill="#0A1628" stroke="#D6AE70" strokeOpacity="0.3" strokeWidth="1"/>
                <text x={node.cx} y={node.cy + 4} textAnchor="middle" fill="#8B9CB3" fontSize="7.5" fontFamily="monospace">{node.label}</text>
              </g>
            ))}

            {/* Small nodes */}
            <circle cx="20" cy="80" r="5" fill="#162744" stroke="#D6AE70" strokeOpacity="0.3" strokeWidth="0.75"/>
            <circle cx="260" cy="80" r="5" fill="#162744" stroke="#D6AE70" strokeOpacity="0.3" strokeWidth="0.75"/>
          </svg>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-[#162744] bg-[#0A1628] px-3 py-2">
          <div className="h-1.5 w-1.5 rounded-full bg-[#D6AE70]" />
          <span className="text-[11px] text-[#8B9CB3]">{t('Priorisierter Zugang zum Off-Market Dealflow')}</span>
        </div>
      </div>
    </div>
  );
};

// ─── Stage 06: Long-term Partnership Journey ──────────────────────────────
export const PartnershipJourneyInfographic: React.FC<{ collapsed?: boolean }> = ({ collapsed = false }) => {
  const { t } = useLanguage();

  const steps = [
    { icon: '🏦', label: t('Finanzierung') },
    { icon: '📋', label: t('Notar') },
    { icon: '🔑', label: t('Übergabe') },
    { icon: '↻', label: t('Betreuung') },
  ];

  if (collapsed) {
    return (
      <div className="absolute inset-0 bg-[#060D1C] flex flex-col items-center justify-center gap-2 px-3">
        <div className="flex items-center gap-1 w-full justify-center">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center gap-1">
                <div className="h-5 w-5 rounded-full bg-[#162744] border border-[#D6AE70]/30 flex items-center justify-center text-[8px]">{s.icon}</div>
                <span className="text-[6px] text-[#8B9CB3] text-center leading-tight">{s.label}</span>
              </div>
              {i < steps.length - 1 && <div className="h-[1px] w-3 bg-[#D6AE70]/20 mb-3" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-[#060D1C] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(#D6AE70 1px, transparent 1px), linear-gradient(90deg, #D6AE70 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      <div className="relative w-full max-w-[380px] px-6">
        <div className="text-[10px] font-mono text-[#D6AE70] uppercase tracking-widest mb-1">{t('Lebenszyklus')}</div>
        <div className="text-base font-bold text-white mb-6">{t('Langfristige Partnerschaft')}</div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-5 left-5 right-5 h-[1px] bg-gradient-to-r from-[#D6AE70]/40 via-[#D6AE70]/60 to-[#D6AE70]/20" />

          <div className="flex justify-between relative">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-2 z-10" style={{ width: '22%' }}>
                <div className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg
                  ${i === 0 ? 'bg-[#D6AE70]/20 border-[#D6AE70] shadow-[0_0_12px_rgba(214,174,112,0.25)]' : 'bg-[#0A1628] border-[#D6AE70]/40'}`}>
                  {step.icon}
                </div>
                <span className="text-[10px] text-[#8B9CB3] text-center leading-tight">{step.label}</span>
                {i === 0 && <span className="text-[8px] text-[#D6AE70] font-mono">START</span>}
                {i === steps.length - 1 && <span className="text-[8px] text-[#D6AE70] font-mono">∞</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-[#D6AE70]/20 bg-[#0A1628] px-4 py-3 flex gap-3 items-center">
          <div className="text-[#D6AE70] text-lg">♻</div>
          <div>
            <div className="text-xs font-semibold text-white">{t('Re-Investment Betreuung')}</div>
            <div className="text-[10px] text-[#8B9CB3] mt-0.5">{t('Langfristige Begleitung & Folgechancen')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

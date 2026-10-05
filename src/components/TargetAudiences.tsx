import { SectionPhoto } from './SectionPhoto';
import { useLanguage } from '../i18n/LanguageContext';
import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building2,
  ShieldCheck,
  TrendingUp,
  Scale
} from 'lucide-react';
import { BRAND_IMAGES } from '../data/brandAssets';

// ─── Card 02: Rental Income Flow Animation ───────────────────────────────────
function RentalIncomeAnimation({ t }: { t: (s: string) => string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0); // 0=hidden,1=draw,2=light,3=flow,4=badge

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setPhase(1); }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (phase < 1) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setPhase(2), 900));
    timers.push(setTimeout(() => setPhase(3), 1600));
    timers.push(setTimeout(() => setPhase(4), 2500));
    return () => timers.forEach(clearTimeout);
  }, [phase === 1]);

  // Marker positions: dots flow from building right-side to ledger
  const markers = [
    { x: 58, delay: '0s' },
    { x: 62, delay: '0.18s' },
    { x: 66, delay: '0.36s' },
  ];

  return (
    <div ref={ref} className="absolute inset-0 bg-[#050B16] flex flex-col items-center justify-center px-5 py-6 gap-0 overflow-hidden">
      <style>{`
        @keyframes ri-drawPath { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
        @keyframes ri-fadeIn { from { opacity:0; transform:scale(0.85); } to { opacity:1; transform:scale(1); } }
        @keyframes ri-windowGlow { 0%,100% { fill: rgba(214,174,112,0.08); } 50% { fill: rgba(214,174,112,0.22); } }
        @keyframes ri-markerFlow {
          0%   { transform: translateX(0) translateY(0); opacity:0; }
          10%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateX(160px) translateY(-6px); opacity:0; }
        }
        @keyframes ri-badgePop { from { opacity:0; transform:scale(0.7); } to { opacity:1; transform:scale(1); } }
        @keyframes ri-ledgerLine { from { width:0; opacity:0; } to { width:100%; opacity:1; } }
        .ri-draw { stroke-dasharray: 1; stroke-dashoffset: 1; }
      `}</style>

      {/* Title */}
      <div className="text-[10px] font-mono uppercase tracking-widest text-[#D6AE70] mb-4 self-start"
        style={{ opacity: phase >= 1 ? 1 : 0, transition: 'opacity 0.5s' }}>
        {t('Architektur-Finanzdiagramm')}
      </div>

      {/* SVG Scene */}
      <svg viewBox="0 0 320 180" className="w-full max-w-[320px]" style={{ maxHeight: 180 }}>
        {/* Building outline */}
        <g style={{ opacity: phase >= 1 ? 1 : 0, transition: 'opacity 0.6s 0.1s' }}>
          {/* Main body */}
          <rect x="20" y="60" width="90" height="110" rx="3" fill="none" stroke="#D6AE70" strokeWidth="1.5"
            style={phase >= 1 ? { animation: 'ri-drawPath 0.7s 0.15s ease-out both', strokeDasharray: 1, strokeDashoffset: 1 } : {}} />
          {/* Roof */}
          <polyline points="15,62 65,30 115,62" fill="none" stroke="#D6AE70" strokeWidth="1.5"
            style={phase >= 1 ? { animation: 'ri-drawPath 0.5s 0.5s ease-out both', strokeDasharray: 1, strokeDashoffset: 1 } : {}} />
          {/* Door */}
          <rect x="52" y="128" width="26" height="42" rx="2" fill="#0A1324" stroke="#D6AE70" strokeWidth="1" />
          {/* Windows row 1 */}
          {[28, 55, 82].map((x, i) => (
            <rect key={i} x={x} y="74" width="18" height="14" rx="1.5"
              fill={phase >= 2 ? 'rgba(214,174,112,0.18)' : 'rgba(214,174,112,0.04)'}
              stroke="#D6AE70" strokeWidth="0.8"
              style={{ transition: `fill 0.4s ${0.1 * i}s`, animation: phase >= 2 ? `ri-windowGlow 2s ${0.3 * i}s ease-in-out infinite` : 'none' }} />
          ))}
          {/* Windows row 2 */}
          {[28, 55, 82].map((x, i) => (
            <rect key={i} x={x} y="100" width="18" height="14" rx="1.5"
              fill={phase >= 2 ? 'rgba(214,174,112,0.12)' : 'rgba(214,174,112,0.04)'}
              stroke="#D6AE70" strokeWidth="0.8"
              style={{ transition: `fill 0.4s ${0.15 * i + 0.2}s` }} />
          ))}
        </g>

        {/* Flow arrow line */}
        <g style={{ opacity: phase >= 3 ? 1 : 0, transition: 'opacity 0.4s' }}>
          <line x1="115" y1="105" x2="210" y2="105" stroke="#D6AE70" strokeWidth="1" strokeDasharray="4 3" />
          <polyline points="206,100 212,105 206,110" fill="none" stroke="#D6AE70" strokeWidth="1.5" />
        </g>

        {/* Flowing gold markers */}
        {phase >= 3 && markers.map((m, i) => (
          <circle key={i} cx={m.x} cy="105" r="3.5" fill="#D6AE70" opacity="0"
            style={{ animation: `ri-markerFlow 1.8s ${m.delay} ease-in-out infinite` }} />
        ))}

        {/* Ledger / Income box */}
        <g style={{ opacity: phase >= 3 ? 1 : 0, transition: 'opacity 0.5s 0.3s' }}>
          <rect x="213" y="78" width="88" height="56" rx="4" fill="#0A1324" stroke="#D6AE70" strokeWidth="1.2" />
          <text x="257" y="97" textAnchor="middle" fill="#D6AE70" fontSize="8" fontFamily="monospace" fontWeight="bold">{t('Mietertrag')}</text>
          <line x1="222" y1="104" x2="292" y2="104" stroke="#D6AE70" strokeWidth="0.6" opacity="0.4" />
          {/* Income lines */}
          {[0, 1, 2].map(i => (
            <g key={i} style={{ opacity: phase >= 4 ? 1 : 0, transition: `opacity 0.3s ${0.15 * i + 0.2}s` }}>
              <rect x="222" y={109 + i * 7} width={30 + i * 10} height="4" rx="1.5" fill="#D6AE70" opacity={0.25 + i * 0.08} />
            </g>
          ))}
        </g>

        {/* Management badge */}
        {phase >= 4 && (
          <g style={{ animation: 'ri-badgePop 0.45s 0.1s cubic-bezier(0.34,1.56,0.64,1) both' }}>
            <circle cx="257" cy="140" r="14" fill="#D6AE70" opacity="0.12" stroke="#D6AE70" strokeWidth="1" />
            {/* Checkmark */}
            <polyline points="250,140 255,146 265,133" fill="none" stroke="#D6AE70" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
      </svg>

      {/* 3 Labels */}
      <div className="flex items-center justify-between w-full max-w-[320px] mt-3 px-1"
        style={{ opacity: phase >= 4 ? 1 : 0, transition: 'opacity 0.5s 0.3s' }}>
        {[
          { en: 'Vetted property',         de: 'Geprüftes Objekt' },
          { en: 'Rental income',            de: 'Mietrendite' },
          { en: 'Professional management', de: 'Profi-Verwaltung' },
        ].map((lbl, i) => (
          <div key={i} className="flex flex-col items-center gap-1 text-center flex-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D6AE70]" />
            <span className="text-[9px] text-[#8B9CB3] leading-tight">{t(lbl.de)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Card 03: Generational Legacy Illustration ────────────────────────────────
function LegacyTimelineAnimation({ t }: { t: (s: string) => string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setPhase(1); }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (phase < 1) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setPhase(2), 700));
    timers.push(setTimeout(() => setPhase(3), 1400));
    timers.push(setTimeout(() => setPhase(4), 2200));
    timers.push(setTimeout(() => setPhase(5), 3100));
    return () => timers.forEach(clearTimeout);
  }, [phase === 1]);

  const nodes = [
    { label: t('Heute'), labelEn: 'Today',            x: 60  },
    { label: t('Langfristig'), labelEn: 'Long-term',  x: 160 },
    { label: t('Generation'), labelEn: 'Next gen.',   x: 260 },
  ];

  return (
    <div ref={ref} className="absolute inset-0 bg-[#050B16] flex flex-col items-center justify-center px-5 py-5 overflow-hidden">
      <style>{`
        @keyframes lt-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
        @keyframes lt-fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes lt-nodePop { from { opacity:0; transform:scale(0.5); } to { opacity:1; transform:scale(1); } }
        @keyframes lt-houseGlow {
          0%,100% { filter: drop-shadow(0 0 4px rgba(214,174,112,0.0)); }
          50%      { filter: drop-shadow(0 0 12px rgba(214,174,112,0.35)); }
        }
        .lt-houseglow { animation: lt-houseGlow 3s 2s ease-in-out infinite; }
      `}</style>

      {/* Eyebrow */}
      <div className="text-[10px] font-mono uppercase tracking-widest text-[#D6AE70] mb-3 self-start"
        style={{ opacity: phase >= 1 ? 1 : 0, transition: 'opacity 0.5s' }}>
        {t('Generationenübergreifender Sachwerterhalt')}
      </div>

      {/* SVG */}
      <svg viewBox="0 0 320 200" className="w-full max-w-[320px]" style={{ maxHeight: 200 }}>
        {/* House — always centred, glows after phase 2 */}
        <g className={phase >= 2 ? 'lt-houseglow' : ''} style={{ opacity: phase >= 1 ? 1 : 0, transition: 'opacity 0.6s 0.1s' }}>
          {/* Body */}
          <rect x="110" y="70" width="100" height="70" rx="3" fill="#0A1324" stroke="#D6AE70" strokeWidth="1.5"
            style={phase >= 1 ? { animation: 'lt-draw 0.7s 0.2s ease-out both', strokeDasharray: 1, strokeDashoffset: 1 } : {}} />
          {/* Roof */}
          <polyline points="105,72 160,38 215,72" fill="none" stroke="#D6AE70" strokeWidth="1.8"
            style={phase >= 1 ? { animation: 'lt-draw 0.5s 0.6s ease-out both', strokeDasharray: 1, strokeDashoffset: 1 } : {}} />
          {/* Door */}
          <rect x="147" y="108" width="26" height="32" rx="2" fill="#162744" stroke="#D6AE70" strokeWidth="0.8" />
          {/* Windows */}
          {[[118, 76], [169, 76], [118, 96], [169, 96]].map(([x, y], i) => (
            <rect key={i} x={x} y={y} width="22" height="16" rx="1.5"
              fill={phase >= 2 ? 'rgba(214,174,112,0.15)' : 'rgba(214,174,112,0.04)'}
              stroke="#D6AE70" strokeWidth="0.7"
              style={{ transition: `fill 0.4s ${0.1 * i + 0.1}s` }} />
          ))}
        </g>

        {/* Gold line: house → ownership doc */}
        <g style={{ opacity: phase >= 2 ? 1 : 0, transition: 'opacity 0.5s' }}>
          <line x1="160" y1="140" x2="160" y2="165"
            stroke="#D6AE70" strokeWidth="1.2"
            style={phase >= 2 ? { animation: 'lt-draw 0.4s 0.2s ease-out both', strokeDasharray: 1, strokeDashoffset: 1 } : {}} />
          {/* Ownership doc symbol */}
          <rect x="142" y="165" width="36" height="24" rx="3" fill="#0A1324" stroke="#D6AE70" strokeWidth="1"
            style={{ opacity: phase >= 2 ? 1 : 0, transition: 'opacity 0.4s 0.5s' }} />
          <line x1="148" y1="172" x2="172" y2="172" stroke="#D6AE70" strokeWidth="0.8" opacity="0.6" />
          <line x1="148" y1="178" x2="165" y2="178" stroke="#D6AE70" strokeWidth="0.8" opacity="0.4" />
          <text x="160" y="194" textAnchor="middle" fill="#D6AE70" fontSize="7" fontFamily="monospace" opacity="0.7">{t('Eigentum')}</text>
        </g>

        {/* Timeline line */}
        <g style={{ opacity: phase >= 3 ? 1 : 0, transition: 'opacity 0.5s' }}>
          <line x1="40" y1="26" x2="280" y2="26"
            stroke="#D6AE70" strokeWidth="0.8" opacity="0.35"
            style={phase >= 3 ? { animation: 'lt-draw 0.6s 0.1s ease-out both', strokeDasharray: 1, strokeDashoffset: 1 } : {}} />
        </g>

        {/* Generation nodes */}
        {nodes.map((n, i) => (
          <g key={i} style={{ opacity: phase >= 4 + (i > 0 ? i - 1 : 0) ? 1 : 0, transition: 'opacity 0.4s' }}>
            {/* Node circle */}
            <circle cx={n.x} cy="26" r={i === 0 ? 5 : 4}
              fill={i === 0 ? '#D6AE70' : '#0A1324'}
              stroke="#D6AE70" strokeWidth={i === 0 ? 0 : 1.2}
              style={{ animation: phase >= 4 + (i > 0 ? i - 1 : 0) ? `lt-nodePop 0.4s ${0.1 * i}s cubic-bezier(0.34,1.56,0.64,1) both` : 'none' }} />
            {/* Label */}
            <text x={n.x} y="14" textAnchor="middle" fill="#F5ECD7" fontSize="8" fontFamily="monospace" opacity="0.85"
              style={{ fontWeight: i === 2 ? 'bold' : 'normal' }}>
              {n.label}
            </text>
          </g>
        ))}

        {/* Connector lines: node → house */}
        {phase >= 5 && [
          { x1: 60, y1: 31, x2: 130, y2: 68 },
          { x1: 260, y1: 31, x2: 195, y2: 68 },
        ].map((line, i) => (
          <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
            stroke="#D6AE70" strokeWidth="0.7" strokeDasharray="3 3" opacity="0.35"
            style={{ animation: 'lt-draw 0.5s ease-out both', strokeDasharray: 1, strokeDashoffset: 1 }} />
        ))}
      </svg>

      {/* Bottom labels */}
      <div className="flex items-center justify-between w-full max-w-[320px] mt-2 px-1"
        style={{ opacity: phase >= 5 ? 1 : 0, transition: 'opacity 0.5s' }}>
        <div className="text-[9px] text-[#8B9CB3] text-center flex-1">{t('Erwerb & Struktur')}</div>
        <div className="text-[9px] text-[#D6AE70] text-center flex-1 font-semibold">§ 23 EStG · 0%</div>
        <div className="text-[9px] text-[#8B9CB3] text-center flex-1">{t('Nachfolge')}</div>
      </div>
    </div>
  );
}

// ─── Animated infographic for Unternehmer card (GmbH / vGmbH tax lever) ──────
function GmbHInfographic({ t }: { t: (s: string) => string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [bar1, setBar1] = useState(0); // 45% private tax
  const [bar2, setBar2] = useState(0); // 15.8% KSt
  const [saving, setSaving] = useState(0); // counter ~29%

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    // bar1 → 45%
    const t1 = setTimeout(() => {
      let v = 0;
      const iv = setInterval(() => { v += 1; if (v >= 45) { setBar1(45); clearInterval(iv); } else setBar1(v); }, 22);
      return () => clearInterval(iv);
    }, 300);
    // bar2 → 15.8% (shorter, fills to ~16 out of 45 scale)
    const t2 = setTimeout(() => {
      let v = 0;
      const iv = setInterval(() => { v += 1; if (v >= 16) { setBar2(16); clearInterval(iv); } else setBar2(v); }, 30);
      return () => clearInterval(iv);
    }, 700);
    // saving counter → 29%
    const t3 = setTimeout(() => {
      let v = 0;
      const iv = setInterval(() => { v += 1; if (v >= 29) { setSaving(29); clearInterval(iv); } else setSaving(v); }, 35);
      return () => clearInterval(iv);
    }, 1100);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [visible]);

  const fadeUp = (delay: string) => visible
    ? { animation: `gmbh-fadeUp 0.5s ${delay} cubic-bezier(0.16,1,0.3,1) both` }
    : { opacity: 0 };

  return (
    <div ref={ref} className="absolute inset-0 p-5 flex flex-col justify-between bg-[#050B16]">
      <style>{`
        @keyframes gmbh-fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        @keyframes gmbh-glow { 0%,100% { box-shadow:0 0 0 0 rgba(214,174,112,0); } 50% { box-shadow:0 0 0 8px rgba(214,174,112,0.12); } }
        .gmbh-glow { animation: gmbh-glow 2.5s 2s ease-in-out infinite; }
      `}</style>

      {/* Header */}
      <div style={fadeUp('0s')} className="flex items-center justify-between">
        <span className="text-[10px] font-mono text-[#D6AE70] uppercase tracking-widest">Steueroptimierung · vGmbH</span>
        <Building2 className="w-4 h-4 text-[#D6AE70]/60" />
      </div>

      {/* Comparison bars */}
      <div className="space-y-3 my-2">
        {/* Private rate */}
        <div style={fadeUp('0.2s')} className="space-y-1.5">
          <div className="flex justify-between text-[10px]">
            <span className="text-[#8B9CB3]">{t('Privatbesteuerung')}</span>
            <span className="text-red-400 font-mono font-bold">{bar1}%</span>
          </div>
          <div className="h-2 rounded-full bg-[#162744] overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-red-500/70 to-red-400/50 transition-none"
              style={{ width: `${(bar1 / 45) * 100}%` }} />
          </div>
          <div className="text-[9px] text-[#8B9CB3]/60">{t('Einkommensteuer + Soli + KiSt')}</div>
        </div>

        {/* GmbH rate */}
        <div style={fadeUp('0.4s')} className="space-y-1.5">
          <div className="flex justify-between text-[10px]">
            <span className="text-[#8B9CB3]">{t('vGmbH Körperschaftsteuer')}</span>
            <span className="text-[#D6AE70] font-mono font-bold">{bar2 < 16 ? bar2 : '15,8'}%</span>
          </div>
          <div className="h-2 rounded-full bg-[#162744] overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-[#D6AE70]/70 to-[#D6AE70]/40 transition-none"
              style={{ width: `${(bar2 / 45) * 100}%` }} />
          </div>
          <div className="text-[9px] text-[#8B9CB3]/60">{t('Thesaurierung in der Holding')}</div>
        </div>
      </div>

      {/* Saving pill */}
      <div style={fadeUp('0.8s')} className="flex items-center justify-center">
        <div className={`gmbh-glow flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#D6AE70]/40 bg-[#D6AE70]/08`}>
          <TrendingUp className="w-3.5 h-3.5 text-[#D6AE70]" />
          <span className="text-xs text-white font-semibold">
            <span className="text-[#D6AE70] font-mono text-sm">{saving}%</span> {t(' Steuerersparnis p.a.')}
          </span>
        </div>
      </div>

      {/* Bullet points */}
      <div style={fadeUp('1.1s')} className="space-y-1.5 mt-1">
        {[t('Degressive AfA & Sonder-AfA nutzbar'), t('Keine 45% Privatsteuer auf Erträge'), t('Reinvestition aus versteuerten 15,8%')].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-[10px] text-[#8B9CB3]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D6AE70]/70 shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

// Slideshow: cycles through 3 photos
function PhotoSlideshow({ photos, captions }: { photos: string[]; captions: string[] }) {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIdx(i => (i + 1) % photos.length);
        setFade(true);
      }, 400);
    }, 3200);
    return () => clearInterval(timer);
  }, [photos.length]);
  return (
    <>
      <img
        src={photos[idx]}
        alt={captions[idx]}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-400"
        style={{ opacity: fade ? 1 : 0 }}
      />
      <div className="absolute bottom-14 left-3.5 z-10 flex gap-1.5">
        {photos.map((_, i) => (
          <span key={i} className={`block h-1 rounded-full transition-all duration-300 ${i === idx ? 'w-5 bg-[#D6AE70]' : 'w-1.5 bg-white/30'}`} />
        ))}
      </div>
    </>
  );
}


// Inline infographic for Private Investoren (§23 EStG family wealth) with animations
function FamilyWealthInfographic({ t }: { t: (s: string) => string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [count45, setCount45] = useState(0);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Animate bar and count-up once visible
  useEffect(() => {
    if (!visible) return;
    // Progress bar fill
    const barTimer = setTimeout(() => {
      let w = 0;
      const barInterval = setInterval(() => {
        w += 2;
        if (w >= 100) { setBarWidth(100); clearInterval(barInterval); }
        else setBarWidth(w);
      }, 18);
      return () => clearInterval(barInterval);
    }, 200);
    // 45% count-up
    const countTimer = setTimeout(() => {
      let v = 0;
      const countInterval = setInterval(() => {
        v += 2;
        if (v >= 45) { setCount45(45); clearInterval(countInterval); }
        else setCount45(v);
      }, 28);
      return () => clearInterval(countInterval);
    }, 600);
    return () => { clearTimeout(barTimer); clearTimeout(countTimer); };
  }, [visible]);

  const show = (delay: string) => visible
    ? { animation: `fw-fadeUp 0.55s ${delay} cubic-bezier(0.16,1,0.3,1) both` }
    : { opacity: 0 };

  const popIn = (delay: string) => visible
    ? { animation: `fw-popIn 0.45s ${delay} cubic-bezier(0.34,1.56,0.64,1) both` }
    : { opacity: 0 };

  return (
    <div ref={ref} className="absolute inset-0 flex flex-col justify-center px-6 py-6 gap-4">
      <style>{`
        @keyframes fw-fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fw-popIn {
          from { opacity: 0; transform: scale(0.80); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes fw-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(214,174,112,0); }
          50%       { box-shadow: 0 0 0 6px rgba(214,174,112,0.18); }
        }
        @keyframes fw-checkmark {
          from { opacity: 0; transform: scale(0) rotate(-30deg); }
          to   { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes fw-shimmer {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.55; }
        }
        .fw-glow { animation: fw-pulse 2s 1.8s ease-in-out infinite; }
      `}</style>

      {/* Title */}
      <div className="text-[10px] font-mono uppercase tracking-widest text-[#D6AE70]" style={show('0s')}>
        {t('Steuerfreier Vermögensaufbau')}
      </div>

      {/* Timeline bar */}
      <div style={show('0.15s')}>
        <div className="relative h-2 rounded-full bg-[#162744] overflow-hidden">
          <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#D6AE70]/40 via-[#D6AE70] to-[#D6AE70] transition-none"
            style={{ width: `${barWidth}%`, transition: 'none' }} />
        </div>
        <div className="flex justify-between text-[9px] text-[#8B9CB3] font-mono mt-1.5">
          <span>{t('Kauf')}</span>
          <span>5 {t('Jahre')}</span>
          <span className="text-[#D6AE70] font-bold flex items-center gap-1">
            10 {t('Jahre')}
            <span style={visible ? { animation: 'fw-checkmark 0.4s 2s cubic-bezier(0.34,1.56,0.64,1) both', display: 'inline-block' } : { opacity: 0, display: 'inline-block' }}>✓</span>
          </span>
        </div>
      </div>

      {/* 3 stat boxes */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { key: 'zero', display: '0%',      label: t('Steuer nach\n10 Jahren'),     delay: '0.35s', glow: false },
          { key: 'par',  display: '§ 23',    label: t('EStG\nGrundlage'),            delay: '0.55s', glow: false },
          { key: 'pct',  display: `${count45}%`, label: t('Spitzensteuersatz\ngespart'), delay: '0.75s', glow: true },
        ].map(item => (
          <div key={item.key}
            className={`rounded-xl bg-[#0A1324] border border-[#162744] p-3 text-center ${item.glow ? 'fw-glow' : ''}`}
            style={popIn(item.delay)}>
            <div className="text-xl font-extrabold text-[#D6AE70] tabular-nums leading-tight">{item.display}</div>
            <div className="text-[9px] text-[#8B9CB3] leading-tight mt-1 whitespace-pre-line">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div className="rounded-xl bg-[#0A1324] border border-[#D6AE70]/30 p-3 flex items-center gap-3"
        style={show('1.0s')}>
        <ShieldCheck className="w-5 h-5 text-[#D6AE70] shrink-0" />
        <div>
          <div className="text-xs font-semibold text-white">{t('Realgrundbuch-Sicherheit')}</div>
          <div className="text-[10px] text-[#8B9CB3]">{t('Inflationsschutz & Nachfolgeplanung')}</div>
        </div>
      </div>
    </div>
  );
}

interface TargetAudiencesProps {
  onSelectAudienceForCheck: (audienceId: string) => void;
}

export const TargetAudiences: React.FC<TargetAudiencesProps> = ({
  onSelectAudienceForCheck
}) => {
  const { t, locale, localizedImage } = useLanguage();
  const categories = [
    {
      id: 'unternehmer',
      stepNum: '01',
      name: 'Unternehmer',
      eyebrow: 'Holding & Thesaurierung',
      headline: 'Steuerbegünstigter Sachwertaufbau in der Holding & vGmbH',
      description: 'Unternehmer stehen vor der Herausforderung, operative Überschüsse aus dem operativen Geschäft mit nur 15,8% Körperschaftsteuer in werthaltige Liegenschaften umzuschichten. Wir strukturieren den optimalen Thesaurierungshebel.',
      image: BRAND_IMAGES.marketAnalysisPresentation.localSrc,
      fallback: BRAND_IMAGES.marketAnalysisPresentation.cdnSrc,
      caption: 'Holdingstrukturierung & Thesaurierung im Investorenkreis',
      objectPosition: '50% 12%',
      bgColor: 'bg-[#081020]',
      borderColor: 'border-[#162744]',
      hoverBorderColor: 'hover:border-[#D6AE70]/40',
      keyMetrics: [
        { label: 'Steuersatz', val: '15,8% KSt in vermögensverwaltender GmbH' },
        { label: 'Liquidität', val: 'Keine private Besteuerung von 45% +' },
        { label: 'Assetklasse', val: 'Denkmal-AfA (§ 7i) & KfW-40 Neubau' }
      ]
    },
    {
      id: 'kapitalanleger',
      stepNum: '02',
      name: 'Kapitalanleger',
      eyebrow: 'Rendite & Werterhalt',
      headline: 'Vorselektierte Ertragsobjekte mit verlässlichem Cashflow',
      description: 'Für institutionelle und erfahrene Anleger, die planbaren Mietertrag und inflationsgeschützte Realsubstanz fordern. Kein Aufwand für Vermietung oder Bewirtschaftung dank professioneller Betreiberstrukturen.',
      image: BRAND_IMAGES.heroBoardroom.localSrc,
      fallback: BRAND_IMAGES.heroBoardroom.cdnSrc,
      caption: 'Off-Market Portfolios & Ertragsanalysen für professionelle Kapitalanleger',
      objectPosition: '50% 15%',
      bgColor: 'bg-[#0B162B]',
      borderColor: 'border-[#1B2F52]',
      hoverBorderColor: 'hover:border-[#D6AE70]/40',
      keyMetrics: [
        { label: 'Zielrendite', val: 'Ø 5.2% – 6.8% kalkulierte Gesamtrendite' },
        { label: 'Mietgarantie', val: 'Bonitätsgeprüfte Mietverträge & Indexierung' },
        { label: 'Verwaltung', val: 'Full-Service Sondereigentumsverwaltung' }
      ]
    },
    {
      id: 'private_investoren',
      stepNum: '03',
      name: 'Private Investoren',
      eyebrow: 'Vermögenssicherung & Familie',
      headline: 'Generationenübergreifende Sachwertabsicherung für Familien',
      description: 'Familien und anspruchsvolle Privatanleger suchen oft Schutz vor Geldentwertung und die steuerfreie Veräußerbarkeit nach 10 Jahren (§ 23 EStG). Wir begleiten Sie diskret bei der Auswahl erstklassiger Einzelliegenschaften.',
      image: BRAND_IMAGES.internationalWealth.localSrc,
      fallback: BRAND_IMAGES.internationalWealth.cdnSrc,
      caption: 'Diskrete Sachwertarchitektur für Familien & Privatinvestoren',
      objectPosition: '50% 12%',
      bgColor: 'bg-[#0E1C36]',
      borderColor: 'border-[#203761]',
      hoverBorderColor: 'hover:border-[#D6AE70]/40',
      keyMetrics: [
        { label: 'Steuerfreiheit', val: '§ 23 EStG steuerfreier Veräußerungsgewinn' },
        { label: 'Sicherheit', val: 'Realgrundbuch statt Papierversprechen' },
        { label: 'Nachfolge', val: 'Freibetragsoptimierte Übergabe an Nachkommen' }
      ]
    },
    {
      id: 'partner',
      stepNum: '04',
      name: 'Strategische Partner',
      eyebrow: 'Ökosystem & Kooperation',
      headline: 'Synergien mit Steuerberatern, Family Offices & Banken',
      description: 'Wir arbeiten Hand in Hand mit spezialisierten Steuerberatern, Notariaten und Wealth Managern, um deren anspruchsvolle Mandanten mit erstklassigen Off-Market Opportunitäten und Zinsarchitekturen zu versorgen.',
      image: BRAND_IMAGES.dealClosingPartnership.localSrc,
      fallback: BRAND_IMAGES.dealClosingPartnership.cdnSrc,
      caption: 'Partnerschaftliche Kooperation auf Augenhöhe vor Metropolen-Skyline',
      objectPosition: '50% 14%',
      bgColor: 'bg-[#112242]',
      borderColor: 'border-[#254070]',
      hoverBorderColor: 'hover:border-[#D6AE70]/40',
      keyMetrics: [
        { label: 'Netzwerk', val: 'Arventas Unternehmensgruppe & Private Banking' },
        { label: 'Vertraulichkeit', val: '100% Mandantenschutz & Handschlagqualität' },
        { label: 'Transaktion', val: 'Reibungslose Vorbereitung für Beurkundungen' }
      ]
    }
  ];

  return (
    <section id="zielgruppen" className="py-24 lg:py-36 bg-[#050B16] relative border-t border-[#162744] bg-tech-grid z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-14 lg:mb-20">
          <div className="gold-eyebrow mb-4">{t("Investoren & Profile")}</div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-sans">{t("Maßgeschneiderte ")}<span className="text-[#D6AE70]">{t("Sachwertarchitektur")}</span>{t(" für jedes Profil")}</h2>
          <p className="mt-5 text-base sm:text-lg text-[#8B9CB3] font-light leading-relaxed max-w-2xl">{t("Unterschiedliche Vermögenssituationen verlangen grundverschiedene Hebel: Von der steuerbegünstigten Thesaurierung in der GmbH bis zur generationenübergreifenden Nachfolge im Familienkreis.")}</p>
        </div>

        {/* Scroll-Driven Stacked Cards Deck (Reference video inspired) */}
        <div className="relative pb-16">
          {categories.map((cat, idx) => {
            // Progressive sticky top offset: 88px base + 20px per card on desktop, 72px + 14px on mobile
            const isLast = idx === categories.length - 1;
            const zIndexClass = idx === 0 ? 'z-10' : idx === 1 ? 'z-20' : idx === 2 ? 'z-30' : 'z-40';

            return (
              <div
                key={cat.id}
                style={{
                  top: `calc(var(--sticky-top-base, 88px) + ${idx * 20}px)`
                }}
                className={`sticky ${zIndexClass} ${isLast ? 'mb-8' : 'mb-28 lg:mb-40'} [--sticky-top-base:74px] md:[--sticky-top-base:88px] transition-all duration-300`}
              >
                {/* Overlapping Card Container */}
                <div 
                  className={`rounded-[26px] sm:rounded-[30px] lg:rounded-[34px] ${cat.bgColor} border ${cat.borderColor} ${cat.hoverBorderColor} overflow-hidden shadow-[0_-12px_40px_rgba(0,0,0,0.8)] transition-all duration-300 group`}
                >
                  {/* Top Layer Header Strip (Always visible when stacked like cards in deck) */}
                  <div className="px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 bg-[#050B16]/70 border-b border-[#162744]/70 flex items-center justify-between backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#D6AE70]/15 border border-[#D6AE70]/40 text-[#D6AE70] font-mono text-xs font-bold flex items-center justify-center">
                        {t(cat.stepNum)}
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-white">
                        {t(cat.name)}
                      </span>
                      <span className="hidden sm:inline text-[#162744]">|</span>
                      <span className="hidden sm:inline text-[11px] font-mono uppercase tracking-wider text-[#D6AE70]">
                        {t(cat.eyebrow)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-[#8B9CB3] font-light">{t("Profil ")}{t(cat.stepNum)} / 04
                      </span>
                    </div>
                  </div>

                  {/* Card Content & Photography Grid */}
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                      
                      {/* Left Column: Approx 55% Text, Metrics & CTA */}
                      <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                        
                        <div className="space-y-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#050B16] border border-[#162744] text-xs text-[#D6AE70] font-mono uppercase tracking-wider">
                            <span>{t("Fokusprofil · ")}{t(cat.name)}</span>
                          </div>

                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-sans leading-tight tracking-tight">
                            {t(cat.headline)}
                          </h3>

                          <div className="text-xs sm:text-sm text-[#D6AE70] font-semibold">
                            {t(cat.eyebrow)}
                          </div>

                          <p className="text-sm sm:text-base text-[#8B9CB3] font-light leading-relaxed">
                            {t(cat.description)}
                          </p>
                        </div>

                        {/* Key Metrics / Fact Boxes */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                          {cat.keyMetrics.map((km, kmIdx) => (
                            <div 
                              key={kmIdx} 
                              className="p-3.5 rounded-xl bg-[#050B16]/80 border border-[#162744]/90 space-y-1"
                            >
                              <div className="text-[10px] uppercase font-mono text-[#8B9CB3] tracking-wider">
                                {t(km.label)}
                              </div>
                              <div className="text-xs sm:text-sm font-semibold text-white">
                                {t(km.val)}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Action CTA Bar */}
                        <div className="pt-4 border-t border-[#162744]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <span className="text-xs text-[#8B9CB3] font-light">{t("Kostenfreie Profilanalyse & Off-Market Dossier")}</span>
                          <button
                            onClick={() => onSelectAudienceForCheck(cat.id)}
                            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#D6AE70] hover:bg-[#E2C492] text-[#050B16] font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-[#D6AE70]/15"
                          >
                            <span>{t("Strategie für ")}{t(cat.name)}{t(" starten")}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                      </div>

                      {/* Right Column: per-card media */}
                      <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-full rounded-2xl overflow-hidden bg-[#0A1324] border border-[#162744]/70">

                        {/* Card 01 Unternehmer — adviser reviewing floor plan with client */}
                        {cat.id === 'unternehmer' && (
                          <img
                            src="/images/sections/7641870.jpg"
                            alt="Adviser and client reviewing a property floor plan at an oak table"
                            className="absolute inset-0 h-full w-full object-cover"
                            style={{ objectPosition: '50% 30%' }}
                            loading="lazy"
                          />
                        )}

                        {/* Card 02 Kapitalanleger — rental income flow animation */}
                        {cat.id === 'kapitalanleger' && (
                          <RentalIncomeAnimation t={t} />
                        )}

                        {/* Card 03 Private Investoren — generational legacy illustration */}
                        {cat.id === 'private_investoren' && (
                          <LegacyTimelineAnimation t={t} />
                        )}

                        {/* Card 04 Strategische Partner — specialist team reviewing property documents */}
                        {cat.id === 'partner' && (
                          <img
                            src="/images/sections/36733326.jpg"
                            alt="Three specialists collaboratively reviewing property documents at a meeting table"
                            className="absolute inset-0 h-full w-full object-cover"
                            style={{ objectPosition: '50% 40%' }}
                            loading="lazy"
                          />
                        )}

                        <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 px-3.5 py-2 rounded-xl bg-[#050B16]/85 backdrop-blur-md border border-[#162744] text-xs text-[#8B9CB3] font-light truncate">
                          {t(cat.eyebrow)}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Guiding Orientation Banner */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#0A1324] border border-[#162744] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-semibold text-white font-sans">{t("Nicht sicher, welche Struktur passt?")}</div>
            <p className="text-xs sm:text-sm text-[#8B9CB3] font-light">{t("Der Strategie-Check analysiert Ihr persönliches Profil in wenigen Schritten.")}</p>
          </div>
          <button
            onClick={() => onSelectAudienceForCheck('unternehmer')}
            className="shrink-0 px-6 py-3 rounded-full bg-transparent hover:bg-[#D6AE70] text-[#D6AE70] hover:text-[#050B16] border border-[#D6AE70] font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <span>{t("Profil im Check öffnen")}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

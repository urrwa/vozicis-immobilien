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

// Muted looping video
function LoopVideo({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.play().catch(() => {});
  }, []);
  return (
    <video ref={ref} src={src} poster={poster} muted playsInline loop preload="metadata"
      className="absolute inset-0 h-full w-full object-cover" />
  );
}

// Inline infographic for Private Investoren (§23 EStG family wealth) with animations
function FamilyWealthInfographic({ t }: { t: (s: string) => string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [count0, setCount0] = useState(0);
  const [count45, setCount45] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Count-up animations once visible
  useEffect(() => {
    if (!visible) return;
    // 0% counter (stays 0, just triggers after delay for visual consistency)
    const t0 = setTimeout(() => setCount0(0), 400);
    // 45% counter
    let v = 0;
    const t45 = setInterval(() => {
      v += 3;
      if (v >= 45) { setCount45(45); clearInterval(t45); }
      else setCount45(v);
    }, 30);
    return () => { clearTimeout(t0); clearInterval(t45); };
  }, [visible]);

  return (
    <div ref={ref} className="absolute inset-0 flex flex-col justify-center px-6 py-6 gap-4">
      <style>{`
        @keyframes growBar { from { width: 0% } to { width: 100% } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes popIn { from { opacity: 0; transform: scale(0.85) } to { opacity: 1; transform: scale(1) } }
        @keyframes shimmer { 0%,100% { opacity:1 } 50% { opacity:0.6 } }
      `}</style>

      {/* Title */}
      <div className="text-[10px] font-mono uppercase tracking-widest text-[#D6AE70]"
        style={{ animation: visible ? 'fadeUp 0.5s ease-out forwards' : 'none', opacity: visible ? 1 : 0 }}>
        {t('Steuerfreier Vermögensaufbau')}
      </div>

      {/* Timeline bar */}
      <div className="relative h-2 rounded-full bg-[#162744] overflow-hidden">
        <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#D6AE70]/40 via-[#D6AE70] to-[#D6AE70]"
          style={{ animation: visible ? 'growBar 2.2s ease-out forwards' : 'none', width: '0%' }} />
      </div>
      <div className="flex justify-between text-[9px] text-[#8B9CB3] font-mono"
        style={{ animation: visible ? 'fadeUp 0.6s 0.3s ease-out both' : 'none' }}>
        <span>{t('Kauf')}</span>
        <span>5 {t('Jahre')}</span>
        <span className="text-[#D6AE70] font-bold" style={{ animation: visible ? 'shimmer 1.5s 2s ease-in-out 3' : 'none' }}>
          10 {t('Jahre')} ✓
        </span>
      </div>

      {/* 3 stat boxes */}
      <div className="grid grid-cols-3 gap-2 mt-1">
        {[
          { val: '0%', display: `${count0}%`, label: t('Steuer nach\n10 Jahren'), delay: '0.5s' },
          { val: '§ 23', display: visible ? '§ 23' : '§ —', label: t('EStG\nGrundlage'), delay: '0.7s' },
          { val: '45%', display: `${count45}%`, label: t('Spitzensteuersatz\ngespart'), delay: '0.9s' },
        ].map(item => (
          <div key={item.val}
            className="rounded-xl bg-[#0A1324] border border-[#162744] p-3 text-center"
            style={{ animation: visible ? `popIn 0.4s ${item.delay} ease-out both` : 'none', opacity: 0 }}>
            <div className="text-xl font-extrabold text-[#D6AE70] tabular-nums">{item.display}</div>
            <div className="text-[9px] text-[#8B9CB3] leading-tight mt-1 whitespace-pre-line">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div className="rounded-xl bg-[#0A1324] border border-[#D6AE70]/30 p-3 flex items-center gap-3 mt-1"
        style={{ animation: visible ? 'fadeUp 0.5s 1.1s ease-out both' : 'none', opacity: 0 }}>
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

                        {/* Card 01 Unternehmer — 3-photo slideshow */}
                        {cat.id === 'unternehmer' && (
                          <PhotoSlideshow
                            photos={['/images/sections/7414274.jpg', '/images/sections/7109240.jpg', '/images/sections/4342126.jpg']}
                            captions={['Strategy meeting', 'Financial planning', 'Deal closing']}
                          />
                        )}

                        {/* Card 02 Kapitalanleger — looping video */}
                        {cat.id === 'kapitalanleger' && (
                          <LoopVideo src="/videos/journey/01.mp4" poster="/images/founder-natural/journey-contact.png" />
                        )}

                        {/* Card 03 Private Investoren — infographic */}
                        {cat.id === 'private_investoren' && (
                          <FamilyWealthInfographic t={t} />
                        )}

                        {/* Card 04 Strategische Partner — looping video */}
                        {cat.id === 'partner' && (
                          <LoopVideo src="/videos/journey/05.mp4" poster="/images/founder-natural/journey-matching.png" />
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-transparent to-black/25 pointer-events-none" />
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

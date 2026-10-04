import { SectionPhoto } from './SectionPhoto';
import { useLanguage } from '../i18n/LanguageContext';
import React, { useState, useEffect, useRef } from 'react';
import { CONTENT_ARTICLES } from '../data/mockData';
import { ContentArticle } from '../types';
import { BRAND_IMAGES } from '../data/brandAssets';
import { 
  Clock, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Check,
  BookOpen, 
  User,
  Sparkles
} from 'lucide-react';

interface ContentLibraryProps {
  onOpenConsultation: () => void;
  onOpenStrategyCheck: () => void;
}

interface PillarItemConfig {
  article: ContentArticle;
  pillarNumStr: string;
  pillarLabel: string;
  image: string;
  fallback: string;
  caption: string;
  objectPosition: string;
  badge: string;
}

export const ContentLibrary: React.FC<ContentLibraryProps> = ({
  onOpenConsultation,
  onOpenStrategyCheck
}) => {
  const { t, locale, localizedImage } = useLanguage();
  const [readingArticle, setReadingArticle] = useState<ContentArticle | null>(null);
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const pillarRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Configure all 7 pillars with authentic images and customized focal points
  const pillarsConfig: PillarItemConfig[] = [
    {
      article: CONTENT_ARTICLES[0],
      pillarNumStr: '01',
      pillarLabel: 'Säule 01',
      image: BRAND_IMAGES.marketAnalysisPresentation.localSrc,
      fallback: BRAND_IMAGES.marketAnalysisPresentation.cdnSrc,
      caption: 'Marktanalyse & Investoren-Briefing · Vermögensallokation',
      objectPosition: '50% 15%',
      badge: 'Vermögensstrategie'
    },
    {
      article: CONTENT_ARTICLES[1],
      pillarNumStr: '02',
      pillarLabel: 'Säule 02',
      image: BRAND_IMAGES.projectDevelopmentBlueprints.localSrc,
      fallback: BRAND_IMAGES.projectDevelopmentBlueprints.cdnSrc,
      caption: 'Bausubstanz & Vor-Ort-Prüfung · Baupläne & Gutachten',
      objectPosition: '50% 20%',
      badge: 'Investoren-Leitfaden'
    },
    {
      article: CONTENT_ARTICLES[2],
      pillarNumStr: '03',
      pillarLabel: 'Säule 03',
      image: BRAND_IMAGES.heroBoardroom.localSrc,
      fallback: BRAND_IMAGES.heroBoardroom.cdnSrc,
      caption: 'Executive Boardroom & Marktanalysen im neuen Zinsumfeld',
      objectPosition: '50% 15%',
      badge: 'Marktanalyse'
    },
    {
      article: CONTENT_ARTICLES[3],
      pillarNumStr: '04',
      pillarLabel: 'Säule 04',
      image: BRAND_IMAGES.luxuryVillaInspection.localSrc,
      fallback: BRAND_IMAGES.luxuryVillaInspection.cdnSrc,
      caption: '5-Stufen Due-Diligence · Vorselektierte Premium-Liegenschaften',
      objectPosition: '50% 28%',
      badge: 'Projekt-Insights'
    },
    {
      article: CONTENT_ARTICLES[4],
      pillarNumStr: '05',
      pillarLabel: 'Säule 05',
      image: BRAND_IMAGES.dealClosingPartnership.localSrc,
      fallback: BRAND_IMAGES.dealClosingPartnership.cdnSrc,
      caption: 'Steuerarchitektur & Partnernetzwerk · Holding & vvGmbH',
      objectPosition: '50% 15%',
      badge: 'Steuern & Holding'
    },
    {
      article: CONTENT_ARTICLES[5],
      pillarNumStr: '06',
      pillarLabel: 'Säule 06',
      image: BRAND_IMAGES.internationalWealth.localSrc,
      fallback: BRAND_IMAGES.internationalWealth.cdnSrc,
      caption: 'Kapitalstruktur & Zinsstrategie · Solider Fremdkapitalhebel',
      objectPosition: '50% 12%',
      badge: 'Finanzierungsstrategie'
    },
    {
      article: CONTENT_ARTICLES[6],
      pillarNumStr: '07',
      pillarLabel: 'Säule 07',
      image: BRAND_IMAGES.founderPortrait.localSrc,
      fallback: BRAND_IMAGES.founderPortrait.cdnSrc,
      caption: 'Ioannis Vozicis · Kapital braucht Klarheit & Partnerschaft',
      objectPosition: '50% 15%',
      badge: 'Persönliches Statement'
    }
  ];

  // Scroll handler tracking timeline progress & active pillar
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) {
            ticking = false;
            return;
          }

          const container = containerRef.current;
          const rect = container.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const viewportMid = windowHeight * 0.5;

          // Calculate continuous gold progress bar percentage
          const startOffset = viewportMid;
          const totalDistance = rect.height;
          const scrolledDistance = startOffset - rect.top;
          const rawRatio = scrolledDistance / totalDistance;
          const clampedPercent = Math.min(Math.max(rawRatio * 100, 0), 100);
          setScrollProgress(clampedPercent);

          // Determine which pillar is currently active
          let currentActive = 0;
          let minDistance = Infinity;

          pillarRefs.current.forEach((el, index) => {
            if (!el) return;
            const elRect = el.getBoundingClientRect();
            const elCenter = elRect.top + elRect.height * 0.5;
            const distance = Math.abs(elCenter - viewportMid);

            if (distance < minDistance) {
              minDistance = distance;
              currentActive = index;
            }
          });

          setActivePillarIndex(currentActive);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="wissen" 
      className="py-24 lg:py-36 bg-[#050B16] border-t border-b border-[#162744] relative bg-tech-grid overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16 lg:mb-24">
          <div className="gold-eyebrow mb-3">{t("Executive Journal & Markt-Insights")}</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight leading-[1.1]">{t("Die 7 Säulen der ")}<span className="text-[#D6AE70]">{t("Immobilienstrategie")}</span>
          </h2>
          <p className="mt-4 text-[#8B9CB3] text-sm sm:text-base font-light leading-relaxed max-w-2xl">{t("Fundiertes Fachwissen statt oberflächlicher Ratschläge: Wie professionelle Investoren Standorte bewerten, Zinsrisiken steuern und Steuerhebel legitim nutzen.")}</p>
        </div>

        {/* Vertical Scrolling Timeline Container */}
        <div ref={containerRef} className="relative">
          
          {/* Central Vertical Timeline Line (Desktop: Center / Mobile: Left-aligned at 24px) */}
          <div className="absolute top-8 bottom-8 left-[24px] sm:left-[32px] lg:left-1/2 lg:-translate-x-1/2 w-[2px] bg-[#162744] z-0">
            {/* Scroll-driven Gold Fill Line */}
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#D6AE70] via-[#E2C492] to-[#D6AE70] shadow-[0_0_12px_rgba(214,174,112,0.45)] transition-[height] duration-150 ease-out"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {/* 7 Pillars Alternating Sequence */}
          <div className="space-y-20 sm:space-y-28 lg:space-y-36 relative z-10">
            {pillarsConfig.map((pillar, index) => {
              const isActive = activePillarIndex === index;
              const isPast = activePillarIndex > index;
              // Alternating: 01 (idx 0), 03 (idx 2), 05 (idx 4), 07 (idx 6) => Image Left, Content Right
              // 02 (idx 1), 04 (idx 3), 06 (idx 5) => Content Left, Image Right
              const isOddPillar = index % 2 === 0;

              return (
                <div
                  key={pillar.article.id}
                  ref={(el) => { pillarRefs.current[index] = el; }}
                  className="relative transition-all duration-500"
                >
                  {/* --- DESKTOP VIEW (Large Screens lg: Alternating 2 Columns with Centered Marker) --- */}
                  <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] items-center gap-10 xl:gap-14">
                    
                    {/* LEFT COLUMN: Image on 01, 03, 05, 07 | Content on 02, 04, 06 */}
                    <div className="w-full">
                      {isOddPillar ? (
                        /* Image on Left */
                        <PillarImageCard
                          pillar={pillar}
                          isActive={isActive}
                          isPast={isPast}
                          onClick={() => setReadingArticle(pillar.article)}
                        />
                      ) : (
                        /* Content Panel on Left */
                        <PillarContentPanel
                          pillar={pillar}
                          isActive={isActive}
                          isPast={isPast}
                          onOpenArticle={() => setReadingArticle(pillar.article)}
                        />
                      )}
                    </div>

                    {/* CENTER COLUMN: Number Marker */}
                    <div className="relative flex items-center justify-center shrink-0">
                      <PillarMarker
                        numStr={pillar.pillarNumStr}
                        isActive={isActive}
                        isPast={isPast}
                      />
                    </div>

                    {/* RIGHT COLUMN: Content on 01, 03, 05, 07 | Image on 02, 04, 06 */}
                    <div className="w-full">
                      {isOddPillar ? (
                        /* Content Panel on Right */
                        <PillarContentPanel
                          pillar={pillar}
                          isActive={isActive}
                          isPast={isPast}
                          onOpenArticle={() => setReadingArticle(pillar.article)}
                        />
                      ) : (
                        /* Image on Right */
                        <PillarImageCard
                          pillar={pillar}
                          isActive={isActive}
                          isPast={isPast}
                          onClick={() => setReadingArticle(pillar.article)}
                        />
                      )}
                    </div>

                  </div>

                  {/* --- MOBILE & TABLET VIEW (Single Column on Right with Left Timeline Marker) --- */}
                  <div className="lg:hidden relative pl-14 sm:pl-20">
                    
                    {/* Left-Aligned Marker positioned directly on the mobile vertical line */}
                    <div className="absolute left-[24px] sm:left-[32px] top-6 -translate-x-1/2 z-20">
                      <PillarMarker
                        numStr={pillar.pillarNumStr}
                        isActive={isActive}
                        isPast={isPast}
                        compact
                      />
                    </div>

                    {/* Stacked Pillar Card: Image first, followed by Title, Description, Details, CTA */}
                    <div 
                      className={`rounded-[22px] overflow-hidden bg-[#0A1324] border transition-all duration-300 shadow-xl ${
                        isActive 
                          ? 'border-[#D6AE70]/60 shadow-[0_8px_30px_rgba(214,174,112,0.15)] ring-1 ring-[#D6AE70]/30' 
                          : isPast
                            ? 'border-[#1E3355]'
                            : 'border-[#162744] opacity-80'
                      }`}
                    >
                      {/* Image Frame First on Mobile */}
                      <div 
                        onClick={() => setReadingArticle(pillar.article)}
                        className="relative min-h-[300px] w-full overflow-hidden bg-[#050B16] cursor-pointer group"
                      >
                        <SectionPhoto group="articles" index={Number(pillar.pillarNumStr) - 1} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1324] via-transparent to-black/30 pointer-events-none" />

                        {/* Badges on mobile image */}
                        <div className="absolute top-3.5 left-3.5 flex items-center gap-2 z-10">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#050B16]/90 backdrop-blur-md border border-[#D6AE70]/40 text-[#D6AE70] font-mono text-[10px] font-bold">
                            {t(pillar.pillarLabel)}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#050B16]/80 backdrop-blur-md border border-[#162744] text-[#8B9CB3] text-[10px]">
                            {t(pillar.badge)}
                          </span>
                        </div>

                        <div className="absolute bottom-2.5 left-3 right-3 text-[11px] text-[#8B9CB3] font-light truncate bg-[#050B16]/80 px-2.5 py-1 rounded-md border border-[#162744]/70">
                          {t(pillar.article.category)}
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-6 sm:p-7 space-y-4">
                        <div className="flex items-center justify-between text-xs text-[#8B9CB3]">
                          <span className="flex items-center gap-1 font-mono text-[#D6AE70]">
                            <Clock className="w-3.5 h-3.5" />
                            {t(pillar.article.readTime)}
                          </span>
                          <span className="font-light text-[11px]">
                            {t(pillar.article.publishedDate)}
                          </span>
                        </div>

                        <h3 
                          onClick={() => setReadingArticle(pillar.article)}
                          className="text-xl sm:text-2xl font-extrabold text-white font-sans leading-tight cursor-pointer hover:text-[#D6AE70] transition-colors"
                        >
                          {t(pillar.article.title)}
                        </h3>

                        {pillar.article.subtitle && (
                          <div className="text-xs sm:text-sm text-[#D6AE70] font-medium leading-snug">
                            {t(pillar.article.subtitle)}
                          </div>
                        )}

                        <p className="text-xs sm:text-sm text-[#8B9CB3] font-light leading-relaxed">
                          {t(pillar.article.summary)}
                        </p>

                        {/* Key Takeaways Snippet */}
                        {pillar.article.keyTakeaways && pillar.article.keyTakeaways.length > 0 && (
                          <div className="p-3.5 rounded-xl bg-[#050B16] border border-[#162744] space-y-1.5">
                            <div className="text-[10px] uppercase font-mono tracking-wider text-[#D6AE70] font-semibold">{t("Zentrale Hebel:")}</div>
                            <div className="text-xs text-[#8B9CB3] line-clamp-2">
                              • {t(pillar.article.keyTakeaways[0])}
                            </div>
                          </div>
                        )}

                        {/* Bottom CTA Bar */}
                        <div className="pt-3 border-t border-[#162744] flex items-center justify-between">
                          <div className="text-[11px] text-[#8B9CB3]">{t("Von ")}<strong className="text-white font-medium">{t(pillar.article.author)}</strong>
                          </div>
                          <button
                            onClick={() => setReadingArticle(pillar.article)}
                            className="text-xs font-semibold text-[#D6AE70] hover:text-[#E2C492] flex items-center gap-1.5 transition-colors cursor-pointer py-1"
                          >
                            <span>{t("Vollständige Analyse lesen")}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Reader Modal (Preserving all existing reading functionality, details & CTAs) */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#0A1324] rounded-2xl border border-[#162744] p-6 sm:p-10 max-h-[90vh] overflow-y-auto shadow-2xl shadow-black">
            
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-[#8B9CB3] hover:text-white bg-[#050B16] border border-[#162744] cursor-pointer transition-colors"
              aria-label={t("Modal schließen")}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="space-y-2">
                <span className="gold-eyebrow">{t("Säule 0")}{t(readingArticle.pillarNumber)} · {t(readingArticle.category)} · {t(readingArticle.readTime)}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans mt-2">
                  {t(readingArticle.title)}
                </h3>
                {readingArticle.subtitle && (
                  <p className="text-sm text-[#D6AE70] font-medium">
                    {t(readingArticle.subtitle)}
                  </p>
                )}
                <div className="text-xs text-[#8B9CB3]">{t("Autor: ")}<strong className="text-white font-medium">{t(readingArticle.author)}</strong>{t(" (Geschäftsführer & Gesellschafter Arventas) · ")}{t(readingArticle.publishedDate)}
                </div>
              </div>

              {/* Cover Image in Modal */}
              <div className="relative min-h-[260px] w-full rounded-xl overflow-hidden bg-[#050B16]">
                <SectionPhoto group="articles" index={(readingArticle.pillarNumber || 1) - 1} />
              </div>

              <div className="p-4 rounded-xl bg-[#0D182E] border border-[#D6AE70]/30 italic text-sm text-[#D6AE70]">
                „{t(readingArticle.summary)}“
              </div>

              {/* Full Article Content */}
              {readingArticle.fullContent && (
                <div className="text-sm text-[#8B9CB3] leading-relaxed font-light space-y-4">
                  {readingArticle.fullContent.map((paragraph, idx) => (
                    <p key={idx}>{t(paragraph)}</p>
                  ))}
                </div>
              )}

              {/* Key Takeaways */}
              {readingArticle.keyTakeaways && (
                <div className="p-5 rounded-xl bg-[#050B16] border border-[#162744] space-y-2.5">
                  <div className="text-xs uppercase tracking-wider text-[#D6AE70] font-mono font-semibold">{t("Zentrale Erkenntnisse für Investoren:")}</div>
                  <ul className="space-y-2 text-xs text-[#8B9CB3] font-light">
                    {readingArticle.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{t(takeaway)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Banner */}
              <div className="pt-4 border-t border-[#162744] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#8B9CB3]">{t("Möchten Sie diese Strategie auf Ihr Portfolio anwenden?")}</div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setReadingArticle(null);
                      onOpenConsultation();
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#D6AE70] hover:bg-[#E2C492] text-[#050B16] cursor-pointer shadow-lg shadow-[#D6AE70]/15 uppercase tracking-wider transition-all"
                  >{t("1:1 Gespräch vereinbaren")}</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};

/* --- SUB-COMPONENTS FOR TIMELINE --- */

/**
 * Timeline Number Marker Node
 */
interface PillarMarkerProps {
  numStr: string;
  isActive: boolean;
  isPast: boolean;
  compact?: boolean;
}

const PillarMarker: React.FC<PillarMarkerProps> = ({
  numStr,
  isActive,
  isPast,
  compact = false
}) => {
  const { t, locale, localizedImage } = useLanguage();
  const sizeClasses = compact ? 'w-10 h-10 text-xs' : 'w-12 h-12 text-sm';

  if (isActive) {
    return (
      <div 
        className={`${sizeClasses} rounded-full bg-[#D6AE70] text-[#050B16] font-mono font-bold flex items-center justify-center shadow-[0_0_22px_rgba(214,174,112,0.65)] ring-4 ring-[#D6AE70]/30 transition-all duration-300 scale-110 z-20`}
      >
        {t(numStr)}
      </div>
    );
  }

  if (isPast) {
    return (
      <div 
        className={`${sizeClasses} rounded-full bg-[#081222] border-2 border-[#D6AE70] text-[#D6AE70] font-mono font-bold flex items-center justify-center transition-all duration-300 shadow-md shadow-black/60 z-10`}
      >
        <span className="flex items-center justify-center gap-0.5">
          <Check className="w-3.5 h-3.5 text-[#D6AE70]" />
        </span>
      </div>
    );
  }

  // Upcoming / Inactive
  return (
    <div 
      className={`${sizeClasses} rounded-full bg-[#081020] border border-[#162744] text-[#8B9CB3] font-mono font-semibold flex items-center justify-center transition-all duration-300 shadow-sm z-10`}
    >
      {t(numStr)}
    </div>
  );
};

/**
 * Desktop Content Panel
 */
interface PillarContentPanelProps {
  pillar: PillarItemConfig;
  isActive: boolean;
  isPast: boolean;
  onOpenArticle: () => void;
}

const PillarContentPanel: React.FC<PillarContentPanelProps> = ({
  pillar,
  isActive,
  isPast,
  onOpenArticle
}) => {
  const { t, locale, localizedImage } = useLanguage();
  return (
    <div 
      className={`rounded-[22px] p-8 xl:p-9 bg-[#0A1324] border transition-all duration-500 shadow-2xl relative group ${
        isActive 
          ? 'border-[#D6AE70]/70 shadow-[0_12px_40px_rgba(0,0,0,0.85)] ring-1 ring-[#D6AE70]/25' 
          : isPast
            ? 'border-[#1E3355] opacity-90'
            : 'border-[#162744] opacity-60 hover:opacity-90'
      }`}
    >
      {/* Restrained Champagne-Gold Accent Detail */}
      <div 
        className={`w-12 h-1 rounded-full mb-6 transition-all duration-500 ${
          isActive ? 'bg-[#D6AE70] w-16' : 'bg-[#162744]'
        }`} 
      />

      <div className="space-y-4">
        {/* Label & Meta Header */}
        <div className="flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#050B16] border border-[#162744] text-[#D6AE70] font-mono text-[11px] font-semibold tracking-wide">
              {t(pillar.pillarLabel)}
            </span>
            <span className="text-[#8B9CB3] font-mono text-[11px] uppercase tracking-wider">
              {t(pillar.badge)}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[#8B9CB3] font-mono text-[11px]">
            <Clock className="w-3.5 h-3.5 text-[#D6AE70]" />
            <span>{t(pillar.article.readTime)}</span>
          </div>
        </div>

        {/* Title */}
        <h3 
          onClick={onOpenArticle}
          className="text-2xl xl:text-3xl font-extrabold text-white font-sans leading-tight tracking-tight cursor-pointer group-hover:text-[#D6AE70] transition-colors"
        >
          {t(pillar.article.title)}
        </h3>

        {/* Subtitle */}
        {pillar.article.subtitle && (
          <div className="text-xs xl:text-sm text-[#D6AE70] font-semibold leading-relaxed">
            {t(pillar.article.subtitle)}
          </div>
        )}

        {/* Summary Description */}
        <p className="text-sm text-[#8B9CB3] font-light leading-relaxed">
          {t(pillar.article.summary)}
        </p>

        {/* Key Takeaway Highlight Box */}
        {pillar.article.keyTakeaways && pillar.article.keyTakeaways.length > 0 && (
          <div className="p-3.5 rounded-xl bg-[#050B16]/90 border border-[#162744] space-y-1.5">
            <div className="text-[10px] uppercase font-mono tracking-wider text-[#D6AE70] font-semibold">{t("Zentrale Hebel:")}</div>
            <div className="text-xs text-[#8B9CB3] line-clamp-2">
              • {t(pillar.article.keyTakeaways[0])}
            </div>
          </div>
        )}

        {/* Action Footer */}
        <div className="pt-4 border-t border-[#162744]/90 flex items-center justify-between">
          <div className="text-xs text-[#8B9CB3]">{t("Von ")}<strong className="text-white font-medium">{t(pillar.article.author)}</strong>
          </div>
          <button
            onClick={onOpenArticle}
            className="text-xs font-semibold text-[#D6AE70] hover:text-[#E2C492] flex items-center gap-1.5 transition-all cursor-pointer group-hover:translate-x-1"
          >
            <span>{t("Vollständige Analyse lesen")}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Desktop Image Frame
 */
interface PillarImageCardProps {
  pillar: PillarItemConfig;
  isActive: boolean;
  isPast: boolean;
  onClick: () => void;
}

const PillarImageCard: React.FC<PillarImageCardProps> = ({
  pillar,
  isActive,
  isPast,
  onClick
}) => {
  const { t, locale, localizedImage } = useLanguage();
  return (
    <div 
      onClick={onClick}
      className={`relative min-h-[320px] rounded-[22px] overflow-hidden bg-[#050B16] border transition-all duration-500 cursor-pointer shadow-2xl group ${
        isActive 
          ? 'border-[#D6AE70]/60 shadow-[0_12px_40px_rgba(0,0,0,0.85)] ring-1 ring-[#D6AE70]/25' 
          : isPast
            ? 'border-[#1E3355] opacity-90'
            : 'border-[#162744] opacity-60 hover:opacity-90'
      }`}
    >
      <SectionPhoto group="articles" index={Number(pillar.pillarNumStr) - 1} />
      <div 
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-[#050B16] via-transparent to-black/20 ${
          isActive ? 'opacity-70' : 'opacity-85 group-hover:opacity-75'
        }`} 
      />

      {/* Top Floating Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 rounded-full bg-[#050B16]/85 backdrop-blur-md border border-[#D6AE70]/40 text-[#D6AE70] font-mono text-[11px] font-bold tracking-wider">
          {t(pillar.pillarLabel)} · {t(pillar.badge)}
        </span>
      </div>

      {/* Bottom Frosted Caption Strip */}
      <div className="absolute bottom-4 left-4 right-4 z-10 px-4 py-2 rounded-xl bg-[#050B16]/85 backdrop-blur-md border border-[#162744] text-xs text-[#8B9CB3] font-light flex items-center justify-between gap-3">
        <span className="truncate">{t(pillar.article.category)}</span>
        <span className="shrink-0 text-[11px] text-[#D6AE70] font-mono font-medium">
          {t(pillar.pillarNumStr)} / 07
        </span>
      </div>
    </div>
  );
};

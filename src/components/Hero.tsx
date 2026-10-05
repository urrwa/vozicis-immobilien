import { useLanguage } from '../i18n/LanguageContext';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Calendar, 
  Building2, 
  Percent, 
  ChevronRight,
  Eye,
  Camera
} from 'lucide-react';
import { BRAND_IMAGES } from '../data/brandAssets';
import { FOUNDER_PHOTOS } from '../data/founderPhotos';

interface HeroProps {
  onOpenStrategyCheck: () => void;
  onOpenConsultation: () => void;
  onOpenLookbook?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenStrategyCheck,
  onOpenConsultation,
  onOpenLookbook
}) => {
  const { t, language, locale, localizedImage } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [activeVisual, setActiveVisual] = useState(0);
  const visualTabs = [
    { label: 'Analyse', image: BRAND_IMAGES.marketAnalysisPresentation.localSrc, de: 'Marktanalyse mit Ioannis Vozicis', en: 'Market analysis with Ioannis Vozicis' },
    { label: 'Boardroom', image: '/images/brand/08.png', de: 'Strategischer Austausch im Boardroom', en: 'Strategic discussion in the boardroom' },
    { label: 'Advisory', image: BRAND_IMAGES.executiveConsultingLounge.localSrc, de: 'Persönliche Beratung mit Ioannis Vozicis', en: 'Personal advice with Ioannis Vozicis' },
    { label: 'Notariat', image: BRAND_IMAGES.dealClosingPartnership.localSrc, de: 'Partnerschaft & Transaktionsbegleitung', en: 'Partnership & transaction support' },
  ];
  const selectedVisual = visualTabs[activeVisual];

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const parallaxBgX = useTransform(smoothMouseX, [-500, 500], [-12, 12]);
  const parallaxBgY = useTransform(smoothMouseY, [-500, 500], [-8, 8]);
  const parallaxFloatX = useTransform(smoothMouseX, [-500, 500], [18, -18]);
  const parallaxFloatY = useTransform(smoothMouseY, [-500, 500], [14, -14]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const currentVisual = {
    image: FOUNDER_PHOTOS.hero[activeVisual],
    fallback: BRAND_IMAGES.founderPortrait.localSrc,
    tag: language === 'en' ? selectedVisual.en : selectedVisual.de,
    caption: language === 'en' ? selectedVisual.en : selectedVisual.de,
    highlight: '1:1 Mandantenbetreuung',
    sub: 'Persönlich mit Ioannis Vozicis'
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] lg:min-h-[96vh] flex items-center justify-center overflow-hidden bg-[#050B16] pt-8 pb-16 lg:py-24 bg-tech-grid"
    >
      {/* Background Architectural Canvas with subtle mouse parallax & dark navy cinematic overlay */}
      <motion.div 
        style={{ x: parallaxBgX, y: parallaxBgY }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#12243b] via-[#0A1324] to-[#050B16]" aria-hidden="true" />

        {/* Deep navy cinematic vignette gradients matching ARVENTAS atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-[#050B16]/90 to-[#050B16]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B16] via-[#050B16]/85 to-transparent" />
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#050B16] to-transparent" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Cinematic Modern Typography & Intent */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Small Section Eyebrow with gold dash prefix inspired by ARVENTAS */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3"
            >
              <span className="w-6 h-[1px] bg-[#D6AE70]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#D6AE70]">{t("VOZICIS IMMOBILIEN")}</span>
              <span className="text-[#1E3156]">•</span>
              <span className="text-[11px] text-[#8B9CB3] font-medium tracking-widest uppercase hidden sm:inline">{t("ARVENTAS PARTNERSCHAFT")}</span>
            </motion.div>

            {/* Main Headline: Bold, large, clean, tightly spaced geometric sans-serif */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">{t("Kapital. Immobilien.")}{t(' ')}
                <span className="block text-[#D6AE70]">{t("Strategische Entscheidungen.")}</span>
              </h1>
            </motion.div>

            {/* Supporting Text: Muted blue-grey */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#8B9CB3] font-light leading-relaxed max-w-2xl"
            >{t("Wir verbinden Kapital, Immobilien und Menschen durch strategische Entscheidungen und langfristige Partnerschaften.")}</motion.p>

            {/* Contextual Value Metadata Tags */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2.5 pt-1 text-xs text-[#8B9CB3]"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6AE70]" />
                <span className="text-slate-200 font-medium">{t("Off-Market Liegenschaften")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6AE70]" />
                <span className="text-slate-200 font-medium">{t("§ 7i Denkmal- & Sonder-AfA")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6AE70]" />
                <span className="text-slate-200 font-medium">{t("Diskrete 1:1 Mandatsführung")}</span>
              </div>
            </motion.div>

            {/* CTAs: Primary & Secondary with Controlled Micro-interactions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              {/* Primary CTA */}
              <button
                id="hero-primary-cta"
                onClick={onOpenStrategyCheck}
                className="group relative px-8 py-3.5 rounded-full bg-[#D6AE70] hover:bg-[#E2C492] text-[#050B16] font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-xl shadow-[#D6AE70]/15 hover:shadow-[#D6AE70]/25 flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>{t("Immobilienstrategie starten")}</span>
                <ArrowRight className="w-4 h-4 text-[#050B16] group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
              </button>

              {/* Secondary CTA */}
              <a
                href="#ioannis"
                className="group px-7 py-3.5 rounded-full bg-transparent hover:bg-[#0A1324] text-[#8B9CB3] hover:text-white border border-[#1E3156] hover:border-[#D6AE70]/40 font-medium text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer backdrop-blur-sm"
              >
                <span>{t("Mehr über Ioannis")}</span>
                <ChevronRight className="w-4 h-4 text-[#D6AE70] group-hover:translate-x-1 transition-transform duration-300 ease-out" />
              </a>
            </motion.div>

          </motion.div>

          {/* Right Column: Layered Cinematic Image Composition with Parallax */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Warm Underglow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#D6AE70]/10 via-[#D6AE70]/5 to-transparent rounded-3xl blur-2xl pointer-events-none" />

            {/* Main Stage Container */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0A1324] border border-[#162744] shadow-2xl shadow-black/80">
              
              {/* Image Frame - 1:1 Aspect Ratio Square */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#050B16]">
                <AnimatePresence initial={false}>
                <motion.img
                  key={currentVisual.image}
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.45, ease: 'easeOut' }}
                  src={localizedImage(currentVisual.image)}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = currentVisual.fallback;
                  }}
                  alt={t(currentVisual.tag)}
                  className="absolute inset-0 w-full h-full object-cover brightness-90 contrast-[1.05]"
                  style={{ objectPosition: '50% 15%' }}
                />
                </AnimatePresence>
                
                {/* Subtle dark navy vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1324] via-transparent to-black/30 pointer-events-none" />

                {/* Perspective Tag Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-3 py-1 rounded-full bg-[#050B16]/80 backdrop-blur-md border border-[#162744] text-[11px] font-medium text-[#D6AE70] tracking-wider">
                    {t(currentVisual.tag)}
                  </div>
                </div>

                {/* Floating Stat Overlay at Top Right */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3.5 py-1.5 rounded-xl bg-[#050B16]/85 backdrop-blur-md border border-[#162744] text-right shadow-lg">
                    <div className="text-[10px] uppercase font-mono text-[#8B9CB3] tracking-wider">
                      {t(currentVisual.sub)}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white">
                      {t(currentVisual.highlight)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Stage Control */}
              <div className="p-4 sm:p-5 bg-[#08101E] border-t border-[#162744] space-y-3">
                <div role="group" aria-label={language === 'en' ? 'Photo views' : 'Bildansichten'} className="grid grid-cols-4 gap-1 rounded-2xl border border-[#162744] bg-[#050B16] p-1">
                  {visualTabs.map((tab, index) => <button key={tab.label} type="button" aria-pressed={activeVisual === index} onClick={() => setActiveVisual(index)}
                    className={`relative rounded-xl py-3 text-[10px] sm:text-xs focus-visible:outline-2 focus-visible:outline-[#D6AE70] ${activeVisual === index ? 'text-[#050B16]' : 'text-[#8B9CB3] hover:text-white'}`}>
                    {activeVisual === index && <motion.span layoutId="hero-photo-highlight" transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 360, damping: 32 }} className="absolute inset-0 rounded-xl bg-[#D6AE70] shadow-lg shadow-[#D6AE70]/10" />}
                    <span className="relative z-10">{t(tab.label)}</span>
                  </button>)}
                </div>
                
                {/* Caption & Lookbook Link */}
                <div className="flex items-center justify-between text-xs text-[#8B9CB3] font-light pt-1 px-1">
                  <div className="flex items-center gap-1.5 truncate">
                    <Eye className="w-3.5 h-3.5 text-[#D6AE70] shrink-0" />
                    <span className="truncate text-[11px] text-slate-300">{t(currentVisual.caption)}</span>
                  </div>
                  {onOpenLookbook && (
                    <button
                      onClick={onOpenLookbook}
                      className="shrink-0 text-[11px] text-[#D6AE70] hover:text-[#E2C492] font-medium underline underline-offset-4 cursor-pointer pl-2"
                    >{t("Einblicke")}</button>
                  )}
                </div>

              </div>

            </div>

            {/* Secondary Floating Accent Card */}
            <motion.div 
              style={{ x: parallaxFloatX, y: parallaxFloatY }}
              className="hidden sm:flex absolute -bottom-6 -left-6 p-4 rounded-xl bg-[#0A1324]/95 backdrop-blur-xl border border-[#162744] shadow-2xl items-center gap-3.5 max-w-xs z-20"
            >
              <div className="w-10 h-10 rounded-lg bg-[#050B16] border border-[#D6AE70]/40 flex items-center justify-center shrink-0 text-[#D6AE70]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white">{t("Geprüfte Qualität")}</div>
                <div className="text-[#8B9CB3] font-light text-[11px]">{t("Nur ca. 4% aller Vorlagen bestehen unsere 5-Stufen-Prüfung.")}</div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

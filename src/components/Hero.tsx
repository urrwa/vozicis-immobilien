import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ArrowDown, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { FOUNDER_PHOTOS } from '../data/founderPhotos';
import './Hero.css';

interface HeroProps {
  onOpenStrategyCheck: () => void;
  onOpenConsultation: () => void;
  onOpenLookbook?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenStrategyCheck, onOpenConsultation, onOpenLookbook }) => {
  const { t, language } = useLanguage();
  const reduced = useReducedMotion();
  const [activeVisual, setActiveVisual] = useState(0);
  const en = language === 'en';
  const views = [
    { label: 'Analyse', de: 'Marktanalyse mit Ioannis Vozicis', en: 'Market analysis with Ioannis Vozicis' },
    { label: 'Boardroom', de: 'Strategischer Austausch im Boardroom', en: 'Strategic discussion in the boardroom' },
    { label: 'Advisory', de: 'Persönliche Beratung mit Ioannis Vozicis', en: 'Personal advice with Ioannis Vozicis' },
    { label: 'Notariat', de: 'Partnerschaft & Transaktionsbegleitung', en: 'Partnership & transaction support' },
  ];
  const reveal = { initial: reduced ? false : { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7 } };
  return <section id="home" className="estate-hero" aria-labelledby="hero-title">
    <div className="estate-hero-canvas">
      <img className="estate-architecture" src="/images/sections/19366883.jpg" alt="" fetchPriority="high" />
      <div className="estate-hero-shade" />
      <div className="estate-hero-content">
        <div className="estate-hero-kicker"><span>{en ? 'REAL ESTATE. WITH PERSPECTIVE.' : 'IMMOBILIEN. MIT WEITBLICK.'}</span><span>VOZICIS × ARVENTAS</span></div>
        <div className="estate-hero-grid">
          <motion.div {...reveal} className="estate-hero-copy">
            <div className="estate-overline"><span />{en ? 'Your ambition. A considered strategy.' : 'Ihr Anspruch. Eine durchdachte Strategie.'}</div>
            <h1 id="hero-title">{t('Kapital. Immobilien.')}<em>{t('Strategische Entscheidungen.')}</em></h1>
            <p>{t('Wir verbinden Kapital, Immobilien und Menschen durch strategische Entscheidungen und langfristige Partnerschaften.')}</p>
            <div className="estate-hero-actions">
              <button id="hero-primary-cta" onClick={onOpenStrategyCheck} className="estate-primary">{t('Immobilienstrategie starten')}<ArrowUpRight size={20} /></button>
              <button onClick={onOpenConsultation} className="estate-text-link">{en ? 'Let’s talk' : 'Persönlich sprechen'}<ArrowUpRight size={18} /></button>
            </div>
            <div className="estate-hero-note"><ShieldCheck size={16} />{en ? 'Personal advice. A long-term perspective.' : 'Persönliche Beratung. Langfristige Perspektiven.'}</div>
          </motion.div>
          <motion.div {...reveal} transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.15 }} className="estate-founder-panel">
            <div className="estate-founder-top"><span>{en ? 'YOUR STRATEGIC PARTNER' : 'IHR STRATEGISCHER PARTNER'}</span><span>0{activeVisual + 1} / 04</span></div>
            <div className="estate-founder-image">
              <AnimatePresence initial={false}>
                <motion.img key={activeVisual} src={FOUNDER_PHOTOS.hero[activeVisual]} alt={en ? views[activeVisual].en : views[activeVisual].de}
                  initial={reduced ? false : { opacity: 0, scale: 1.035 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.4 }} />
              </AnimatePresence>
              <a href="#ioannis" className="estate-founder-link" aria-label={t('Mehr über Ioannis')}><ArrowUpRight size={22} /></a>
            </div>
            <div className="estate-founder-identity"><div><strong>Ioannis Vozicis</strong><span>{en ? 'Personal real estate advisory' : 'Persönliche Immobilienberatung'}</span></div><span className="estate-monogram">V</span></div>
            <div className="estate-photo-tabs" role="group" aria-label={en ? 'Photo views' : 'Bildansichten'}>
              {views.map((view, i) => <button key={view.label} onClick={() => setActiveVisual(i)} aria-pressed={i === activeVisual}>{t(view.label)}</button>)}
            </div>
            {onOpenLookbook && <button className="estate-gallery-link" onClick={onOpenLookbook}>{en ? 'A closer look at our work' : 'Einblicke in unsere Arbeit'}<ArrowRight size={16} /></button>}
          </motion.div>
        </div>
        <div className="estate-hero-bottom"><a href="#pillars"><ArrowDown size={16} />{en ? 'Discover our approach' : 'Unseren Ansatz entdecken'}</a><span>{en ? 'Independent thinking. Connected expertise.' : 'Unabhängig denken. Gemeinsam gestalten.'}</span></div>
      </div>
    </div>
    <div className="estate-service-strip">
      {[
        ['01', t('Off-Market Liegenschaften'), en ? 'Access with a clear purpose' : 'Zugang mit klarer Perspektive', '#matching'],
        ['02', t('§ 7i Denkmal- & Sonder-AfA'), en ? 'Structure before selection' : 'Struktur vor Objektauswahl', '#positioning'],
        ['03', t('Diskrete 1:1 Mandatsführung'), en ? 'A partner at every stage' : 'Ein Partner in jeder Phase', '#ioannis'],
      ].map(([number, title, subtitle, href]) => <a href={href} key={number}><span className="estate-service-number">{number}</span><div><strong>{title}</strong><span>{subtitle}</span></div><ArrowUpRight size={18} /></a>)}
    </div>
  </section>;
};

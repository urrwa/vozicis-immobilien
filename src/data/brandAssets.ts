/**
 * Brand imagery and review-requested process illustration direction for VOZICIS IMMOBILIEN & Ioannis Vozicis
 * Sourced from Cloudinary Collections:
 * 1. https://collection.cloudinary.com/yqpz5zob/0fc9236a3a02f180d8dee7300e0f76fa
 * 2. https://collection.cloudinary.com/yqpz5zob/33b5681e6ed651b5511b56848d66a620
 */

export interface BrandImage {
  id: string;
  localSrc: string;
  cdnSrc: string;
  title: string;
  subtitle: string;
  alt: string;
  aspect?: string;
  category?: 'founder' | 'strategy' | 'property' | 'closing' | 'lifestyle';
}

export const BRAND_IMAGES = {
  // --- EXECUTIVE & FOUNDER (IOANNIS VOZICIS) ---
  founderPortrait: {
    id: '09',
    localSrc: '/images/brand/09.png',
    cdnSrc: 'https://res.cloudinary.com/yqpz5zob/image/upload/v1789220996/09.png',
    title: 'Ioannis Vozicis',
    subtitle: 'Geschäftsführer & Gesellschafter Arventas · Gründer VOZICIS IMMOBILIEN',
    alt: 'Porträt von Ioannis Vozicis in exklusivem Ambiente mit Weitblick',
    aspect: '4:5',
    category: 'founder'
  },

  founderPortraitEditorial: {
    id: 'magnific_s73pV29l8e',
    localSrc: '/images/brand/magnific_use-the-uploaded-referenc_s73pV29l8e.png',
    cdnSrc: 'https://res.cloudinary.com/yqpz5zob/image/upload/v1789222276/magnific_use-the-uploaded-referenc_s73pV29l8e.png',
    title: 'Ioannis Vozicis – Editorial',
    subtitle: 'Souveräne Kapital- und Sachwertarchitektur',
    alt: 'Hochauflösendes Editorial-Porträt von Ioannis Vozicis',
    aspect: '4:5',
    category: 'founder'
  },

  founderCinematicPanorama: {
    id: 'magnific_1l4o4Xjr4r',
    localSrc: '/images/brand/magnific_hyperrealistic-portrait-o_1l4o4Xjr4r.png',
    cdnSrc: 'https://res.cloudinary.com/yqpz5zob/image/upload/v1789222277/magnific_hyperrealistic-portrait-o_1l4o4Xjr4r.png',
    title: 'Executive Panorama',
    subtitle: 'Persönliche Führung & institutionelle Verhandlungskompetenz',
    alt: 'Cinematisches Panoramaporträt von Ioannis Vozicis vor moderner Architektur',
    aspect: '21:9',
    category: 'founder'
  },

  // --- BOARDROOM & PRESENTATION ---
  marketAnalysisPresentation: {
    id: 'magnific_s73hzYOl8e',
    localSrc: '/images/brand/magnific_hyperrealistic-image-of-i_s73hzYOl8e.png',
    cdnSrc: 'https://res.cloudinary.com/yqpz5zob/image/upload/v1789220999/magnific_hyperrealistic-image-of-i_s73hzYOl8e.png',
    title: 'Marktanalyse & Investoren-Briefing',
    subtitle: 'Präsentation datenbasierter Immobilienstrategien vor Investoren',
    alt: 'Ioannis Vozicis präsentiert Real Estate Market Analysis vor Geschäftsführung und Investoren',
    aspect: '16:9',
    category: 'strategy'
  },

  heroBoardroom: {
    id: '08',
    localSrc: '/images/review/network.svg',
    cdnSrc: '/images/review/network.svg',
    title: 'Persönliche Beratung',
    subtitle: 'Ihre Ziele, gemeinsame Strategie und nächste Schritte',
    alt: 'Persönliche Beratung: Ihre Ziele, gemeinsame Strategie und nächste Schritte',
    aspect: '16:9',
    category: 'strategy'
  },

  executiveConsultingLounge: {
    id: 'magnific_hur9SGHvqL',
    localSrc: '/images/brand/magnific_use-the-uploaded-referenc_hur9SGHvqL.png',
    cdnSrc: 'https://res.cloudinary.com/yqpz5zob/image/upload/v1789222277/magnific_use-the-uploaded-referenc_hur9SGHvqL.png',
    title: 'Exklusive Private-Client Lounge',
    subtitle: 'Diskrete Off-Market Beratung und Transaktionsvorbereitung',
    alt: 'Elegante Besprechungslounge für anspruchsvolle Investorengespräche',
    aspect: '16:9',
    category: 'strategy'
  },

  wealthAdvisorySuite: {
    id: '15',
    localSrc: '/images/review/strategy.svg',
    cdnSrc: '/images/review/strategy.svg',
    title: 'Strategie-Check',
    subtitle: 'Ziele, Kapital und individuelles Profil',
    alt: 'Strategie-Check: Ziele, Kapital und individuelles Profil',
    aspect: '1:1',
    category: 'strategy'
  },

  // --- PROPERTIES & DUE DILIGENCE ---
  projectDevelopmentBlueprints: {
    id: '05_1',
    localSrc: '/images/review/matching.svg',
    cdnSrc: '/images/review/matching.svg',
    title: 'Strukturierte Objektprüfung',
    subtitle: 'Passende Immobilien anhand Ihres Profils',
    alt: 'Strukturierte Objektprüfung: Passende Immobilien anhand Ihres Profils',
    aspect: '1:1',
    category: 'property'
  },

  luxuryVillaInspection: {
    id: '27',
    localSrc: '/images/brand/27.png',
    cdnSrc: 'https://res.cloudinary.com/yqpz5zob/image/upload/v1789220995/27.png',
    title: 'Exklusive Liegenschaften & Wohnwerte',
    subtitle: 'Off-Market Portfolio und vorselektierte Premium-Objekte',
    alt: 'Besichtigung einer modernen Luxusvilla mit Pool und Exposé',
    aspect: '1:1',
    category: 'property'
  },

  urbanPropertyAppraisal: {
    id: '19',
    localSrc: '/images/review/matching.svg',
    cdnSrc: '/images/review/matching.svg',
    title: 'Immobilienmatching',
    subtitle: 'Investorenprofil, Objektprüfung und passende Immobilie',
    alt: 'Immobilienmatching: Investorenprofil, Objektprüfung und passende Immobilie',
    aspect: '1:1',
    category: 'property'
  },

  countrysideEstate: {
    id: '10',
    localSrc: '/images/brand/10.png',
    cdnSrc: 'https://res.cloudinary.com/yqpz5zob/image/upload/v1789220996/10.png',
    title: 'Traditionelle Anwesen & Generationenwerte',
    subtitle: 'Ländliche Liegenschaften und historische Denkmäler',
    alt: 'Liegenschaftsanalyse auf einem historischen Landgut',
    aspect: '1:1',
    category: 'property'
  },

  // --- TRANSACTIONS & CLOSINGS ---
  dealClosingPartnership: {
    id: '17',
    localSrc: '/images/brand/17.png',
    cdnSrc: 'https://res.cloudinary.com/yqpz5zob/image/upload/v1789220995/17.png',
    title: 'Kapitalpartnerschaft & Deal-Closing',
    subtitle: 'Handschlagqualität und langfristige Partnerschaften auf Augenhöhe',
    alt: 'Handschlag zweier Geschäftspartner vor Skyline-Panorama',
    aspect: '1:1',
    category: 'closing'
  },

  notaryClosingExecution: {
    id: '19_1',
    localSrc: '/images/review/partnership.svg',
    cdnSrc: '/images/review/partnership.svg',
    title: 'Langfristige Partnerschaft',
    subtitle: 'Abstimmung, Umsetzung und persönliche Begleitung',
    alt: 'Langfristige Partnerschaft: Abstimmung, Umsetzung und persönliche Begleitung',
    aspect: '1:1',
    category: 'closing'
  },

  // --- LIFESTYLE, MOBILITY & REACH ---
  institutionalHospitality: {
    id: '07',
    localSrc: '/images/review/people.svg',
    cdnSrc: '/images/review/people.svg',
    title: 'Persönliche Zusammenarbeit',
    subtitle: 'Vom Kontakt zur vertrauensvollen Partnerschaft',
    alt: 'Persönliche Zusammenarbeit: Vom Kontakt zur vertrauensvollen Partnerschaft',
    aspect: '1:1',
    category: 'lifestyle'
  },

  privateJetMobility: {
    id: '05',
    localSrc: '/images/review/contact.svg',
    cdnSrc: '/images/review/contact.svg',
    title: 'Persönlicher Kontakt',
    subtitle: 'Ihre Anfrage und die nächsten Schritte',
    alt: 'Persönlicher Kontakt: Ihre Anfrage und die nächsten Schritte',
    aspect: '1:1',
    category: 'lifestyle'
  },

  internationalWealth: {
    id: '28',
    localSrc: '/images/review/capital.svg',
    cdnSrc: '/images/review/capital.svg',
    title: 'Strategische Kapitalplanung',
    subtitle: 'Strukturierte Orientierung für Ihre Ziele',
    alt: 'Strategische Kapitalplanung: Strukturierte Orientierung für Ihre Ziele',
    aspect: '1:1',
    category: 'lifestyle'
  },

  investorJourneyTravel: {
    id: '21',
    localSrc: '/images/review/contact.svg',
    cdnSrc: '/images/review/contact.svg',
    title: 'Neuer Kontakt',
    subtitle: 'Persönlicher Austausch und Orientierung',
    alt: 'Neuer Kontakt: Persönlicher Austausch und Orientierung',
    aspect: '1:1',
    category: 'lifestyle'
  },

  wealthPreservationLifestyle: {
    id: '24',
    localSrc: '/images/brand/24.png',
    cdnSrc: 'https://res.cloudinary.com/yqpz5zob/image/upload/v1789220996/24.png',
    title: 'Vermögenssicherung & Lebensqualität',
    subtitle: 'Passiver Cashflow und Inflationsschutz für persönliche Freiheit',
    alt: 'Entspannung auf einer Luxusyacht als Sinnbild für finanzielle Souveränität',
    aspect: '1:1',
    category: 'lifestyle'
  }
} as const;

export type BrandImageKey = keyof typeof BRAND_IMAGES;

/**
 * Array list of all brand images for galleries and showcases
 */
export const ALL_BRAND_IMAGES = [BRAND_IMAGES.founderPortrait, BRAND_IMAGES.founderPortraitEditorial, BRAND_IMAGES.countrysideEstate, BRAND_IMAGES.luxuryVillaInspection, BRAND_IMAGES.marketAnalysisPresentation, BRAND_IMAGES.executiveConsultingLounge, BRAND_IMAGES.dealClosingPartnership];

/**
 * Helper to get image src with fallback to CDN if local isn't loaded
 */
export const getBrandImageSrc = (key: BrandImageKey): string => {
  return BRAND_IMAGES[key]?.localSrc || BRAND_IMAGES[key]?.cdnSrc;
};

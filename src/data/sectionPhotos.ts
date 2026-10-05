import { FOUNDER_PHOTOS } from './founderPhotos'; // used in articles, consultation

export interface SectionPhotoAsset {
  src: string;
  de: string;
  en: string;
  position?: string;
}

const stock = (id: number, de: string, en: string, position = '50% 50%'): SectionPhotoAsset => ({ src: `/images/sections/${id}.jpg`, de, en, position });
const brand = (file: string, de: string, en: string): SectionPhotoAsset => ({ src: `/images/brand/${file}.png`, de, en });

export const SECTION_PHOTOS = {
  pillars: [
    stock(7821671, 'Kapitalplanung mit Taschenrechner und Finanzunterlagen', 'Capital planning with a calculator and financial documents'),
    stock(3862135, 'Fachleute prüfen einen Bauplan', 'Engineers reviewing a construction plan', '50% 25%'),
    stock(6285089, 'Handschlag bei einer geschäftlichen Besprechung', 'Handshake during a business meeting'),
  ],
  audiences: [
    stock(6248959, 'Unternehmer im gemeinsamen Strategiegespräch', 'Business professionals in a strategy meeting', '50% 30%'),
    stock(7641870, 'Fachkundige Prüfung einer Liegenschaft vor dem Erwerb', 'Expert inspection of a property before acquisition', '50% 25%'),
    stock(8292887, 'Familie bespricht langfristige Vermögensplanung', 'A family discussing long-term wealth planning'),
    stock(7644148, 'Handschlag bei einer vertraulichen Partnerschaftsvereinbarung', 'Handshake at a confidential partnership agreement'),
  ],
  journey: [
    stock(7658322, 'Erstkontakt und Orientierungsgespräch', 'Initial contact and orientation meeting', '50% 30%'),
    stock(8292887, 'Strukturierter Strategie-Check mit Finanzprofil', 'Structured strategy check with financial profile', '50% 20%'),
    stock(7414274, 'Aufnahme in das exklusive Investorennetzwerk', 'Joining the exclusive investor network', '50% 30%'),
    stock(7821671, 'Persönliches Beratungsgespräch und Vermögensplanung', 'Personal consultation and wealth planning', '50% 25%'),
    stock(3862135, 'Objektbesichtigung und Due-Diligence vor Ort', 'Property viewing and on-site due diligence', '50% 25%'),
    stock(7109240, 'Notarielle Unterzeichnung und langfristige Partnerschaft', 'Notarial signing and long-term partnership', '50% 30%'),
  ],
  articles: [
    stock(4342126, 'Planung einer Vermögensstrategie anhand von Finanzberichten', 'Planning a wealth strategy using financial reports'),
    stock(6801682, 'Sorgfältige Prüfung der Bausubstanz vor dem Kauf', 'Careful inspection of a building before purchase'),
    { src: FOUNDER_PHOTOS.marketArticle, de: 'Ioannis Vozicis bei der Standortanalyse', en: 'Ioannis Vozicis researching property locations' },
    stock(7642113, 'Prüfung eines Immobiliengrundrisses', 'Reviewing a property floor plan'),
    stock(8297030, 'Berechnung und Prüfung von Finanzunterlagen', 'Calculating and reviewing financial documents'),
    stock(7658322, 'Finanzierungsplanung anhand einer Bilanz', 'Financing planning using a balance sheet'),
    { src: FOUNDER_PHOTOS.personalArticle, de: 'Persönliche Perspektive von Ioannis Vozicis', en: 'A personal perspective from Ioannis Vozicis' },
  ],
  opportunities: [
    stock(19366883, 'Symbolbild eines modernen Wohngebäudes', 'Illustrative photo of a modern residential building', '50% 70%'),
    stock(31154958, 'Symbolbild einer historischen Backsteinfassade', 'Illustrative photo of a historic brick facade'),
    stock(19250685, 'Symbolbild eines Wohngebäudes mit begrüntem Innenhof', 'Illustrative photo of a residential building with a green courtyard'),
    stock(8556704, 'Symbolbild von Lager- und Logistikhallen', 'Illustrative photo of warehouse and logistics buildings', '50% 75%'),
  ],
  philosophy: [
    stock(7937963, 'Langfristige Planung mit Finanzberichten', 'Long-term planning with financial reports'),
    stock(8297030, 'Berechnung von Kapital und Finanzierung', 'Calculating capital and financing'),
    stock(7414274, 'Prüfung eines Gebäudes durch einen Fachmann', 'A specialist inspecting a building', '50% 30%'),
    stock(36733326, 'Wohnbebauung und ihr unmittelbares Umfeld', 'Residential buildings and their surrounding neighborhood'),
    stock(7109240, 'Prüfung von Zahlen und Unterlagen', 'Reviewing figures and documents'),
  ],
  consultation: [{ src: FOUNDER_PHOTOS.consultation, de: 'Ioannis Vozicis im persönlichen Videogespräch', en: 'Ioannis Vozicis in a personal video consultation' }],
  roadmap: [
    stock(8556704, 'Strategieplanung', 'Strategy planning', '50% 40%'),
    stock(19250685, 'Gemeinsame Geschäftsentwicklung', 'Collaborative business development'),
    stock(7642113, 'Aufbau von Partnerschaften', 'Developing partnerships'),
    stock(6801682, 'Zusammenarbeit im Netzwerk', 'Network collaboration'),
  ],
};

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
    stock(6801682, 'Kapitalplanung mit Taschenrechner und Finanzunterlagen', 'Capital planning with a calculator and financial documents'),
    stock(3862135, 'Fachleute prüfen einen Bauplan', 'Engineers reviewing a construction plan', '50% 25%'),
    stock(4342126, 'Handschlag bei einer geschäftlichen Besprechung', 'Handshake during a business meeting'),
  ],
  audiences: [
    stock(7414274, 'Unternehmer im gemeinsamen Strategiegespräch', 'Business professionals discussing strategy'),
    stock(6248959, 'Finanzberichte und Diagramme am Laptop', 'Financial reports and charts on a laptop'),
    stock(8292887, 'Ein Paar bespricht seine Finanzplanung', 'A couple discussing their financial planning'),
    stock(7644148, 'Geschäftspartner begrüßen sich im Büro', 'Business partners greeting each other in an office'),
  ],
  journey: [
    { ...brand('magnific_use-the-uploaded-referenc_s73pV29l8e', 'Persönlicher Austausch mit Ioannis Vozicis', 'An introductory conversation with Ioannis Vozicis'), position: '50% 30%' },
    { ...brand('magnific_hyperrealistic-image-of-i_s73hzYOl8e', 'Ioannis Vozicis erläutert die Immobilienstrategie', 'Ioannis Vozicis explaining a property strategy'), position: '50% 30%' },
    { ...brand('08', 'Ioannis Vozicis im Kreis von Geschäftspartnern', 'Ioannis Vozicis with business partners'), position: '50% 25%' },
    brand('magnific_use-the-uploaded-referenc_hur9SGHvqL', 'Persönliche Beratung in der Lounge', 'Personal consultation in the lounge'),
    { ...brand('15', 'Ioannis Vozicis stellt passende Immobilien vor', 'Ioannis Vozicis presenting suitable properties'), position: '50% 35%' },
    brand('17', 'Handschlag zum Abschluss einer Partnerschaft', 'Handshake marking a partnership'),
  ],
  articles: [
    stock(7109240, 'Planung einer Vermögensstrategie anhand von Finanzberichten', 'Planning a wealth strategy using financial reports'),
    stock(7937963, 'Sorgfältige Prüfung der Bausubstanz vor dem Kauf', 'Careful inspection of a building before purchase'),
    brand('magnific_hyperrealistic-image-of-i_s73hzYOl8e', 'Ioannis Vozicis bei einer Immobilienmarkt-Präsentation', 'Ioannis Vozicis presenting a real estate market analysis'),
    stock(7642113, 'Prüfung eines Immobiliengrundrisses', 'Reviewing a property floor plan'),
    stock(8297030, 'Berechnung und Prüfung von Finanzunterlagen', 'Calculating and reviewing financial documents'),
    stock(7658322, 'Finanzierungsplanung anhand einer Bilanz', 'Financing planning using a balance sheet'),
    brand('15', 'Ioannis Vozicis stellt Immobilien vor', 'Ioannis Vozicis presenting properties'),
  ],
  opportunities: [
    stock(19366883, 'Symbolbild eines modernen Wohngebäudes', 'Illustrative photo of a modern residential building', '50% 70%'),
    stock(31154958, 'Symbolbild einer historischen Backsteinfassade', 'Illustrative photo of a historic brick facade'),
    stock(19250685, 'Symbolbild eines Wohngebäudes mit begrüntem Innenhof', 'Illustrative photo of a residential building with a green courtyard'),
    stock(8556704, 'Symbolbild von Lager- und Logistikhallen', 'Illustrative photo of warehouse and logistics buildings', '50% 75%'),
  ],
  philosophy: [
    stock(7109240, 'Langfristige Planung mit Finanzberichten', 'Long-term planning with financial reports'),
    stock(6801682, 'Berechnung von Kapital und Finanzierung', 'Calculating capital and financing'),
    stock(7937963, 'Prüfung eines Gebäudes durch einen Fachmann', 'A specialist inspecting a building'),
    stock(19250685, 'Wohnbebauung und ihr unmittelbares Umfeld', 'Residential buildings and their surrounding neighborhood'),
    stock(8297030, 'Prüfung von Zahlen und Unterlagen', 'Reviewing figures and documents'),
  ],
  consultation: [stock(7821671, 'Ein Berater erläutert Finanzunterlagen', 'An adviser explaining financial documents')],
  roadmap: [
    stock(7109240, 'Strategieplanung', 'Strategy planning'),
    stock(7414274, 'Gemeinsame Geschäftsentwicklung', 'Collaborative business development'),
    stock(7644148, 'Aufbau von Partnerschaften', 'Developing partnerships'),
    stock(36733326, 'Zusammenarbeit im Netzwerk', 'Network collaboration'),
  ],
};

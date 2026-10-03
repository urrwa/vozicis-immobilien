import { InvestmentOpportunity, ContentArticle, PipelineLead, RoadmapPhase } from '../types';

export const OPPORTUNITIES: InvestmentOpportunity[] = [
  {
    id: 'opp-1',
    title: 'Wohnensemble Isar-Aue',
    subtitle: '16 energetische KfW-40-QNG Neubauwohnungen mit Sonder-AfA',
    location: 'München / Umland Süd',
    cityType: 'A-Stadt',
    assetType: 'Neubau Wohnen',
    category: 'neubau_wohn',
    riskProfile: 'core',
    volume: '5.850.000 €',
    totalVolumeEur: 5850000,
    minEquity: '180.000 € (Einzelwohnung) / 1.400.000 € (Gesamt)',
    minEquityEur: 180000,
    targetYield: 4.4,
    yieldType: 'Mietrendite p.a.',
    specialFeature: '5% degressive AfA + KfW-Kredit 100.000 € zu 1,8% Effektivzins',
    tags: ['KfW 40 QNG', 'Sonder-AfA', 'Erstbezug', 'Bonitätsstarke Mieter'],
    description: 'Erstklassiges Neubau-Wohnensemble im prosperierenden südlichen Einzugsgebiet von München. Maximale energetische Effizienz mit Wärmepumpe, Photovoltaik und Mieterstromkonzept. Ideal für Kapitalanleger und vermögende Unternehmer zur Steuer- und Cashflow-Optimierung.',
    status: 'Geprüfte Chance',
    kpiList: [
      { label: 'Erwartete Mietrendite', value: '4,4% p.a.' },
      { label: 'KfW-Förderung', value: 'Bis 150k € / Whg.' },
      { label: 'Steuervorteil', value: '5% degressive AfA' },
      { label: 'Fertigstellung', value: 'Q3 / 2026' }
    ]
  },
  {
    id: 'opp-2',
    title: 'Palais Gründerzeit Leipzig',
    subtitle: 'Denkmal-Revitalisierung mit bis zu 82% Sanierungs-AfA nach § 7i EStG',
    location: 'Leipzig-Gohlis / Waldstraßenviertel',
    cityType: 'B-Stadt',
    assetType: 'Denkmal Sanierung',
    category: 'denkmal_sanierung',
    riskProfile: 'core_plus',
    volume: '4.200.000 €',
    totalVolumeEur: 4200000,
    minEquity: '120.000 € (Einzeleinheit) / 950.000 € (Block)',
    minEquityEur: 120000,
    targetYield: 4.9,
    yieldType: 'Mietrendite p.a.',
    specialFeature: '82% Sanierungsanteil steuerlich absetzbar über 12 Jahre',
    tags: ['Denkmal-AfA § 7i', 'Bestlage Leipzig', 'KfW Effizienzhaus Denkmal', 'Hoher Steuerhebel'],
    description: 'Prachtvolle historische Gründerzeit-Villa mit 12 stilvollen Wohneinheiten in einer der gefragtesten Lagen Leipzigs. Umfassende denkmalgerechte Kernsanierung mit energetischer Optimierung. Ermöglicht signifikante Einkommensteuerrückflüsse für Spitzenverdiener und Unternehmer.',
    status: 'Exklusiv Vorbereitet',
    kpiList: [
      { label: 'Denkmal-AfA', value: 'ca. 82% über 12 J.' },
      { label: 'Mietrendite (netto)', value: '4,9% p.a.' },
      { label: 'Denkmalschutz', value: 'KfW Denkmal' },
      { label: 'Sanierungsbeginn', value: 'Q2 / 2026' }
    ]
  },
  {
    id: 'opp-3',
    title: 'Rhein-Ruhr Wohnportfolio',
    subtitle: '3 Mehrfamilienhäuser mit Mietanpassungs- und energetischem Hebel',
    location: 'Düsseldorf / Essen Achse',
    cityType: 'Wachstumsregion',
    assetType: 'Bestand Wohnen',
    category: 'bestand_wohn',
    riskProfile: 'value_add',
    volume: '6.400.000 €',
    totalVolumeEur: 6400000,
    minEquity: '1.280.000 €',
    minEquityEur: 1280000,
    targetYield: 6.8,
    yieldType: 'Gesamtrendite p.a.',
    specialFeature: 'Ist-Miete 28% unter Mietspiegel, strukturierter Modernisierungsplan vorliegend',
    tags: ['Value-Add', 'Mietsteigerungspotenzial', 'Holding-fähig', 'Hoher Cashflow'],
    description: 'Gut gepflegtes Wohnportfolio bestehend aus 34 Einheiten mit solider Mieterstruktur. Historisch untervermietet mit sofort realisierbarem Steigerungspotenzial über Fluktuation und gezielte Balkonanbauten/Fassadendämmung. Hervorragend geeignet für vermögensverwaltende GmbHs.',
    status: 'In Verhandlung',
    kpiList: [
      { label: 'Ist-Rendite', value: '5,1% p.a.' },
      { label: 'Ziel-Rendite (nach Hebel)', value: '6,8% p.a.' },
      { label: 'Einheiten', value: '34 Wohneinheiten' },
      { label: 'Mietsteigerungspotenzial', value: '+28%' }
    ]
  },
  {
    id: 'opp-4',
    title: 'Metropol Logistik & Light Industrial Hub',
    subtitle: 'Langfristig indexierter Triple-Net Mietvertrag mit DAX-Zulieferer',
    location: 'Stuttgart / Heilbronn Wirtschaftsregion',
    cityType: 'Wachstumsregion',
    assetType: 'Gewerbe & Logistik',
    category: 'gewerbe_logistik',
    riskProfile: 'core',
    volume: '8.900.000 €',
    totalVolumeEur: 8900000,
    minEquity: '2.500.000 €',
    minEquityEur: 2500000,
    targetYield: 6.2,
    yieldType: 'Mietrendite p.a.',
    specialFeature: '12 Jahre Festmietvertrag (WALT) · Triple-Net · 100% VPI-Indexierung',
    tags: ['Triple-Net', 'WALT 12 Jahre', 'Inflationsschutz', 'Solide Bonität'],
    description: 'Moderne Hallen- und Distributionsfläche mit Büroanteil in direktem Autobahnanschluss. Mieter ist ein renommierter Technologieführer mit herausragender Bonität. Null Instandhaltungsrisiko für den Eigentümer durch Triple-Net Struktur.',
    status: 'Geprüfte Chance',
    kpiList: [
      { label: 'Mietvertragslaufzeit', value: '12 Jahre fest' },
      { label: 'Rendite p.a.', value: '6,2% vertraglich' },
      { label: 'Mietstruktur', value: 'Triple-Net (NNN)' },
      { label: 'Indexierung', value: '100% an VPI' }
    ]
  }
];

export const CONTENT_ARTICLES: ContentArticle[] = [
  {
    id: 'content-1',
    pillarNumber: 1,
    title: 'Immobilien als Vermögensstrategie für Unternehmer',
    subtitle: 'Warum operative Gewinne im Immobilienvermögen gesichert gehören',
    readTime: '6 Min. Lesezeit',
    category: 'Vermögensstrategie',
    author: 'Ioannis Vozicis',
    publishedDate: 'März 2026',
    summary: 'Viele erfolgreiche Unternehmer lassen überschüssige Liquidität im operativen Geschäft oder investieren opportunistisch. Wie strukturierte Immobilieninvestments Risiken entkoppeln und Generationenvermögen schaffen.',
    keyTakeaways: [
      'Entkopplung von operativem Unternehmensrisiko und privater Vermögenssubstanz',
      'Nutzung steuerlicher Hebel (vvGmbH, Holdingstrukturen, Thesaurierung)',
      'Planbarer Cashflow als Ruhekissen für unternehmerische Unabhängigkeit',
      'Inflationsschutz durch werthaltigen Grund und Boden'
    ],
    fullContent: [
      'Als Geschäftsführer und Gesellschafter kenne ich die typische Herausforderung: Das operative Unternehmen bindet Aufmerksamkeit und erwirtschaftet starke Erträge – doch liegt das Kapital oft mit zu hohem Klumpenrisiko im Geschäftsbetrieb.',
      'Die strategische Immobilienallokation ist kein kurzfristiger Trade, sondern der fundamentale Gegenpol zum unternehmerischen Risiko. Während Märkte und Kundenbedürfnisse schwanken, bleibt der Bedarf an Wohn- und Wirtschaftsraum stetig.',
      'Durch die gezielte Trennung von operativer Gesellschaft und vermögensverwaltender Struktur (Holding) können Gewinne steuerbegünstigt mit 1,5% auf Konzernebene verschoben und direkt in werthaltige Immobilien investiert werden.',
      'Fazit: Nicht die Immobilie an sich macht reich – sondern die strategische Integration in Ihre Gesamtvermögensarchitektur.'
    ]
  },
  {
    id: 'content-2',
    pillarNumber: 2,
    title: 'Die 5 gravierendsten Fehler privater Immobilieninvestoren',
    subtitle: 'Und wie strategische Investoren emotionale Fehlentscheidungen vermeiden',
    readTime: '5 Min. Lesezeit',
    category: 'Investoren-Leitfaden',
    author: 'Ioannis Vozicis',
    publishedDate: 'Februar 2026',
    summary: 'Von blindem Standortfokus bis hin zur falschen Zinsbindung: Was unterscheidet den frustrierten Gelegenheitskäufer vom erfolgreichen Portfolio-Strategen?',
    keyTakeaways: [
      'Fehler 1: "Eigenheim-Brille" bei Kapitalanlagen anwenden',
      'Fehler 2: Bruttorendite mit Netto-Cashflow verwechseln',
      'Fehler 3: Fehlende Instandhaltungs- und Leerstandsreserven',
      'Fehler 4: Kaufen nach Bauchgefühl statt strukturierter Standortdaten',
      'Fehler 5: Keine klare Exit- oder Refinanzierungsstrategie'
    ],
    fullContent: [
      'Der häufigste Fehler beginnt im Kopf: Der Investor sucht eine Kapitalanlage nach den Kriterien aus, in denen er selbst wohnen wollen würde. Doch Ihre Mieterzielgruppe hat völlig andere Prioritäten als Sie privat.',
      'Erfolgreiche Investoren rechnen vom Cashflow nach Steuern und Rücklagen rückwärts. Wer Sanierungskosten, Mietausfallwagnis und Verwaltungskosten nicht transparent einkalkuliert, erlebt nach zwei Jahren böse Überraschungen.',
      'Strategische Immobilienberatung bedeutet daher vor allem: Schonungsloser Fakten-Check und Szenarioanalysen für steigende Zinsen, Mieterwechsel und regulatorische Auflagen.'
    ]
  },
  {
    id: 'content-3',
    pillarNumber: 3,
    title: 'Marktanalysen & Standortbewertungen im neuen Zinsumfeld',
    subtitle: 'A-Städte vs. B-Städte: Wo sich 2026 die wahren Rendite-Chancen verbergen',
    readTime: '7 Min. Lesezeit',
    category: 'Marktanalyse',
    author: 'Ioannis Vozicis',
    publishedDate: 'Januar 2026',
    summary: 'Die Phase billigen Geldes ist vorbei – die Phase selektiver Kaufgelegenheiten hat begonnen. Warum Qualitätsimmobilien in Wachstumsregionen den Markt dominieren.',
    keyTakeaways: [
      'Metropolen (A-Lagen) bieten höchste Liquidität und Wertstabilität, jedoch komprimierte Einstiegsrenditen',
      'Wirtschaftsstarke B-Städte und Universitätsstandorte erzielen 150–250 Basispunkte Mehrrendite',
      'Der energetische Zustand entscheidet künftig über den Mietwert (ESG-Kriterien)',
      'Bauen wird teurer: Der Nachfragedruck auf Bestandsobjekte steigt unaufhaltsam'
    ],
    fullContent: [
      'Die Zinswende hat den deutschen Immobilienmarkt von Spekulation befreit und die Fundamentaldaten wieder in den Mittelpunkt gerückt. Für strategische Kapitalpartner ist dieses Marktumfeld ein Geschenk.',
      'Wir sehen derzeit eine signifikante Schere: Während schlecht gedämmte Altbauten in Randlagen unter Preisdruck stehen, verzeichnen energieeffiziente Wohnungen und erstklassige Denkmalobjekte in Ballungsräumen Rekordmieten.',
      'In unserer Beratung prüfen wir Standorte anhand von 18 mikro- und makroökonomischen Faktoren – darunter Kaufkraftentwicklung, Pendlerströme, Arbeitgeberdichte und kommunale Bauleitplanung.'
    ]
  },
  {
    id: 'content-4',
    pillarNumber: 4,
    title: 'Einblicke in geprüfte Projekte: Der 5-Stufen Due-Diligence-Filter',
    subtitle: 'Wie wir aus 100 Angeboten nur die besten 3 für unser Netzwerk selektieren',
    readTime: '6 Min. Lesezeit',
    category: 'Projekt-Insights',
    author: 'Ioannis Vozicis',
    publishedDate: 'Dezember 2025',
    summary: 'Hinter den Kulissen von VOZICIS IMMOBILIEN: Unser Prüfprozess für Bausubstanz, Mietverträge, Baurecht und steuerliche Eignung vor jeder Empfehlung.',
    keyTakeaways: [
      'Stufe 1: Makrolage & Zukunftsindex des Standorts',
      'Stufe 2: Bautechnische Substanzanalyse mit zertifizierten Gutachtern',
      'Stufe 3: Juristische Prüfung (Teilungserklärungen, Baulasten, WEG-Protokolle)',
      'Stufe 4: Wirtschaftlichkeitsberechnung mit konservativen Stresstests',
      'Stufe 5: Partner- und Entwickler-Bonitätsprüfung'
    ],
    fullContent: [
      'Als Partner meiner Investoren übernehme ich persönliche Verantwortung für die Qualität jeder präsentierten Gelegenheit. Deshalb gilt bei uns das Prinzip: Qualität vor Quantität.',
      'Von 100 Objekten, die an unseren Schreibtisch gelangen, fallen über 80 bereits in der ersten Vorprüfung durch – sei es wegen unklarer Bausubstanz, überzogener Preisvorstellungen oder riskanter WEG-Strukturen.',
      'Nur wenn ein Projekt alle fünf Stufen unseres Due-Diligence-Filters mit Bestnoten durchläuft, wird es den Mitgliedern unseres Investorennetzwerks vorgestellt.'
    ]
  },
  {
    id: 'content-5',
    pillarNumber: 5,
    title: 'Steueroptimierung & Holdingstrukturen bei Immobilien',
    subtitle: 'Von 45% Einkommensteuer auf 15,82% oder 1,5% Körperschaftsteuer',
    readTime: '8 Min. Lesezeit',
    category: 'Steuern & Vermögensstruktur',
    author: 'Ioannis Vozicis in Kooperation mit Netzwerk-Steuerberatern',
    publishedDate: 'November 2025',
    summary: 'Wie vermögende Kapitalanleger und Unternehmer durch die Wahl der richtigen Rechtsform und Sanierungs-AfA Hunderttausende Euro Steuern in Eigenkapital verwandeln.',
    keyTakeaways: [
      'Private Haltung: Steuerfreier Verkauf nach 10 Jahren (§ 23 EStG)',
      'Vermögensverwaltende GmbH: Nur 15,82% Körperschaftsteuer (erweiterte Gewerbesteuerkürzung)',
      'Denkmal-AfA (§ 7i EStG): Direkte Anrechnung hoher Sanierungskosten auf die persönliche Einkommensteuer',
      'Degressive AfA für Neubau: 5% jährliche Abschreibung sichert hohe Anfangsliquidität'
    ],
    fullContent: [
      'Steuern sind der größte Einzelkostenblock eines Vermögens. Wer Immobilien kauft, ohne die steuerliche Architektur mitzudenken, verschenkt einen wesentlichen Teil der Rendite.',
      'Gemeinsam mit spezialisierten Steuerberatern aus unserem Partnernetzwerk analysieren wir im Strategie-Check, welche Struktur für Ihr individuelles Gesamteinkommen und Ihre Nachfolgeplanung optimal ist.',
      'Ob Denkmal-AfA zur Minderung der Spitzensteuerbelastung oder die vermögensverwaltende Familiengesellschaft zur generationenübergreifenden Vermögensübertragung: Die Struktur bestimmt den Erfolg.'
    ]
  },
  {
    id: 'content-6',
    pillarNumber: 6,
    title: 'Finanzierung & Kapitalstruktur im strategischen Gesamtkontext',
    subtitle: 'Der richtige Fremdkapitalhebel: Zinsbindung, Sondertilgung und Banken-Auswahl',
    readTime: '6 Min. Lesezeit',
    category: 'Finanzierungsstrategie',
    author: 'Ioannis Vozicis',
    publishedDate: 'Oktober 2025',
    summary: 'Warum die günstigste Kondition nicht immer die beste Finanzierung ist und wie Sie Ihre Bonität bankenübergreifend strategisch vorbereiten.',
    keyTakeaways: [
      'Finanzierungsbausteine aus KfW-Förderdarlehen und Bankkrediten kombinieren',
      'Tilgungssatz strategisch wählen: Liquidität vor voreiligem Schuldendienst',
      'Nachbeleihung und freie Grundschulden für Folgeinvestments nutzen',
      'Direkter Zugang zu bankenunabhängigen Finanzierungsspezialisten'
    ],
    fullContent: [
      'Eine kluge Finanzierungsstruktur ist der Motor Ihres Immobilienvermögens. Der Leverage-Effekt (Hebelwirkung des Fremdkapitals) funktioniert jedoch nur dann zu Ihren Gunsten, wenn die Zins- und Tilgungsstruktur zur Mietrendite passt.',
      'Wir unterstützen Investoren dabei, ihre Bonitätsunterlagen bankgerecht aufzubereiten, damit Bankentscheidungen in Tagen statt Monaten fallen.',
      'Zusätzlich binden wir zinsgünstige KfW-Mittel ein, die in Verbindung mit modernen Neubauten die Gesamtzinsbelastung spürbar senken.'
    ]
  },
  {
    id: 'content-7',
    pillarNumber: 7,
    title: 'Persönliche Einblicke als Geschäftsführer & Gesellschafter',
    subtitle: 'Warum Vertrauen und langfristige Partnerschaften jeden Algorithmus schlagen',
    readTime: '5 Min. Lesezeit',
    category: 'Persönliches Statement',
    author: 'Ioannis Vozicis',
    publishedDate: 'September 2025',
    summary: 'Meine Überzeugung: Immobilien sind Menschengeschäft. Warum ich VOZICIS IMMOBILIEN nicht als Maklerplattform, sondern als vertrauensvollen Investorenkreis führe.',
    keyTakeaways: [
      'Echte Off-Market Deals entstehen nur durch jahrelang gewachsene persönliche Beziehungen',
      'Transparenz in guten und in herausfordernden Marktphasen',
      'Wir begleiten Investoren vor, während und viele Jahre nach dem Notartermin',
      'Erfolg misst sich nicht in Transaktionsanzahl, sondern in der Dauer der Partnerschaften'
    ],
    fullContent: [
      'In einer Welt voller anonymer Online-Portale und glänzender Versprechungen sehnen sich Kapitalanleger nach einer echten Bezugsperson. Jemandem, der die Risiken klar benennt und nur Deals empfiehlt, in die er auch selbst investieren würde.',
      'Als Geschäftsführer und Gesellschafter von Arventas habe ich gelernt: Wer langfristige Beziehungen über kurzfristige Provisionen stellt, gewinnt Partner fürs Leben.',
      'Mein Versprechen: Jede Beratung, jeder Strategie-Check und jedes Immobilienmatching erfolgt auf Augenhöhe und mit höchster strategischer Sorgfalt.'
    ]
  }
];

export const INITIAL_PIPELINE_LEADS: PipelineLead[] = [
  {
    id: 'lead-101',
    fullName: 'Dr. Michael von Berg',
    email: 'm.vonberg@praxis-berg.de',
    phone: '+49 171 4482910',
    audienceType: 'kapitalanleger',
    equityVolume: 350000,
    stage: 'partnerschaft_abschluss',
    source: 'Strategie-Check',
    notes: 'Notartermin für Isar-Aue Einheit 3 terminiert. Steuerberater hat Denkmal/Sonder-AfA freigegeben. Langfristige Partnerschaft für Folgeportfolio vereinbart.',
    riskProfile: 'core',
    createdAt: '2026-02-14',
    lastContact: 'Vor 2 Tagen',
    assignedTo: 'Ioannis Vozicis',
    matchingScore: 96
  },
  {
    id: 'lead-102',
    fullName: 'Christian Lindner (Fintech Gründer)',
    email: 'c.lindner@scale-holding.de',
    phone: '+49 172 9012384',
    audienceType: 'unternehmer',
    equityVolume: 1200000,
    stage: 'immobilienmatching',
    source: 'LinkedIn',
    notes: 'Holdingstruktur mit vvGmbH vorhanden. Sucht Mehrfamilienhäuser / Value-Add Portfolio in NRW. Exposé Rhein-Ruhr zugesandt, sehr interessiert.',
    riskProfile: 'value_add',
    createdAt: '2026-02-28',
    lastContact: 'Heute',
    assignedTo: 'Ioannis Vozicis',
    matchingScore: 92
  },
  {
    id: 'lead-103',
    fullName: 'Sabine & Peter Weimann',
    email: 'p.weimann@weimann-architektur.com',
    phone: '+49 89 5521908',
    audienceType: 'privatinvestor',
    equityVolume: 250000,
    stage: 'strategieberatung',
    source: 'Netzwerk / Empfehlung',
    notes: 'Strategiegespräch am kommenden Donnerstag um 15:00 Uhr via Video-Call. Fokus auf Denkmal Leipzig mit § 7i Steuerhebel.',
    riskProfile: 'core_plus',
    createdAt: '2026-03-02',
    lastContact: 'Gestern',
    assignedTo: 'Ioannis Vozicis',
    matchingScore: 88
  },
  {
    id: 'lead-104',
    fullName: 'Thorsten Krause (Krause Logistik)',
    email: 'tk@krause-transporte.de',
    phone: '+49 711 8892110',
    audienceType: 'unternehmer',
    equityVolume: 2500000,
    stage: 'qualifizierter_investor',
    source: 'Google Ads',
    notes: 'Liquidität aus Unternehmensverkauf vorhanden. Ziel: Langfristige Mietverträge mit bonitätsstarken Mietern, z.B. Light Industrial Hub Heilbronn.',
    riskProfile: 'core',
    createdAt: '2026-03-07',
    lastContact: 'Vor 3 Tagen',
    assignedTo: 'Ioannis Vozicis',
    matchingScore: 94
  },
  {
    id: 'lead-105',
    fullName: 'Elena Rostova',
    email: 'elena.rostova@venture-capital.ch',
    phone: '+41 79 4410982',
    audienceType: 'privatinvestor',
    equityVolume: 500000,
    stage: 'strategie_check_abgeschlossen',
    source: 'Strategie-Check',
    notes: 'Strategie-Check online abgeschlossen. Profil: Fokus auf Neubauwohnungen mit degressiver AfA in Metropolregionen. Rückruf zur Terminierung ausstehend.',
    riskProfile: 'core',
    createdAt: '2026-03-10',
    lastContact: 'Vor 1 Tag',
    assignedTo: 'Ioannis Vozicis',
    matchingScore: 90
  },
  {
    id: 'lead-106',
    fullName: 'Markus Hagemann',
    email: 'm.hagemann@consulting-partners.de',
    phone: '+49 160 3381902',
    audienceType: 'kapitalanleger',
    equityVolume: 150000,
    stage: 'neuer_kontakt',
    source: 'Google Ads',
    notes: 'Erstkontakt via Kontaktformular. Interesse an Einstieg in Immobilieninvestment zur Altersvorsorge. Einladung zum Strategie-Check versendet.',
    riskProfile: 'core_plus',
    createdAt: '2026-03-11',
    lastContact: 'Vor 4 Stunden',
    assignedTo: 'Ioannis Vozicis',
    matchingScore: 82
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: 'Phase 1: Erste 30 Tage',
    duration: 'Monat 1',
    headline: 'Fundament, Brand Positioning & Funnel-Infrastruktur',
    status: 'In Umsetzung',
    milestones: [
      'Schärfung der Positionierung: "Strategische Immobilienberatung & Kapitalpartnerschaften"',
      'Launch der exklusiven Personal Brand Web-Plattform mit "Immobilienstrategie-Check"',
      'Setup des 6-stufigen CRM-Pipelinesystems zur nahtlosen Lead-Qualifizierung',
      'Definition des Partnernetzwerks (Steuerberater, Finanzierer, Projektentwickler)'
    ],
    deliverables: [
      'Vollständige Website & Strategie-Check Funnel',
      'Geschäftsführer-Profil & Trust-Assets',
      'CRM-Pipeline mit automatisierter Lead-Erfassung',
      'Exposé-Template & Onboarding-Workflow'
    ]
  },
  {
    phase: 'Phase 2: Erste 90 Tage',
    duration: 'Monat 2 – 3',
    headline: 'Gezielte Akquise, Kampagnenstart & LinkedIn Authority',
    status: 'Geplant',
    milestones: [
      'Start performanter Google Ads Kampagnen auf High-Intent Suchbegriffe (Kapitalanlage, Denkmal-AfA, Immobilienstrategie)',
      'LinkedIn Outreach & Thought-Leadership Content für Unternehmer & Family Offices',
      'Aktivierung des Content-Systems entlang der 7 Strategie-Säulen',
      'Erste 15-20 qualifizierte Strategieberatungen pro Monat etablieren'
    ],
    deliverables: [
      'Google Search Kampagnenstruktur mit Conversion-Tracking',
      'Wöchentliche LinkedIn Fachbeiträge & Marktanalysen',
      'Erstes Off-Market Deal-Matching für qualifizierte Investoren',
      'Messbare Lead-to-Call Conversion über den Strategie-Check'
    ]
  },
  {
    phase: 'Phase 3: Monate 3 – 6',
    duration: 'Monat 3 – 6',
    headline: 'Ecosystem-Skalierung, Partner-Netzwerk & Investor Community',
    status: 'Geplant',
    milestones: [
      'Institutionalisierung der strategischen Partnerschaften mit Steuerkanzleien & Private Banks',
      'Veröffentlichung exklusiver vierteljährlicher Marktreporte für das Investorennetzwerk',
      'Aufbau des exklusiven "VOZICIS Investor Circle" für Co-Investments und Erstzugang',
      'Strukturierung von Club-Deals und Block-Platzierungen'
    ],
    deliverables: [
      'Formalisierte Partnervereinbarungen & Empfehlungsstrukturen',
      'Quartals-Marktbericht "Immobilien & Kapital 2026"',
      'Exklusives Investoren-Dinner / Round-Table Format',
      'Verstetigung von 30+ qualifizierten Kontakten pro Monat'
    ]
  },
  {
    phase: 'Phase 4: Monate 6 – 12',
    duration: 'Monat 6 – 12',
    headline: 'Marktführerschaft als Personal Brand & systematisierter Zuwachs',
    status: 'Geplant',
    milestones: [
      'Feste Etablierung als führender strategischer Immobilienpartner für vermögende Unternehmer',
      'Wiederholbare, automatisierte Akquisitions- und Betreuungsprozesse',
      'Erweiterung des Teams für Analyse, Due Diligence und Vorprüfung',
      'Erreichung des Status als bevorzugter Platzierungspartner für renommierte Projektentwickler'
    ],
    deliverables: [
      'Skalierbares Ecosystem mit hoher Empfehlungsquote',
      'Transaktionsbegleitung im zweistelligen Millionenbereich',
      'Auszeichnung & Reputation als vertrauensvolle Premium-Marke',
      'Dauerhafte Kapitalallianz für zukunftssichere Immobilienprojekte'
    ]
  }
];

export const TARGET_AUDIENCE_DETAILS = [
  {
    id: 'kapitalanleger',
    title: 'Kapitalanleger',
    subtitle: 'Solider Vermögensaufbau & Schutz vor Inflation',
    iconName: 'TrendingUp',
    description: 'Menschen, die Immobilien als planbare, langfristige Vermögenssäule nutzen möchten. Wir entwickeln maßgeschneiderte Konzepte mit verlässlichen Cashflows und zukunftssicheren Lagen.',
    benefits: [
      'Geprüfte Neubau- und Bestandsimmobilien mit solider Mietrendite',
      'Nutzung zinsgünstiger KfW-Förderdarlehen und Sonder-Abschreibungen',
      'Rundum-Sorglos-Begleitung von der ersten Kalkulation bis zur Mieterverwaltung',
      'Konservative Stresstests gegen Mietausfall und Zinsänderungen'
    ],
    highlightBadge: 'Vermögenssubstanz'
  },
  {
    id: 'unternehmer',
    title: 'Unternehmer & Selbstständige',
    subtitle: 'Steuerbegünstigte Kapitalanlage & Holding-Strukturen',
    iconName: 'Building2',
    description: 'Geschäftsinhaber mit operativer Liquidität, die Immobilien strategisch als Assetklasse einsetzen, Betriebsrisiken entkoppeln und Steuern in Sachwerte investieren möchten.',
    benefits: [
      'Strukturierung über vermögensverwaltende GmbHs (15,82% KöSt)',
      'Steuerliche Synergien durch Holding- und Thesaurierungsmodelle',
      'Gezielter Einsatz von Denkmal-AfA zur Minderung hoher Spitzensteuersätze',
      'Fokus auf unternehmerische Zeiteffizienz und schlüsselfertige Abwicklung'
    ],
    highlightBadge: 'Steuerhebel & Schutz'
  },
  {
    id: 'privatinvestor',
    title: 'Private Investoren',
    subtitle: 'Exklusiver Zugang zu geprüften Off-Market Chancen',
    iconName: 'ShieldCheck',
    description: 'Erfahrene Investoren und Family Offices, die abseits überlaufener Online-Portale nach selektierten Gelegenheiten, Mehrfamilienhäusern oder Co-Investments suchen.',
    benefits: [
      'Diskreter Vorab-Zugang zu geprüften Off-Market Gelegenheiten',
      'Umfassende 5-Stufen Due-Diligence mit bautechnischen Gutachten',
      'Möglichkeit zu Club-Deals und strategischen Co-Investments',
      'Direkter Draht zu Ioannis Vozicis ohne Zwischenmakler'
    ],
    highlightBadge: 'Off-Market Zugang'
  },
  {
    id: 'partner',
    title: 'Strategische Partner',
    subtitle: 'Entwickler, Banken, Steuerberater & Netzwerke',
    iconName: 'Users',
    description: 'Ein kooperatives Ökosystem aus erstklassigen Fachexperten. Wir verbinden Entwickler mit solventem Kapital und schaffen beidseitigen Mehrwert.',
    benefits: [
      'Schnelle und verlässliche Platzierung geprüfter Neubauprojekte',
      'Gegenseitige Synergien mit Steuerkanzleien und Vermögensverwaltern',
      'Klare Qualitätsstandards und professionelle Transaktionsabwicklung',
      'Langfristige Kapitalallianzen statt einmaliger Deals'
    ],
    highlightBadge: 'Kooperationsnetzwerk'
  }
];

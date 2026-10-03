export type AudienceType = 'kapitalanleger' | 'unternehmer' | 'privatinvestor' | 'partner';

export type RiskProfile = 'core' | 'core_plus' | 'value_add' | 'project';

export interface StrategyCheckData {
  id?: string;
  // Step 1: Goals
  primaryGoal: 'vermoegensaufbau' | 'cashflow' | 'steueroptimierung' | 'inflationsschutz' | 'diversifikation';
  timeHorizon: 'kurz' | 'mittel' | 'lang' | 'generationen';
  // Step 2: Capital
  equityVolume: number; // in EUR
  plannedTotalVolume: number; // in EUR
  // Step 3: Financing
  financingReadiness: 'eigenkapital_only' | 'standard_kredit' | 'optimierter_hebel' | 'holding_finanzierung';
  existingRealEstate: boolean;
  portfolioCount: number;
  // Step 4: Risk & Return
  riskProfile: RiskProfile;
  targetYield: number; // percentage, e.g. 4.5% - 8%
  // Step 5: Location & Asset Class
  locationPreference: ('a_staedte' | 'wachstums_b_staedte' | 'speckguertel' | 'denkmal_standorte')[];
  assetClasses: ('neubau_wohn' | 'bestand_wohn' | 'denkmal_sanierung' | 'gewerbe_logistik' | 'micro_living')[];
  // Step 6: Contact & Investor Persona
  audienceType: AudienceType;
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  notes?: string;
  submittedAt?: string;
}

export interface InvestmentOpportunity {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  cityType: 'A-Stadt' | 'B-Stadt' | 'Wachstumsregion';
  assetType: string;
  category: 'neubau_wohn' | 'bestand_wohn' | 'denkmal_sanierung' | 'gewerbe_logistik';
  riskProfile: RiskProfile;
  volume: string;
  totalVolumeEur: number;
  minEquity: string;
  minEquityEur: number;
  targetYield: number; // e.g. 4.8
  yieldType: 'Mietrendite p.a.' | 'Gesamtrendite p.a.' | 'IRR (Ziel)';
  specialFeature: string;
  tags: string[];
  description: string;

  kpiList: { label: string; value: string }[];
  status: 'Geprüfte Chance' | 'Exklusiv Vorbereitet' | 'In Verhandlung' | 'Platziert';
}

export type PipelineStage = 
  | 'neuer_kontakt'
  | 'strategie_check_abgeschlossen'
  | 'qualifizierter_investor'
  | 'strategieberatung'
  | 'immobilienmatching'
  | 'partnerschaft_abschluss';

export interface PipelineLead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  audienceType: AudienceType;
  equityVolume: number;
  stage: PipelineStage;
  source: 'Google Ads' | 'LinkedIn' | 'Strategie-Check' | 'Netzwerk / Empfehlung' | 'Persönlicher Kontakt';
  notes: string;
  riskProfile: RiskProfile;
  createdAt: string;
  lastContact: string;
  assignedTo: string;
  matchingScore?: number;
}

export interface ContentArticle {
  id: string;
  pillarNumber: number;
  title: string;
  subtitle: string;
  readTime: string;
  category: string;
  summary: string;
  keyTakeaways: string[];
  fullContent: string[];
  author: string;
  publishedDate: string;
  coverImage?: string;
  themePillar?: string;
}

export interface RoadmapPhase {
  phase: string;
  duration: string;
  headline: string;
  status: 'In Umsetzung' | 'Geplant' | 'Systematisiert';
  milestones: string[];
  deliverables: string[];
}

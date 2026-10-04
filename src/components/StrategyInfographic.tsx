import { ArrowDown, ArrowRight, Target, CalendarDays, CheckCircle2, Wallet, Landmark, ShieldCheck, Search, Building2, MapPin, Users, TrendingUp, Scale, Calculator, FileCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const paths = [
  [
    { icon: Target, de: 'Ziel festlegen', en: 'Define your goal', subDe: 'Cashflow · Steuern · Vermögen', subEn: 'Cash flow · Tax · Wealth' },
    { icon: CalendarDays, de: 'Horizont wählen', en: 'Set your horizon', subDe: 'Zeitraum & Liquiditätsbedarf', subEn: 'Time frame & liquidity needs' },
    { icon: CheckCircle2, de: 'Kriterien ableiten', en: 'Define the criteria', subDe: 'Passende Investmentstrategie', subEn: 'A suitable investment strategy' },
  ],
  [
    { icon: Wallet, de: 'Eigenkapital', en: 'Your capital', subDe: 'Verfügbare Mittel erfassen', subEn: 'Assess available funds' },
    { icon: Landmark, de: 'Finanzierung', en: 'Financing', subDe: 'Zins & Tilgung abstimmen', subEn: 'Align interest & repayments' },
    { icon: ShieldCheck, de: 'Liquiditätspuffer', en: 'Liquidity reserve', subDe: 'Reserven & Szenarien prüfen', subEn: 'Review reserves & scenarios' },
  ],
  [
    { icon: Search, de: 'Objekt prüfen', en: 'Inspect the property', subDe: 'Substanz & Unterlagen', subEn: 'Building condition & records' },
    { icon: Building2, de: 'Risiken bewerten', en: 'Assess the risks', subDe: 'Leerstand & Instandhaltung', subEn: 'Vacancy & maintenance' },
    { icon: ShieldCheck, de: 'Puffer planen', en: 'Plan a buffer', subDe: 'Rücklagen vor dem Ankauf', subEn: 'Reserves before purchase' },
  ],
  [
    { icon: MapPin, de: 'Standort prüfen', en: 'Review the location', subDe: 'Region & Nachbarschaft', subEn: 'Region & neighborhood' },
    { icon: Users, de: 'Nachfrage prüfen', en: 'Assess demand', subDe: 'Zuzug & Beschäftigung', subEn: 'Migration & employment' },
    { icon: TrendingUp, de: 'Potenzial bewerten', en: 'Evaluate potential', subDe: 'Mieten & Kaufkraft', subEn: 'Rents & purchasing power' },
  ],
  [
    { icon: Scale, de: 'Struktur wählen', en: 'Choose a structure', subDe: 'Privat oder Gesellschaft', subEn: 'Personal or company ownership' },
    { icon: Calculator, de: 'Effekte berechnen', en: 'Calculate the effects', subDe: 'Steuern & Abschreibung', subEn: 'Tax & depreciation' },
    { icon: FileCheck, de: 'Fachlich abstimmen', en: 'Consult specialists', subDe: 'Steuerliche & rechtliche Prüfung', subEn: 'Tax & legal review' },
  ],
];

export function StrategyInfographic({ index }: { index: number }) {
  const { language } = useLanguage();
  const english = language === 'en';
  return <div className="border-b border-[#D6AE70]/20 bg-gradient-to-br from-[#142941] to-[#08101E] p-6 sm:p-8">
    <div className="flex items-center justify-between gap-4 mb-6">
      <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#D6AE70]">{english ? 'Strategy at a glance' : 'Strategie auf einen Blick'}</span>
      <span className="text-[10px] font-mono text-[#8B9CB3]">0{index + 1} / 05</span>
    </div>
    <ol aria-label={english ? 'Decision process' : 'Entscheidungsprozess'} className="grid grid-cols-1 sm:grid-cols-3 gap-7 sm:gap-5">
      {paths[index].map((step, i) => <li key={step.en} className="relative rounded-xl border border-[#D6AE70]/25 bg-[#050B16]/60 p-4 sm:px-3 text-left sm:text-center">
        <div className="flex sm:flex-col items-center sm:items-center gap-3">
          <div className="relative shrink-0 flex h-12 w-12 items-center justify-center rounded-full border border-[#D6AE70]/45 bg-[#D6AE70]/10 text-[#D6AE70]">
            <step.icon size={23} strokeWidth={1.5} aria-hidden="true" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#D6AE70] text-[#050B16] text-[9px] font-bold">{i + 1}</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-white leading-snug">{english ? step.en : step.de}</div>
            <div className="mt-2 text-[11px] leading-relaxed text-[#A9B7CA]">{english ? step.subEn : step.subDe}</div>
          </div>
        </div>
        {i < 2 && <><ArrowRight aria-hidden="true" size={18} className="hidden sm:block absolute -right-[20px] top-1/2 -translate-y-1/2 text-[#D6AE70]/80" /><ArrowDown aria-hidden="true" size={18} className="sm:hidden absolute left-1/2 -bottom-[24px] -translate-x-1/2 text-[#D6AE70]/80" /></>}
      </li>)}
    </ol>
  </div>;
}

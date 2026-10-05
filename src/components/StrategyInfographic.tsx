import { ArrowDown, ArrowRight, Target, CalendarDays, CheckCircle2, Wallet, Landmark, ShieldCheck, Search, Building2, MapPin, Users, TrendingUp, Scale, Calculator, FileCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion, useReducedMotion } from 'motion/react';

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
  const reduceMotion = useReducedMotion();
  return <div className="border-b border-[#D6AE70]/20 bg-gradient-to-br from-[#142941] to-[#08101E] p-6 sm:p-8">
    <div className="flex items-center justify-between gap-4 mb-6">
      <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#D6AE70]">{english ? 'Strategy at a glance' : 'Strategie auf einen Blick'}</span>
      <span className="text-[10px] font-mono text-[#8B9CB3]">0{index + 1} / 05</span>
    </div>
    <motion.ol key={index} initial={reduceMotion ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: 0.3 }}
      aria-label={english ? 'Decision process' : 'Entscheidungsprozess'} className="grid grid-cols-1 sm:grid-cols-3 gap-7 sm:gap-5">
      {paths[index].map((step, i) => <motion.li key={step.en}
        variants={{ hidden: { opacity: 0, y: 18, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : i * 0.25 } } }}
        whileHover={reduceMotion ? undefined : { y: -4, borderColor: 'rgba(214,174,112,0.75)', boxShadow: '0 10px 28px rgba(214,174,112,0.12)' }}
        className="relative rounded-xl border border-[#D6AE70]/25 bg-[#050B16]/60 p-4 sm:px-3 text-left sm:text-center">
        <div className="flex sm:flex-col items-center sm:items-center gap-3">
          <div className="relative shrink-0 flex h-12 w-12 items-center justify-center rounded-full border border-[#D6AE70]/45 bg-[#D6AE70]/10 text-[#D6AE70]">
            <motion.span aria-hidden="true" className="absolute inset-0 rounded-full border border-[#D6AE70]"
              variants={{ hidden: { opacity: 0, scale: 1 }, visible: { opacity: reduceMotion ? 0 : [0, 0.65, 0], scale: reduceMotion ? 1 : [1, 1.15, 1.55], transition: { duration: 1.1, delay: i * 0.25 + 0.25 } } }} />
            <step.icon size={23} strokeWidth={1.5} aria-hidden="true" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#D6AE70] text-[#050B16] text-[9px] font-bold">{i + 1}</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-white leading-snug">{english ? step.en : step.de}</div>
            <div className="mt-2 text-[11px] leading-relaxed text-[#A9B7CA]">{english ? step.subEn : step.subDe}</div>
          </div>
        </div>
        {i < 2 && <motion.span aria-hidden="true" variants={{ hidden: { opacity: 0 }, visible: { opacity: reduceMotion ? 1 : [0, 1, 0.35, 1], transition: { duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : i * 0.25 + 0.35 } } }}><ArrowRight size={18} className="hidden sm:block absolute -right-[20px] top-1/2 -translate-y-1/2 text-[#D6AE70]/80" /><ArrowDown size={18} className="sm:hidden absolute left-1/2 -bottom-[24px] -translate-x-1/2 text-[#D6AE70]/80" /></motion.span>}
      </motion.li>)}
    </motion.ol>
  </div>;
}

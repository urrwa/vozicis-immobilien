import { Building2, ChartNoAxesCombined, Compass, Landmark, Layers, Network, ShieldCheck, Users, Wallet } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const motifs = [Wallet, Building2, ChartNoAxesCombined, ShieldCheck, Network, Landmark, Compass, Users, Layers];

/** Editorial illustrations, deliberately independent of the property photo library. */
export function TopicVisual({ index, title, labels = [] }: { index: number; title: string; labels?: string[] }) {
  const { t } = useLanguage();
  const Icon = motifs[((index % motifs.length) + motifs.length) % motifs.length];
  return <div className="h-full min-h-[280px] w-full flex flex-col justify-center items-center gap-4 px-6 py-12 bg-gradient-to-br from-[#142941] to-[#07101e] text-center">
    <div className="flex items-center gap-5 text-[#D6AE70]" aria-hidden="true">
      <span className="w-10 h-px bg-[#D6AE70]/30" />
      <div className="p-4 border border-[#D6AE70]/40 rounded-2xl bg-[#050B16]/40"><Icon size={40} strokeWidth={1.2} /></div>
      <span className="w-10 h-px bg-[#D6AE70]/30" />
    </div>
    <div className="max-w-sm text-lg sm:text-2xl font-semibold text-white leading-snug">{t(title)}</div>
    {labels.length > 0 && <div className="flex flex-wrap justify-center gap-2 max-w-md">{labels.map(label => <span key={label} className="rounded-full border border-[#D6AE70]/25 px-3 py-1 text-xs text-[#B9C6D7]">{t(label)}</span>)}</div>}
  </div>;
}

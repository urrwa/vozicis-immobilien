import { useLanguage } from '../i18n/LanguageContext';
import { SECTION_PHOTOS } from '../data/sectionPhotos';

export function SectionPhoto({ group, index = 0, illustrative = false }: {
  group: keyof typeof SECTION_PHOTOS;
  index?: number;
  illustrative?: boolean;
}) {
  const { language } = useLanguage();
  const photo = SECTION_PHOTOS[group][index] ?? SECTION_PHOTOS[group][0];
  return <>
    <img src={photo.src} alt={language === 'en' ? photo.en : photo.de}
      loading={group === 'journey' ? 'eager' : 'lazy'} decoding="async" className="absolute inset-0 h-full w-full object-cover"
      style={{ objectPosition: photo.position ?? '50% 50%' }} />
    {illustrative && <span className="absolute bottom-10 left-4 z-10 rounded-md bg-[#050B16]/85 px-2 py-1 text-[10px] text-white backdrop-blur-sm">
      {language === 'en' ? 'Illustrative photo · not the listed property' : 'Symbolbild · nicht das angebotene Objekt'}
    </span>}
  </>;
}

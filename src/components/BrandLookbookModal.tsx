import { useLanguage } from '../i18n/LanguageContext';
import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Calendar, 
  ZoomIn, 
  Camera,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { ALL_BRAND_IMAGES, BrandImage } from '../data/brandAssets';

interface BrandLookbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const BrandLookbookModal: React.FC<BrandLookbookModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation
}) => {
  const { t, locale, localizedImage } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'Gesamte Kollektion' },
    { id: 'founder', label: 'Ioannis Vozicis' },
    { id: 'strategy', label: 'Strategie & Boardroom' },
    { id: 'property', label: 'Liegenschaften & Bau' },
    { id: 'closing', label: 'Notariat & Abschlüsse' }
  ];

  const filteredImages = ALL_BRAND_IMAGES.filter(img => {
    if (selectedCategory === 'all') return true;
    return img.category === selectedCategory;
  });

  // Handle keyboard events for lightbox
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeImageIndex !== null) {
          setActiveImageIndex(null);
        } else {
          onClose();
        }
      } else if (activeImageIndex !== null) {
        if (e.key === 'ArrowRight') {
          setActiveImageIndex((prev) => 
            prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0
          );
        } else if (e.key === 'ArrowLeft') {
          setActiveImageIndex((prev) => 
            prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1
          );
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeImageIndex, filteredImages.length, onClose]);

  if (!isOpen) return null;

  const currentLightboxImage = activeImageIndex !== null ? filteredImages[activeImageIndex] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Lightbox Modal Overlay (if an image is clicked) */}
      {currentLightboxImage && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-between p-4 sm:p-8 bg-black/95 backdrop-blur-2xl">
          {/* Lightbox Header */}
          <div className="w-full max-w-6xl flex items-center justify-between text-[#8B9CB3] z-10">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-[#D6AE70] font-mono font-semibold">
                {t(activeImageIndex !== null ? activeImageIndex + 1 : 1)} / {t(filteredImages.length)}
              </span>
              <span className="text-[#162744]">|</span>
              <span className="text-xs text-white font-medium truncate max-w-[200px] sm:max-w-md">
                {t(currentLightboxImage.title)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={currentLightboxImage.localSrc}
                download
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-[#0A1324] hover:bg-[#162744] text-[#8B9CB3] hover:text-white border border-[#162744] transition-colors"
                title={t("Bild in Originalgröße öffnen")}
              >
                <Download className="w-4 h-4" />
              </a>
              <button
                onClick={() => setActiveImageIndex(null)}
                className="p-2 rounded-full bg-[#0A1324] hover:bg-[#162744] text-[#8B9CB3] hover:text-white border border-[#162744] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Stage */}
          <div className="relative w-full max-w-5xl flex-1 my-4 flex items-center justify-center overflow-hidden">
            {/* Prev button */}
            <button
              onClick={() => setActiveImageIndex((prev) => 
                prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1
              )}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-[#050B16]/80 hover:bg-[#0A1324] text-[#8B9CB3] hover:text-white border border-[#162744] backdrop-blur-md transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="max-h-[75vh] max-w-full relative flex items-center justify-center">
              <img
                src={localizedImage(currentLightboxImage.localSrc)}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = currentLightboxImage.cdnSrc;
                }}
                alt={t(currentLightboxImage.alt)}
                className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl border border-[#162744]"
              />
            </div>

            {/* Next button */}
            <button
              onClick={() => setActiveImageIndex((prev) => 
                prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0
              )}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-[#050B16]/80 hover:bg-[#0A1324] text-[#8B9CB3] hover:text-white border border-[#162744] backdrop-blur-md transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Footer & Caption */}
          <div className="w-full max-w-3xl text-center space-y-1.5 z-10">
            <h4 className="font-sans text-lg text-white font-bold">
              {t(currentLightboxImage.title)}
            </h4>
            <p className="text-xs text-[#8B9CB3] font-light">
              {t(currentLightboxImage.subtitle)}
            </p>
          </div>
        </div>
      )}

      {/* Main Lookbook Container */}
      <div className="relative w-full max-w-6xl max-h-[92vh] bg-[#0A1324] rounded-2xl border border-[#162744] shadow-2xl shadow-black flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-[#162744] flex items-center justify-between bg-[#050B16]">
          <div>
            <div className="gold-eyebrow mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>{t("Authentisches Brand-Lookbook")}</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold font-sans text-white">{t("Impressionen & Exklusiver Bildband")}</h3>
            <p className="text-xs sm:text-sm text-[#8B9CB3] font-light mt-1">{t("Einblicke in die Arbeit von Ioannis Vozicis, das Arventas-Netzwerk und ausgewählte Liegenschaften.")}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#050B16] hover:bg-[#0D182E] text-[#8B9CB3] hover:text-white border border-[#162744] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="px-6 py-3 border-b border-[#162744] bg-[#050B16] flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setActiveImageIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#D6AE70] text-[#050B16] font-semibold shadow-sm'
                    : 'text-[#8B9CB3] hover:text-white bg-[#0A1324] border border-[#162744]'
                }`}
              >
                {t(cat.label)}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 custom-scrollbar bg-[#0A1324]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredImages.map((img, idx) => (
              <div
                key={img.id}
                onClick={() => setActiveImageIndex(idx)}
                className="group relative rounded-xl overflow-hidden bg-[#050B16] border border-[#162744] hover:border-[#D6AE70]/40 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl flex flex-col"
              >
                {/* Image Frame */}
                <div className="aspect-[4/3] w-full overflow-hidden relative bg-[#050B16]">
                  <img
                    src={localizedImage(img.localSrc)}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = img.cdnSrc;
                    }}
                    alt={t(img.alt)}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-transparent to-transparent opacity-80" />
                  
                  {/* Zoom Overlay Indicator */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 rounded-full bg-[#D6AE70] text-[#050B16] font-bold shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-[#050B16]/80 backdrop-blur-md text-[#D6AE70] border border-[#162744]">
                      {t(img.category || 'Asset')}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-sans text-sm font-bold text-white group-hover:text-[#D6AE70] transition-colors">
                      {t(img.title)}
                    </h4>
                    <p className="text-[11px] text-[#8B9CB3] font-light mt-1 line-clamp-2 leading-relaxed">
                      {t(img.subtitle)}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#162744] flex items-center justify-between text-[10px] text-[#8B9CB3] font-mono">
                    <span>{t("ID: ")}{t(img.id)}</span>
                    <span className="text-[#D6AE70] font-sans font-medium flex items-center gap-1">{t("Vergrößern")}<ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bar */}
        <div className="p-4 sm:p-6 border-t border-[#162744] bg-[#050B16] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#8B9CB3]">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t(ALL_BRAND_IMAGES.length)}{t(" ausgewählte Bildmotive von VOZICIS IMMOBILIEN")}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D6AE70] hover:bg-[#E2C492] text-[#050B16] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#D6AE70]/15"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t("Gespräch mit Ioannis Vozicis vereinbaren")}</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

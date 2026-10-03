import { useLanguage } from '../i18n/LanguageContext';
import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  PhoneCall, 
  Mail, 
  Video, 
  Building2, 
  Sparkles,
  LockKeyhole
} from 'lucide-react';
import { StrategyCheckData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName?: string;
  prefilledData?: StrategyCheckData | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  projectName,
  prefilledData
}) => {
  const { t, locale, localizedImage } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<'video' | 'phone' | 'persoenlich'>('video');
  const [selectedDate, setSelectedDate] = useState('Nächste Woche (flexibel)');
  const [selectedTime, setSelectedTime] = useState('Vormittags (09:00 - 12:00)');

  const [formData, setFormData] = useState({
    name: prefilledData?.fullName || '',
    email: prefilledData?.email || '',
    phone: prefilledData?.phone || '',
    topic: null as string | null,
    notes: prefilledData ? `Auswertung aus Strategie-Check: EK ca. ${prefilledData.equityVolume.toLocaleString(locale)} €.` : ''
  });

  const topic = formData.topic ?? (projectName
    ? `${t('Interesse an Opportunität:')} ${t(projectName)}`
    : t('Strategische Immobilienberatung & Vermögensaufbau'));
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-start justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-xl bg-[#0A1324] border border-[#162744] rounded-2xl shadow-2xl shadow-black overflow-hidden my-auto">
        
        {/* Header */}
        <div className="bg-[#050B16] border-b border-[#162744] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#D6AE70] text-[#050B16] flex items-center justify-center font-bold text-sm">{t("IV")}</div>
            <div>
              <h3 className="text-base font-extrabold font-sans text-white">{t("1:1 Strategiegespräch mit Ioannis Vozicis")}</h3>
              <div className="text-xs text-[#D6AE70] font-medium">{t("Geschäftsführer & Gesellschafter Arventas")}</div>
            </div>
          </div>

          <button
            id="close-consultation-modal"
            aria-label={t('Schließen')}
            onClick={onClose}
            className="p-1.5 text-[#8B9CB3] hover:text-white rounded-lg hover:bg-[#050B16] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <p className="text-[#8B9CB3] leading-relaxed text-xs sm:text-sm font-light">{t("In einem 30-minütigen, vertraulichen Gespräch analysieren wir Ihre Kapitalstruktur, prüfen steuerliche Optionen und besprechen passende Off-Market Opportunitäten.")}</p>

              {/* Format selection */}
              <div>
                <label className="block text-[#8B9CB3] font-medium mb-1.5">{t("Gewünschtes Format:")}</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'video', label: 'Video-Call (Zoom)', icon: Video },
                    { id: 'phone', label: 'Telefonisch', icon: PhoneCall },
                    { id: 'persoenlich', label: 'Vor Ort (München/Büro)', icon: Building2 }
                  ].map(f => {
                    const Icon = f.icon;
                    return (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setSelectedFormat(f.id as any)}
                        className={`p-2.5 rounded-xl border flex flex-col items-center gap-1.5 transition-colors cursor-pointer ${
                          selectedFormat === f.id
                            ? 'bg-[#D6AE70]/15 border-[#D6AE70] text-[#D6AE70] font-semibold'
                            : 'bg-[#050B16] border-[#162744] text-[#8B9CB3] hover:text-white'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-[11px]">{t(f.label)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time slot preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#8B9CB3] font-medium mb-1">{t("Bevorzugter Zeitraum")}</label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-[#050B16] border border-[#162744] rounded-xl px-3 py-2 text-white focus:border-[#D6AE70] focus:outline-none"
                  >
                    <option value="Diese Woche">{t("Diese Woche (kurzfristig)")}</option>
                    <option value="Nächste Woche (flexibel)">{t("Nächste Woche (flexibel)")}</option>
                    <option value="In 2 Wochen">{t("In 2 Wochen")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#8B9CB3] font-medium mb-1">{t("Tageszeit")}</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-[#050B16] border border-[#162744] rounded-xl px-3 py-2 text-white focus:border-[#D6AE70] focus:outline-none"
                  >
                    <option value="Vormittags (09:00 - 12:00)">{t("Vormittags (09:00 - 12:00)")}</option>
                    <option value="Mittags (12:00 - 15:00)">{t("Mittags (12:00 - 15:00)")}</option>
                    <option value="Nachmittags (15:00 - 18:00)">{t("Nachmittags (15:00 - 18:00)")}</option>
                    <option value="Abends (18:00 - 20:00)">{t("Abends (18:00 - 20:00)")}</option>
                  </select>
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-[#8B9CB3] mb-1">{t("Ihr Name *")}</label>
                  <input
                    id="consultation-name"
                    type="text"
                    required
                    placeholder={t("z.B. Dr. Johannes Meyer")}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#050B16] border border-[#162744] rounded-xl px-3 py-2.5 text-white focus:border-[#D6AE70] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#8B9CB3] mb-1">{t("E-Mail *")}</label>
                    <input
                      id="consultation-email"
                      type="email"
                      required
                      placeholder={t("meyer@holding.de")}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#050B16] border border-[#162744] rounded-xl px-3 py-2.5 text-white focus:border-[#D6AE70] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8B9CB3] mb-1">{t("Telefonnummer *")}</label>
                    <input
                      id="consultation-phone"
                      type="tel"
                      required
                      placeholder={t("+49 170 987654")}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#050B16] border border-[#162744] rounded-xl px-3 py-2.5 text-white focus:border-[#D6AE70] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#8B9CB3] mb-1">{t("Schwerpunktthema / Anliegen")}</label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full bg-[#050B16] border border-[#162744] rounded-xl px-3 py-2 text-white focus:border-[#D6AE70] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#8B9CB3] pt-1">
                <LockKeyhole className="w-3.5 h-3.5 text-[#D6AE70] shrink-0" />
                <span>{t("Diskretion gesichert. Ihre Daten werden ausschließlich von Ioannis Vozicis eingesehen.")}</span>
              </div>

              <button
                id="submit-consultation-btn"
                type="submit"
                className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D6AE70] hover:bg-[#E2C492] text-[#050B16] flex items-center justify-center gap-2 shadow-lg shadow-[#D6AE70]/15 transition-all cursor-pointer mt-3"
              >
                <Calendar className="w-4 h-4" />
                <span>{t("Terminverbindlich anfragen")}</span>
              </button>

            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold font-sans text-white">{t("Terminanfrage erfolgreich übermittelt")}</h3>
              <p className="text-xs text-[#8B9CB3] max-w-md mx-auto leading-relaxed">{t("Vielen Dank, ")}<strong className="text-[#D6AE70]">{formData.name}</strong>{t(". Ioannis Vozicis hat Ihre Anfrage für ein 1:1 Gespräch erhalten und wird Ihnen innerhalb der nächsten 24 Stunden persönliche Terminvorschläge per E-Mail bzw. Telefon zukommen lassen.")}</p>
              <div className="p-4 bg-[#050B16] rounded-xl border border-[#162744] text-xs text-[#8B9CB3] text-left max-w-md mx-auto">
                <div><strong>{t("Format:")}</strong> {t(selectedFormat.toUpperCase())}</div>
                <div><strong>{t("Zeitraum:")}</strong> {t(selectedDate)} · {t(selectedTime)}</div>
                <div><strong>{t("Thema:")}</strong> {topic}</div>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#050B16] hover:bg-[#0D182E] text-white border border-[#162744] transition-colors cursor-pointer"
              >{t("Fenster schließen")}</button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

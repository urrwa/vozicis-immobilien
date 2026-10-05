import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { Pause, Play } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

/** A decorative card film: posters remain visible until playback is ready. */
export function JourneyVideo({ src, poster, active = true }: {
  src: string;
  poster: string;
  active?: boolean;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const [manualPlay, setManualPlay] = useState(false);
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  const shouldPlay = active && visible && pageVisible && !paused && !failed && (manualPlay || (!reducedMotion && !saveData));

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 });
    if (video.current) observer.observe(video.current);
    const onVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', onVisibility); };
  }, []);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    if (shouldPlay) element.play().catch(() => setPlaying(false));
    else element.pause();
  }, [shouldPlay, src]);

  if (failed) return <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />;

  return <>
    <video ref={video} src={visible && active && (!saveData || manualPlay) ? src : undefined}
      poster={poster} muted playsInline loop preload="none" aria-hidden="true"
      onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setFailed(true)}
      className="absolute inset-0 h-full w-full object-cover" />
    {active && !failed && <button type="button" onClick={() => {
      if (playing) setPaused(true);
      else { setManualPlay(true); setPaused(false); }
    }} aria-label={language === 'en' ? (playing ? 'Pause video' : 'Play video') : (playing ? 'Video pausieren' : 'Video abspielen')}
      className="absolute right-4 top-4 z-20 rounded-full border border-[#D6AE70]/50 bg-[#050B16]/80 p-3 text-[#D6AE70] backdrop-blur-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6AE70]">
      {playing ? <Pause size={16} /> : <Play size={16} />}
    </button>}
  </>;
}

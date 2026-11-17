import React, { useState } from 'react';
import { FilmRecord, PosterMotif } from '../types/cinema';
import { GENERATED_ARTWORK } from '../data/initialFilms';

interface FilmPosterArtProps {
  film: FilmRecord;
  variant?: 'card' | 'hero' | 'modal';
  className?: string;
}

function renderMotifSvg(motif: PosterMotif) {
  switch (motif) {
    case 'interstellar':
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full opacity-40 mix-blend-screen pointer-events-none" aria-hidden="true">
          <circle cx="200" cy="230" r="95" fill="none" stroke="#D4C3A3" strokeWidth="1.2" strokeDasharray="6 4" />
          <ellipse cx="200" cy="230" rx="165" ry="34" fill="none" stroke="#F5F3EF" strokeWidth="1.5" transform="rotate(-16 200 230)" />
          <circle cx="200" cy="230" r="56" fill="#09090B" fillOpacity="0.6" />
          <line x1="200" y1="40" x2="200" y2="115" stroke="#D4C3A3" strokeWidth="0.75" strokeOpacity="0.6" />
          <line x1="200" y1="345" x2="200" y2="460" stroke="#D4C3A3" strokeWidth="0.75" strokeOpacity="0.6" />
        </svg>
      );
    case 'dune-two':
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full opacity-45 mix-blend-screen pointer-events-none" aria-hidden="true">
          <circle cx="200" cy="145" r="64" fill="#09090B" fillOpacity="0.75" />
          <circle cx="200" cy="145" r="68" fill="none" stroke="#D4C3A3" strokeWidth="2" />
          <path d="M 0 360 Q 130 300 240 350 T 400 330 L 400 500 L 0 500 Z" fill="#09090B" fillOpacity="0.45" />
          <path d="M 0 360 Q 130 300 240 350 T 400 330" fill="none" stroke="#D4C3A3" strokeWidth="1.2" strokeOpacity="0.7" />
        </svg>
      );
    case 'inception':
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full opacity-40 mix-blend-screen pointer-events-none" aria-hidden="true">
          <rect x="65" y="75" width="270" height="340" fill="none" stroke="#D4C3A3" strokeWidth="1" strokeOpacity="0.5" />
          <rect x="105" y="115" width="190" height="260" fill="none" stroke="#F5F3EF" strokeWidth="0.9" strokeOpacity="0.4" />
          <rect x="145" y="155" width="110" height="180" fill="none" stroke="#D4C3A3" strokeWidth="1.2" strokeOpacity="0.7" />
          <polygon points="200,205 228,245 200,285 172,245" fill="none" stroke="#D4C3A3" strokeWidth="1.6" />
        </svg>
      );
    case 'blade-runner':
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full opacity-45 mix-blend-screen pointer-events-none" aria-hidden="true">
          <defs>
            <linearGradient id="br-haze" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D4C3A3" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#09090B" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="400" height="500" fill="url(#br-haze)" />
          <line x1="60" y1="0" x2="150" y2="500" stroke="#D4C3A3" strokeWidth="0.8" strokeOpacity="0.45" />
          <line x1="340" y1="0" x2="250" y2="500" stroke="#D4C3A3" strokeWidth="0.8" strokeOpacity="0.45" />
          <circle cx="200" cy="190" r="42" fill="none" stroke="#F5F3EF" strokeWidth="1" strokeOpacity="0.5" />
        </svg>
      );
    case 'spiderverse':
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full opacity-40 mix-blend-screen pointer-events-none" aria-hidden="true">
          <circle cx="200" cy="210" r="120" fill="none" stroke="#D4C3A3" strokeWidth="0.8" strokeDasharray="3 6" />
          <line x1="200" y1="210" x2="40" y2="40" stroke="#D4C3A3" strokeWidth="1" strokeOpacity="0.55" />
          <line x1="200" y1="210" x2="360" y2="40" stroke="#D4C3A3" strokeWidth="1" strokeOpacity="0.55" />
          <line x1="200" y1="210" x2="30" y2="390" stroke="#D4C3A3" strokeWidth="1" strokeOpacity="0.55" />
          <line x1="200" y1="210" x2="370" y2="390" stroke="#D4C3A3" strokeWidth="1" strokeOpacity="0.55" />
        </svg>
      );
    case 'spirited-away':
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full opacity-45 mix-blend-screen pointer-events-none" aria-hidden="true">
          <circle cx="200" cy="150" r="34" fill="#D4C3A3" fillOpacity="0.24" />
          <circle cx="200" cy="150" r="22" fill="none" stroke="#F5F3EF" strokeWidth="1.2" strokeOpacity="0.7" />
          <path d="M 90 320 L 310 320 M 115 290 L 285 290" stroke="#D4C3A3" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="140" y1="290" x2="140" y2="370" stroke="#D4C3A3" strokeWidth="1.5" strokeOpacity="0.5" />
          <line x1="260" y1="290" x2="260" y2="370" stroke="#D4C3A3" strokeWidth="1.5" strokeOpacity="0.5" />
        </svg>
      );
    case 'puss-in-boots':
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full opacity-40 mix-blend-screen pointer-events-none" aria-hidden="true">
          <line x1="90" y1="340" x2="310" y2="110" stroke="#F5F3EF" strokeWidth="1.6" strokeOpacity="0.75" />
          <polygon points="200,95 208,125 238,133 208,141 200,171 192,141 162,133 192,125" fill="#D4C3A3" fillOpacity="0.65" />
        </svg>
      );
    case 'coco':
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full opacity-45 mix-blend-screen pointer-events-none" aria-hidden="true">
          <path d="M 40 370 Q 200 180 360 370" fill="none" stroke="#D4C3A3" strokeWidth="2.5" strokeDasharray="8 6" />
          <path d="M 40 395 Q 200 215 360 395" fill="none" stroke="#D4C3A3" strokeWidth="1.2" strokeOpacity="0.6" />
          <circle cx="200" cy="210" r="18" fill="none" stroke="#F5F3EF" strokeWidth="1.2" strokeOpacity="0.65" />
        </svg>
      );
    case 'fury-road':
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full opacity-40 mix-blend-screen pointer-events-none" aria-hidden="true">
          <circle cx="200" cy="240" r="110" fill="none" stroke="#D4C3A3" strokeWidth="1.5" strokeDasharray="18 8" strokeOpacity="0.5" />
          <line x1="0" y1="295" x2="400" y2="255" stroke="#D4C3A3" strokeWidth="1.2" strokeOpacity="0.6" />
        </svg>
      );
    case 'dark-knight':
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full opacity-40 mix-blend-screen pointer-events-none" aria-hidden="true">
          <polygon points="200,190 50,0 350,0" fill="#D4C3A3" fillOpacity="0.14" />
          <ellipse cx="200" cy="140" rx="58" ry="26" fill="none" stroke="#F5F3EF" strokeWidth="1.2" strokeOpacity="0.65" />
        </svg>
      );
    case 'john-wick':
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full opacity-45 mix-blend-screen pointer-events-none" aria-hidden="true">
          <path d="M 110 150 L 290 150 M 130 180 L 270 180 M 155 150 L 155 340 M 245 150 L 245 340" stroke="#D4C3A3" strokeWidth="2" strokeOpacity="0.6" />
          <circle cx="200" cy="245" r="36" fill="none" stroke="#F5F3EF" strokeWidth="0.9" strokeOpacity="0.5" />
        </svg>
      );
    case 'top-gun':
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full opacity-45 mix-blend-screen pointer-events-none" aria-hidden="true">
          <line x1="200" y1="90" x2="95" y2="420" stroke="#F5F3EF" strokeWidth="1.4" strokeOpacity="0.65" />
          <line x1="200" y1="90" x2="305" y2="420" stroke="#D4C3A3" strokeWidth="1.4" strokeOpacity="0.75" />
          <polygon points="200,70 212,105 200,96 188,105" fill="#D4C3A3" />
        </svg>
      );
    case 'in-the-mood':
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full opacity-40 mix-blend-screen pointer-events-none" aria-hidden="true">
          <circle cx="135" cy="135" r="45" fill="#D4C3A3" fillOpacity="0.2" />
          <line x1="85" y1="60" x2="85" y2="440" stroke="#D4C3A3" strokeWidth="0.75" strokeOpacity="0.4" />
          <line x1="315" y1="60" x2="315" y2="440" stroke="#D4C3A3" strokeWidth="0.75" strokeOpacity="0.4" />
        </svg>
      );
    case 'la-la-land':
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full opacity-45 mix-blend-screen pointer-events-none" aria-hidden="true">
          <circle cx="270" cy="130" r="32" fill="none" stroke="#D4C3A3" strokeWidth="1.4" />
          <path d="M 200 100 L 200 320 M 180 100 L 220 100" stroke="#F5F3EF" strokeWidth="1.3" strokeOpacity="0.65" />
          <circle cx="180" cy="112" r="8" fill="#D4C3A3" fillOpacity="0.8" />
          <circle cx="220" cy="112" r="8" fill="#D4C3A3" fillOpacity="0.8" />
        </svg>
      );
    case 'before-sunrise':
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full opacity-40 mix-blend-screen pointer-events-none" aria-hidden="true">
          <circle cx="200" cy="220" r="95" fill="none" stroke="#D4C3A3" strokeWidth="1" strokeOpacity="0.55" />
          <circle cx="200" cy="220" r="65" fill="none" stroke="#F5F3EF" strokeWidth="0.8" strokeOpacity="0.4" />
          <circle cx="200" cy="220" r="24" fill="#D4C3A3" fillOpacity="0.3" />
        </svg>
      );
    case 'about-time':
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full opacity-45 mix-blend-screen pointer-events-none" aria-hidden="true">
          <circle cx="200" cy="195" r="78" fill="none" stroke="#D4C3A3" strokeWidth="1.2" strokeDasharray="4 8" />
          <line x1="200" y1="195" x2="200" y2="135" stroke="#F5F3EF" strokeWidth="1.5" strokeOpacity="0.75" />
          <line x1="200" y1="195" x2="245" y2="215" stroke="#D4C3A3" strokeWidth="1.5" strokeOpacity="0.85" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full opacity-35 mix-blend-screen pointer-events-none" aria-hidden="true">
          <circle cx="200" cy="220" r="80" fill="none" stroke="#D4C3A3" strokeWidth="1.2" />
          <circle cx="200" cy="220" r="28" fill="none" stroke="#F5F3EF" strokeWidth="1" />
        </svg>
      );
  }
}

export const FilmPosterArt: React.FC<FilmPosterArtProps> = ({
  film,
  variant = 'card',
  className = '',
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  const primarySrc =
    variant === 'hero' || variant === 'modal'
      ? film.heroImageUrl || film.imageUrl
      : film.imageUrl;

  const fallbackSrc = GENERATED_ARTWORK.interstellarHero;
  const activeSrc = imgFailed ? fallbackSrc : primarySrc;
  const isRealExternalPoster = !imgFailed && activeSrc.startsWith('http');

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-[#0F0F13] select-none ${className}`}
    >
      {/* Base High-Resolution Cinema Poster */}
      <img
        src={activeSrc}
        alt={`${film.title} (${film.year}) directed by ${film.director}`}
        referrerPolicy="no-referrer"
        loading="lazy"
        onError={() => {
          if (!imgFailed) {
            setImgFailed(true);
          }
        }}
        style={{
          objectPosition: film.imageCropPosition || 'center 18%',
        }}
        className={`w-full h-full object-cover poster-zoom-transition ${
          variant === 'card' ? 'group-hover:scale-[1.05]' : ''
        }`}
      />

      {/* Subtle Bottom-Weighted Cinema Grade Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            variant === 'hero'
              ? 'radial-gradient(circle at 68% 38%, rgba(225, 29, 72, 0.14), rgba(5, 5, 5, 0.78) 70%, #050505 100%)'
              : isRealExternalPoster
              ? 'linear-gradient(180deg, rgba(5, 5, 5, 0) 0%, rgba(5, 5, 5, 0.04) 68%, rgba(5, 5, 5, 0.65) 100%)'
              : 'linear-gradient(180deg, rgba(5, 5, 5, 0.08) 0%, rgba(5, 5, 5, 0.32) 58%, rgba(5, 5, 5, 0.86) 100%)',
        }}
      />

      {/* Bespoke Theatrical Motif Layer only for generated fallback plates */}
      {variant === 'card' && !isRealExternalPoster && (
        <div className="absolute inset-0 pointer-events-none">
          {renderMotifSvg(film.posterMotif)}
        </div>
      )}
    </div>
  );
};

import React, { useRef } from 'react';
import { Award, Play } from 'lucide-react';
import { FilmRecord } from '../types/cinema';
import { FilmPosterArt } from './FilmPosterArt';

interface FilmCardProps {
  film: FilmRecord;
  onInspect: (film: FilmRecord) => void;
  onWatchTrailer?: (film: FilmRecord) => void;
  onPromoteToHero?: (filmId: string) => void;
  isFlightDestination?: boolean;
  isFlightDocked?: boolean;
  flightProgress?: number;
  dockedPosterOpacity?: number;
}

export const FilmCard: React.FC<FilmCardProps> = ({
  film,
  onInspect,
  onWatchTrailer,
  isFlightDestination = false,
  isFlightDocked = true,
  flightProgress = 1,
  dockedPosterOpacity = 1,
}) => {
  const cardRef = useRef<HTMLElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // 3D perspective tilt capped at 6 degrees
    const rotateX = (((y - centerY) / centerY) * -5.5).toFixed(2);
    const rotateY = (((x - centerX) / centerX) * 5.5).toFixed(2);

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
  };

  const effectivePosterOpacity = isFlightDestination
    ? dockedPosterOpacity
    : 1;

  return (
    <article
      ref={cardRef}
      data-cursor="card"
      data-archive-card-id={film.id}
      data-flight-docked={isFlightDestination ? String(isFlightDocked) : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        {
          '--shadow-x': '0px',
          '--shadow-y': '18px',
          '--glow-alpha': isFlightDestination && isFlightDocked ? '0.32' : '0',
          '--sheen-x': '50%',
          '--sheen-y': '50%',
          '--sheen-alpha': '0',
          boxShadow:
            'var(--shadow-x, 0px) var(--shadow-y, 18px) 38px -12px rgba(0, 0, 0, 0.94), 0 4px 14px rgba(0, 0, 0, 0.72), 0 14px 36px -8px rgba(225, 29, 72, var(--glow-alpha, 0))',
          transition:
            'transform 280ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 320ms ease-out',
        } as React.CSSProperties
      }
      className="cinema-light-card group relative rounded-2xl overflow-hidden surface-velvet-glass flex flex-col justify-between h-full"
    >
      {/* Dynamic Overhead Specular Light Reflection Layer */}
      <div
        className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-200"
        style={{
          background:
            'radial-gradient(360px circle at var(--sheen-x, 50%) var(--sheen-y, 50%), rgba(225, 29, 72, var(--sheen-alpha, 0)), transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Top Clickable Poster Area / Scroll Flight Destination Slot */}
      <div
        data-flight-target={isFlightDestination ? 'archive-hero-slot' : undefined}
        onClick={() => onInspect(film)}
        role="button"
        tabIndex={0}
        aria-label={`Inspect dossier and watch trailer for ${film.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onInspect(film);
          }
        }}
        className="relative aspect-[3/4] w-full overflow-hidden cursor-pointer bg-[#050505]"
      >
        {/* Recessed Docking Bay shown while Movie 1 is in the 3D Deck or mid-flight */}
        {isFlightDestination && effectivePosterOpacity < 0.99 && (
          <div
            data-testid="archive-docking-bay"
            className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center"
            style={{
              opacity: Math.max(0, 1 - effectivePosterOpacity),
              background:
                'radial-gradient(circle at 50% 50%, rgba(225, 29, 72, 0.22) 0%, rgba(15, 15, 19, 0.9) 68%, #050505 100%)',
              boxShadow: 'inset 0 12px 32px rgba(0, 0, 0, 0.95)',
            }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mb-2"
              style={{
                background: 'rgba(225, 29, 72, 0.18)',
                transform: `scale(${(0.88 + flightProgress * 0.22).toFixed(2)})`,
              }}
            >
              <Award className="w-4 h-4 text-[#FF2E55]" />
            </div>
            <span className="text-[10px] font-mono-code tracking-widest uppercase text-white/85 line-clamp-1">
              {film.title} · LOCATION
            </span>
          </div>
        )}

        {/* Actual Docked Poster Image */}
        <div
          className="w-full h-full will-change-[opacity]"
          style={{
            opacity: effectivePosterOpacity,
          }}
        >
          <FilmPosterArt film={film} variant="card" />
        </div>

        {/* Top Pick Indicator on Poster Corner */}
        {film.isTopPick && effectivePosterOpacity > 0.2 && (
          <div
            style={{ opacity: effectivePosterOpacity }}
            className="absolute bottom-3 left-4 z-10 inline-flex items-center gap-1.5 text-[11px] font-mono-code font-semibold tracking-wider uppercase text-[#FF2E55]"
          >
            <Award className="w-3.5 h-3.5" />
            <span>#1 ALL-TIME PICK</span>
          </div>
        )}
      </div>

      {/* Minimalist Clean Card Body: Strictly Genre · Year · Duration, Movie Name, and Watch Trailer */}
      <div className="relative z-10 p-4 sm:p-5 flex-1 flex flex-col justify-between gap-3.5">
        <div className="space-y-1.5">
          {/* Genre · Year · Duration */}
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono-code text-white/50">
            <span className="text-white/80">{film.category}</span>
            <span aria-hidden="true">·</span>
            <span>{film.year}</span>
            <span aria-hidden="true">·</span>
            <span>{film.runtime}</span>
          </div>

          {/* Movie Title */}
          <h3 className="font-serif-editorial text-xl sm:text-2xl font-semibold text-white group-hover:text-[#FF2E55] transition-colors leading-snug line-clamp-2">
            <button
              type="button"
              onClick={() => onInspect(film)}
              className="text-left focus-visible:underline cursor-pointer"
            >
              {film.title}
            </button>
          </h3>
        </div>

        {/* Watch Trailer Action */}
        <div className="pt-1">
          <button
            type="button"
            data-cursor="magnetic"
            onClick={() =>
              onWatchTrailer ? onWatchTrailer(film) : onInspect(film)
            }
            aria-label={`Watch trailer for ${film.title}`}
            className="inline-flex items-center gap-2 text-xs font-sans-ui font-semibold text-[#FF2E55] hover:text-white transition-colors cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current shrink-0" />
            <span>Watch Trailer</span>
          </button>
        </div>
      </div>
    </article>
  );
};


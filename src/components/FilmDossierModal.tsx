import React, { useEffect, useState } from 'react';
import { X, Award, Check, Play, Square } from 'lucide-react';
import { FilmRecord } from '../types/cinema';
import { getFilmTrailerMeta } from '../data/realMovieTrailers';
import { FilmPosterArt } from './FilmPosterArt';
import { MagneticButton } from './MagneticButton';

interface FilmDossierModalProps {
  film: FilmRecord | null;
  autoPlayTrailer?: boolean;
  onClose: () => void;
  onPromoteToHero: (filmId: string) => void;
}

export const FilmDossierModal: React.FC<FilmDossierModalProps> = ({
  film,
  autoPlayTrailer = false,
  onClose,
  onPromoteToHero,
}) => {
  const [isPlayingTrailer, setIsPlayingTrailer] = useState(false);
  const [useIframeFallback, setUseIframeFallback] = useState(false);

  useEffect(() => {
    if (film) {
      setIsPlayingTrailer(Boolean(autoPlayTrailer));
      setUseIframeFallback(false);
    } else {
      setIsPlayingTrailer(false);
      setUseIframeFallback(false);
    }
  }, [film, autoPlayTrailer]);

  useEffect(() => {
    if (!film) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [film, onClose]);

  if (!film) return null;

  const trailerMeta = getFilmTrailerMeta(
    film.id,
    film.title,
    film.year,
    film.trailerUrl
  );
  const directMp4Url = trailerMeta.directMp4Url;
  const effectiveEmbedUrl =
    trailerMeta.imdbEmbedUrl || film.trailerEmbedUrl || trailerMeta.embedUrl;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-modal-title"
      data-testid="film-dossier-modal"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-[#050505]/90 backdrop-blur-md transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl surface-velvet-glass shadow-cinema-modal text-white flex flex-col">
        {/* Top Stage: Either 16:9 Live Screening Player OR Clean Artwork Header */}
        {isPlayingTrailer ? (
          <div
            data-testid="trailer-screening-player"
            className="relative w-full bg-[#050505] shrink-0"
          >
            {/* Minimal Top Screening Control Bar */}
            <div className="flex items-center justify-between gap-3 px-5 sm:px-6 py-3.5 bg-[#09090D]">
              <h2
                id="dossier-modal-title"
                className="font-serif-editorial text-lg sm:text-xl font-semibold text-white truncate"
              >
                {film.title}
              </h2>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  data-cursor="magnetic"
                  onClick={() => setIsPlayingTrailer(false)}
                  aria-label="Stop Trailer and Return to Dossier"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-[#E11D48] text-xs font-sans-ui font-medium text-white transition-colors cursor-pointer"
                >
                  <Square className="w-3 h-3 fill-current" />
                  <span>Stop Trailer</span>
                </button>
                <button
                  type="button"
                  data-cursor="magnetic"
                  onClick={onClose}
                  aria-label="Close Film Dossier"
                  className="w-8 h-8 rounded-full bg-white/[0.08] text-white hover:text-[#FF2E55] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 16:9 Native HD Theatrical Trailer Video Player (with Automatic Iframe Fallback) */}
            <div className="relative w-full aspect-video bg-[#050505]">
              {directMp4Url && !useIframeFallback ? (
                <video
                  key={directMp4Url}
                  src={directMp4Url}
                  poster={film.heroImageUrl || film.imageUrl}
                  controls
                  autoPlay
                  playsInline
                  onError={() => setUseIframeFallback(true)}
                  className="w-full h-full object-contain bg-[#050505]"
                >
                  Your browser does not support HTML5 video playback.
                </video>
              ) : (
                <iframe
                  key={effectiveEmbedUrl}
                  src={effectiveEmbedUrl}
                  title={`${film.title} Official Trailer`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        ) : (
          /* Clean Widescreen Artwork Header with Centered Watch Trailer Button */
          <div className="relative h-60 sm:h-72 w-full shrink-0 overflow-hidden bg-[#050505]">
            <FilmPosterArt film={film} variant="modal" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(5, 5, 5, 0.35) 0%, rgba(10, 10, 14, 0.72) 58%, #0F0F13 100%)',
              }}
            />

            {/* Close Button */}
            <button
              type="button"
              data-cursor="magnetic"
              onClick={onClose}
              aria-label="Close Film Dossier"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#050505]/80 text-white hover:text-[#FF2E55] flex items-center justify-center shadow-cinema-rest transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Centerpiece Watch Trailer Button */}
            <div
              data-testid="watch-trailer-prompt"
              className="absolute inset-0 flex items-center justify-center z-10 pb-6"
            >
              <button
                type="button"
                data-testid="watch-trailer-prompt-btn"
                data-cursor="magnetic"
                onClick={() => setIsPlayingTrailer(true)}
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full surface-champagne-luxury text-white font-sans-ui text-xs sm:text-sm font-semibold shadow-amber-glow hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white text-white" />
                <span>Watch Trailer</span>
              </button>
            </div>

            {/* Bottom Header Overlay Title */}
            <div className="absolute bottom-4 left-6 right-6 z-10">
              <h2
                id="dossier-modal-title"
                className="font-serif-editorial text-3xl sm:text-4xl font-semibold text-white leading-tight"
              >
                {film.title}
              </h2>
            </div>
          </div>
        )}

        {/* Clean Dossier Content Body */}
        <div className="p-6 sm:p-7 space-y-6 bg-[#0F0F13]">
          {/* Essential Film Metadata Row */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono-code text-white/60">
            <span className="text-[#FF2E55] font-semibold">
              {film.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>{film.year}</span>
            <span aria-hidden="true">·</span>
            <span>{film.runtime}</span>
            <span aria-hidden="true">·</span>
            <span className="text-white font-semibold">
              {film.rating.toFixed(1)} / 10
            </span>
            <span aria-hidden="true">·</span>
            <span>Directed by {film.director}</span>
          </div>

          {/* Curator's Editorial Note */}
          <p className="font-serif-editorial italic text-lg sm:text-xl text-white/90 leading-relaxed">
            &ldquo;{film.curatorNote}&rdquo;
          </p>

          {/* Modal Action Footer */}
          <div className="pt-1 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2.5">
              {!isPlayingTrailer ? (
                <MagneticButton
                  variant="amber"
                  onClick={() => setIsPlayingTrailer(true)}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Trailer</span>
                </MagneticButton>
              ) : (
                <MagneticButton
                  variant="velvet"
                  onClick={() => setIsPlayingTrailer(false)}
                >
                  <Square className="w-3.5 h-3.5 fill-current text-[#FF2E55]" />
                  <span>Stop Trailer</span>
                </MagneticButton>
              )}

              {film.isTopPick ? (
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#050505] text-xs font-mono-code font-semibold text-[#FF2E55]">
                  <Check className="w-4 h-4" />
                  <span>#1 Pick</span>
                </div>
              ) : (
                <MagneticButton
                  variant="velvet"
                  onClick={() => {
                    onPromoteToHero(film.id);
                  }}
                >
                  <Award className="w-4 h-4 text-[#FF2E55]" />
                  <span>Set as #1 Pick</span>
                </MagneticButton>
              )}
            </div>

            <MagneticButton variant="ghost" onClick={onClose}>
              <span>Close</span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
};

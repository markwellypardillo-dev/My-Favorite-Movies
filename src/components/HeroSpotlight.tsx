import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Eye, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { FilmRecord } from '../types/cinema';
import { getFilmTrailerMeta } from '../data/realMovieTrailers';
import {
  computeOrbitalSlotMetrics,
  getTopSixFilms,
  shouldStreamBackgroundTrailer,
} from '../utils/archiveLogic';
import { FilmPosterArt } from './FilmPosterArt';
import { MagneticButton } from './MagneticButton';

interface HeroSpotlightProps {
  heroFilm: FilmRecord;
  allFilms: FilmRecord[];
  onInspectFilm: (film: FilmRecord) => void;
  onWatchTrailer?: (film: FilmRecord) => void;
  onCycleTopPick: () => void;
  onSelectTopPick: (filmId: string) => void;
  scrollY: number;
  isFrontCardDetached?: boolean;
  isModalOpen?: boolean;
}

export const HeroSpotlight: React.FC<HeroSpotlightProps> = ({
  heroFilm,
  allFilms,
  onInspectFilm,
  onWatchTrailer,
  onSelectTopPick,
  scrollY,
  isFrontCardDetached = false,
  isModalOpen = false,
}) => {
  const topSixFilms = useMemo(() => getTopSixFilms(allFilms), [allFilms]);

  const activeIndex = useMemo(() => {
    const idx = topSixFilms.findIndex((f) => f.id === heroFilm.id);
    return idx >= 0 ? idx : 0;
  }, [topSixFilms, heroFilm.id]);

  // Drag / Swipe state for real-time 3D orbital morphing with spring damping
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const [smoothedDragX, setSmoothedDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const pointerStartXRef = useRef<number | null>(null);
  const didDragRef = useRef(false);

  // Track viewport width so the 6-card 3D orbital fan scales proportionally on mobile screens
  const [viewportWidth, setViewportWidth] = useState<number>(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1280
  );

  React.useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = viewportWidth < 640;
  const horizontalSpreadFactor = isMobile ? 0.46 : 1;
  const verticalSpreadFactor = isMobile ? 0.78 : 1;

  // Resolve official HD trailer stream for the currently active hero film
  const trailerMeta = useMemo(
    () =>
      getFilmTrailerMeta(
        heroFilm.id,
        heroFilm.title,
        heroFilm.year,
        heroFilm.trailerUrl
      ),
    [heroFilm.id, heroFilm.title, heroFilm.year, heroFilm.trailerUrl]
  );
  const directMp4Url = trailerMeta.directMp4Url;

  // Adaptive network signal detection: high signal streams live trailer; low signal stays on static poster
  const [hasStrongSignal, setHasStrongSignal] = useState<boolean>(() => {
    if (typeof navigator === 'undefined') return true;
    const conn = (
      navigator as Navigator & {
        connection?: {
          saveData?: boolean;
          effectiveType?: string;
          downlink?: number;
        };
      }
    ).connection;
    return shouldStreamBackgroundTrailer({
      onLine: navigator.onLine,
      saveData: conn?.saveData,
      effectiveType: conn?.effectiveType,
      downlink: conn?.downlink,
    });
  });

  const [isBgVideoPlaying, setIsBgVideoPlaying] = useState(false);
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
      return;
    }
    const conn = (
      navigator as Navigator & {
        connection?: {
          saveData?: boolean;
          effectiveType?: string;
          downlink?: number;
          addEventListener?: (type: string, listener: () => void) => void;
          removeEventListener?: (type: string, listener: () => void) => void;
        };
      }
    ).connection;

    const evaluateSignal = () => {
      const strong = shouldStreamBackgroundTrailer({
        onLine: navigator.onLine,
        saveData: conn?.saveData,
        effectiveType: conn?.effectiveType,
        downlink: conn?.downlink,
      });
      setHasStrongSignal(strong);
      if (!strong) {
        setIsBgVideoPlaying(false);
      }
    };

    evaluateSignal();
    window.addEventListener('online', evaluateSignal);
    window.addEventListener('offline', evaluateSignal);
    conn?.addEventListener?.('change', evaluateSignal);

    return () => {
      window.removeEventListener('online', evaluateSignal);
      window.removeEventListener('offline', evaluateSignal);
      conn?.removeEventListener?.('change', evaluateSignal);
    };
  }, []);

  // Reset playing state on film switch so the static poster shows immediately with zero loading screen
  useEffect(() => {
    setIsBgVideoPlaying(false);
  }, [heroFilm.id, directMp4Url]);

  // Pause background trailer when modal is open or when user scrolls past the landing page
  useEffect(() => {
    const videoEl = bgVideoRef.current;
    if (!videoEl) return;
    const isHeroOutOfView =
      typeof window !== 'undefined' && scrollY > window.innerHeight * 0.95;

    if (!hasStrongSignal || isModalOpen || isHeroOutOfView) {
      if (!videoEl.paused) {
        videoEl.pause();
      }
    } else if (videoEl.paused && videoEl.readyState >= 2) {
      videoEl.play().catch(() => {
        setIsBgVideoPlaying(false);
      });
    }
  }, [hasStrongSignal, isModalOpen, scrollY]);

  // Smooth spring-damped drag follower for 60/120fps swipe feel
  React.useEffect(() => {
    if (!isDragging && Math.abs(smoothedDragX) < 0.5) {
      setSmoothedDragX(0);
      return;
    }
    let rafId = 0;
    const tick = () => {
      setSmoothedDragX((prev) => {
        const target = isDragging ? dragDeltaX : 0;
        const diff = target - prev;
        if (Math.abs(diff) < 0.4) return target;
        return prev + diff * 0.28;
      });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isDragging, dragDeltaX, smoothedDragX]);

  const parallaxOffset = Math.min(110, scrollY * 0.2);

  // Convert spring-smoothed pixel drag into continuous orbital ring steps
  const dragStepDivisor = isMobile ? 115 : 170;
  const dragOffsetSteps =
    isDragging || Math.abs(smoothedDragX) > 0.5
      ? Math.max(-1.35, Math.min(1.35, smoothedDragX / dragStepDivisor))
      : 0;

  const morphToIndex = (targetIdx: number) => {
    const n = topSixFilms.length;
    if (n === 0) return;
    const normalized = ((targetIdx % n) + n) % n;
    const targetFilm = topSixFilms[normalized];
    if (targetFilm) {
      onSelectTopPick(targetFilm.id);
    }
  };

  // Morph Right: left card (MOVIE 6) moves into front center (MOVIE 1), front moves right (MOVIE 2)
  const handleMorphRight = () => {
    morphToIndex(activeIndex - 1);
  };

  // Morph Left: right card (MOVIE 2) moves into front center (MOVIE 1), front moves left (MOVIE 6)
  const handleMorphLeft = () => {
    morphToIndex(activeIndex + 1);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    pointerStartXRef.current = e.clientX;
    didDragRef.current = false;
    setIsDragging(true);
    setDragDeltaX(0);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || pointerStartXRef.current === null) return;
    const dx = e.clientX - pointerStartXRef.current;
    if (Math.abs(dx) > 8) {
      didDragRef.current = true;
    }
    setDragDeltaX(dx);
  };

  const finishPointerGesture = () => {
    if (!isDragging) return;
    const dx = dragDeltaX;
    setIsDragging(false);
    setDragDeltaX(0);
    pointerStartXRef.current = null;

    const swipeThreshold = isMobile ? 24 : 36;
    if (dx > swipeThreshold) {
      handleMorphRight();
    } else if (dx < -swipeThreshold) {
      handleMorphLeft();
    }
  };

  const handleStageKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleMorphLeft();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handleMorphRight();
    }
  };

  return (
    <section
      id="hero-spotlight"
      aria-label="Curator's Top 6 Interactive 3D Film Deck & #1 Pick Spotlight"
      className="relative min-h-screen min-h-[100dvh] w-full max-w-[100vw] flex flex-col items-center justify-center pt-20 sm:pt-24 pb-10 sm:pb-14 overflow-hidden bg-[#050505]"
    >
      {/* Pitch-Black Screening Room Backdrop: Static Poster Base + Seamless Live Trailer Video on High Signal */}
      <div
        data-testid="hero-backdrop-stage"
        data-video-active={isBgVideoPlaying && hasStrongSignal ? 'true' : 'false'}
        className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-700 ease-out ${
          isBgVideoPlaying && hasStrongSignal ? 'opacity-55' : 'opacity-28'
        }`}
        style={{
          transform: `translate3d(0, ${parallaxOffset.toFixed(1)}px, 0) scale(1.05)`,
          willChange: 'transform',
        }}
      >
        {/* Instant Static Poster Base Layer (Always present immediately; zero loading screen) */}
        <FilmPosterArt film={heroFilm} variant="hero" />

        {/* Live Auto-Playing Theatrical Trailer Layer (Crossfades in smoothly only when frames are actively playing on strong signal) */}
        {hasStrongSignal && directMp4Url && (
          <video
            ref={bgVideoRef}
            key={directMp4Url}
            data-testid="hero-bg-trailer-video"
            src={directMp4Url}
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            onLoadedMetadata={(e) => {
              // Skip past the 4-second green MPAA preview card directly into cinematic footage
              if (e.currentTarget.duration > 16) {
                try {
                  e.currentTarget.currentTime = 5;
                } catch {
                  // Ignore seek errors before buffer
                }
              }
            }}
            onPlaying={() => setIsBgVideoPlaying(true)}
            onTimeUpdate={(e) => {
              if (e.currentTarget.currentTime > 0.2 && !isBgVideoPlaying) {
                setIsBgVideoPlaying(true);
              }
            }}
            onWaiting={() => setIsBgVideoPlaying(false)}
            onStalled={() => setIsBgVideoPlaying(false)}
            onError={() => setIsBgVideoPlaying(false)}
            className={`absolute inset-0 w-full h-full object-cover object-center scale-[1.16] pointer-events-none transition-opacity duration-1000 ease-out ${
              isBgVideoPlaying ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 42% 50%, rgba(5, 5, 5, 0.24) 0%, rgba(5, 5, 5, 0.86) 68%, #050505 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #050505 0%, #050505 9%, transparent 28%, transparent 72%, #050505 91%, #050505 100%)',
          }}
        />
      </div>

      {/* Theatrical Overhead Projector Spotlight Cone & Ambient Stage Backlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
      >
        {/* Top-Down Volumetric Cinema Projector Beam */}
        <div
          className="absolute -top-24 left-[8%] sm:left-[16%] w-[640px] sm:w-[820px] h-[640px]"
          style={{
            background:
              'conic-gradient(from 162deg at 50% 0%, transparent 0deg, rgba(255, 255, 255, 0.08) 14deg, rgba(225, 29, 72, 0.14) 22deg, rgba(255, 255, 255, 0.09) 30deg, transparent 42deg)',
            filter: 'blur(34px)',
          }}
        />
        {/* Ambient Stage Floor Horizon Reflection */}
        <div
          className="absolute bottom-2 left-[14%] w-[580px] sm:w-[760px] h-[150px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(225, 29, 72, 0.24) 0%, rgba(255, 255, 255, 0.06) 42%, transparent 76%)',
            filter: 'blur(28px)',
          }}
        />
      </div>

      {/* Main Full-Viewport Hero Stage: Massive 6-Card 3D Deck + Minimal Right Side */}
      <div className="relative z-10 max-w-[1420px] mx-auto w-full px-3 sm:px-8 flex flex-col justify-center">
        {/* 12-Column Showcase: Large 6-Card 3D Orbital Deck + Minimal Right-Side Title, Inspect Button & Swipe Indicator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4 sm:gap-6 lg:gap-8 w-full">
          {/* Left / Center Stage (8 Cols): Oversized 6-Card 3D Orbital Ring Deck */}
          <div className="lg:col-span-8 relative w-full flex items-center justify-center">
            {/* Left Floating Orbital Morph Trigger (Accessible on both touch & desktop) */}
            <button
              type="button"
              data-cursor="magnetic"
              onClick={handleMorphRight}
              aria-label="Swipe or morph right to previous top movie"
              className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-full surface-velvet-glass shadow-cinema-rest text-white/80 hover:text-[#FF2E55] active:scale-95 transition-all z-30 absolute left-0 sm:static sm:mr-2 xl:mr-4 cursor-pointer shrink-0"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Oversized 6-Card 3D Ring Turntable Stage */}
            <div
              data-testid="hero-top-six-deck"
              role="region"
              aria-label="Mark Welly Pardillo's Top 6 Movies Interactive 3D Deck"
              tabIndex={0}
              onKeyDown={handleStageKeyDown}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={finishPointerGesture}
              onPointerCancel={finishPointerGesture}
              onPointerLeave={finishPointerGesture}
              style={{
                perspective: '1500px',
                touchAction: 'pan-y',
              }}
              className={`relative w-full max-w-[840px] h-[360px] sm:h-[560px] xl:h-[610px] flex items-center justify-center select-none ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
              }`}
            >
              {/* Invisible Fixed Measurement Anchor for Slot 0 (MOVIE 1) Launch Coordinates */}
              <div
                data-flight-source="orbital-front-slot"
                aria-hidden="true"
                style={{
                  transform: `translate3d(0px, ${Math.round(40 * verticalSpreadFactor)}px, 0) scale(1)`,
                }}
                className="pointer-events-none absolute w-[200px] sm:w-[320px] xl:w-[348px] h-[284px] sm:h-[445px] xl:h-[485px] rounded-2xl sm:rounded-3xl opacity-0"
              />

              {/* Outer Crimson & Obsidian Theatrical Backlight Halo Behind the 6-Card Deck */}
              <div
                data-testid="hero-deck-backlight"
                className="absolute w-[310px] sm:w-[620px] h-[310px] sm:h-[580px] rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, rgba(225, 29, 72, 0.36) 0%, rgba(190, 18, 60, 0.16) 44%, rgba(5, 5, 5, 0) 74%)',
                  filter: 'blur(42px)',
                }}
                aria-hidden="true"
              />

              {/* Inner High-Contrast White Rim Spotlight Core Behind Center Card (MOVIE 1) */}
              <div
                className="absolute w-[230px] sm:w-[400px] h-[290px] sm:h-[470px] rounded-full pointer-events-none"
                style={{
                  transform: 'translate3d(0, 20px, 0)',
                  background:
                    'radial-gradient(circle, rgba(255, 255, 255, 0.24) 0%, rgba(244, 63, 94, 0.22) 45%, transparent 75%)',
                  filter: 'blur(26px)',
                }}
                aria-hidden="true"
              />

              {/* The 6 Top Movies Arranged in 3D Ring (MOVIE 1 Front, MOVIE 6 Left, MOVIE 2 Right, MOVIE 5/3 Mid-Back, MOVIE 4 Top-Back) */}
              {topSixFilms.map((film, cardIdx) => {
                const metrics = computeOrbitalSlotMetrics(
                  cardIdx,
                  activeIndex,
                  dragOffsetSteps,
                  topSixFilms.length
                );
                const isFrontCard = metrics.slotIndex === 0;
                const hideBecauseFlying =
                  isFrontCard && isFrontCardDetached && !isDragging;
                const tx = Math.round(metrics.translateX * horizontalSpreadFactor);
                const ty = Math.round(metrics.translateY * verticalSpreadFactor);

                return (
                  <div
                    key={film.id}
                    data-testid={`orbital-card-${metrics.slotIndex}`}
                    data-cursor="card"
                    data-slot-index={metrics.slotIndex}
                    data-detached={hideBecauseFlying ? 'true' : 'false'}
                    role="button"
                    tabIndex={hideBecauseFlying ? -1 : 0}
                    aria-label={
                      isFrontCard
                        ? `Movie 1 Front Spotlight: ${film.title} — Click to inspect dossier`
                        : `${metrics.label}: Rotate ${film.title} to front spotlight`
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      if (didDragRef.current) return;
                      if (isFrontCard) {
                        onInspectFilm(film);
                      } else {
                        morphToIndex(cardIdx);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        if (isFrontCard) {
                          onInspectFilm(film);
                        } else {
                          morphToIndex(cardIdx);
                        }
                      }
                    }}
                    style={{
                      zIndex: metrics.zIndex,
                      opacity: hideBecauseFlying ? 0 : metrics.opacity,
                      pointerEvents: hideBecauseFlying ? 'none' : 'auto',
                      transform: `translate3d(${tx}px, ${ty}px, 0) scale(${metrics.scale}) rotateY(${metrics.rotateY}deg) rotateZ(${metrics.rotateZ}deg)`,
                      filter: `brightness(${metrics.brightness})`,
                      backfaceVisibility: 'hidden',
                      willChange: 'transform, opacity, filter',
                      transition:
                        isDragging || Math.abs(smoothedDragX) > 0.5
                          ? 'opacity 140ms ease-out'
                          : hideBecauseFlying
                          ? 'opacity 90ms ease-out'
                          : 'transform 760ms cubic-bezier(0.16, 1, 0.3, 1), opacity 320ms cubic-bezier(0.16, 1, 0.3, 1), filter 540ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 540ms ease',
                      boxShadow: isFrontCard
                        ? '0 40px 85px -10px rgba(0, 0, 0, 0.98), 0 16px 48px -6px rgba(225, 29, 72, 0.42), 0 0 28px -4px rgba(255, 255, 255, 0.14)'
                        : '0 26px 56px -12px rgba(0, 0, 0, 0.95), 0 8px 24px rgba(0, 0, 0, 0.8)',
                    }}
                    className="cinema-light-card group absolute w-[200px] sm:w-[320px] xl:w-[348px] h-[284px] sm:h-[445px] xl:h-[485px] rounded-2xl sm:rounded-3xl overflow-hidden surface-velvet-solid cursor-pointer"
                  >
                    <FilmPosterArt film={film} variant="card" />
                  </div>
                );
              })}
            </div>

            {/* Right Floating Orbital Morph Trigger (Accessible on both touch & desktop) */}
            <button
              type="button"
              data-cursor="magnetic"
              onClick={handleMorphLeft}
              aria-label="Swipe or morph left to next top movie"
              className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-full surface-velvet-glass shadow-cinema-rest text-white/80 hover:text-[#FF2E55] active:scale-95 transition-all z-30 absolute right-0 sm:static sm:ml-2 xl:ml-4 cursor-pointer shrink-0"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Right Side (4 Cols): Strictly Movie Title, Inspect Button, and Tiny Swipe Indicator */}
          <div
            data-testid="hero-right-panel"
            className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left justify-center space-y-4 sm:space-y-6 lg:pl-4 px-2"
          >
            {/* Active Movie Title with Smooth Editorial Transition in Crisp White */}
            <h1
              key={heroFilm.id}
              className="font-serif-editorial text-4xl sm:text-6xl xl:text-7xl font-semibold tracking-tight text-white leading-[1.02] animate-[fadeSlideUp_480ms_cubic-bezier(0.16,1,0.3,1)]"
              style={{
                textWrap: 'balance',
                textShadow: '0 12px 36px rgba(0, 0, 0, 0.9)',
              }}
            >
              {heroFilm.title}
            </h1>

            {/* Watch Trailer & Inspect Film Dossier Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <MagneticButton
                variant="amber"
                onClick={() =>
                  onWatchTrailer ? onWatchTrailer(heroFilm) : onInspectFilm(heroFilm)
                }
                className="px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Watch Trailer</span>
              </MagneticButton>

              <MagneticButton
                variant="velvet"
                onClick={() => onInspectFilm(heroFilm)}
                className="px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm"
              >
                <Eye className="w-4 h-4 text-[#FF2E55]" />
                <span>Inspect Dossier</span>
              </MagneticButton>
            </div>

            {/* Tiny 6-Slot Swipe Indicator */}
            <div
              role="group"
              aria-label="Mark Welly Pardillo's Top 6 Movies"
              className="pt-1 flex items-center justify-center lg:justify-start gap-2.5"
            >
              {topSixFilms.map((film, idx) => {
                const isActive = film.id === heroFilm.id;
                return (
                  <button
                    key={film.id}
                    type="button"
                    data-cursor="magnetic"
                    onClick={() => morphToIndex(idx)}
                    aria-label={`Select Top Movie ${idx + 1}: ${film.title}`}
                    title={`0${idx + 1} · ${film.title}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'w-9 surface-champagne-luxury shadow-amber-glow'
                        : 'w-2.5 bg-white/30 hover:bg-white/70'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

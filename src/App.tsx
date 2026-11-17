import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Search, X, SlidersHorizontal, Plus, Layers, LayoutGrid, Award } from 'lucide-react';
import { FilmCategory, FilmRecord, FilterCategory } from './types/cinema';
import { INITIAL_FILMS } from './data/initialFilms';
import {
  ArchiveHistoryState,
  areHistoryStatesEqual,
  computeArchiveStats,
  computeScrollFlightMetrics,
  cycleNextHeroPick,
  filterAndSortFilms,
  getHeroPick,
  promoteToHeroPick,
  ScrollFlightMetrics,
} from './utils/archiveLogic';
import { CustomCursor } from './components/CustomCursor';
import { FloatingNav } from './components/FloatingNav';
import { HeroSpotlight } from './components/HeroSpotlight';
import { FilmCard } from './components/FilmCard';
import { FilmPosterArt } from './components/FilmPosterArt';
import { FilmDossierModal } from './components/FilmDossierModal';
import { AddFilmModal } from './components/AddFilmModal';
import { ArchitecturalFooter } from './components/ArchitecturalFooter';
import { MagneticButton } from './components/MagneticButton';

const STORAGE_KEY = 'the_pardillo_archive_films_v4';

const FILTER_TABS: FilterCategory[] = [
  'All',
  'Cartoons & Animation',
  'Sci-Fi',
  'Marvel, DC & Heroes',
  'Action',
  'Love Stories',
  'Horror',
  'Top Rated',
];

const CHAPTER_SECTIONS: {
  index: string;
  category: FilmCategory;
  title: string;
  subtitle: string;
}[] = [
  {
    index: '01.',
    category: 'Cartoons & Animation',
    title: '01. Cartoons & Animation',
    subtitle:
      'Hand-crafted worlds, kinetic frame-by-frame expressionism, and mythic animated storytelling.',
  },
  {
    index: '02.',
    category: 'Sci-Fi',
    title: '02. Sci-Fi & Mind-Benders',
    subtitle:
      'Relativistic horizons, time loops, cybernetic futures, and prophetic worlds on 70mm celluloid.',
  },
  {
    index: '03.',
    category: 'Marvel, DC & Heroes',
    title: '03. Marvel, DC & Heroes',
    subtitle:
      'Multiversal crossovers, armored titans, cosmic misfits, and modern comic-book mythology.',
  },
  {
    index: '04.',
    category: 'Action',
    title: '04. Action & Blockbusters',
    subtitle:
      'Practical stunt choreography, Pencak Silat raids, supersonic dogfights, and high-velocity cinema.',
  },
  {
    index: '05.',
    category: 'Love Stories',
    title: '05. Love Stories & Romance',
    subtitle:
      'Unspoken devotion, rain-slicked reunions, and the bittersweet passage of time.',
  },
  {
    index: '06.',
    category: 'Horror',
    title: '06. Horror & Supernatural',
    subtitle:
      'Southern Gothic folklore, haunted cellars, survival horror, and psychological dread.',
  },
];

export default function App() {
  const [films, setFilms] = useState<FilmRecord[]>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback to INITIAL_FILMS if localStorage is unavailable
    }
    return INITIAL_FILMS;
  });

  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<
    'curated' | 'rating-desc' | 'year-desc' | 'title-asc'
  >('curated');
  const [layoutMode, setLayoutMode] = useState<'grid' | 'chapters'>('grid');
  const [showAllInGrid, setShowAllInGrid] = useState(false);

  const [inspectedFilmId, setInspectedFilmId] = useState<string | null>(null);
  const [autoPlayTrailer, setAutoPlayTrailer] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<
    'hero-spotlight' | 'archive-showcase'
  >('hero-spotlight');

  const isRestoringHistoryRef = useRef(false);
  const lastCommittedHistoryRef = useRef<ArchiveHistoryState | null>(null);

  // Scroll & Velocity State for Bidirectional Scroll Engine
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [flightMetrics, setFlightMetrics] = useState<ScrollFlightMetrics | null>(
    null
  );
  const kineticContainerRef = useRef<HTMLDivElement | null>(null);

  const heroFilm = useMemo(() => getHeroPick(films), [films]);

  const filteredFilms = useMemo(
    () =>
      filterAndSortFilms(films, {
        category: activeCategory,
        searchQuery,
        sortBy,
      }),
    [films, activeCategory, searchQuery, sortBy]
  );

  // Measure live viewport rects of the 3D Orbital Front Slot and Categorized Archive Target Slot
  const updateFlightGeometry = useCallback((virtualScrollY?: number) => {
    const actualY = window.scrollY;
    const effectiveY = virtualScrollY !== undefined ? virtualScrollY : actualY;
    const scrollLag = actualY - effectiveY;

    const sourceEl = document.querySelector<HTMLElement>(
      '[data-flight-source="orbital-front-slot"]'
    );
    const targetEl = document.querySelector<HTMLElement>(
      '[data-flight-target="archive-hero-slot"]'
    );

    if (!sourceEl || !targetEl) {
      setFlightMetrics(null);
      return;
    }

    const sRect = sourceEl.getBoundingClientRect();
    const tRect = targetEl.getBoundingClientRect();

    if (sRect.width === 0 || tRect.width === 0) {
      setFlightMetrics(null);
      return;
    }

    // Compute the scrollY where the target card slot is comfortably framed in the viewport
    const targetDocTop = tRect.top + actualY;
    const startScroll = 12;
    const endScroll = Math.max(
      360,
      Math.min(1650, targetDocTop - window.innerHeight * 0.44)
    );

    const metrics = computeScrollFlightMetrics(
      effectiveY,
      startScroll,
      endScroll,
      {
        left: sRect.left,
        top: sRect.top + scrollLag,
        width: sRect.width,
        height: sRect.height,
      },
      {
        left: tRect.left,
        top: tRect.top + scrollLag,
        width: tRect.width,
        height: tRect.height,
      }
    );

    setFlightMetrics(metrics);
  }, []);

  // Persist to localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(films));
    } catch {
      // Ignore quota errors
    }
  }, [films]);

  // Bidirectional Scroll Velocity, Top Progress, and Spring-Damped 3D Card Flight Engine
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let smoothedY = window.scrollY;
    let currentSkew = 0;
    let rafId = 0;

    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? y / docHeight : 0);

      const delta = y - lastScrollY;
      lastScrollY = y;
      // Subtle vertical kinetic skew capped at 1.1deg
      const targetSkew = Math.max(-1.1, Math.min(1.1, delta * 0.022));
      currentSkew += (targetSkew - currentSkew) * 0.32;

      if (kineticContainerRef.current) {
        kineticContainerRef.current.style.transform = `skewY(${currentSkew.toFixed(
          2
        )}deg)`;
      }
    };

    const tickSpringLoop = () => {
      const targetY = window.scrollY;
      const diffY = targetY - smoothedY;

      if (Math.abs(diffY) > 0.25) {
        // Smooth exponential spring damping for 60/120fps wheel & trackpad gliding
        smoothedY += diffY * 0.26;
        updateFlightGeometry(smoothedY);
      } else if (smoothedY !== targetY) {
        smoothedY = targetY;
        updateFlightGeometry(targetY);
      }

      if (Math.abs(currentSkew) > 0.01) {
        currentSkew *= 0.86;
        if (kineticContainerRef.current) {
          kineticContainerRef.current.style.transform =
            Math.abs(currentSkew) < 0.02
              ? 'none'
              : `skewY(${currentSkew.toFixed(2)}deg)`;
        }
      }
      rafId = requestAnimationFrame(tickSpringLoop);
    };

    updateFlightGeometry(window.scrollY);
    const handleResize = () => updateFlightGeometry(window.scrollY);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    rafId = requestAnimationFrame(tickSpringLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rafId);
    };
  }, [updateFlightGeometry]);

  // Re-measure flight geometry whenever active film, category, or layout mode changes
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      updateFlightGeometry(window.scrollY);
    });
    return () => cancelAnimationFrame(id);
  }, [
    heroFilm.id,
    activeCategory,
    searchQuery,
    sortBy,
    layoutMode,
    updateFlightGeometry,
  ]);

  // Bidirectional Scroll Reveal Observer (Up & Down)
  useEffect(() => {
    const allItems = document.querySelectorAll<HTMLElement>(
      '.scroll-reveal-item'
    );
    allItems.forEach((item) => {
      if (!item.hasAttribute('data-scroll-reveal')) {
        item.style.opacity = '1';
        item.style.transform = 'translate3d(0, 0, 0) scale(1)';
      }
    });

    const elements = document.querySelectorAll<HTMLElement>(
      '[data-scroll-reveal]'
    );
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (!el.hasAttribute('data-scroll-reveal')) {
            el.style.opacity = '1';
            el.style.transform = 'translate3d(0, 0, 0) scale(1)';
            return;
          }
          if (entry.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'translate3d(0, 0, 0) scale(1)';
          } else {
            // Subtle bidirectional recession when scrolling away
            const isAbove = entry.boundingClientRect.top < 0;
            el.style.opacity = '0.25';
            el.style.transform = isAbove
              ? 'translate3d(0, -18px, 0) scale(0.98)'
              : 'translate3d(0, 24px, 0) scale(0.98)';
          }
        });
      },
      { threshold: 0.08, rootMargin: '40px 0px 40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredFilms, layoutMode, heroFilm.id]);

  const stats = useMemo(() => computeArchiveStats(films), [films]);

  const inspectedFilm = useMemo(
    () => films.find((f) => f.id === inspectedFilmId) || null,
    [films, inspectedFilmId]
  );

  // Seed initial History API state and handle device/phone Back button (popstate)
  useEffect(() => {
    const initialSnapshot: ArchiveHistoryState = {
      isPardilloArchiveState: true,
      activeCategory: 'All',
      layoutMode: 'grid',
      heroFilmId: getHeroPick(films).id,
      inspectedFilmId: null,
      autoPlayTrailer: false,
      isAddModalOpen: false,
      section: 'hero-spotlight',
    };

    if (
      !window.history.state ||
      !window.history.state.isPardilloArchiveState
    ) {
      window.history.replaceState(
        { ...initialSnapshot, isRootGuard: true },
        ''
      );
      window.history.pushState(initialSnapshot, '');
      lastCommittedHistoryRef.current = initialSnapshot;
    } else {
      lastCommittedHistoryRef.current = window.history
        .state as ArchiveHistoryState;
    }

    const handlePopState = (event: PopStateEvent) => {
      const state = event.state as
        | (ArchiveHistoryState & { isRootGuard?: boolean })
        | null;

      const targetState: ArchiveHistoryState =
        state && state.isPardilloArchiveState
          ? {
              isPardilloArchiveState: true,
              activeCategory: state.activeCategory || 'All',
              layoutMode: state.layoutMode || 'grid',
              heroFilmId: state.heroFilmId || getHeroPick(INITIAL_FILMS).id,
              inspectedFilmId: state.inspectedFilmId ?? null,
              autoPlayTrailer: Boolean(state.autoPlayTrailer),
              isAddModalOpen: Boolean(state.isAddModalOpen),
              section: state.section || 'hero-spotlight',
            }
          : initialSnapshot;

      const previousSection = lastCommittedHistoryRef.current?.section;
      isRestoringHistoryRef.current = true;
      lastCommittedHistoryRef.current = targetState;

      setActiveCategory(targetState.activeCategory);
      setLayoutMode(targetState.layoutMode);
      setInspectedFilmId(targetState.inspectedFilmId);
      setAutoPlayTrailer(targetState.autoPlayTrailer);
      setIsAddModalOpen(targetState.isAddModalOpen);
      setActiveSection(targetState.section);

      if (targetState.heroFilmId) {
        setFilms((prev) => promoteToHeroPick(prev, targetState.heroFilmId));
      }

      // If the user reached the root guard entry on their phone's Back button,
      // keep a fresh guard entry in history so they stay inside the app on the Landing Page.
      if (!state || state.isRootGuard) {
        window.history.pushState(targetState, '');
      }

      if (
        targetState.section === 'hero-spotlight' &&
        (previousSection === 'archive-showcase' || window.scrollY > 180)
      ) {
        const heroEl = document.getElementById('hero-spotlight');
        if (heroEl) {
          heroEl.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (
        targetState.section === 'archive-showcase' &&
        previousSection === 'hero-spotlight' &&
        window.scrollY < 160
      ) {
        const archiveEl = document.getElementById('archive-showcase');
        if (archiveEl) {
          archiveEl.scrollIntoView({ behavior: 'smooth' });
        }
      }

      window.requestAnimationFrame(() => {
        isRestoringHistoryRef.current = false;
      });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Push a new in-app history state whenever tabs, modals, layout mode, or Top 6 pick changes
  useEffect(() => {
    const nextSnapshot: ArchiveHistoryState = {
      isPardilloArchiveState: true,
      activeCategory,
      layoutMode,
      heroFilmId: heroFilm.id,
      inspectedFilmId,
      autoPlayTrailer,
      isAddModalOpen,
      section: activeSection,
    };

    if (isRestoringHistoryRef.current) {
      isRestoringHistoryRef.current = false;
      lastCommittedHistoryRef.current = nextSnapshot;
      return;
    }

    if (!areHistoryStatesEqual(lastCommittedHistoryRef.current, nextSnapshot)) {
      window.history.pushState(nextSnapshot, '');
      lastCommittedHistoryRef.current = nextSnapshot;
    }
  }, [
    activeCategory,
    layoutMode,
    heroFilm.id,
    inspectedFilmId,
    autoPlayTrailer,
    isAddModalOpen,
    activeSection,
  ]);

  const handlePromoteToHero = (filmId: string) => {
    const target = films.find((f) => f.id === filmId);
    if (!target) return;
    setFilms((prev) => promoteToHeroPick(prev, filmId));
    if (
      activeCategory !== 'All' &&
      activeCategory !== 'Top Rated' &&
      activeCategory !== target.category
    ) {
      setActiveCategory('All');
    }
  };

  const handleCycleTopPick = () => {
    const { updatedFilms } = cycleNextHeroPick(films);
    setFilms(updatedFilms);
  };

  const handleAddFilm = (newFilm: FilmRecord, promoteImmediately: boolean) => {
    setFilms((prev) => {
      const next = [newFilm, ...prev];
      return promoteImmediately ? promoteToHeroPick(next, newFilm.id) : next;
    });
  };

  const handleResetArchive = () => {
    setFilms(INITIAL_FILMS);
    setActiveCategory('All');
    setActiveSection('hero-spotlight');
    setSearchQuery('');
  };

  const handleNavSelectCategory = (
    category: FilterCategory,
    targetId?: string
  ) => {
    setActiveCategory(category);
    if (targetId === 'hero-spotlight') {
      setActiveSection('hero-spotlight');
    } else if (targetId === 'archive-showcase') {
      setActiveSection('archive-showcase');
    }
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isFrontCardDetached = Boolean(flightMetrics?.isDetachedFromDeck);
  const isFlightDocked = flightMetrics ? flightMetrics.isDockedInArchive : true;
  const currentFlightProgress = flightMetrics ? flightMetrics.progress : 0;
  const currentDockedPosterOpacity = flightMetrics
    ? flightMetrics.dockedPosterOpacity
    : 1;
  const flyingOpacity = flightMetrics ? flightMetrics.flyingCardOpacity : 0;

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#050505] text-white relative selection:bg-[#E11D48]/40 selection:text-white">
      {/* Custom 3D Light-Source & Magnetic Lens Cursor */}
      <CustomCursor />

      {/* Persistent GPU-Composited 3D Flying Card Overlay (Zero Mount/Unmount Hitch) */}
      <div
        data-testid="scroll-flying-hero-card"
        data-flight-active={flyingOpacity > 0.01 ? 'true' : 'false'}
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: `${flightMetrics ? flightMetrics.width : 348}px`,
          height: `${flightMetrics ? flightMetrics.height : 485}px`,
          borderRadius: `${flightMetrics ? flightMetrics.borderRadius : 24}px`,
          opacity: flyingOpacity,
          visibility: flyingOpacity > 0.005 ? 'visible' : 'hidden',
          transform: flightMetrics
            ? `translate3d(${flightMetrics.x}px, ${flightMetrics.y}px, 0) perspective(1300px) rotateZ(${flightMetrics.rotateZ}deg) rotateX(${flightMetrics.rotateX}deg) rotateY(${flightMetrics.rotateY}deg) scale(${flightMetrics.scaleBoost})`
            : 'translate3d(0, 0, 0)',
          zIndex: 35,
          pointerEvents: 'none',
          backfaceVisibility: 'hidden',
          willChange: 'transform, width, height, opacity',
          boxShadow:
            '0 38px 80px -10px rgba(0, 0, 0, 0.96), 0 16px 46px -6px rgba(225, 29, 72, 0.45), 0 0 24px -4px rgba(255, 255, 255, 0.16)',
        }}
        className="overflow-hidden surface-velvet-solid"
      >
        <FilmPosterArt film={heroFilm} variant="card" />
        {flightMetrics && flightMetrics.progress > 0.65 && (
          <div
            style={{
              opacity: Math.min(1, (flightMetrics.progress - 0.65) / 0.25),
            }}
            className="absolute bottom-3 left-4 z-10 inline-flex items-center gap-1.5 text-[11px] font-mono-code font-semibold tracking-wider uppercase text-[#FF2E55]"
          >
            <Award className="w-3.5 h-3.5" />
            <span>#1 ALL-TIME PICK</span>
          </div>
        )}
      </div>

      {/* Two-Stage Navigation: Top Architectural Masthead + Bottom Scroll Dock */}
      <FloatingNav
        activeCategory={activeCategory}
        onSelectCategory={handleNavSelectCategory}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        scrollProgress={scrollProgress}
        scrollY={scrollY}
        totalFilms={films.length}
      />

      {/* Main Content Area */}
      <main className="w-full max-w-[100vw] overflow-x-hidden">
        {/* Hero Section — Mark Welly Pardillo's #1 All-Time Best Pick */}
        <HeroSpotlight
          heroFilm={heroFilm}
          allFilms={films}
          onInspectFilm={(film) => {
            setAutoPlayTrailer(false);
            setInspectedFilmId(film.id);
          }}
          onWatchTrailer={(film) => {
            setAutoPlayTrailer(true);
            setInspectedFilmId(film.id);
          }}
          onCycleTopPick={handleCycleTopPick}
          onSelectTopPick={handlePromoteToHero}
          scrollY={scrollY}
          isFrontCardDetached={isFrontCardDetached}
          isModalOpen={Boolean(inspectedFilm) || isAddModalOpen}
        />

        {/* Interactive Genre Showcase & Filterable Archive Section */}
        <section
          id="archive-showcase"
          aria-label="Curated Film Archive"
          className="relative max-w-[1360px] mx-auto w-full overflow-hidden px-4 sm:px-8 pt-16 sm:pt-24 pb-12"
        >
          {/* Ambient Backlight Behind Categorized Archive Grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-full max-w-[780px] h-[340px] rounded-full opacity-55"
            style={{
              background:
                'radial-gradient(ellipse at 50% 50%, rgba(225, 29, 72, 0.18) 0%, rgba(255, 255, 255, 0.04) 45%, transparent 75%)',
              filter: 'blur(44px)',
            }}
          />

          {/* Section Header */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8">
            <div>
              <h2 className="font-serif-editorial text-3xl sm:text-5xl font-semibold text-white tracking-tight">
                The Curated Film Index
              </h2>
            </div>

            {/* Search Input & View Controls */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              {/* Live Search Bar */}
              <div className="relative w-full sm:w-72">
                <label htmlFor="archive-search-input" className="sr-only">
                  Search films by title, director, or year
                </label>
                <Search className="w-4 h-4 text-white/45 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="archive-search-input"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search title, director, year..."
                  className="w-full rounded-xl surface-velvet-glass pl-10 pr-9 py-2.5 text-xs font-sans-ui text-white placeholder-white/40 shadow-cinema-rest focus:ring-2 focus:ring-[#E11D48]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search query"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/45 hover:text-[#FF2E55] p-1 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <label htmlFor="archive-sort-select" className="sr-only">
                  Sort archive films
                </label>
                <div className="flex items-center gap-2 rounded-xl surface-velvet-glass px-3.5 py-2.5 shadow-cinema-rest">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#FF2E55]" />
                  <select
                    id="archive-sort-select"
                    value={sortBy}
                    onChange={(e) =>
                      setSortBy(
                        e.target.value as
                          | 'curated'
                          | 'rating-desc'
                          | 'year-desc'
                          | 'title-asc'
                      )
                    }
                    className="bg-transparent text-xs font-sans-ui text-white focus:outline-none cursor-pointer"
                  >
                    <option value="curated" className="bg-[#0F0F13]">
                      Curated Rank
                    </option>
                    <option value="rating-desc" className="bg-[#0F0F13]">
                      Highest Rated
                    </option>
                    <option value="year-desc" className="bg-[#0F0F13]">
                      Release Year
                    </option>
                    <option value="title-asc" className="bg-[#0F0F13]">
                      Title (A–Z)
                    </option>
                  </select>
                </div>
              </div>

              {/* View Mode Toggle (Grid vs Category Rows) */}
              <div
                role="group"
                aria-label="Layout view mode"
                className="flex items-center p-1 rounded-xl surface-velvet-glass shadow-cinema-rest"
              >
                <button
                  type="button"
                  data-cursor="magnetic"
                  onClick={() => setLayoutMode('grid')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans-ui font-medium transition-colors cursor-pointer ${
                    layoutMode === 'grid'
                      ? 'surface-champagne-luxury text-white font-semibold'
                      : 'text-white/65 hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Archive Grid</span>
                </button>
                <button
                  type="button"
                  data-cursor="magnetic"
                  onClick={() => setLayoutMode('chapters')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans-ui font-medium transition-colors cursor-pointer ${
                    layoutMode === 'chapters'
                      ? 'surface-champagne-luxury text-white font-semibold'
                      : 'text-white/65 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Genre Rows</span>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Category Filter Pills */}
          <div
            role="tablist"
            aria-label="Filter films by category"
            className="relative z-10 flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8 max-w-full"
          >
            {FILTER_TABS.map((tab) => {
              const active = activeCategory === tab;
              const count =
                tab === 'All'
                  ? films.length
                  : tab === 'Top Rated'
                  ? films.filter((f) => f.rating >= 9.8).length
                  : films.filter((f) => f.category === tab).length;

              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  data-cursor="magnetic"
                  onClick={() => {
                    setActiveCategory(tab);
                    setActiveSection('archive-showcase');
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-sans-ui font-medium whitespace-nowrap shrink-0 transition-all duration-150 cursor-pointer ${
                    active
                      ? 'surface-champagne-luxury text-white font-semibold shadow-amber-glow'
                      : 'surface-velvet-glass text-white/70 hover:text-white shadow-cinema-rest'
                  }`}
                >
                  <span>{tab}</span>
                  <span
                    className={`ml-2 font-mono-code text-[11px] ${
                      active ? 'text-white/90' : 'text-white/45'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Kinetic Scroll Container */}
          <div
            ref={kineticContainerRef}
            className="relative z-10 transition-transform duration-150 ease-out space-y-20"
          >
            {filteredFilms.length === 0 ? (
              /* Empty Filter / Search State */
              <div className="my-12 p-12 rounded-3xl surface-velvet-glass shadow-cinema-rest text-center max-w-lg mx-auto space-y-4">
                <h3 className="font-serif-editorial text-3xl text-white">
                  No films match your current filter
                </h3>
                <p className="text-sm font-sans-ui text-white/65">
                  Try clearing your search query or switching back to All Films
                  to browse the complete collection.
                </p>
                <div className="pt-2 flex items-center justify-center gap-3">
                  <MagneticButton
                    variant="amber"
                    onClick={() => {
                      setActiveCategory('All');
                      setSearchQuery('');
                    }}
                  >
                    <span>Reset Filters</span>
                  </MagneticButton>
                  <MagneticButton
                    variant="velvet"
                    onClick={() => setIsAddModalOpen(true)}
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Film</span>
                  </MagneticButton>
                </div>
              </div>
            ) : (
              <>
                {/* Primary Filterable Archive Grid */}
                {layoutMode === 'grid' && (
                  <div className="space-y-8">
                    <div
                      data-testid="archive-film-grid"
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                      {(activeCategory === 'All' &&
                      !searchQuery &&
                      !showAllInGrid
                        ? (() => {
                            const slice = filteredFilms.slice(0, 12);
                            if (
                              !slice.some((f) => f.id === heroFilm.id) &&
                              filteredFilms.some((f) => f.id === heroFilm.id)
                            ) {
                              slice[11] = heroFilm;
                            }
                            return slice;
                          })()
                        : filteredFilms
                      ).map((film) => {
                        const isDest = film.id === heroFilm.id;
                        return (
                          <div
                            key={film.id}
                            data-scroll-reveal={isDest ? undefined : true}
                            className="scroll-reveal-item h-full"
                          >
                            <FilmCard
                              film={film}
                              onInspect={(f) => {
                                setAutoPlayTrailer(false);
                                setInspectedFilmId(f.id);
                              }}
                              onWatchTrailer={(f) => {
                                setAutoPlayTrailer(true);
                                setInspectedFilmId(f.id);
                              }}
                              onPromoteToHero={handlePromoteToHero}
                              isFlightDestination={isDest}
                              isFlightDocked={isFlightDocked}
                              flightProgress={currentFlightProgress}
                              dockedPosterOpacity={currentDockedPosterOpacity}
                            />
                          </div>
                        );
                      })}
                    </div>

                    {activeCategory === 'All' &&
                      !searchQuery &&
                      filteredFilms.length > 12 && (
                        <div className="flex justify-center pt-2">
                          <MagneticButton
                            variant="velvet"
                            onClick={() => setShowAllInGrid((prev) => !prev)}
                          >
                            <span>
                              {showAllInGrid
                                ? 'Show Top 12'
                                : `View All ${filteredFilms.length} Films`}
                            </span>
                          </MagneticButton>
                        </div>
                      )}
                  </div>
                )}

                {/* Dedicated Curated Genre Chapters (01 - 06) */}
                {(layoutMode === 'chapters' ||
                  (activeCategory === 'All' && !searchQuery)) && (
                  <div className="space-y-16 pt-6">
                    <div>
                      <h2 className="font-serif-editorial text-3xl sm:text-4xl font-semibold text-white">
                        Curated Genre Showcases
                      </h2>
                    </div>

                    {CHAPTER_SECTIONS.map((chapter) => {
                      const chapterFilms = films.filter(
                        (f) => f.category === chapter.category
                      );
                      if (chapterFilms.length === 0) return null;

                      const hasDestInPrimaryGrid =
                        layoutMode === 'grid' &&
                        filteredFilms.some((f) => f.id === heroFilm.id);

                      return (
                        <div
                          key={chapter.category}
                          data-scroll-reveal={
                            !hasDestInPrimaryGrid &&
                            chapter.category === heroFilm.category
                              ? undefined
                              : true
                          }
                          className="scroll-reveal-item space-y-6"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="font-serif-editorial text-2xl sm:text-3xl font-semibold text-white">
                              {chapter.title}
                            </h3>
                            <button
                              type="button"
                              data-cursor="magnetic"
                              onClick={() => {
                                setActiveCategory(chapter.category);
                                setLayoutMode('grid');
                                setActiveSection('archive-showcase');
                                const el =
                                  document.getElementById('archive-showcase');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className="text-xs font-mono-code text-[#FF2E55] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                            >
                              View All ({chapterFilms.length})
                            </button>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {chapterFilms.map((film) => {
                              const isChapterDest =
                                !hasDestInPrimaryGrid &&
                                film.id === heroFilm.id;
                              return (
                                <FilmCard
                                  key={`chapter-${film.id}`}
                                  film={film}
                                  onInspect={(f) => {
                                    setAutoPlayTrailer(false);
                                    setInspectedFilmId(f.id);
                                  }}
                                  onWatchTrailer={(f) => {
                                    setAutoPlayTrailer(true);
                                    setInspectedFilmId(f.id);
                                  }}
                                  onPromoteToHero={handlePromoteToHero}
                                  isFlightDestination={isChapterDest}
                                  isFlightDocked={isFlightDocked}
                                  flightProgress={currentFlightProgress}
                                  dockedPosterOpacity={currentDockedPosterOpacity}
                                />
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      {/* Architectural Editorial Footer */}
      <ArchitecturalFooter
        stats={stats}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setActiveSection('archive-showcase');
        }}
        onResetArchive={handleResetArchive}
      />

      {/* Interactive Film Dossier & Trailer Screening Modal */}
      <FilmDossierModal
        film={inspectedFilm}
        autoPlayTrailer={autoPlayTrailer}
        onClose={() => {
          setInspectedFilmId(null);
          setAutoPlayTrailer(false);
        }}
        onPromoteToHero={handlePromoteToHero}
      />

      {/* Add Film Modal */}
      <AddFilmModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddFilm={handleAddFilm}
        existingCount={films.length}
      />
    </div>
  );
}

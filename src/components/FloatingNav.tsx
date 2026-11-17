import React from 'react';
import {
  Plus,
  Award,
  Film,
  Orbit,
  Shield,
  Flame,
  Heart,
  Skull,
  Layers,
  ArrowUp,
} from 'lucide-react';
import { FilterCategory } from '../types/cinema';
import { MagneticButton } from './MagneticButton';

interface FloatingNavProps {
  activeCategory: FilterCategory;
  onSelectCategory: (category: FilterCategory, scrollToSection?: string) => void;
  onOpenAddModal: () => void;
  scrollProgress: number;
  scrollY?: number;
  totalFilms?: number;
}

const TOP_MASTHEAD_LINKS: {
  label: string;
  category: FilterCategory;
  targetId: string;
}[] = [
  { label: 'Best Pick', category: 'All', targetId: 'hero-spotlight' },
  {
    label: 'Animation',
    category: 'Cartoons & Animation',
    targetId: 'archive-showcase',
  },
  { label: 'Sci-Fi', category: 'Sci-Fi', targetId: 'archive-showcase' },
  {
    label: 'Heroes',
    category: 'Marvel, DC & Heroes',
    targetId: 'archive-showcase',
  },
  { label: 'Action', category: 'Action', targetId: 'archive-showcase' },
  {
    label: 'Romance',
    category: 'Love Stories',
    targetId: 'archive-showcase',
  },
  { label: 'Horror', category: 'Horror', targetId: 'archive-showcase' },
  { label: 'All Films', category: 'All', targetId: 'archive-showcase' },
];

const DOCK_ITEMS: {
  label: string;
  shortLabel: string;
  category: FilterCategory;
  targetId: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    label: 'Top 6 Deck',
    shortLabel: 'Top 6',
    category: 'All',
    targetId: 'hero-spotlight',
    icon: Award,
  },
  {
    label: 'Cartoons & Animation',
    shortLabel: 'Animation',
    category: 'Cartoons & Animation',
    targetId: 'archive-showcase',
    icon: Film,
  },
  {
    label: 'Sci-Fi',
    shortLabel: 'Sci-Fi',
    category: 'Sci-Fi',
    targetId: 'archive-showcase',
    icon: Orbit,
  },
  {
    label: 'Marvel, DC & Heroes',
    shortLabel: 'Heroes',
    category: 'Marvel, DC & Heroes',
    targetId: 'archive-showcase',
    icon: Shield,
  },
  {
    label: 'Action',
    shortLabel: 'Action',
    category: 'Action',
    targetId: 'archive-showcase',
    icon: Flame,
  },
  {
    label: 'Love Stories',
    shortLabel: 'Romance',
    category: 'Love Stories',
    targetId: 'archive-showcase',
    icon: Heart,
  },
  {
    label: 'Horror',
    shortLabel: 'Horror',
    category: 'Horror',
    targetId: 'archive-showcase',
    icon: Skull,
  },
  {
    label: 'All Films',
    shortLabel: 'All',
    category: 'All',
    targetId: 'archive-showcase',
    icon: Layers,
  },
];

export const FloatingNav: React.FC<FloatingNavProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenAddModal,
  scrollProgress,
  scrollY = 0,
  totalFilms = 79,
}) => {
  // Switch between Top Masthead and Bottom Scroll Dock when scrolling past 110px
  const isScrolled = scrollY > 110 || scrollProgress > 0.035;
  const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
  const ringRadius = 15;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const ringStrokeDashoffset =
    ringCircumference * (1 - Math.max(0.04, clampedProgress));

  return (
    <>
      {/* Ultra-Thin Top Laser Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-[#050505]/40"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#E11D48] transition-transform duration-75 origin-left"
          style={{
            transform: `scaleX(${clampedProgress})`,
            boxShadow: '0 0 16px rgba(225, 29, 72, 0.95)',
          }}
        />
      </div>

      {/* ===================================================================
          STAGE 1: ARCHITECTURAL TOP MASTHEAD (Visible at top, vanishes on scroll)
         =================================================================== */}
      <header
        data-testid="top-editorial-masthead"
        data-hidden={isScrolled ? 'true' : 'false'}
        style={{
          transition:
            'transform 520ms cubic-bezier(0.16, 1, 0.3, 1), opacity 380ms cubic-bezier(0.16, 1, 0.3, 1)',
          transform: isScrolled
            ? 'translate3d(0, -120%, 0)'
            : 'translate3d(0, 0, 0)',
          opacity: isScrolled ? 0 : 1,
          pointerEvents: isScrolled ? 'none' : 'auto',
        }}
        className="fixed top-0 left-0 right-0 z-40 w-full max-w-[100vw] overflow-hidden px-3.5 sm:px-8 pt-3.5 sm:pt-4 pb-3"
      >
        <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between gap-2 sm:gap-6">
          {/* Zone 1: Editorial Monogram & Curator Signature */}
          <a
            href="#hero-spotlight"
            data-cursor="magnetic"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1 sm:flex-initial"
          >
            {/* Glowing Crimson Aperture Emblem */}
            <div
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0F0F13] flex items-center justify-center shadow-cinema-rest group-hover:bg-[#E11D48] transition-colors duration-300 shrink-0"
              style={{
                boxShadow:
                  '0 8px 20px rgba(0, 0, 0, 0.9), 0 0 18px rgba(225, 29, 72, 0.28)',
              }}
            >
              <span className="font-serif-editorial text-base sm:text-lg font-bold tracking-tight text-white">
                P
              </span>
            </div>

            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2 min-w-0">
                <span className="font-serif-editorial text-sm sm:text-xl font-semibold tracking-wider text-white group-hover:text-[#FF2E55] transition-colors truncate">
                  THE PARDILLO ARCHIVE
                </span>
                <span className="hidden xl:inline-block w-1.5 h-1.5 rounded-full bg-[#E11D48] shadow-[0_0_8px_#E11D48] shrink-0" />
              </div>
              <span className="text-[8.5px] sm:text-[10px] font-mono-code uppercase tracking-[0.1em] sm:tracking-[0.22em] text-white/50 truncate">
                <span className="hidden sm:inline">CURATED BY </span>MARK WELLY PARDILLO · {totalFilms} FILMS
              </span>
            </div>
          </a>

          {/* Zone 2: Floating Center Smoked-Velvet Navigation Capsule */}
          <nav
            aria-label="Archive sections"
            className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full surface-velvet-glass shadow-cinema-nav shrink-0"
          >
            {TOP_MASTHEAD_LINKS.map((item) => {
              const isHeroSection = !isScrolled;
              const isCurrent =
                item.label === 'Best Pick'
                  ? isHeroSection && activeCategory === 'All'
                  : activeCategory === item.category &&
                    item.label !== 'All Films';

              return (
                <a
                  key={item.label}
                  href={`#${item.targetId}`}
                  data-cursor="magnetic"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectCategory(item.category, item.targetId);
                  }}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-sans-ui font-medium tracking-wide whitespace-nowrap transition-all duration-200 ${
                    isCurrent
                      ? 'bg-[#E11D48] text-white font-semibold shadow-[0_0_18px_rgba(225,29,72,0.55)]'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center shrink-0">
            <MagneticButton
              variant="amber"
              onClick={onOpenAddModal}
              aria-label="Add Film to Archive"
              className="rounded-full px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs"
            >
              <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Add Film</span>
            </MagneticButton>
          </div>
        </div>
      </header>

      {/* ===================================================================
          STAGE 2: FLOATING BOTTOM CINEMA SCROLL DOCK (Appears when scrolling)
         =================================================================== */}
      <div
        data-testid="floating-scroll-dock"
        data-visible={isScrolled ? 'true' : 'false'}
        aria-label="Floating Archive Scroll Dock"
        style={{
          transition:
            'transform 540ms cubic-bezier(0.16, 1, 0.3, 1), opacity 380ms cubic-bezier(0.16, 1, 0.3, 1)',
          transform: isScrolled
            ? 'translate3d(-50%, 0, 0) scale(1)'
            : 'translate3d(-50%, 140%, 0) scale(0.92)',
          opacity: isScrolled ? 1 : 0,
          pointerEvents: isScrolled ? 'auto' : 'none',
          boxShadow:
            '0 28px 65px -8px rgba(0, 0, 0, 0.96), 0 0 38px -6px rgba(225, 29, 72, 0.38)',
        }}
        className="fixed bottom-4 sm:bottom-5 left-1/2 z-40 w-[calc(100vw-20px)] md:w-auto max-w-[96vw] surface-velvet-glass rounded-full px-2 sm:px-2.5 py-1.5 sm:py-2 flex items-center gap-1 sm:gap-1.5"
      >
        {/* Left: Live Circular Scroll-Progress Ring & Back-to-Top Trigger */}
        <button
          type="button"
          data-cursor="magnetic"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll back to Top 6 Orbital Deck"
          title="Back to Top 6 Orbital Deck"
          className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#050505]/90 hover:bg-[#16161D] flex items-center justify-center text-white hover:text-[#FF2E55] transition-colors shrink-0 cursor-pointer group"
        >
          <svg
            viewBox="0 0 36 36"
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          >
            <circle
              cx="18"
              cy="18"
              r={ringRadius}
              fill="none"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="2"
            />
            <circle
              cx="18"
              cy="18"
              r={ringRadius}
              fill="none"
              stroke="#E11D48"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray={ringCircumference}
              strokeDashoffset={ringStrokeDashoffset}
              style={{
                transition: 'stroke-dashoffset 120ms ease-out',
              }}
            />
          </svg>
          <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>

        {/* Subtle Vertical Divider */}
        <div className="w-[1px] h-5 bg-white/10 mx-0.5 shrink-0" />

        {/* Center: Interactive Cinema Genre & Section Dock Pills */}
        <div className="flex-1 min-w-0 flex items-center gap-1 overflow-x-auto md:overflow-visible no-scrollbar py-0.5 px-1">
          {DOCK_ITEMS.map((item) => {
            const Icon = item.icon;
            const isTopDeckBtn = item.targetId === 'hero-spotlight';
            const isActive =
              !isTopDeckBtn &&
              (item.label === 'All Films'
                ? activeCategory === 'All'
                : activeCategory === item.category);

            return (
              <button
                key={item.label}
                type="button"
                data-cursor="magnetic"
                onClick={() => {
                  if (isTopDeckBtn) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    onSelectCategory(item.category, item.targetId);
                  }
                }}
                aria-label={`Jump to ${item.label}`}
                className={`group relative flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-sans-ui font-medium whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#E11D48] text-white font-semibold shadow-[0_0_18px_rgba(225,29,72,0.55)]'
                    : 'text-white/70 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-[#FF2E55]/80 group-hover:text-[#FF2E55]'
                  }`}
                />
                <span>{item.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Subtle Vertical Divider */}
        <div className="w-[1px] h-5 bg-white/10 mx-0.5 shrink-0" />

        {/* Right: Quick Add Film Button in Scroll Dock */}
        <button
          type="button"
          data-cursor="magnetic"
          onClick={onOpenAddModal}
          aria-label="Add Film to Archive from Dock"
          className="flex items-center justify-center gap-1.5 w-9 h-9 sm:w-auto sm:h-auto sm:px-3.5 sm:py-2 rounded-full surface-champagne-luxury text-white text-xs font-sans-ui font-semibold shadow-amber-glow hover:brightness-110 transition-all shrink-0 cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
          <span className="hidden sm:inline">Add Film</span>
        </button>
      </div>
    </>
  );
};


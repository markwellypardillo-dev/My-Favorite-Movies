import React from 'react';
import { ArrowUp } from 'lucide-react';
import { ArchiveStats, FilterCategory } from '../types/cinema';
import { MagneticButton } from './MagneticButton';

interface ArchitecturalFooterProps {
  stats: ArchiveStats;
  onSelectCategory: (cat: FilterCategory) => void;
  onResetArchive?: () => void;
}

export const ArchitecturalFooter: React.FC<ArchitecturalFooterProps> = ({
  stats,
  onSelectCategory,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-28 pt-16 pb-14 bg-[#0F0F13] shadow-cinema-modal overflow-hidden">
      {/* Subtle Crimson Backlight Horizon on Footer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[680px] h-[180px] rounded-full opacity-45"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(225, 29, 72, 0.25) 0%, transparent 72%)',
          filter: 'blur(36px)',
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-8 space-y-14">
        {/* Top Row: Live Archive Counters & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Live Telemetry Counters */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#050505] shadow-cinema-rest">
              <div className="text-[11px] font-mono-code uppercase tracking-wider text-white/45">
                Total Films
              </div>
              <div className="mt-2 font-mono-code text-3xl font-semibold text-white">
                {stats.totalFilms}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#050505] shadow-cinema-rest">
              <div className="text-[11px] font-mono-code uppercase tracking-wider text-white/45">
                Average Rating
              </div>
              <div className="mt-2 font-mono-code text-3xl font-semibold text-[#FF2E55]">
                {stats.averageRating}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#050505] shadow-cinema-rest">
              <div className="text-[11px] font-mono-code uppercase tracking-wider text-white/45">
                Lead Category
              </div>
              <div className="mt-2 font-serif-editorial text-2xl font-semibold text-white truncate">
                {stats.topCategory}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#050505] shadow-cinema-rest">
              <div className="text-[11px] font-mono-code uppercase tracking-wider text-white/45">
                Archive Runtime
              </div>
              <div className="mt-2 font-mono-code text-3xl font-semibold text-white">
                {stats.totalHours}h
              </div>
            </div>
          </div>

          {/* Right Column: Navigation & Back to Top */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-6">
            <div className="flex flex-wrap items-center lg:justify-end gap-2.5">
              {(
                [
                  'All',
                  'Cartoons & Animation',
                  'Sci-Fi',
                  'Marvel, DC & Heroes',
                  'Action',
                  'Love Stories',
                  'Horror',
                ] as FilterCategory[]
              ).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  data-cursor="magnetic"
                  onClick={() => {
                    onSelectCategory(cat);
                    const el = document.getElementById('archive-showcase');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3 py-1.5 rounded-lg bg-[#050505] text-xs font-sans-ui text-white/70 hover:text-white hover:bg-[#E11D48] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <MagneticButton
                variant="amber"
                onClick={scrollToTop}
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Back to Top</span>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Architectural Editorial Signature Block */}
        <div className="pt-6 space-y-2">
          <div className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-none select-none">
            CURATED BY MARK WELLY PARDILLO
          </div>
          <div className="text-xs font-mono-code text-white/45 pt-1">
            THE PARDILLO ARCHIVE · {stats.totalFilms} FILMS
          </div>
        </div>
      </div>
    </footer>
  );
};

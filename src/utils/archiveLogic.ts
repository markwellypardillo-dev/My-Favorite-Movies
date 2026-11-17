import {
  ArchiveStats,
  FilmCategory,
  FilmRecord,
  FilterCategory,
  NewFilmInput,
} from '../types/cinema';
import { GENERATED_ARTWORK, VISUAL_PRESETS } from '../data/initialFilms';

export interface FilterCriteria {
  category: FilterCategory;
  searchQuery: string;
  sortBy?: 'rating-desc' | 'year-desc' | 'title-asc' | 'curated';
}

export function filterAndSortFilms(
  films: FilmRecord[],
  criteria: FilterCriteria
): FilmRecord[] {
  const query = criteria.searchQuery.trim().toLowerCase();

  const filtered = films.filter((film) => {
    // Category match
    if (criteria.category === 'Top Rated') {
      if (film.rating < 9.8) return false;
    } else if (criteria.category !== 'All') {
      if (film.category !== criteria.category) return false;
    }

    // Search query match
    if (query.length > 0) {
      const searchable = [
        film.title,
        film.director,
        film.category,
        String(film.year),
        film.curatorNote,
        film.catalogNumber,
      ]
        .join(' ')
        .toLowerCase();
      if (!searchable.includes(query)) {
        return false;
      }
    }

    return true;
  });

  const sorted = [...filtered];
  const sortMode = criteria.sortBy || 'curated';

  if (sortMode === 'rating-desc') {
    sorted.sort((a, b) => b.rating - a.rating || b.year - a.year);
  } else if (sortMode === 'year-desc') {
    sorted.sort((a, b) => b.year - a.year || b.rating - a.rating);
  } else if (sortMode === 'title-asc') {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    // Fixed Curated Catalog Order: each movie stays in its own permanent slot in the archive grid
    sorted.sort((a, b) => b.rating - a.rating || a.addedAt - b.addedAt);
  }

  return sorted;
}

export function getHeroPick(films: FilmRecord[]): FilmRecord {
  const explicitTop = films.find((f) => f.isTopPick);
  if (explicitTop) return explicitTop;
  const sortedByRating = [...films].sort((a, b) => b.rating - a.rating);
  return sortedByRating[0];
}

export function getTopSixFilms(films: FilmRecord[]): FilmRecord[] {
  if (films.length <= 6) return [...films];
  // Base deterministic top 6 by rating and catalog order (independent of isTopPick)
  const sortedByScore = [...films].sort(
    (a, b) => b.rating - a.rating || a.addedAt - b.addedAt
  );
  const topSix = sortedByScore.slice(0, 6);
  const hero = getHeroPick(films);
  if (!topSix.some((f) => f.id === hero.id)) {
    topSix[5] = hero;
  }
  return topSix;
}

export interface OrbitalSlotMetrics {
  slotIndex: number; // 0 = Front (Movie 1), 1 = Front-Right (Movie 2), 2 = Back-Right (Movie 3), 3 = Back-Center (Movie 4), 4 = Back-Left (Movie 5), 5 = Front-Left (Movie 6)
  label: string;
  translateX: number;
  translateY: number;
  scale: number;
  rotateY: number;
  rotateZ: number;
  zIndex: number;
  opacity: number;
  brightness: number;
}

/**
 * Computes the continuous 3D elliptical ring position for 6 cards matching the user's reference layout:
 * - Slot 0 (MOVIE 1): Front center, lowest Y (+24px), largest scale (1.0), zIndex 30
 * - Slot 1 (MOVIE 2): Front right (+132px), mid-low Y (-4px), scale (0.92), zIndex 20
 * - Slot 5 (MOVIE 6): Front left (-132px), mid-low Y (-4px), scale (0.92), zIndex 20
 * - Slot 2 (MOVIE 3): Back right (+86px), higher Y (-36px), scale (0.85), zIndex 12
 * - Slot 4 (MOVIE 5): Back left (-86px), higher Y (-36px), scale (0.85), zIndex 12
 * - Slot 3 (MOVIE 4): Far back center (0px), highest Y (-60px), scale (0.78), zIndex 5
 */
export function computeOrbitalSlotMetrics(
  cardIndex: number,
  activeIndex: number,
  dragOffsetSteps = 0,
  totalCards = 6
): OrbitalSlotMetrics {
  const n = Math.max(1, totalCards);
  // Continuous modular position in [0, n)
  const rawPos = (((cardIndex - activeIndex + dragOffsetSteps) % n) + n) % n;

  // Keyframe anchor nodes for the large 6-card 3D orbital ring
  const keyframes = [
    { x: 0, y: 40, scale: 1.0, rotY: 0, rotZ: 0, z: 30, opacity: 1.0, bright: 1.05 }, // 0: MOVIE 1 (Front Center)
    { x: 230, y: -6, scale: 0.91, rotY: -10, rotZ: 1.2, z: 22, opacity: 0.95, bright: 0.88 }, // 1: MOVIE 2 (Front Right)
    { x: 148, y: -58, scale: 0.83, rotY: -5, rotZ: 0.6, z: 14, opacity: 0.8, bright: 0.72 }, // 2: MOVIE 3 (Back Right)
    { x: 0, y: -96, scale: 0.76, rotY: 0, rotZ: 0, z: 6, opacity: 0.66, bright: 0.58 }, // 3: MOVIE 4 (Far Back Top Center)
    { x: -148, y: -58, scale: 0.83, rotY: 5, rotZ: -0.6, z: 14, opacity: 0.8, bright: 0.72 }, // 4: MOVIE 5 (Back Left)
    { x: -230, y: -6, scale: 0.91, rotY: 10, rotZ: -1.2, z: 22, opacity: 0.95, bright: 0.88 }, // 5: MOVIE 6 (Front Left)
  ];

  const baseIdx = Math.floor(rawPos) % 6;
  const nextIdx = (baseIdx + 1) % 6;
  const frac = rawPos - Math.floor(rawPos);
  // Smooth Hermite S-curve for fluid drag interpolation between 3D ring nodes
  const smoothFrac = frac * frac * (3 - 2 * frac);

  const a = keyframes[baseIdx];
  const b = keyframes[nextIdx];

  const lerp = (start: number, end: number, t: number) =>
    start + (end - start) * t;

  const nearestSlot = Math.round(rawPos) % 6;

  return {
    slotIndex: nearestSlot,
    label: `MOVIE ${nearestSlot + 1}`,
    translateX: Math.round(lerp(a.x, b.x, smoothFrac) * 10) / 10,
    translateY: Math.round(lerp(a.y, b.y, smoothFrac) * 10) / 10,
    scale: Math.round(lerp(a.scale, b.scale, smoothFrac) * 1000) / 1000,
    rotateY: Math.round(lerp(a.rotY, b.rotY, smoothFrac) * 10) / 10,
    rotateZ: Math.round(lerp(a.rotZ, b.rotZ, smoothFrac) * 10) / 10,
    zIndex: Math.round(lerp(a.z, b.z, smoothFrac)),
    opacity: Math.round(lerp(a.opacity, b.opacity, smoothFrac) * 100) / 100,
    brightness: Math.round(lerp(a.bright, b.bright, smoothFrac) * 100) / 100,
  };
}

export interface FlightBox {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface ScrollFlightMetrics {
  progress: number;
  easedProgress: number;
  isDetachedFromDeck: boolean;
  isInFlight: boolean;
  isDockedInArchive: boolean;
  flyingCardOpacity: number;
  dockedPosterOpacity: number;
  x: number;
  y: number;
  width: number;
  height: number;
  rotateZ: number;
  rotateX: number;
  rotateY: number;
  scaleBoost: number;
  borderRadius: number;
}

/**
 * Pure scroll-linked FLIP interpolation for flying the front card (MOVIE 1)
 * from the 6-Card 3D Orbital Deck into its target slot in the categorized archive section.
 * Uses C2-continuous quintic smootherstep (zero velocity & acceleration jerk at endpoints).
 */
export function computeScrollFlightMetrics(
  scrollY: number,
  startScroll: number,
  endScroll: number,
  sourceBox: FlightBox,
  targetBox: FlightBox
): ScrollFlightMetrics {
  const span = Math.max(1, endScroll - startScroll);
  const raw = (scrollY - startScroll) / span;
  const progress = Math.max(0, Math.min(1, raw));

  // C2-continuous Quintic Smootherstep: 6t^5 - 15t^4 + 10t^3 (zero acceleration jerk at liftoff & landing)
  const t = progress;
  const easedProgress = t * t * t * (t * (t * 6 - 15) + 10);

  const isDetachedFromDeck = progress > 0.008;
  const isDockedInArchive = progress >= 0.94;
  const isInFlight = isDetachedFromDeck && progress < 0.995;

  // Seamless cross-dissolve opacity between flying card and docked card slot
  let flyingCardOpacity = 0;
  if (progress > 0.008 && progress <= 0.91) {
    flyingCardOpacity = 1;
  } else if (progress > 0.91 && progress < 0.995) {
    flyingCardOpacity = Math.max(0, 1 - (progress - 0.91) / 0.085);
  }

  let dockedPosterOpacity = 0;
  if (progress >= 0.95) {
    dockedPosterOpacity = 1;
  } else if (progress > 0.85) {
    dockedPosterOpacity = Math.min(1, (progress - 0.85) / 0.1);
  }

  // Smooth raised-cosine bell curve (0.5 * (1 - cos(2*pi*t))) for zero-jerk mid-flight 3D banking
  const arc = 0.5 * (1 - Math.cos(2 * Math.PI * progress));

  const lerp = (start: number, end: number, p: number) =>
    start + (end - start) * p;

  // Direction-aware horizontal trajectory (-1 = far left slot, 0 = center slot, +1 = far right slot)
  const dx = targetBox.left - sourceBox.left;
  const horizontalDir = Math.max(-1.2, Math.min(1.2, dx / 260));

  // Interpolate viewport coordinates with a direction-aware diagonal swoop
  const x =
    Math.round(
      (lerp(sourceBox.left, targetBox.left, easedProgress) +
        arc * horizontalDir * 14) *
        10
    ) / 10;
  const y =
    Math.round(
      (lerp(sourceBox.top, targetBox.top, easedProgress) - arc * 10) * 10
    ) / 10;
  const width =
    Math.round(lerp(sourceBox.width, targetBox.width, easedProgress) * 10) / 10;
  const height =
    Math.round(lerp(sourceBox.height, targetBox.height, easedProgress) * 10) /
    10;

  // Direction-aware 3D banking during flight, settling smoothly to 0deg before docking
  const rotateZ = Math.round(horizontalDir * 3.8 * arc * 100) / 100;
  const rotateX = Math.round(4.8 * arc * 100) / 100;
  const rotateY = Math.round(horizontalDir * 4.5 * arc * 100) / 100;
  const scaleBoost = Math.round((1 + 0.028 * arc) * 1000) / 1000;
  const borderRadius = Math.round(lerp(24, 16, easedProgress) * 10) / 10;

  return {
    progress: Math.round(progress * 1000) / 1000,
    easedProgress: Math.round(easedProgress * 1000) / 1000,
    isDetachedFromDeck,
    isInFlight,
    isDockedInArchive,
    flyingCardOpacity: Math.round(flyingCardOpacity * 1000) / 1000,
    dockedPosterOpacity: Math.round(dockedPosterOpacity * 1000) / 1000,
    x,
    y,
    width,
    height,
    rotateZ,
    rotateX,
    rotateY,
    scaleBoost,
    borderRadius,
  };
}

export function promoteToHeroPick(
  films: FilmRecord[],
  targetFilmId: string
): FilmRecord[] {
  const exists = films.some((f) => f.id === targetFilmId);
  if (!exists) return films;
  return films.map((film) => ({
    ...film,
    isTopPick: film.id === targetFilmId,
  }));
}

export function cycleNextHeroPick(films: FilmRecord[]): {
  updatedFilms: FilmRecord[];
  nextHero: FilmRecord;
} {
  if (films.length === 0) {
    throw new Error('Cannot cycle hero pick on an empty film list');
  }
  const topSix = getTopSixFilms(films);
  const currentHero = getHeroPick(films);
  const currentIndex = topSix.findIndex((f) => f.id === currentHero.id);
  const nextIndex = (currentIndex + 1) % topSix.length;
  const nextHero = topSix[nextIndex];
  const updatedFilms = promoteToHeroPick(films, nextHero.id);
  const updatedHero = updatedFilms.find((f) => f.id === nextHero.id) || nextHero;
  return {
    updatedFilms,
    nextHero: updatedHero,
  };
}

export function computeArchiveStats(films: FilmRecord[]): ArchiveStats {
  const totalFilms = films.length;
  if (totalFilms === 0) {
    return {
      totalFilms: 0,
      averageRating: '0.0',
      topCategory: 'Sci-Fi',
      topCategoryCount: 0,
      totalHours: '0.0',
      perfectTenCount: 0,
    };
  }

  const totalRating = films.reduce((acc, f) => acc + f.rating, 0);
  const averageRating = (totalRating / totalFilms).toFixed(1);

  const counts: Record<FilmCategory, number> = {
    'Cartoons & Animation': 0,
    'Sci-Fi': 0,
    'Marvel, DC & Heroes': 0,
    Action: 0,
    'Love Stories': 0,
    Horror: 0,
  };

  let totalMinutes = 0;
  let perfectTenCount = 0;

  for (const film of films) {
    counts[film.category] = (counts[film.category] || 0) + 1;
    totalMinutes += film.runtimeMinutes || 120;
    if (film.rating >= 9.95) {
      perfectTenCount += 1;
    }
  }

  const categories = Object.keys(counts) as FilmCategory[];
  let topCategory: FilmCategory = categories[0];
  let topCategoryCount = counts[topCategory];

  for (const cat of categories) {
    if (counts[cat] > topCategoryCount) {
      topCategory = cat;
      topCategoryCount = counts[cat];
    }
  }

  const totalHours = (totalMinutes / 60).toFixed(1);

  return {
    totalFilms,
    averageRating,
    topCategory,
    topCategoryCount,
    totalHours,
    perfectTenCount,
  };
}

export function truncateToTwoSentences(text: string): string {
  const cleaned = text.trim().replace(/\s+/g, ' ');
  if (!cleaned) return '';
  const sentences = cleaned.split(/(?<=[.!?])\s+/).filter(Boolean);
  if (sentences.length <= 2) {
    return cleaned;
  }
  return sentences
    .slice(0, 2)
    .map((s) => s.trim())
    .join(' ');
}

export function parseRuntimeMinutes(runtimeStr: string): number {
  const clean = runtimeStr.trim().toLowerCase();
  const hoursMatch = clean.match(/(\d+)\s*h/);
  const minsMatch = clean.match(/(\d+)\s*m/);
  if (hoursMatch || minsMatch) {
    const h = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
    const m = minsMatch ? parseInt(minsMatch[1], 10) : 0;
    return Math.max(1, h * 60 + m);
  }
  const numeric = parseInt(clean, 10);
  if (!Number.isNaN(numeric) && numeric > 0) {
    return numeric;
  }
  return 120;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
  filmRecord?: FilmRecord;
}

export function validateAndBuildFilmRecord(
  input: NewFilmInput,
  existingCount: number
): ValidationResult {
  const errors: Record<string, string> = {};

  const title = input.title.trim();
  if (!title) {
    errors.title = 'Film title is required.';
  }

  const director = input.director.trim();
  if (!director) {
    errors.director = 'Director name is required.';
  }

  const yearNum = Number(input.year);
  if (!input.year || Number.isNaN(yearNum) || yearNum < 1888 || yearNum > 2035) {
    errors.year = 'Enter a valid release year (1888–2035).';
  }

  const ratingNum = Number(input.rating);
  if (
    input.rating === '' ||
    Number.isNaN(ratingNum) ||
    ratingNum < 1 ||
    ratingNum > 10
  ) {
    errors.rating = 'Rating must be between 1.0 and 10.0.';
  }

  const runtime = input.runtime.trim() || '2h 05m';
  const rawNote = input.curatorNote.trim();
  if (!rawNote) {
    errors.curatorNote = 'Curator verdict is required (max 2 sentences).';
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  const conciseNote = truncateToTwoSentences(rawNote);
  const preset =
    VISUAL_PRESETS.find((p) => p.id === input.visualPreset) || VISUAL_PRESETS[0];

  const customUrl = input.imageUrl?.trim();
  const resolvedImageUrl =
    customUrl && customUrl.length > 5 ? customUrl : preset.imageUrl;
  const resolvedHeroUrl =
    customUrl && customUrl.length > 5
      ? customUrl
      : preset.heroImageUrl || GENERATED_ARTWORK.interstellarHero;

  const nextNumber = String(existingCount + 1).padStart(3, '0');
  const runtimeMinutes = parseRuntimeMinutes(runtime);

  const filmRecord: FilmRecord = {
    id: `film-custom-${Date.now()}`,
    catalogNumber: `ARC-${nextNumber}`,
    title,
    category: input.category,
    year: Math.round(yearNum),
    director,
    runtime,
    runtimeMinutes,
    rating: Math.round(ratingNum * 10) / 10,
    curatorNote: conciseNote,
    whyItMadeMyList: conciseNote,
    cinematographer: 'Archival Selection',
    aspectRatio: '2.39:1 Theatrical',
    imageUrl: resolvedImageUrl,
    heroImageUrl: resolvedHeroUrl,
    posterMotif: 'custom-reel',
    imageCropPosition: 'center center',
    isTopPick: false,
    addedAt: Date.now(),
  };

  return {
    valid: true,
    errors: {},
    filmRecord,
  };
}

export interface NetworkConnectionSignal {
  onLine?: boolean;
  saveData?: boolean;
  effectiveType?: string;
  downlink?: number;
}

/**
 * Determines whether the viewer's network signal is strong enough to automatically
 * stream the live theatrical trailer in the landing page background, or if it should
 * stay on the static movie poster without attempting background video streaming.
 */
export function shouldStreamBackgroundTrailer(
  signal: NetworkConnectionSignal = {}
): boolean {
  if (signal.onLine === false) {
    return false;
  }
  if (signal.saveData === true) {
    return false;
  }
  const type = (signal.effectiveType || '').toLowerCase().trim();
  if (type === 'slow-2g' || type === '2g' || type === '3g') {
    return false;
  }
  if (
    typeof signal.downlink === 'number' &&
    signal.downlink > 0 &&
    signal.downlink < 1.5
  ) {
    return false;
  }
  return true;
}

export interface ArchiveHistoryState {
  isPardilloArchiveState: true;
  activeCategory: FilterCategory;
  layoutMode: 'grid' | 'chapters';
  heroFilmId: string;
  inspectedFilmId: string | null;
  autoPlayTrailer: boolean;
  isAddModalOpen: boolean;
  section: 'hero-spotlight' | 'archive-showcase';
}

export function areHistoryStatesEqual(
  a: ArchiveHistoryState | null | undefined,
  b: ArchiveHistoryState | null | undefined
): boolean {
  if (!a || !b) return false;
  return (
    a.activeCategory === b.activeCategory &&
    a.layoutMode === b.layoutMode &&
    a.heroFilmId === b.heroFilmId &&
    a.inspectedFilmId === b.inspectedFilmId &&
    a.autoPlayTrailer === b.autoPlayTrailer &&
    a.isAddModalOpen === b.isAddModalOpen &&
    a.section === b.section
  );
}

export const CURATOR_ACCESS_CODE = 'Mark2006';

export function verifyCuratorAccessCode(inputCode: string): boolean {
  return inputCode.trim() === CURATOR_ACCESS_CODE;
}




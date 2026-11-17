export type FilmCategory =
  | 'Cartoons & Animation'
  | 'Sci-Fi'
  | 'Marvel, DC & Heroes'
  | 'Action'
  | 'Love Stories'
  | 'Horror';

export type FilterCategory = 'All' | FilmCategory | 'Top Rated';

export type PosterMotif =
  | 'spiderverse'
  | 'spirited-away'
  | 'puss-in-boots'
  | 'coco'
  | 'fury-road'
  | 'john-wick'
  | 'dark-knight'
  | 'top-gun'
  | 'in-the-mood'
  | 'la-la-land'
  | 'before-sunrise'
  | 'about-time'
  | 'interstellar'
  | 'inception'
  | 'dune-two'
  | 'blade-runner'
  | 'custom-reel';

export interface FilmRecord {
  id: string;
  catalogNumber: string;
  title: string;
  category: FilmCategory;
  year: number;
  director: string;
  runtime: string;
  runtimeMinutes: number;
  rating: number; // Out of 10, e.g. 10.0, 9.8
  curatorNote: string; // Strictly concise (max 2 sentences)
  whyItMadeMyList: string; // Concise extended dossier note (2 sentences)
  cinematographer: string;
  aspectRatio: string;
  imageUrl: string;
  heroImageUrl?: string;
  posterMotif: PosterMotif;
  imageCropPosition?: string;
  trailerUrl?: string;
  trailerEmbedUrl?: string;
  trailerTitle?: string;
  trailerChannel?: string;
  isTopPick: boolean;
  addedAt: number;
}

export interface NewFilmInput {
  title: string;
  category: FilmCategory;
  year: string | number;
  director: string;
  runtime: string;
  rating: string | number;
  curatorNote: string;
  imageUrl?: string;
  trailerUrl?: string;
  visualPreset: string;
}

export interface ArchiveStats {
  totalFilms: number;
  averageRating: string;
  topCategory: FilmCategory;
  topCategoryCount: number;
  totalHours: string;
  perfectTenCount: number;
}

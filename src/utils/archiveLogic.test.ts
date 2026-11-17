import test from 'node:test';
import assert from 'node:assert/strict';
import { INITIAL_FILMS } from '../data/initialFilms';
import {
  areHistoryStatesEqual,
  ArchiveHistoryState,
  computeArchiveStats,
  computeOrbitalSlotMetrics,
  computeScrollFlightMetrics,
  cycleNextHeroPick,
  filterAndSortFilms,
  getHeroPick,
  getTopSixFilms,
  promoteToHeroPick,
  shouldStreamBackgroundTrailer,
  truncateToTwoSentences,
  validateAndBuildFilmRecord,
  verifyCuratorAccessCode,
} from './archiveLogic';

test('INITIAL_FILMS contains all 66 personal archive films across 6 required categories with max 2-sentence notes', () => {
  assert.equal(INITIAL_FILMS.length >= 60, true);
  const categories = new Set(INITIAL_FILMS.map((f) => f.category));
  assert.equal(categories.has('Cartoons & Animation'), true);
  assert.equal(categories.has('Sci-Fi'), true);
  assert.equal(categories.has('Marvel, DC & Heroes'), true);
  assert.equal(categories.has('Action'), true);
  assert.equal(categories.has('Love Stories'), true);
  assert.equal(categories.has('Horror'), true);

  for (const film of INITIAL_FILMS) {
    const truncated = truncateToTwoSentences(film.curatorNote);
    assert.equal(film.curatorNote, truncated, `Film ${film.title} exceeds 2 sentences`);
    assert.equal(
      film.imageUrl.startsWith('https://m.media-amazon.com/images/M/'),
      true,
      `Film ${film.title} is missing a real movie poster URL`
    );
    assert.equal(
      Boolean(film.trailerUrl && film.trailerUrl.startsWith('https://www.youtube.com/watch?v=')),
      true,
      `Film ${film.title} is missing a verified trailer watch URL`
    );
    assert.equal(
      Boolean(film.trailerEmbedUrl && film.trailerEmbedUrl.startsWith('https://www.youtube-nocookie.com/embed/')),
      true,
      `Film ${film.title} is missing a verified trailer embed URL`
    );
  }
});

test('getTopSixFilms returns 6 top movies and computeOrbitalSlotMetrics positions Movie 1..6 in 3D ring', () => {
  const topSix = getTopSixFilms(INITIAL_FILMS);
  assert.equal(topSix.length, 6);
  assert.equal(topSix[0].id, getHeroPick(INITIAL_FILMS).id);

  // Movie 1 (Front Center)
  const slot0 = computeOrbitalSlotMetrics(0, 0, 0, 6);
  assert.equal(slot0.label, 'MOVIE 1');
  assert.equal(slot0.translateX, 0);
  assert.equal(slot0.zIndex, 30);

  // Movie 2 (Front Right)
  const slot1 = computeOrbitalSlotMetrics(1, 0, 0, 6);
  assert.equal(slot1.label, 'MOVIE 2');
  assert.equal(slot1.translateX > 100, true);
  assert.equal(slot1.zIndex, 22);

  // Movie 6 (Front Left)
  const slot5 = computeOrbitalSlotMetrics(5, 0, 0, 6);
  assert.equal(slot5.label, 'MOVIE 6');
  assert.equal(slot5.translateX < -100, true);
  assert.equal(slot5.zIndex, 22);

  // Mid-swipe morph interpolation (halfway swipe right: dragOffsetSteps = 0.5)
  const morphingCard = computeOrbitalSlotMetrics(5, 0, 0.5, 6);
  assert.equal(morphingCard.translateX > slot5.translateX && morphingCard.translateX < 0, true);
});

test('computeScrollFlightMetrics interpolates front orbital card into categorized archive location on scroll', () => {
  const sourceBox = { left: 320, top: 240, width: 348, height: 485 };
  const targetBox = { left: 64, top: 210, width: 304, height: 228 };

  // Stage 1: At top of page (scrollY = 0)
  const startMetrics = computeScrollFlightMetrics(0, 12, 540, sourceBox, targetBox);
  assert.equal(startMetrics.progress, 0);
  assert.equal(startMetrics.isDetachedFromDeck, false);
  assert.equal(startMetrics.isInFlight, false);
  assert.equal(startMetrics.isDockedInArchive, false);
  assert.equal(startMetrics.x, sourceBox.left);
  assert.equal(startMetrics.y, sourceBox.top);

  // Stage 2: Mid-flight (scrollY = 276)
  const midMetrics = computeScrollFlightMetrics(276, 12, 540, sourceBox, targetBox);
  assert.equal(midMetrics.progress, 0.5);
  assert.equal(midMetrics.isDetachedFromDeck, true);
  assert.equal(midMetrics.isInFlight, true);
  assert.equal(midMetrics.isDockedInArchive, false);
  assert.equal(midMetrics.x < sourceBox.left && midMetrics.x > targetBox.left, true);
  assert.equal(midMetrics.rotateZ < 0, true);

  // Stage 3: Docked in archive location (scrollY = 560)
  const dockedMetrics = computeScrollFlightMetrics(560, 12, 540, sourceBox, targetBox);
  assert.equal(dockedMetrics.progress, 1);
  assert.equal(dockedMetrics.isDetachedFromDeck, true);
  assert.equal(dockedMetrics.isInFlight, false);
  assert.equal(dockedMetrics.isDockedInArchive, true);
  assert.equal(dockedMetrics.x, targetBox.left);
  assert.equal(dockedMetrics.y, targetBox.top);
  assert.equal(dockedMetrics.width, targetBox.width);
  assert.equal(dockedMetrics.height, targetBox.height);
});

test('filterAndSortFilms filters accurately by category and search query', () => {
  const animationFilms = filterAndSortFilms(INITIAL_FILMS, {
    category: 'Cartoons & Animation',
    searchQuery: '',
  });
  assert.equal(animationFilms.length >= 10, true);
  assert.equal(
    animationFilms.every((f) => f.category === 'Cartoons & Animation'),
    true
  );

  const searchResult = filterAndSortFilms(INITIAL_FILMS, {
    category: 'All',
    searchQuery: 'Voicemails for Isabelle',
  });
  assert.equal(searchResult.length, 1);
  assert.equal(searchResult[0].title, 'Voicemails for Isabelle');

  const topRated = filterAndSortFilms(INITIAL_FILMS, {
    category: 'Top Rated',
    searchQuery: '',
  });
  assert.equal(
    topRated.every((f) => f.rating >= 9.8),
    true
  );
});

test('filterAndSortFilms preserves distinct fixed slot locations for all 6 orbital deck movies when switching active pick', () => {
  const topSix = getTopSixFilms(INITIAL_FILMS);
  const baseGrid = filterAndSortFilms(INITIAL_FILMS, {
    category: 'All',
    searchQuery: '',
    sortBy: 'curated',
  });

  // Verify each of the 6 orbital movies has a unique index (0..5) in the categorized grid
  const initialPositions = topSix.map((film) =>
    baseGrid.findIndex((g) => g.id === film.id)
  );
  assert.deepEqual(initialPositions, [0, 1, 2, 3, 4, 5]);

  // Even after promoting Movie 2, Movie 3, Movie 4, Movie 5, or Movie 6 to the front of the 3D Orbital Deck,
  // each movie stays in its own distinct slot (0..5) rather than jumping to index 0
  for (let i = 0; i < topSix.length; i++) {
    const promotedFilms = promoteToHeroPick(INITIAL_FILMS, topSix[i].id);
    const gridAfterSwitch = filterAndSortFilms(promotedFilms, {
      category: 'All',
      searchQuery: '',
      sortBy: 'curated',
    });
    const idx = gridAfterSwitch.findIndex((g) => g.id === topSix[i].id);
    assert.equal(idx, i, `Expected ${topSix[i].title} to remain at slot ${i}`);
  }
});

test('promoteToHeroPick and cycleNextHeroPick update #1 Top Pick deterministically', () => {
  const initialHero = getHeroPick(INITIAL_FILMS);
  assert.equal(initialHero.title, 'Interstellar');

  const promoted = promoteToHeroPick(INITIAL_FILMS, 'film-spiderverse');
  const newHero = getHeroPick(promoted);
  assert.equal(newHero.id, 'film-spiderverse');
  assert.equal(promoted.filter((f) => f.isTopPick).length, 1);

  const cycled = cycleNextHeroPick(promoted);
  assert.notEqual(cycled.nextHero.id, 'film-spiderverse');
  assert.equal(cycled.updatedFilms.filter((f) => f.isTopPick).length, 1);
});

test('computeArchiveStats returns accurate totals and average rating', () => {
  const stats = computeArchiveStats(INITIAL_FILMS);
  assert.equal(stats.totalFilms, INITIAL_FILMS.length);
  assert.equal(Number(stats.averageRating) >= 9.5, true);
  assert.equal(stats.perfectTenCount >= 2, true);
});

test('validateAndBuildFilmRecord validates required inputs and truncates curator note to 2 sentences', () => {
  const invalid = validateAndBuildFilmRecord(
    {
      title: '',
      category: 'Sci-Fi',
      year: '1800',
      director: '',
      runtime: '2h 10m',
      rating: '12',
      curatorNote: '',
      visualPreset: 'preset-cosmos',
    },
    16
  );
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.title);
  assert.ok(invalid.errors.director);
  assert.ok(invalid.errors.year);
  assert.ok(invalid.errors.rating);
  assert.ok(invalid.errors.curatorNote);

  const valid = validateAndBuildFilmRecord(
    {
      title: 'Arrival',
      category: 'Sci-Fi',
      year: '2016',
      director: 'Denis Villeneuve',
      runtime: '1h 56m',
      rating: '9.8',
      curatorNote:
        'First sentence about linguistic empathy. Second sentence about non-linear memory. Third sentence that should be trimmed.',
      visualPreset: 'preset-cosmos',
    },
    16
  );
  assert.equal(valid.valid, true);
  assert.ok(valid.filmRecord);
  assert.equal(valid.filmRecord?.catalogNumber, 'ARC-017');
  assert.equal(
    valid.filmRecord?.curatorNote,
    'First sentence about linguistic empathy. Second sentence about non-linear memory.'
  );
});

test('shouldStreamBackgroundTrailer enables background trailer on strong signal and falls back to static poster on low signal', () => {
  assert.equal(
    shouldStreamBackgroundTrailer({ onLine: true, effectiveType: '4g', downlink: 10, saveData: false }),
    true
  );
  assert.equal(shouldStreamBackgroundTrailer({}), true);
  assert.equal(shouldStreamBackgroundTrailer({ onLine: false, effectiveType: '4g', downlink: 10 }), false);
  assert.equal(shouldStreamBackgroundTrailer({ onLine: true, saveData: true, effectiveType: '4g' }), false);
  assert.equal(shouldStreamBackgroundTrailer({ onLine: true, effectiveType: '2g', downlink: 0.4 }), false);
  assert.equal(shouldStreamBackgroundTrailer({ onLine: true, effectiveType: 'slow-2g', downlink: 0.1 }), false);
  assert.equal(shouldStreamBackgroundTrailer({ onLine: true, effectiveType: '3g', downlink: 1.1 }), false);
  assert.equal(shouldStreamBackgroundTrailer({ onLine: true, effectiveType: '4g', downlink: 0.9 }), false);
});

test('areHistoryStatesEqual compares in-app navigation history snapshots accurately for device back button', () => {
  const baseState: ArchiveHistoryState = {
    isPardilloArchiveState: true,
    activeCategory: 'All',
    layoutMode: 'grid',
    heroFilmId: 'film-interstellar',
    inspectedFilmId: null,
    autoPlayTrailer: false,
    isAddModalOpen: false,
    section: 'hero-spotlight',
  };
  assert.equal(areHistoryStatesEqual(baseState, { ...baseState }), true);
  assert.equal(
    areHistoryStatesEqual(baseState, { ...baseState, activeCategory: 'Sci-Fi' }),
    false
  );
  assert.equal(
    areHistoryStatesEqual(baseState, { ...baseState, inspectedFilmId: 'film-interstellar' }),
    false
  );
  assert.equal(areHistoryStatesEqual(baseState, null), false);
});

test('verifyCuratorAccessCode allows only Mark2006 private access code', () => {
  assert.equal(verifyCuratorAccessCode('Mark2006'), true);
  assert.equal(verifyCuratorAccessCode(' Mark2006 '), true);
  assert.equal(verifyCuratorAccessCode('mark2006'), false);
  assert.equal(verifyCuratorAccessCode('Mark2005'), false);
  assert.equal(verifyCuratorAccessCode(''), false);
});




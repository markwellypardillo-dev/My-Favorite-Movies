import React, { useState, useEffect } from 'react';
import { X, Plus, Lock, Unlock, Eye, EyeOff } from 'lucide-react';
import { FilmCategory, FilmRecord, NewFilmInput } from '../types/cinema';
import { VISUAL_PRESETS } from '../data/initialFilms';
import {
  validateAndBuildFilmRecord,
  verifyCuratorAccessCode,
} from '../utils/archiveLogic';
import { MagneticButton } from './MagneticButton';

interface AddFilmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddFilm: (film: FilmRecord, promoteImmediately: boolean) => void;
  existingCount: number;
}

const CATEGORIES: FilmCategory[] = [
  'Cartoons & Animation',
  'Sci-Fi',
  'Marvel, DC & Heroes',
  'Action',
  'Love Stories',
  'Horror',
];

export const AddFilmModal: React.FC<AddFilmModalProps> = ({
  isOpen,
  onClose,
  onAddFilm,
  existingCount,
}) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [showAccessCode, setShowAccessCode] = useState(false);
  const [accessError, setAccessError] = useState('');

  const [formState, setFormState] = useState<NewFilmInput>({
    title: '',
    category: 'Sci-Fi',
    year: '2024',
    director: '',
    runtime: '2h 15m',
    rating: '9.6',
    curatorNote: '',
    imageUrl: '',
    visualPreset: VISUAL_PRESETS[0].id,
  });

  const [promoteImmediately, setPromoteImmediately] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset private access lock whenever the modal opens or closes so unauthorized users cannot edit
  useEffect(() => {
    if (!isOpen) {
      setIsUnlocked(false);
      setAccessCode('');
      setShowAccessCode(false);
      setAccessError('');
      return;
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleUnlockSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyCuratorAccessCode(accessCode)) {
      setIsUnlocked(true);
      setAccessError('');
    } else {
      setAccessError('Invalid access code. Private curator access only.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isUnlocked) return;

    const validation = validateAndBuildFilmRecord(formState, existingCount);
    if (!validation.valid || !validation.filmRecord) {
      setErrors(validation.errors);
      return;
    }

    onAddFilm(validation.filmRecord, promoteImmediately);
    // Reset form
    setFormState({
      title: '',
      category: 'Sci-Fi',
      year: '2024',
      director: '',
      runtime: '2h 15m',
      rating: '9.6',
      curatorNote: '',
      imageUrl: '',
      visualPreset: VISUAL_PRESETS[0].id,
    });
    setPromoteImmediately(false);
    setErrors({});
    setIsUnlocked(false);
    setAccessCode('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-film-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-[#050505]/88 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl surface-velvet-solid shadow-cinema-modal p-6 sm:p-8 text-white">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 pb-6">
          <div className="flex items-center gap-3">
            <h2
              id="add-film-modal-title"
              className="font-serif-editorial text-3xl sm:text-4xl font-semibold text-white"
            >
              Add Film
            </h2>
            {isUnlocked && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#050505] text-[11px] font-mono-code text-[#FF2E55]">
                <Unlock className="w-3 h-3" />
                <span>Unlocked</span>
              </span>
            )}
          </div>

          <button
            type="button"
            data-cursor="magnetic"
            onClick={onClose}
            aria-label="Close Add Film Modal"
            className="w-10 h-10 rounded-full bg-[#050505] text-white/70 hover:text-[#FF2E55] flex items-center justify-center shadow-cinema-rest transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isUnlocked ? (
          /* Private Curator Access Gate */
          <form
            data-testid="curator-access-gate"
            onSubmit={handleUnlockSubmit}
            noValidate
            className="space-y-6 pt-2"
          >
            <div className="p-6 rounded-2xl bg-[#050505] shadow-cinema-rest space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E11D48]/15 text-[#FF2E55] flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-editorial text-xl font-semibold text-white">
                    Private Curator Access
                  </h3>
                  <p className="text-xs font-sans-ui text-white/60 mt-0.5">
                    Enter Mark Welly Pardillo&apos;s access code to add a film to
                    the archive.
                  </p>
                </div>
              </div>

              <div>
                <label
                  htmlFor="curator-access-code-input"
                  className="block text-xs font-mono-code uppercase tracking-wider text-white/70 mb-1.5"
                >
                  Access Code *
                </label>
                <div className="relative">
                  <input
                    id="curator-access-code-input"
                    data-testid="curator-access-code-input"
                    type={showAccessCode ? 'text' : 'password'}
                    autoFocus
                    placeholder="Enter private access code..."
                    value={accessCode}
                    onChange={(e) => {
                      setAccessCode(e.target.value);
                      if (accessError) setAccessError('');
                    }}
                    className="w-full rounded-xl bg-[#0F0F13] pl-4 pr-11 py-3 text-sm font-mono-code text-white placeholder-white/35 shadow-cinema-rest focus:ring-2 focus:ring-[#E11D48] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowAccessCode((prev) => !prev)}
                    aria-label={
                      showAccessCode ? 'Hide access code' : 'Show access code'
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/45 hover:text-white p-1 cursor-pointer"
                  >
                    {showAccessCode ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {accessError && (
                  <p
                    data-testid="curator-access-error"
                    className="mt-2 text-xs text-[#FF2E55]"
                    role="alert"
                  >
                    {accessError}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <MagneticButton variant="velvet" onClick={onClose}>
                <span>Cancel</span>
              </MagneticButton>
              <MagneticButton
                type="submit"
                variant="amber"
                aria-label="Unlock Add Film Form"
              >
                <Unlock className="w-4 h-4" />
                <span>Unlock</span>
              </MagneticButton>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Title & Director */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="film-title-input"
                className="block text-xs font-mono-code uppercase tracking-wider text-white/70 mb-1.5"
              >
                Film Title *
              </label>
              <input
                id="film-title-input"
                type="text"
                placeholder="e.g., Arrival"
                value={formState.title}
                onChange={(e) =>
                  setFormState({ ...formState, title: e.target.value })
                }
                className="w-full rounded-xl bg-[#050505] px-4 py-3 text-sm text-white placeholder-white/40 shadow-cinema-rest focus:ring-2 focus:ring-[#E11D48]"
              />
              {errors.title && (
                <p className="mt-1 text-xs text-[#FF2E55]" role="alert">
                  {errors.title}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="film-director-input"
                className="block text-xs font-mono-code uppercase tracking-wider text-white/70 mb-1.5"
              >
                Director *
              </label>
              <input
                id="film-director-input"
                type="text"
                placeholder="e.g., Denis Villeneuve"
                value={formState.director}
                onChange={(e) =>
                  setFormState({ ...formState, director: e.target.value })
                }
                className="w-full rounded-xl bg-[#050505] px-4 py-3 text-sm text-white placeholder-white/40 shadow-cinema-rest focus:ring-2 focus:ring-[#E11D48]"
              />
              {errors.director && (
                <p className="mt-1 text-xs text-[#FF2E55]" role="alert">
                  {errors.director}
                </p>
              )}
            </div>
          </div>

          {/* Category, Year, Runtime, Rating */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="film-category-select"
                className="block text-xs font-mono-code uppercase tracking-wider text-white/70 mb-1.5"
              >
                Category
              </label>
              <select
                id="film-category-select"
                value={formState.category}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    category: e.target.value as FilmCategory,
                  })
                }
                className="w-full rounded-xl bg-[#050505] px-3 py-3 text-sm text-white shadow-cinema-rest focus:ring-2 focus:ring-[#E11D48]"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="film-year-input"
                className="block text-xs font-mono-code uppercase tracking-wider text-white/70 mb-1.5"
              >
                Release Year *
              </label>
              <input
                id="film-year-input"
                type="number"
                min={1888}
                max={2035}
                value={formState.year}
                onChange={(e) =>
                  setFormState({ ...formState, year: e.target.value })
                }
                className="w-full rounded-xl bg-[#050505] px-3 py-3 text-sm font-mono-code text-white shadow-cinema-rest focus:ring-2 focus:ring-[#E11D48]"
              />
              {errors.year && (
                <p className="mt-1 text-xs text-[#FF2E55]" role="alert">
                  {errors.year}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="film-runtime-input"
                className="block text-xs font-mono-code uppercase tracking-wider text-white/70 mb-1.5"
              >
                Runtime
              </label>
              <input
                id="film-runtime-input"
                type="text"
                placeholder="1h 56m"
                value={formState.runtime}
                onChange={(e) =>
                  setFormState({ ...formState, runtime: e.target.value })
                }
                className="w-full rounded-xl bg-[#050505] px-3 py-3 text-sm font-mono-code text-white shadow-cinema-rest focus:ring-2 focus:ring-[#E11D48]"
              />
            </div>

            <div>
              <label
                htmlFor="film-rating-input"
                className="block text-xs font-mono-code uppercase tracking-wider text-white/70 mb-1.5"
              >
                Rating (1-10) *
              </label>
              <input
                id="film-rating-input"
                type="number"
                step="0.1"
                min={1}
                max={10}
                value={formState.rating}
                onChange={(e) =>
                  setFormState({ ...formState, rating: e.target.value })
                }
                className="w-full rounded-xl bg-[#050505] px-3 py-3 text-sm font-mono-code text-[#FF2E55] font-semibold shadow-cinema-rest focus:ring-2 focus:ring-[#E11D48]"
              />
              {errors.rating && (
                <p className="mt-1 text-xs text-[#FF2E55]" role="alert">
                  {errors.rating}
                </p>
              )}
            </div>
          </div>

          {/* Curated Visual Plate Preset or Custom Image URL */}
          <div className="space-y-3">
            <span className="block text-xs font-mono-code uppercase tracking-wider text-white/70">
              Theatrical Key Art Preset
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {VISUAL_PRESETS.map((preset) => {
                const selected = formState.visualPreset === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() =>
                      setFormState({ ...formState, visualPreset: preset.id })
                    }
                    className={`p-3 rounded-xl text-left transition-all cursor-pointer ${
                      selected
                        ? 'surface-champagne-luxury text-white font-semibold shadow-amber-glow'
                        : 'bg-[#050505] text-white/70 hover:text-white shadow-cinema-rest'
                    }`}
                  >
                    <div className="text-xs font-sans-ui truncate">
                      {preset.label}
                    </div>
                    <div
                      className={`text-[10px] font-mono-code mt-0.5 truncate ${
                        selected ? 'text-white/90' : 'text-white/45'
                      }`}
                    >
                      {preset.category}
                    </div>
                  </button>
                );
              })}
            </div>

            <div>
              <label
                htmlFor="film-image-url-input"
                className="block text-xs font-mono-code uppercase tracking-wider text-white/45 mb-1"
              >
                Optional Custom Artwork URL (Leave blank to use selected preset)
              </label>
              <input
                id="film-image-url-input"
                type="url"
                placeholder="https://..."
                value={formState.imageUrl}
                onChange={(e) =>
                  setFormState({ ...formState, imageUrl: e.target.value })
                }
                className="w-full rounded-xl bg-[#050505] px-4 py-2.5 text-xs font-mono-code text-white placeholder-white/40 shadow-cinema-rest focus:ring-2 focus:ring-[#E11D48]"
              />
            </div>
          </div>

          {/* Concise Curator Note (Max 2 Sentences) */}
          <div>
            <label
              htmlFor="film-note-textarea"
              className="block text-xs font-mono-code uppercase tracking-wider text-white/70 mb-1.5"
            >
              Curator&apos;s Note (Concise — Max 2 Sentences) *
            </label>
            <textarea
              id="film-note-textarea"
              rows={3}
              placeholder="Write a sharp, authentic 1-2 sentence verdict on why this film belongs in the archive..."
              value={formState.curatorNote}
              onChange={(e) =>
                setFormState({ ...formState, curatorNote: e.target.value })
              }
              className="w-full rounded-xl bg-[#050505] px-4 py-3 text-sm text-white placeholder-white/40 shadow-cinema-rest focus:ring-2 focus:ring-[#E11D48]"
            />
            {errors.curatorNote && (
              <p className="mt-1 text-xs text-[#FF2E55]" role="alert">
                {errors.curatorNote}
              </p>
            )}
          </div>

          {/* Promote Immediately Checkbox */}
          <label className="flex items-center gap-3 cursor-pointer select-none pt-1">
            <input
              type="checkbox"
              checked={promoteImmediately}
              onChange={(e) => setPromoteImmediately(e.target.checked)}
              className="w-4 h-4 accent-[#E11D48] rounded"
            />
            <span className="text-xs font-sans-ui text-white/70">
              Immediately promote this film to Mark Welly Pardillo&apos;s #1
              All-Time Hero Spotlight
            </span>
          </label>

          {/* Submit & Cancel Actions */}
          <div className="pt-3 flex items-center justify-end gap-3">
            <MagneticButton variant="velvet" onClick={onClose}>
              <span>Cancel</span>
            </MagneticButton>
            <MagneticButton
              type="submit"
              variant="amber"
              aria-label="Save Film to Archive"
            >
              <Plus className="w-4 h-4" />
              <span>Save Film to Archive</span>
            </MagneticButton>
          </div>
          </form>
        )}
      </div>
    </div>
  );
};

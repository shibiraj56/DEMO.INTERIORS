import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState, type TouchEvent } from 'react';
import { ConsultationBanner } from '../components/common/ConsultationBanner';
import { PageHeader } from '../components/common/PageHeader';
import { GALLERY_ITEMS } from '../data/gallery';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import type { GalleryCategory } from '../types';

const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All',
  'Living & Dining',
  'Kitchen & Wardrobe',
  'Bedroom & Pooja',
  'Office & Commercial',
];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  useDocumentMeta({
    title: 'Interior Gallery | ARADHANA INTERIOR — Tamil Nadu',
    description:
      'Visual gallery of Tamil Nadu luxury residential living rooms, modular kitchens, pooja rooms, bedrooms, wardrobes, and commercial interiors.',
  });

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length
    );
  }, [filteredItems.length]);

  // Keyboard navigation & scroll lock when lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    if (Math.abs(delta) > 48) {
      if (delta > 0) showPrev();
      else showNext();
    }
    touchStartX.current = null;
  };

  const activeItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] ?? null : null;

  return (
    <>
      <PageHeader
        eyebrow="Visual Gallery"
        title="Spaces Defined by Warmth & Proportion"
        description="Explore conceptual Tamil Nadu interiors across living rooms, modular kitchens, pooja rooms, bedrooms, wardrobes, and executive workspaces."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter gallery by room category"
            className="flex flex-wrap gap-2.5 border-b border-silver/50 pb-6"
          >
            {GALLERY_CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    setActiveCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                    isSelected
                      ? 'bg-charcoal text-ivory'
                      : 'border border-silver/70 bg-ivory text-charcoal/80 hover:border-gold hover:text-charcoal'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Editorial Gallery Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, idx) => (
              <figure
                key={item.id}
                className="group flex flex-col border border-silver/60 bg-ivory transition-all duration-300 hover:border-gold hover:shadow-[0_12px_32px_rgba(36,36,36,0.06)]"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={`View full screen: ${item.title}`}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-beige text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute right-3 bottom-3 inline-flex h-9 w-9 items-center justify-center bg-ivory/90 text-charcoal opacity-90 transition-all group-hover:bg-gold group-hover:text-ivory">
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>

                <figcaption className="p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                    {item.category} · {item.locationTag}
                  </p>
                  <h2 className="mt-1.5 font-serif text-xl font-medium text-charcoal">
                    {item.title}
                  </h2>
                  <p className="mt-1.5 text-xs leading-relaxed text-charcoal/75">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Accessible Full-Screen Lightbox */}
      {activeItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-charcoal/95 p-4 text-ivory backdrop-blur-md sm:p-8"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                {activeItem.category} · {lightboxIndex + 1} / {filteredItems.length}
              </p>
              <p className="font-serif text-xl sm:text-2xl text-ivory">
                {activeItem.title}
              </p>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close full-screen viewer"
              className="inline-flex h-11 w-11 items-center justify-center border border-ivory/30 text-ivory transition-colors hover:border-gold hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Main Image Stage */}
          <div className="relative my-4 flex flex-1 items-center justify-center overflow-hidden">
            <button
              type="button"
              onClick={showPrev}
              aria-label="Previous image"
              className="absolute left-1 sm:left-4 z-10 inline-flex h-11 w-11 items-center justify-center border border-ivory/30 bg-charcoal/70 text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <img
              src={activeItem.src}
              alt={activeItem.alt}
              className="max-h-[72vh] max-w-full object-contain border border-ivory/15"
            />

            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-1 sm:right-4 z-10 inline-flex h-11 w-11 items-center justify-center border border-ivory/30 bg-charcoal/70 text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Caption & Keyboard Hint */}
          <div className="flex flex-col items-start justify-between gap-2 border-t border-ivory/15 pt-4 text-xs text-ivory/80 sm:flex-row sm:items-center">
            <p>{activeItem.caption}</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-silver">
              Use ← / → keys or swipe · Esc to close
            </p>
          </div>
        </div>
      )}

      <ConsultationBanner />
    </>
  );
}

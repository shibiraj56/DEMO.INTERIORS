import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight, Compass } from 'lucide-react';
import { lazy, Suspense, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import heroLivingImg from '../../assets/images/hero-living.jpg';
import { BRAND } from '../../data/brand';

const HeroBrassAccent3D = lazy(() =>
  import('./HeroBrassAccent3D').then((m) => ({ default: m.HeroBrassAccent3D }))
);

gsap.registerPlugin(ScrollTrigger);

/**
 * Cinematic full-width homepage hero for ARADHANA INTERIOR.
 */
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered editorial entrance
      gsap.from('.hero-reveal', {
        y: 28,
        opacity: 0,
        duration: 0.95,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'transform',
      });

      // Subtle parallax on scroll
      if (bgRef.current && sectionRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 12,
          scale: 1.06,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="ARADHANA INTERIOR Hero"
      className="relative isolate overflow-hidden bg-ivory"
    >
      {/* Full-bleed Luxury Tamil Nadu Living Room Backdrop */}
      <div className="relative min-h-[calc(100vh-7.5rem)] min-h-[600px] w-full flex items-center">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img
            ref={bgRef}
            src={heroLivingImg}
            alt="Luxury contemporary Tamil Nadu living room designed with fluted teakwood, cream Italian marble, brass chandelier, and warm cove lighting"
            className="h-full w-full object-cover object-center scale-[1.03]"
          />
        </div>

        {/* Soft Ivory Editorial Gradient Overlay for high-contrast typography */}
        <div
          className="absolute inset-0 -z-10 bg-ivory/88 sm:bg-transparent sm:bg-gradient-to-r sm:from-ivory/95 sm:via-ivory/78 sm:to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-ivory via-ivory/60 to-transparent"
          aria-hidden="true"
        />

        {/* Hero Content Grid */}
        <div
          ref={contentRef}
          className="mx-auto flex w-full max-w-[84rem] items-center justify-between gap-8 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
        >
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="hero-reveal inline-flex items-center gap-2.5 border border-gold/50 bg-ivory/90 px-3.5 py-1.5 backdrop-blur-sm">
              <Compass className="h-3.5 w-3.5 text-gold-dark" aria-hidden="true" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-charcoal">
                Tamil Nadu&apos;s Bespoke Interior Studio
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="hero-reveal mt-6 font-serif text-4xl font-medium leading-[1.06] tracking-[-0.01em] text-charcoal sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Royalty Crafted for{' '}
              <span className="italic font-normal text-gold-dark">
                Modern Tamil Nadu
              </span>{' '}
              Living.
            </h1>

            {/* Subtitle */}
            <p className="hero-reveal mt-6 max-w-xl font-sans text-sm leading-relaxed text-charcoal/85 sm:text-base md:text-lg">
              ARADHANA INTERIOR creates bespoke residential interiors, modular kitchens,
              sacred pooja rooms, and turnkey commercial spaces—uniting warm Indian
              craftsmanship with contemporary luxury.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="hero-reveal mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-charcoal px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-ivory transition-all duration-300 hover:bg-gold hover:text-charcoal"
              >
                <span>Book a Design Consultation</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2.5 border border-charcoal/30 bg-ivory/85 px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-charcoal backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-beige-soft"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-4 w-4 text-gold-dark" aria-hidden="true" />
              </Link>
            </div>

            {/* Service Coverage Strip */}
            <div className="hero-reveal mt-12 border-t border-silver/70 pt-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-dark">
                Serving Homes &amp; Businesses Across Tamil Nadu
              </p>
              <p className="mt-1.5 text-xs tracking-wide text-charcoal/80">
                {BRAND.serviceCities.slice(0, 8).join(' · ')} &amp; more
              </p>
            </div>
          </div>

          {/* 3D Brass & Silver Spatial Accent */}
          <div className="hero-reveal hidden lg:flex flex-col items-center">
            <Suspense fallback={<div className="hidden lg:block h-64 w-64 xl:h-72 xl:w-72" />}>
              <HeroBrassAccent3D />
            </Suspense>
            <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.26em] text-charcoal/70 bg-ivory/80 px-3 py-1 border border-silver/50 backdrop-blur-sm">
              3D Spatial Precision
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

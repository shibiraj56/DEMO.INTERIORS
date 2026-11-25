import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import heroLivingImg from '../../assets/images/hero-living.jpg';
import { BRAND } from '../../data/brand';

gsap.registerPlugin(ScrollTrigger);

/**
 * Editorial full-bleed homepage hero for ARADHANA INTERIOR.
 */
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from('.hero-reveal', {
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });

      if (bgRef.current && sectionRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 10,
          scale: 1.05,
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
      <div className="relative min-h-[calc(100vh-7.5rem)] min-h-[600px] w-full flex items-end lg:items-center">
        {/* Full-bleed Luxury Tamil Nadu Living Room Backdrop */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img
            ref={bgRef}
            src={heroLivingImg}
            alt="Luxury contemporary Tamil Nadu living room designed with fluted teakwood, cream Italian marble, brass chandelier, and warm cove lighting"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-center scale-[1.02]"
          />
        </div>

        {/* Soft Ivory Editorial Gradient Scrims */}
        <div
          className="absolute inset-0 -z-10 bg-ivory/88 sm:bg-transparent sm:bg-gradient-to-r sm:from-ivory/96 sm:via-ivory/80 sm:to-ivory/15"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-ivory via-ivory/65 to-transparent"
          aria-hidden="true"
        />

        {/* Editorial Content */}
        <div className="mx-auto flex w-full max-w-[88rem] flex-col justify-between gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-end lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <div className="hero-reveal flex items-center gap-3">
              <span className="h-[1px] w-8 bg-gold" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-dark">
                Tamil Nadu&apos;s Bespoke Interior Studio
              </span>
            </div>

            <h1 className="hero-reveal mt-6 font-serif text-4xl font-medium leading-[1.04] text-charcoal sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              Royalty Crafted for{' '}
              <span className="italic font-normal text-gold-dark">
                Modern Tamil Nadu
              </span>{' '}
              Living.
            </h1>

            <p className="hero-reveal mt-6 max-w-xl font-sans text-sm leading-relaxed text-charcoal/85 sm:text-base md:text-lg">
              Bespoke residential interiors, modular kitchens, sacred pooja rooms, and
              turnkey commercial spaces—uniting warm Indian craftsmanship with quiet
              contemporary luxury.
            </p>

            <div className="hero-reveal mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-charcoal px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:bg-gold hover:text-charcoal"
              >
                <span>Book a Design Consultation</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2.5 border border-charcoal/30 bg-ivory/90 px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-charcoal backdrop-blur-sm transition-colors duration-300 hover:border-gold hover:bg-beige-soft"
              >
                <span>Explore Interior Services</span>
                <ArrowRight className="h-4 w-4 text-gold-dark" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right-hand Editorial Studio Caption */}
          <div className="hero-reveal hidden lg:block max-w-xs border-l border-gold/70 bg-ivory/88 px-6 py-5 backdrop-blur-md">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-dark">
              Serving Across Tamil Nadu
            </p>
            <p className="mt-2 font-serif text-xl leading-snug text-charcoal">
              {BRAND.serviceCities.slice(0, 6).join(' · ')} &amp; beyond
            </p>
            <p className="mt-2 text-[11px] text-charcoal/70">
              Exclusively Interior Design &amp; Turnkey Execution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

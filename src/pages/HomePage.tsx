import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EditorialIntro } from '../components/home/EditorialIntro';
import { FeaturedServicesPreview } from '../components/home/FeaturedServicesPreview';
import { HeroSection } from '../components/home/HeroSection';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function HomePage() {
  useDocumentMeta({
    title:
      'ARADHANA INTERIOR | Elegance in Every Detail — Luxury Interior Designers in Tamil Nadu',
    description:
      'ARADHANA INTERIOR is a premier interior design company serving Chennai, Coimbatore, Tiruppur, Madurai, Trichy, and all of Tamil Nadu.',
  });

  return (
    <>
      <HeroSection />
      <EditorialIntro />
      <FeaturedServicesPreview />

      {/* Consultation Call-to-Action Band */}
      <section className="border-t border-silver/50 bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 border border-gold/50 bg-beige-soft/70 p-8 sm:p-12 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-dark">
                Begin Your Interior Journey
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-charcoal sm:text-4xl">
                Planning a Residence or Commercial Space in Tamil Nadu?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/80 sm:text-base">
                Connect with our interior design team for a personalized spatial
                consultation, 3D visualization, and turnkey execution roadmap.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2.5 bg-charcoal px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-ivory transition-colors duration-300 hover:bg-gold hover:text-charcoal"
            >
              <span>Request Consultation</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

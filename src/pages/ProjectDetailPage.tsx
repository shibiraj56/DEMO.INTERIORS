import { Link, useParams } from 'react-router-dom';
import heroLivingImg from '../assets/images/hero-living.jpg';
import { PageHeader } from '../components/common/PageHeader';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const formattedTitle = (slug ?? 'concept-interior')
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  useDocumentMeta({
    title: `${formattedTitle} | ARADHANA INTERIOR Portfolio`,
    description: `Conceptual interior design study: ${formattedTitle} by ARADHANA INTERIOR.`,
  });

  return (
    <>
      <PageHeader
        eyebrow="Concept Study"
        title={formattedTitle}
        description="Conceptual demo interior presentation showcasing warm ivory surfaces, fluted teakwood paneling, and brushed brass accents."
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="overflow-hidden border border-silver/60">
            <img
              src={heroLivingImg}
              alt={formattedTitle}
              className="w-full max-h-[580px] object-cover"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-silver/50 pt-6">
            <Link
              to="/projects"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal hover:text-gold-dark"
            >
              ← Back to Portfolio
            </Link>
            <Link
              to="/contact"
              className="bg-charcoal px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-ivory hover:bg-gold hover:text-charcoal transition-colors"
            >
              Request Similar Interior Design
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

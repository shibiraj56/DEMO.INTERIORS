import { PageHeader } from '../components/common/PageHeader';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function AboutPage() {
  useDocumentMeta({
    title: 'About Us | ARADHANA INTERIOR — Tamil Nadu Interior Design Studio',
    description:
      'Discover the design philosophy, mission, and bespoke interior craftsmanship of ARADHANA INTERIOR across Tamil Nadu.',
    path: '/about',
  });

  return (
    <>
      <PageHeader
        eyebrow="About ARADHANA INTERIOR"
        title="Crafted Interiors Rooted in Tamil Nadu Grace"
        description="We are an interior design studio dedicated exclusively to transforming residential and commercial interiors across Tamil Nadu—uniting timeless Indian warmth with modern spatial precision."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-[84rem] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="border border-silver/60 bg-ivory p-8 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-dark">
              Our Mission
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-charcoal">
              Elegance in Every Detail
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80 sm:text-base">
              To deliver thoughtfully planned, deeply personal interiors that elevate daily
              living through honest materials, refined lighting, and meticulous turnkey
              execution.
            </p>
          </div>

          <div className="border border-silver/60 bg-beige-soft/50 p-8 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-dark">
              Our Focus
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-charcoal">
              Exclusively Interior Design
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80 sm:text-base">
              We specialize strictly in interior design, interior decoration, interior
              elevation design, and turnkey interior solutions—ensuring every ounce of our
              expertise goes into the spaces you live and work within.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

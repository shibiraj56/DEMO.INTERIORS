import heroLivingImg from '../assets/images/hero-living.jpg';
import { PageHeader } from '../components/common/PageHeader';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function GalleryPage() {
  useDocumentMeta({
    title: 'Interior Gallery | ARADHANA INTERIOR — Tamil Nadu',
    description:
      'Visual gallery of Tamil Nadu luxury residential living rooms, modular kitchens, pooja rooms, and bespoke interiors.',
  });

  return (
    <>
      <PageHeader
        eyebrow="Visual Gallery"
        title="Spaces Defined by Warmth & Proportion"
        description="A curated showcase of conceptual Tamil Nadu interiors featuring ivory plaster, fluted teakwood, cream Italian marble, and brass illumination."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden border border-silver/60 bg-ivory">
            <img
              src={heroLivingImg}
              alt="Contemporary Tamil Nadu luxury living room interior by ARADHANA INTERIOR"
              className="w-full max-h-[620px] object-cover"
            />
            <div className="border-t border-silver/50 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                Living Room Concept · Tamil Nadu Residence
              </p>
              <p className="mt-1.5 text-sm text-charcoal/80">
                Fluted teakwood wall paneling with brushed brass inlay, layered cove lighting, and custom beige linen upholstery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

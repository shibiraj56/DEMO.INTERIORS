import heroLivingImg from '../assets/images/hero-living.jpg';
import poojaImg from '../assets/images/pooja.jpg';
import { ConsultationBanner } from '../components/common/ConsultationBanner';
import { PageHeader } from '../components/common/PageHeader';
import { SectionHeading } from '../components/common/SectionHeading';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const MATERIAL_PILLARS = [
  {
    number: '01',
    title: 'Seasoned Timber & Veneers',
    description:
      'Burma teakwood, fluted oak, and moisture-resistant BWP marine ply selected for warm grain and tropical durability.',
  },
  {
    number: '02',
    title: 'Natural Stone & Marble',
    description:
      'Cream Italian marble, travertine cladding, and honed granite counters balanced for visual serenity and everyday care.',
  },
  {
    number: '03',
    title: 'Cast & Brushed Brass',
    description:
      'Subtle metallic inlays, laser-cut jaali partitions, and traditional South Indian pooja hardware that age with grace.',
  },
  {
    number: '04',
    title: 'Tailored Textiles & Light',
    description:
      'Belgian linen drapes, acoustic upholstery, and warm-dimmable cove lighting composed to soften every room.',
  },
];

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

      {/* Editorial Studio Split */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-10">
          <div className="lg:col-span-6 overflow-hidden border border-silver/60 bg-beige">
            <img
              src={heroLivingImg}
              alt="Contemporary Tamil Nadu living room designed with fluted teakwood and Italian marble"
              className="aspect-[16/11] w-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-dark">
                Our Design Philosophy
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-charcoal sm:text-4xl">
                Exclusively Interior Design.{' '}
                <span className="italic font-normal text-gold-dark">
                  Elegance in Every Detail.
                </span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/80 sm:text-base">
                ARADHANA INTERIOR focuses strictly on interior design, interior
                decoration, interior elevation design, and turnkey interior execution.
                By dedicating 100% of our studio craft to the spaces you inhabit—rather
                than exterior construction—we achieve finer millwork tolerances, calmer
                lighting, and deeply personal rooms.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 border-t border-silver/60 pt-6 sm:grid-cols-2">
              <div>
                <h3 className="font-serif text-xl font-medium text-charcoal">
                  Our Mission
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/78">
                  To deliver thoughtfully planned, deeply personal interiors that elevate
                  daily living through honest materials and transparent turnkey execution.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-charcoal">
                  Customization Approach
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/78">
                  Every modular kitchen, pooja mandap, and wardrobe is proportioned around
                  your family&apos;s rituals, Vastu preferences, and storage needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material & Finish Philosophy */}
      <section className="border-t border-silver/50 bg-beige-soft/50 py-16 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8 space-y-10">
              <SectionHeading
                eyebrow="Material Honesty"
                title="Tactile Finishes Built for Tamil Nadu Climates"
                align="left"
              />

              <div className="grid grid-cols-1 gap-8 border-t border-silver/60 pt-8 sm:grid-cols-2">
                {MATERIAL_PILLARS.map((item) => (
                  <div key={item.number} className="space-y-2">
                    <span className="font-serif text-xl text-gold-dark">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-charcoal">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-charcoal/78">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 overflow-hidden border border-silver/60 bg-beige">
              <img
                src={poojaImg}
                alt="Traditional South Indian brass kuthu vilakku lamp and warm diya lighting"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </>
  );
}

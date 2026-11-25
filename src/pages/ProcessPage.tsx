import officeImg from '../assets/images/office.jpg';
import { ConsultationBanner } from '../components/common/ConsultationBanner';
import { PageHeader } from '../components/common/PageHeader';
import { ProcessTimelineSection } from '../components/home/ProcessTimelineSection';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function ProcessPage() {
  useDocumentMeta({
    title: 'Our Design Process | ARADHANA INTERIOR — Tamil Nadu',
    description:
      'Seven-stage transparent interior design and turnkey execution workflow from consultation to final handover across Tamil Nadu.',
    path: '/process',
  });

  return (
    <>
      <PageHeader
        eyebrow="Design Methodology"
        title="From First Conversation to Final Handover"
        description="A structured seven-stage interior design workflow ensuring clarity, craft precision, and timely delivery across Tamil Nadu."
      />

      {/* Editorial Process Intro */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-10">
          <div className="lg:col-span-7 overflow-hidden border border-silver/60 bg-beige">
            <img
              src={officeImg}
              alt="Executive workspace interior with precision timber millwork and architectural ring lighting"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-dark">
              Clarity at Every Stage
            </p>
            <h2 className="font-serif text-3xl font-medium text-charcoal sm:text-4xl">
              Seven Disciplined Milestones
            </h2>
            <p className="text-sm leading-relaxed text-charcoal/80 sm:text-base">
              Every residence and commercial interior follows a documented progression—so
              you review space plans, physical material samples, and 3D renders before
              site installation begins.
            </p>
          </div>
        </div>
      </section>

      <ProcessTimelineSection />

      <ConsultationBanner
        eyebrow="Start Stage 01"
        title="Ready to Begin Your Initial Consultation?"
        description="Share your floor plan or space requirements and our interior design team will guide you through every milestone."
      />
    </>
  );
}

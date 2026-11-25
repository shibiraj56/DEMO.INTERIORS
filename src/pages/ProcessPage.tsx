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
      <ProcessTimelineSection />
      <ConsultationBanner
        eyebrow="Start Stage 01"
        title="Ready to Begin Your Initial Consultation?"
        description="Share your floor plan or space requirements and our interior design team will guide you through every milestone."
      />
    </>
  );
}

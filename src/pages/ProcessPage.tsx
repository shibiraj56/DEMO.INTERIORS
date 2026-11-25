import { PageHeader } from '../components/common/PageHeader';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const PROCESS_STEPS = [
  '01. Consultation & Brief',
  '02. Space Planning',
  '03. Concept Development',
  '04. 3D Interior Visualization',
  '05. Material & Finish Selection',
  '06. Execution & Installation',
  '07. Final Styling & Handover',
];

export function ProcessPage() {
  useDocumentMeta({
    title: 'Our Design Process | ARADHANA INTERIOR — Tamil Nadu',
    description:
      'Seven-stage transparent interior design and turnkey execution workflow from consultation to final handover across Tamil Nadu.',
  });

  return (
    <>
      <PageHeader
        eyebrow="Design Methodology"
        title="From First Conversation to Final Handover"
        description="A structured seven-stage interior design workflow ensuring clarity, craft precision, and timely delivery across Tamil Nadu."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step}
                className="border border-silver/60 bg-ivory p-6 transition-colors hover:border-gold"
              >
                <p className="font-serif text-xl font-medium text-charcoal">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

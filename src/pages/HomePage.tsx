import { ConsultationBanner } from '../components/common/ConsultationBanner';
import { DemoTestimonialsSection } from '../components/home/DemoTestimonialsSection';
import { EditorialIntro } from '../components/home/EditorialIntro';
import { FeaturedServicesPreview } from '../components/home/FeaturedServicesPreview';
import { HeroSection } from '../components/home/HeroSection';
import { ProcessTimelineSection } from '../components/home/ProcessTimelineSection';
import { SelectedProjectsPreview } from '../components/home/SelectedProjectsPreview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function HomePage() {
  useDocumentMeta({
    title:
      'ARADHANA INTERIOR | Elegance in Every Detail — Luxury Interior Designers in Tamil Nadu',
    description:
      'ARADHANA INTERIOR is a premier interior design company serving Chennai, Coimbatore, Tiruppur, Madurai, Trichy, and all of Tamil Nadu.',
    path: '/',
  });

  return (
    <>
      <HeroSection />
      <EditorialIntro />
      <FeaturedServicesPreview />
      <SelectedProjectsPreview />
      <WhyChooseUs />
      <ProcessTimelineSection compact />
      <DemoTestimonialsSection />
      <ConsultationBanner />
    </>
  );
}

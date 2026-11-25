import { ArrowRight, ArrowUpRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../../config/site';
import { BRAND } from '../../data/brand';

interface ConsultationBannerProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  enquiryService?: string;
  enquiryProject?: string;
}

/**
 * Reusable conversion-focused consultation CTA band with contextual enquiry routing and honest WhatsApp handling.
 */
export function ConsultationBanner({
  eyebrow = 'Begin Your Interior Journey',
  title = 'Planning a Residence or Commercial Space in Tamil Nadu?',
  description = 'Connect with our interior design team for a personalized spatial consultation, 3D visualization, and turnkey execution roadmap.',
  enquiryService,
  enquiryProject,
}: ConsultationBannerProps) {
  const params = new URLSearchParams();
  if (enquiryService) params.set('service', enquiryService);
  if (enquiryProject) params.set('project', enquiryProject);
  const contactPath = params.toString() ? `/contact?${params.toString()}` : '/contact';

  const whatsappUrl = getWhatsAppUrl(
    enquiryProject
      ? `Hello ARADHANA INTERIOR, I am interested in an interior design consultation inspired by "${enquiryProject}".`
      : enquiryService
        ? `Hello ARADHANA INTERIOR, I would like to enquire about ${enquiryService}.`
        : undefined
  );

  return (
    <section className="border-t border-silver/50 bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 border border-gold/55 bg-beige-soft/75 p-8 sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-dark">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-charcoal sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/80 sm:text-base">
              {description}
            </p>
            <p className="mt-4 text-xs text-charcoal/65">
              Serving {BRAND.serviceCities.slice(0, 7).join(' · ')} &amp; across Tamil Nadu
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
            <Link
              to={contactPath}
              className="inline-flex shrink-0 items-center justify-center gap-2.5 bg-charcoal px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-ivory transition-colors duration-300 hover:bg-gold hover:text-charcoal"
            >
              <span>Request Consultation</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2.5 border border-charcoal/35 bg-ivory px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-charcoal transition-colors duration-300 hover:border-gold hover:bg-beige-soft"
              >
                <MessageSquare className="h-4 w-4 text-gold-dark" aria-hidden="true" />
                <span>WhatsApp Enquiry</span>
              </a>
            ) : (
              <Link
                to="/process"
                className="inline-flex shrink-0 items-center justify-center gap-2.5 border border-charcoal/35 bg-ivory px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-charcoal transition-colors duration-300 hover:border-gold hover:bg-beige-soft"
              >
                <span>View Design Process</span>
                <ArrowRight className="h-4 w-4 text-gold-dark" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

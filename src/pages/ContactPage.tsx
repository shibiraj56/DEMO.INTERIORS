import { CheckCircle2, Clock, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { BRAND, CORE_SERVICES } from '../data/brand';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  useDocumentMeta({
    title: 'Contact & Consultation | ARADHANA INTERIOR — Tamil Nadu',
    description:
      'Schedule an interior design consultation with ARADHANA INTERIOR. Serving Chennai, Coimbatore, Tiruppur, Madurai, Trichy, Salem, and all of Tamil Nadu.',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Connect With Us"
        title="Schedule Your Interior Consultation"
        description="Share your space requirements and Tamil Nadu city. All studio phone numbers, email addresses, and WhatsApp details below are editable demo placeholders."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-[84rem] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          {/* Contact Info Placeholders & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-silver/60 bg-beige-soft/65 p-8 space-y-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-dark">
                  Direct Studio Channels (Placeholders)
                </p>
                <h2 className="mt-2 font-serif text-2xl font-medium text-charcoal">
                  Enquiry Information
                </h2>
              </div>

              <div className="space-y-4 text-sm text-charcoal/85">
                <p className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
                  <span>{BRAND.contactPlaceholders.phone}</span>
                </p>
                <p className="flex items-start gap-3">
                  <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
                  <span>WhatsApp: {BRAND.contactPlaceholders.whatsapp}</span>
                </p>
                <p className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
                  <span>{BRAND.contactPlaceholders.email}</span>
                </p>
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
                  <span>{BRAND.contactPlaceholders.address}</span>
                </p>
                <p className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
                  <span>{BRAND.contactPlaceholders.hours}</span>
                </p>
              </div>

              <div className="border-t border-silver/60 pt-5">
                <a
                  href="#enquiry-form"
                  className="inline-flex w-full items-center justify-center gap-2.5 border border-gold bg-ivory px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal transition-colors hover:bg-gold hover:text-ivory"
                >
                  <MessageSquare className="h-4 w-4 text-gold-dark" aria-hidden="true" />
                  <span>WhatsApp Consultation (Placeholder)</span>
                </a>
              </div>
            </div>

            {/* Tamil Nadu Coverage Card */}
            <div className="border border-silver/60 bg-ivory p-8">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-dark">
                Tamil Nadu Service Coverage
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-2.5 text-xs text-charcoal/85">
                {BRAND.serviceCities.map((city) => (
                  <li key={city} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                    <span>{city}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  <span>Across Tamil Nadu</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Enhanced Enquiry Form */}
          <div id="enquiry-form" className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="border border-silver/60 bg-ivory p-8 sm:p-10 space-y-6"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-dark">
                  Design Consultation Request
                </p>
                <h2 className="mt-2 font-serif text-3xl font-medium text-charcoal">
                  Tell Us About Your Space
                </h2>
              </div>

              {submitted ? (
                <div className="border border-gold bg-beige-soft/70 p-8 space-y-3 text-charcoal">
                  <div className="flex items-center gap-2.5 text-gold-dark">
                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                      Demo Submission Recorded
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-charcoal/85">
                    Thank you for testing the ARADHANA INTERIOR consultation form. This is a
                    client demonstration website—no personal data was transmitted externally.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 border border-charcoal px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-charcoal hover:bg-charcoal hover:text-ivory transition-colors"
                  >
                    Submit Another Demo Enquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/80">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="mt-2 w-full border border-silver bg-ivory px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/80">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="mt-2 w-full border border-silver bg-ivory px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="city" className="block text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/80">
                        Tamil Nadu City *
                      </label>
                      <select
                        id="city"
                        className="mt-2 w-full border border-silver bg-ivory px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
                      >
                        {BRAND.serviceCities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                        <option value="Other">Other Tamil Nadu City</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/80">
                        Primary Service
                      </label>
                      <select
                        id="service"
                        className="mt-2 w-full border border-silver bg-ivory px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
                      >
                        {CORE_SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/80">
                      Project Scope &amp; Timeline *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Share your home or commercial space details, approximate sq. ft., and preferred timeline..."
                      className="mt-2 w-full border border-silver bg-ivory px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-charcoal px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-gold hover:text-charcoal"
                  >
                    Submit Demo Enquiry
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

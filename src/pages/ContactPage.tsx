import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { BRAND } from '../data/brand';
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
        description="Share your space requirements and Tamil Nadu city. All contact details below are editable demo placeholders."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-[84rem] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          {/* Contact Info Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-silver/60 bg-beige-soft/60 p-8 space-y-5">
              <h2 className="font-serif text-2xl font-medium text-charcoal">
                Studio Details (Placeholders)
              </h2>
              <div className="space-y-4 text-sm text-charcoal/85">
                <p className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-gold-dark" />
                  <span>{BRAND.contactPlaceholders.phone}</span>
                </p>
                <p className="flex items-start gap-3">
                  <MessageSquare className="mt-0.5 h-4 w-4 text-gold-dark" />
                  <span>WhatsApp: {BRAND.contactPlaceholders.whatsapp}</span>
                </p>
                <p className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-gold-dark" />
                  <span>{BRAND.contactPlaceholders.email}</span>
                </p>
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-gold-dark" />
                  <span>{BRAND.contactPlaceholders.address}</span>
                </p>
              </div>
              <p className="border-t border-silver/60 pt-4 text-xs text-charcoal/70">
                Service Coverage: {BRAND.serviceCities.join(', ')} &amp; across Tamil Nadu.
              </p>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="border border-silver/60 bg-ivory p-8 sm:p-10 space-y-5"
            >
              <h2 className="font-serif text-2xl font-medium text-charcoal">
                Design Enquiry Form (Demo)
              </h2>

              {submitted ? (
                <div className="border border-gold bg-beige-soft p-6 text-sm text-charcoal">
                  Thank you. This is a Milestone 1 demo form submission—no personal data was transmitted.
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/80">
                        Full Name
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
                      <label htmlFor="city" className="block text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/80">
                        Tamil Nadu City
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
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/80">
                      Project Scope
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Tell us about your home, modular kitchen, pooja room, or commercial interior..."
                      className="mt-2 w-full border border-silver bg-ivory px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-charcoal px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-gold hover:text-charcoal"
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

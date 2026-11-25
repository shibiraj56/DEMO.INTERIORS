import { AlertCircle, CheckCircle2, Clock, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { SITE_CONFIG } from '../config/site';
import { BRAND, CORE_SERVICES } from '../data/brand';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_VALUES: FormValues = {
  name: '',
  phone: '',
  email: '',
  city: BRAND.serviceCities[0],
  service: CORE_SERVICES[0].title,
  message: '',
};

export function ContactPage() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'demo-validated' | 'sent' | 'error'>('idle');

  useDocumentMeta({
    title: 'Contact & Consultation | ARADHANA INTERIOR — Tamil Nadu',
    description:
      'Schedule an interior design consultation with ARADHANA INTERIOR. Serving Chennai, Coimbatore, Tiruppur, Madurai, Trichy, Salem, and all of Tamil Nadu.',
    path: '/contact',
  });

  const validate = (data: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (data.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name (at least 2 characters).';
    }
    const digits = data.phone.replace(/\D/g, '');
    if (digits.length < 10) {
      nextErrors.phone = 'Please enter a valid 10-digit phone or WhatsApp number.';
    }
    if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address or leave blank.';
    }
    if (data.message.trim().length < 10) {
      nextErrors.message = 'Please describe your interior scope (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (!SITE_CONFIG.formEndpoint) {
      setStatus('demo-validated');
      return;
    }

    try {
      setStatus('submitting');
      const res = await fetch(SITE_CONFIG.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('sent');
      setValues(INITIAL_VALUES);
    } catch {
      setStatus('error');
    }
  };

  const whatsappHref = SITE_CONFIG.contact.whatsappNumber
    ? `https://wa.me/${SITE_CONFIG.contact.whatsappNumber.replace(/\D/g, '')}`
    : '#enquiry-form';

  return (
    <>
      <PageHeader
        eyebrow="Connect With Us"
        title="Schedule Your Interior Consultation"
        description="Share your space requirements and Tamil Nadu city. Studio phone numbers, WhatsApp, and addresses are centralized editable placeholders until live launch."
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
                  href={whatsappHref}
                  target={SITE_CONFIG.contact.whatsappNumber ? '_blank' : undefined}
                  rel={SITE_CONFIG.contact.whatsappNumber ? 'noopener noreferrer' : undefined}
                  className="inline-flex w-full items-center justify-center gap-2.5 border border-gold bg-ivory px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal transition-colors hover:bg-gold hover:text-ivory"
                >
                  <MessageSquare className="h-4 w-4 text-gold-dark" aria-hidden="true" />
                  <span>
                    {SITE_CONFIG.contact.whatsappNumber
                      ? 'Chat on WhatsApp'
                      : 'WhatsApp Enquiry (Placeholder)'}
                  </span>
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

          {/* Validated Enquiry Form */}
          <div id="enquiry-form" className="lg:col-span-7">
            <form
              noValidate
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

              {status === 'demo-validated' || status === 'sent' ? (
                <div
                  role="status"
                  className="border border-gold bg-beige-soft/70 p-8 space-y-3 text-charcoal"
                >
                  <div className="flex items-center gap-2.5 text-gold-dark">
                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                      {status === 'sent'
                        ? 'Enquiry Submitted'
                        : 'Demo Validation Passed (Backend Not Configured)'}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-charcoal/85">
                    {status === 'sent'
                      ? 'Thank you for reaching out to ARADHANA INTERIOR. Our design team will review your project brief.'
                      : 'All form fields passed validation. Because no live backend endpoint (VITE_FORMSPREE_ENDPOINT) is configured in this demo build, no data was transmitted externally.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-2 border border-charcoal px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-charcoal hover:bg-charcoal hover:text-ivory transition-colors"
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                <>
                  {status === 'error' && (
                    <div
                      role="alert"
                      className="flex items-center gap-2.5 border border-red-400 bg-red-50 p-4 text-xs text-red-800"
                    >
                      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Unable to send enquiry right now. Please try again later.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/80">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={values.name}
                        onChange={(e) => setValues({ ...values, name: e.target.value })}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        placeholder="Your name"
                        className="mt-2 w-full border border-silver bg-ivory px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-xs text-red-700">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/80">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={values.phone}
                        onChange={(e) => setValues({ ...values, phone: e.target.value })}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        placeholder="+91 98XXX XXXXX"
                        className="mt-2 w-full border border-silver bg-ivory px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1.5 text-xs text-red-700">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/80">
                        Email (Optional)
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={values.email}
                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        placeholder="you@example.com"
                        className="mt-2 w-full border border-silver bg-ivory px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-red-700">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/80">
                        Tamil Nadu City *
                      </label>
                      <select
                        id="city"
                        value={values.city}
                        onChange={(e) => setValues({ ...values, city: e.target.value })}
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
                        value={values.service}
                        onChange={(e) => setValues({ ...values, service: e.target.value })}
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
                      value={values.message}
                      onChange={(e) => setValues({ ...values, message: e.target.value })}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      placeholder="Share your home or commercial space details, approximate sq. ft., and preferred timeline..."
                      className="mt-2 w-full border border-silver bg-ivory px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-red-700">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto bg-charcoal px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-gold hover:text-charcoal disabled:opacity-60"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Validate & Preview Enquiry'}
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

import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../../data/brand';
import { NAV_ITEMS } from '../../data/navigation';
import { BrandLogo } from '../common/BrandLogo';

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Refined light-themed editorial footer adhering to the Ivory, Gold, Silver, and Beige palette.
 */
export function Footer() {
  return (
    <footer className="border-t border-silver/60 bg-beige-soft text-charcoal">
      <div className="mx-auto max-w-[84rem] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <BrandLogo variant="dark" showTagline />
            <p className="max-w-sm text-sm leading-relaxed text-charcoal/80">
              {BRAND.positioning} Exclusively dedicated to luxury residential interiors,
              bespoke modular kitchens, sacred pooja rooms, and turnkey interior execution.
            </p>
            <div className="inline-block border border-gold/40 bg-ivory px-3 py-1.5 text-[11px] font-medium tracking-wide text-charcoal/75">
              {BRAND.demoNotice}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-dark">
              Studio
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-charcoal/80 transition-colors hover:text-gold-dark"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tamil Nadu Coverage Column */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-dark">
              Tamil Nadu Coverage
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-charcoal/80">
              {BRAND.serviceCities.map((city) => (
                <li key={city} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholders Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-dark">
              Enquiries
            </h3>
            <ul className="space-y-3 text-sm text-charcoal/80">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
                <span>{BRAND.contactPlaceholders.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
                <span>{BRAND.contactPlaceholders.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
                <span>{BRAND.contactPlaceholders.address}</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-charcoal px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-silver/60 pt-6 text-xs text-charcoal/65 sm:flex-row sm:items-center">
          <p>
            © {CURRENT_YEAR} {BRAND.name}. Concept Demo Website — Interior Design
            Studio, Tamil Nadu.
          </p>
          <p className="tracking-[0.18em] uppercase text-[10px] text-gold-dark font-medium">
            {BRAND.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}

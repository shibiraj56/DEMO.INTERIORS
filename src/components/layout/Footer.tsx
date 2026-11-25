import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../../data/brand';
import { NAV_ITEMS } from '../../data/navigation';
import { BrandLogo } from '../common/BrandLogo';

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Two-tier editorial footer adhering strictly to the Ivory, Gold, Silver, and Warm Beige palette.
 */
export function Footer() {
  return (
    <footer className="border-t border-silver/60 bg-beige-soft/75 text-charcoal">
      <div className="mx-auto max-w-[88rem] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        {/* Top Editorial Band */}
        <div className="flex flex-col justify-between gap-8 border-b border-silver/60 pb-12 lg:flex-row lg:items-end">
          <div className="max-w-xl space-y-4">
            <BrandLogo variant="dark" showTagline />
            <p className="font-serif text-2xl leading-snug text-charcoal sm:text-3xl">
              Crafting bespoke residential &amp; commercial interiors across Tamil Nadu
              with quiet luxury and enduring precision.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 self-start border border-charcoal bg-charcoal px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:bg-gold hover:border-gold hover:text-charcoal lg:self-auto"
          >
            <span>Book a Consultation</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Middle Structured Columns */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-dark">
              Studio Notice
            </h3>
            <p className="text-sm leading-relaxed text-charcoal/80">
              {BRAND.positioning} Exclusively dedicated to interior design, interior
              elevation, modular joinery, and turnkey interior execution.
            </p>
            <p className="inline-block border border-gold/45 bg-ivory px-3.5 py-2 text-[11px] leading-snug text-charcoal/75">
              {BRAND.demoNotice}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-dark">
              Navigation
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

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-dark">
              Tamil Nadu Coverage
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-charcoal/80">
              {BRAND.serviceCities.map((city) => (
                <li key={city} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-dark">
              Enquiries (Placeholders)
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
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-silver/60 pt-6 text-xs text-charcoal/65 sm:flex-row sm:items-center">
          <p>
            © {CURRENT_YEAR} {BRAND.name}. Concept Demo Website — Interior Design
            Studio, Tamil Nadu.
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-dark">
            {BRAND.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}

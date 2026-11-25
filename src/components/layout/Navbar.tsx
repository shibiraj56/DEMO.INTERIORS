import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Menu, PhoneCall, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BRAND } from '../../data/brand';
import { NAV_ITEMS } from '../../data/navigation';
import { BrandLogo } from '../common/BrandLogo';

const SERVICE_DROPDOWN_LINKS = [
  {
    label: 'Luxury Residential Interiors',
    subtitle: 'Villas, bungalows & apartments across Tamil Nadu',
    path: '/services?category=Residential',
  },
  {
    label: 'Modular Kitchen Design',
    subtitle: 'Ergonomic island & L-shaped Indian kitchens',
    path: '/services?category=Residential',
  },
  {
    label: 'Pooja Room Interiors',
    subtitle: 'Burma teakwood mandaps & brass accents',
    path: '/services?category=Specialized',
  },
  {
    label: 'Office & Commercial Interiors',
    subtitle: 'Executive suites, lounges & showrooms',
    path: '/services?category=Commercial',
  },
];

/**
 * Responsive primary navigation with desktop Services dropdown, scroll-aware styling, and accessible mobile drawer.
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open & handle Escape key
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setServicesDropdownOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileOpen]);

  const useTransparentHeroHeader = isHome && !isScrolled && !mobileOpen;

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${
          useTransparentHeroHeader
            ? 'bg-ivory/88 backdrop-blur-md border-b border-silver/40'
            : 'bg-ivory/96 backdrop-blur-md border-b border-silver/60 shadow-[0_4px_24px_rgba(36,36,36,0.04)]'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[84rem] items-center justify-between px-4 sm:px-6 lg:px-8">
          <BrandLogo variant="dark" showTagline />

          {/* Desktop Navigation */}
          <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              if (item.path === '/services') {
                return (
                  <div
                    key={item.path}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <div className="flex items-center gap-1">
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `relative py-1.5 text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${
                            isActive
                              ? 'text-gold-dark'
                              : 'text-charcoal/85 hover:text-charcoal'
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <span>{item.label}</span>
                            <span
                              className={`absolute bottom-0 left-0 h-[1.5px] bg-gold transition-all duration-300 ${
                                isActive ? 'w-full' : 'w-0'
                              }`}
                            />
                          </>
                        )}
                      </NavLink>
                      <button
                        type="button"
                        aria-label="Toggle Services submenu"
                        aria-expanded={servicesDropdownOpen}
                        aria-haspopup="true"
                        onClick={() => setServicesDropdownOpen((prev) => !prev)}
                        className="rounded p-0.5 text-charcoal/70 transition-colors hover:text-gold-dark"
                      >
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${
                            servicesDropdownOpen ? 'rotate-180 text-gold-dark' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full pt-3 w-80 z-50"
                        >
                          <div className="border border-silver/70 bg-ivory p-3 shadow-[0_18px_40px_rgba(36,36,36,0.09)]">
                            <p className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-dark">
                              Interior Specialties
                            </p>
                            <ul className="mt-1 divide-y divide-silver/30">
                              {SERVICE_DROPDOWN_LINKS.map((sub) => (
                                <li key={sub.label}>
                                  <Link
                                    to={sub.path}
                                    onClick={() => setServicesDropdownOpen(false)}
                                    className="block px-3 py-2.5 transition-colors hover:bg-beige-soft/70"
                                  >
                                    <span className="block text-xs font-semibold text-charcoal">
                                      {sub.label}
                                    </span>
                                    <span className="mt-0.5 block text-[11px] text-charcoal/65">
                                      {sub.subtitle}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <Link
                              to="/services"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="mt-2 flex items-center justify-between border-t border-silver/50 px-3 pt-2.5 pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark hover:text-charcoal"
                            >
                              <span>View All 12 Services</span>
                              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `relative py-1.5 text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${
                      isActive
                        ? 'text-gold-dark'
                        : 'text-charcoal/85 hover:text-charcoal'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      <span
                        className={`absolute bottom-0 left-0 h-[1.5px] bg-gold transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 border border-gold bg-charcoal px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ivory transition-all duration-300 hover:bg-gold hover:text-charcoal"
            >
              <span>Consultation</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              className="inline-flex h-11 w-11 items-center justify-center border border-silver/70 bg-ivory text-charcoal transition-colors hover:border-gold lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-[5rem] z-30 flex flex-col justify-between overflow-y-auto bg-ivory px-6 py-8 lg:hidden"
          >
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-dark">
                Explore Studio
              </p>
              <nav aria-label="Mobile Navigation" className="flex flex-col divide-y divide-silver/40 border-y border-silver/40">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * idx, duration: 0.25 }}
                  >
                    <NavLink
                      to={item.path}
                      end={item.path === '/'}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between py-4 font-serif text-2xl tracking-wide transition-colors ${
                          isActive ? 'text-gold-dark font-medium' : 'text-charcoal'
                        }`
                      }
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="h-4 w-4 text-gold" aria-hidden="true" />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="mt-8 space-y-5 border-t border-silver/50 pt-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-charcoal/60">
                  Serving Across Tamil Nadu
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-charcoal/80">
                  {BRAND.serviceCities.slice(0, 6).join(' · ')} &amp; beyond
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex flex-1 items-center justify-center gap-2 bg-charcoal px-6 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-gold hover:text-charcoal"
                >
                  <span>Book Design Consultation</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center gap-2 border border-silver px-5 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-charcoal"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-gold-dark" />
                  <span>Enquire</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

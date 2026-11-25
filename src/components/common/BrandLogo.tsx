import { Link } from 'react-router-dom';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  showTagline?: boolean;
  className?: string;
}

/**
 * Royal editorial wordmark & monogram for ARADHANA INTERIOR.
 */
export function BrandLogo({
  variant = 'dark',
  showTagline = true,
  className = '',
}: BrandLogoProps) {
  const titleColor = variant === 'light' ? 'text-ivory' : 'text-charcoal';
  const taglineColor = variant === 'light' ? 'text-ivory/75' : 'text-charcoal/65';

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 focus:outline-none ${className}`}
      aria-label="ARADHANA INTERIOR — Home"
    >
      {/* Bespoke geometric interior arch monogram */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-500 group-hover:scale-105"
        aria-hidden="true"
      >
        <rect
          x="1.5"
          y="1.5"
          width="37"
          height="37"
          stroke="#C6A45A"
          strokeWidth="1.25"
        />
        <path
          d="M11 31V18C11 13.0294 15.0294 9 20 9C24.9706 9 29 13.0294 29 18V31"
          stroke="#C6A45A"
          strokeWidth="1.4"
        />
        <path
          d="M15.5 31L20 15.5L24.5 31"
          stroke={variant === 'light' ? '#FAF9F6' : '#242424'}
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="16.5"
          y1="25"
          x2="23.5"
          y2="25"
          stroke="#C6A45A"
          strokeWidth="1.25"
        />
      </svg>

      <div className="flex flex-col">
        <span
          className={`font-serif text-lg sm:text-xl font-semibold tracking-[0.18em] leading-none uppercase ${titleColor}`}
        >
          ARADHANA <span className="text-gold">INTERIOR</span>
        </span>
        {showTagline && (
          <span
            className={`mt-1 text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.28em] uppercase ${taglineColor}`}
          >
            Elegance in Every Detail
          </span>
        )}
      </div>
    </Link>
  );
}

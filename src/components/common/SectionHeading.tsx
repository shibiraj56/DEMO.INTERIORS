import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  action?: ReactNode;
  align?: 'left' | 'between';
}

/**
 * Shared editorial section heading with uppercase eyebrow, Cormorant Garamond title, and optional right-hand action.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = 'between',
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-6 ${
        align === 'between' ? 'lg:flex-row lg:items-end lg:justify-between' : ''
      }`}
    >
      <div className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-6 bg-gold" aria-hidden="true" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-dark">
            {eyebrow}
          </p>
        </div>
        <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.1] text-charcoal sm:text-4xl lg:text-[3.1rem]">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-charcoal/78 sm:text-base">
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

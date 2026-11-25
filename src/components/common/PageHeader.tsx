interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

/**
 * Shared editorial page header for inner routes.
 */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-silver/60 bg-beige-soft/60 py-16 sm:py-24">
      <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-dark">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight text-charcoal sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-charcoal/80 sm:text-base">
          {description}
        </p>
      </div>
    </section>
  );
}

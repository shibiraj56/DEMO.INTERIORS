interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

/**
 * Editorial masthead header for inner pages.
 */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative border-b border-silver/60 bg-ivory pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-8 bg-gold" aria-hidden="true" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-dark">
            {eyebrow}
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <h1 className="lg:col-span-8 font-serif text-4xl font-medium leading-[1.06] text-charcoal sm:text-5xl lg:text-[4rem]">
            {title}
          </h1>
          <p className="lg:col-span-4 text-sm leading-relaxed text-charcoal/78 sm:text-base lg:pb-1.5">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

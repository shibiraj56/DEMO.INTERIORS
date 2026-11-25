import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Layers, ShieldCheck, Sliders } from 'lucide-react';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ADVANTAGES = [
  {
    icon: Award,
    number: '01',
    title: 'Uncompromising Design Quality',
    description:
      'Every proportion, sightline, and lighting cove is composed by dedicated interior designers focused exclusively on interior craft.',
  },
  {
    icon: Sliders,
    number: '02',
    title: '100% Bespoke Customization',
    description:
      'Tailored around Tamil Nadu family rituals, culinary workflows, Vastu preferences, and personal storage habits—never cookie-cutter templates.',
  },
  {
    icon: Layers,
    number: '03',
    title: 'Curated Material Selection',
    description:
      'Seasoned Burma teakwood, BWP marine ply, Italian marble, and brushed brass hardware vetted for tropical coastal and inland durability.',
  },
  {
    icon: ShieldCheck,
    number: '04',
    title: 'Disciplined Turnkey Execution',
    description:
      'Transparent milestones, 3D pre-visualization sign-offs, and dedicated site supervision through final styling and handover.',
  },
];

/**
 * Editorial Why Choose Us section highlighting design quality, customization, materials, and execution.
 */
export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from('.why-card', {
        y: 20,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power2.out',
        immediateRender: false,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 92%',
          once: true,
        },
      });
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="why-choose-us-heading"
      className="border-t border-silver/50 bg-ivory py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-dark">
            The ARADHANA Standard
          </p>
          <h2
            id="why-choose-us-heading"
            className="mt-3 font-serif text-3xl font-medium text-charcoal sm:text-4xl lg:text-5xl"
          >
            Why Discerning Homeowners Choose{' '}
            <span className="italic text-gold-dark">ARADHANA INTERIOR</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.number}
                className="why-card group flex flex-col justify-between border border-silver/60 bg-beige-soft/45 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-ivory hover:shadow-[0_12px_32px_rgba(36,36,36,0.05)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center border border-gold/40 bg-ivory text-gold-dark transition-colors group-hover:bg-gold group-hover:text-ivory">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="font-serif text-xl text-silver">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-medium text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 h-[1px] w-10 bg-gold/60 transition-all duration-300 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

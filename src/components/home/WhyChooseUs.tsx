import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Layers, ShieldCheck, Sliders } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { SectionHeading } from '../common/SectionHeading';

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
 * Architectural 2x2 numbered manifesto for Why Choose Us.
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
      className="border-t border-silver/50 bg-beige-soft/45 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="The ARADHANA Standard"
          title={
            <span id="why-choose-us-heading">
              Why Discerning Homeowners Choose{' '}
              <span className="italic font-normal text-gold-dark">
                ARADHANA INTERIOR
              </span>
            </span>
          }
          align="left"
        />

        <div className="mt-14 grid grid-cols-1 border-t border-silver/60 md:grid-cols-2">
          {ADVANTAGES.map((item, idx) => {
            const Icon = item.icon;
            const isRightCol = idx % 2 === 1;
            return (
              <article
                key={item.number}
                className={`why-card group border-b border-silver/60 py-9 sm:py-11 ${
                  isRightCol ? 'md:border-l md:pl-10 lg:pl-14' : 'md:pr-10 lg:pr-14'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-2xl text-gold-dark">
                      {item.number}
                    </span>
                    <span className="h-[1px] w-6 bg-silver" aria-hidden="true" />
                    <Icon className="h-4 w-4 text-gold-dark" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="mt-5 font-serif text-2xl font-medium text-charcoal sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-charcoal/80 sm:text-base">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

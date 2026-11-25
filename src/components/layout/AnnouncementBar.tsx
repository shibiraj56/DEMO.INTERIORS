import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ANNOUNCEMENTS } from '../../data/navigation';

/**
 * Top announcement bar highlighting Tamil Nadu interior design coverage.
 */
export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  if (!visible) return null;

  const current = ANNOUNCEMENTS[activeIndex];

  return (
    <div
      role="region"
      aria-label="Studio announcement"
      className="relative z-50 bg-charcoal text-ivory border-b border-gold/30"
    >
      <div className="mx-auto flex max-w-[84rem] items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="hidden w-6 sm:block" aria-hidden="true" />

        <div className="flex flex-1 items-center justify-center gap-2.5 text-center text-[11px] sm:text-xs tracking-[0.08em]">
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
          <AnimatePresence mode="wait">
            <motion.p
              key={current.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.35 }}
              className="font-sans font-normal text-ivory/90"
            >
              <span className="hidden md:inline text-gold font-medium uppercase tracking-[0.14em] mr-2">
                {current.highlight} —
              </span>
              <span>{current.text}</span>
            </motion.p>
          </AnimatePresence>
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center border-b border-gold/70 pb-0.5 text-[11px] font-medium uppercase tracking-[0.14em] text-gold transition-colors hover:border-ivory hover:text-ivory"
          >
            Enquire
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Dismiss announcement"
          className="ml-2 rounded p-1 text-silver/80 transition-colors hover:text-ivory focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

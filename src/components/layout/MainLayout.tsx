import { motion } from 'framer-motion';
import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { AnnouncementBar } from './AnnouncementBar';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-ivory text-charcoal">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-charcoal focus:px-4 focus:py-2.5 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-[0.16em] focus:text-ivory"
      >
        Skip to main content
      </a>
      <AnnouncementBar />
      <Navbar />
      <main id="main-content" className="flex-1">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

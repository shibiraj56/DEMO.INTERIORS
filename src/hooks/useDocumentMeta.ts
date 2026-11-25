import { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';
import type { SeoMeta } from '../types';

/**
 * Updates document title, meta description, Open Graph tags, and canonical URL on route navigation.
 */
export function useDocumentMeta({
  title,
  description,
  path = '/',
  noIndex = false,
}: SeoMeta & { path?: string; noIndex?: boolean }) {
  useEffect(() => {
    document.title = title;

    const canonicalHref = `${SITE_CONFIG.siteUrl}${path.startsWith('/') ? path : `/${path}`}`;

    const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[name="robots"]', 'name', 'robots', noIndex ? 'noindex, follow' : 'index, follow');
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalHref);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalHref);
  }, [title, description, path, noIndex]);
}

import { useEffect } from 'react';
import type { SeoMeta } from '../types';

/**
 * Updates document title and meta description on route navigation.
 */
export function useDocumentMeta({ title, description }: SeoMeta) {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);
}

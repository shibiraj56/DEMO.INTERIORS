/**
 * Centralized production & editable contact configuration.
 * Reads Vite environment variables when provided, falling back to safe demo placeholders.
 */
export const SITE_CONFIG = {
  siteUrl: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || 'https://aradhana-interior-demo.vercel.app',
  contact: {
    phone: (import.meta.env.VITE_CONTACT_PHONE as string | undefined) || '+91 [Studio Phone Placeholder]',
    whatsappNumber: (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) || '',
    whatsappDisplay: (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) || '+91 [WhatsApp Placeholder]',
    email: (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) || 'studio@[aradhanainterior-placeholder].in',
    address: (import.meta.env.VITE_STUDIO_ADDRESS as string | undefined) || '[Studio Address Placeholder], Tamil Nadu, India',
    hours: 'Mon – Sat · 10:00 AM – 7:00 PM IST',
  },
  formEndpoint: (import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined) || '',
} as const;

/**
 * Returns a properly encoded WhatsApp enquiry URL only when a valid number (>= 10 digits) is configured.
 * Returns null in demo mode when unconfigured so no misleading active contact button is shown.
 */
export function getWhatsAppUrl(customMessage?: string): string | null {
  const digits = SITE_CONFIG.contact.whatsappNumber.replace(/\D/g, '');
  if (digits.length < 10) {
    return null;
  }
  const text =
    customMessage?.trim() ||
    'Hello ARADHANA INTERIOR, I would like to schedule an interior design consultation.';
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

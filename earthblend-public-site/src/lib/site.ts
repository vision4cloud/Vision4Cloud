export const SITE = {
  brand: "Earthblend",
  url: "https://earthblend.in",
  legalEntity: "Prakriti Solutions",
  whatsappNumber: "919911755778",
  whatsappDisplay: "+91 99117 55778",
  email: "info@earthblend.in",
  fssaiPlaceholder: "FSSAI Lic. No. XXXXXXXXXXXXXXX (placeholder — to be confirmed from packaging)",
  trademarkNote: "Earthblend is a registered trademark (Class 3) of Prakriti Solutions",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const NAV_LINKS = [
  { label: "Shop", href: "/#shop" },
  { label: "Rituals", href: "/rituals" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

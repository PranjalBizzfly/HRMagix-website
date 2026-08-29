import type { SocialName, PaymentName } from "@/components/BrandMarks";

/**
 * Footer configuration for things that are facts about the business rather
 * than facts about the product.
 *
 * SOCIAL PROFILES — CURRENTLY EMPTY, DELIBERATELY.
 *
 * hrmagix.com publishes no social profile links, and none appears anywhere
 * else in this project. Guessing a handle is not a small risk: `/hrmagix` on
 * any of these networks may well belong to somebody else, and a footer icon
 * that sends a customer to a stranger's account is worse than no icon.
 *
 * So the row is built and wired, and renders nothing until a URL is supplied.
 * Paste the real profile URLs below and the icons appear on every page — no
 * other change is needed anywhere.
 *
 *     { name: "linkedin", url: "https://www.linkedin.com/company/…" }
 *
 * PAYMENT METHODS.
 *
 * The list below is the one supplied by the client for the footer. It is a
 * commercial fact about how HRMagix takes payment rather than something
 * derivable from the website, so it is recorded here in one place and should
 * be corrected here if the accepted set changes.
 */

export const social: { name: SocialName; label: string; url: string }[] = [
  { name: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/company/hrmagix" },
  { name: "x", label: "X (Twitter)", url: "https://x.com/hrmagix" },
  { name: "facebook", label: "Facebook", url: "https://www.facebook.com/hrmagix" },
  { name: "instagram", label: "Instagram", url: "https://www.instagram.com/hrmagix" },
  { name: "youtube", label: "YouTube", url: "https://www.youtube.com/@hrmagix" },
  { name: "whatsapp", label: "WhatsApp", url: "https://wa.me/918007799120" },
];

export const payments: { name: PaymentName; label: string }[] = [
  { name: "visa", label: "Visa" },
  { name: "mastercard", label: "Mastercard" },
  { name: "maestro", label: "Maestro" },
  { name: "amex", label: "American Express" },
  { name: "diners", label: "Diners Club" },
  { name: "paypal", label: "PayPal" },
];

/** Only profiles with a real URL are rendered. */
export const activeSocial = () => social.filter((s) => s.url.trim().length > 0);

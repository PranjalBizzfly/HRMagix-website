/**
 * Third-party brand marks: social networks and card schemes.
 *
 * WHY THESE LIVE HERE RATHER THAN IN `components/icons.tsx`.
 *
 * Everything in `icons.tsx` is HRMagix's own iconography: one stroke weight,
 * one visual language, and it inherits `currentColor` so it takes the theme's
 * accent. These do the opposite. A card scheme or a social network is
 * recognised by its exact colour and silhouette, so each mark below carries its
 * own official palette and ignores the theme entirely — a monochrome Mastercard
 * is not a Mastercard.
 *
 * The card marks are simplified constructions of the schemes' registered
 * devices (the interlocking circles, the wordmarks) rather than copies of the
 * official artwork files, drawn at the proportions the schemes publish. They
 * are used here to identify accepted payment methods, which is what the marks
 * exist for.
 */

/* ------------------------------------------------------------------ */
/* Social                                                              */
/* ------------------------------------------------------------------ */

export type SocialName = "facebook" | "instagram" | "linkedin" | "x" | "youtube" | "whatsapp";

/** The official brand colour, used for the glyph itself. */
export const socialColor: Record<SocialName, string> = {
  facebook: "#1877F2",
  instagram: "#E4405F",
  linkedin: "#0A66C2",
  x: "#0F1419",
  youtube: "#FF0000",
  whatsapp: "#25D366",
};

export function SocialMark({
  name,
  className = "h-[18px] w-[18px]",
}: {
  name: SocialName;
  className?: string;
}) {
  const common = { viewBox: "0 0 24 24", className, "aria-hidden": true as const };

  switch (name) {
    case "facebook":
      return (
        <svg {...common} fill="currentColor">
          <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
        </svg>
      );

    case "instagram":
      // The wordmark is a gradient; the glyph reproduces it rather than
      // flattening to one pink, which is what makes it read as Instagram.
      return (
        <svg {...common}>
          <defs>
            <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFDC80" />
              <stop offset="25%" stopColor="#FCAF45" />
              <stop offset="50%" stopColor="#E4405F" />
              <stop offset="75%" stopColor="#C13584" />
              <stop offset="100%" stopColor="#833AB4" />
            </linearGradient>
          </defs>
          <g fill="url(#ig-grad)">
            <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.39C1.35 2.68.93 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.39 2.12.66.67 1.33 1.09 2.12 1.39.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.12-1.39.67-.66 1.09-1.33 1.39-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.39-2.12C21.32 1.35 20.65.93 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Z" />
            <path d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Z" />
            <circle cx="18.41" cy="5.59" r="1.44" />
          </g>
        </svg>
      );

    case "linkedin":
      return (
        <svg {...common} fill="currentColor">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46ZM5.34 7.43a2.07 2.07 0 1 1 2.06-2.07 2.07 2.07 0 0 1-2.06 2.07Zm1.78 13.02H3.55V9h3.57ZM22.22 0H1.77A1.75 1.75 0 0 0 0 1.73v20.54A1.75 1.75 0 0 0 1.77 24h20.45A1.76 1.76 0 0 0 24 22.27V1.73A1.76 1.76 0 0 0 22.22 0Z" />
        </svg>
      );

    case "x":
      return (
        <svg {...common} fill="currentColor">
          <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.6l5.24 6.93ZM17.61 20.64h2.04L6.49 3.24H4.3Z" />
        </svg>
      );

    case "youtube":
      return (
        <svg {...common} fill="currentColor">
          <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12Z" />
        </svg>
      );

    case "whatsapp":
      return (
        <svg {...common} fill="currentColor">
          <path d="M17.507 14.307l-.009.075c-.239.998-.987 1.83-1.925 2.148-.521.177-1.198.283-3.411-.631-2.671-1.103-4.412-3.805-4.546-3.985-.134-.179-1.077-1.433-1.077-2.733 0-1.3 1.077-2.348 1.077-2.348.169-.17.375-.254.582-.254.148 0 .296.042.428.127.375.241.91 1.488 1.002 1.678.093.189.155.41.031.656-.123.246-.228.349-.402.553-.175.203-.377.452-.538.607-.179.172-.365.358-.157.714.208.357.925 1.523 1.984 2.467 1.363 1.215 2.512 1.593 2.869 1.77.357.178.566.148.775-.09.208-.238.891-1.036 1.13-1.393.238-.357.476-.297.799-.178.324.119 2.052.969 2.404 1.144.352.176.586.264.672.411.086.148.086.857-.153 1.855zM12.04 2C6.502 2 2.012 6.486 2.012 12.016c0 1.98.577 3.829 1.572 5.39L2 22l4.743-1.531c1.51.879 3.267 1.385 5.297 1.385 5.538 0 10.028-4.486 10.028-10.016C22.068 6.486 17.578 2 12.04 2z" />
        </svg>
      );
  }
}

/* ------------------------------------------------------------------ */
/* Card schemes and wallets                                            */
/* ------------------------------------------------------------------ */

export type PaymentName = "visa" | "mastercard" | "maestro" | "amex" | "diners" | "paypal";

/**
 * Each mark is drawn on a 48×30 field — the aspect the schemes use for card
 * badges — so they sit on a common baseline without individual nudging.
 */
export function PaymentMark({ name, className = "" }: { name: PaymentName; className?: string }) {
  const common = {
    viewBox: "0 0 48 30",
    className,
    role: "img" as const,
    focusable: "false" as const,
  };

  switch (name) {
    case "visa":
      return (
        <svg {...common} aria-label="Visa">
          <text
            x="24"
            y="21"
            textAnchor="middle"
            fill="#1434CB"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="15"
            fontStyle="italic"
            fontWeight="700"
            letterSpacing="0.5"
          >
            VISA
          </text>
        </svg>
      );

    case "mastercard":
      return (
        <svg {...common} aria-label="Mastercard">
          <circle cx="19" cy="15" r="9" fill="#EB001B" />
          <circle cx="29" cy="15" r="9" fill="#F79E1B" />
          <path
            d="M24 8.02a8.98 8.98 0 0 0 0 13.96 8.98 8.98 0 0 0 0-13.96Z"
            fill="#FF5F00"
          />
        </svg>
      );

    case "maestro":
      return (
        <svg {...common} aria-label="Maestro">
          <circle cx="19" cy="15" r="9" fill="#0099DF" />
          <circle cx="29" cy="15" r="9" fill="#EB001B" />
          <path
            d="M24 8.02a8.98 8.98 0 0 0 0 13.96 8.98 8.98 0 0 0 0-13.96Z"
            fill="#6C6BBD"
          />
        </svg>
      );

    case "amex":
      return (
        <svg {...common} aria-label="American Express">
          <rect x="2" y="4" width="44" height="22" rx="3" fill="#006FCF" />
          <text
            x="24"
            y="13.6"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="6"
            fontWeight="700"
            letterSpacing="0.3"
          >
            AMERICAN
          </text>
          <text
            x="24"
            y="21.2"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="6"
            fontWeight="700"
            letterSpacing="0.3"
          >
            EXPRESS
          </text>
        </svg>
      );

    case "diners":
      return (
        <svg {...common} aria-label="Diners Club">
          <circle cx="24" cy="15" r="10" fill="#0079BE" />
          <path
            d="M20.6 8.6a6.9 6.9 0 0 0 0 12.8Zm6.8 0v12.8a6.9 6.9 0 0 0 0-12.8Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "paypal":
      return (
        <svg {...common} aria-label="PayPal">
          <text
            x="24"
            y="20"
            textAnchor="middle"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="12"
            fontWeight="700"
            fontStyle="italic"
          >
            <tspan fill="#003087">Pay</tspan>
            <tspan fill="#009CDE">Pal</tspan>
          </text>
        </svg>
      );
  }
}

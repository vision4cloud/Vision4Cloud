type RitualIconId = "face" | "hair" | "body" | "bath";

/**
 * Small hand-drawn line-art icons standing in for illustrated/photo assets
 * (none supplied yet). Kept as inline SVG — no icon library, near-zero
 * weight, and easy to swap for commissioned illustrations later.
 */
export default function RitualIcon({ id, className }: { id: RitualIconId; className?: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (id) {
    case "face":
      return (
        <svg viewBox="0 0 48 48" className={className} {...common} aria-hidden>
          <path d="M24 8c8 0 13 6 13 14s-6 17-13 17-13-9-13-17S16 8 24 8Z" />
          <path d="M18 23c.8-1.4 2-2 3-2M27 21c1-.6 2.2 0 3 1" />
          <path d="M19 30c2 2.4 8 2.4 10 0" />
          <path d="M24 8V4M14 12l-3-3M34 12l3-3" />
        </svg>
      );
    case "hair":
      return (
        <svg viewBox="0 0 48 48" className={className} {...common} aria-hidden>
          <path d="M24 6c-8 0-12 6-12 13 0 5 1 8 1 13 0 4 2 7 4 7 1 0 1.5-1.5 1.5-4 0-2 .5-3 1.5-3s1.5 1 1.5 3 .8 4 2 4 2-1.5 2-4-.4-3 .6-3 1.4 1 1.4 3 1 4 2 4 4-3 4-7c0-5 1-8 1-13 0-7-4-13-12-13Z" />
          <path d="M16 19c2-1.5 4.5-1.5 8-1s6 .5 8-1" />
        </svg>
      );
    case "body":
      return (
        <svg viewBox="0 0 48 48" className={className} {...common} aria-hidden>
          <circle cx="24" cy="9" r="4" />
          <path d="M24 13v12M16 18c2 2 5 3 8 3s6-1 8-3M17 41l4-13M31 41l-4-13M19 41h10" />
        </svg>
      );
    case "bath":
      return (
        <svg viewBox="0 0 48 48" className={className} {...common} aria-hidden>
          <path d="M9 26h30v4a9 9 0 0 1-9 9H18a9 9 0 0 1-9-9v-4Z" />
          <path d="M9 26v-3a3 3 0 0 1 3-3M36 26v-9" />
          <path d="M19 9c-1.6 1.6-1.6 3.4 0 5s1.6 3.4 0 5M27 7c-1.6 1.6-1.6 3.4 0 5s1.6 3.4 0 5" />
        </svg>
      );
  }
}

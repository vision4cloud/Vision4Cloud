const PALETTES: Array<[string, string]> = [
  ["from-terracotta/55 to-gold/40", "bg-terracotta/70"],
  ["from-moss/55 to-deep-sage/35", "bg-moss/70"],
  ["from-gold/55 to-terracotta/30", "bg-gold/70"],
  ["from-deep-sage/50 to-moss/35", "bg-deep-sage/70"],
];

/**
 * Stand-in for product photography (none supplied yet — see
 * data/asset-manifest.json). Renders a deterministic "powder mound" swatch
 * per product so the grid feels intentional and varied rather than a row of
 * identical grey boxes, and is a one-line swap for <Image> once photos land.
 */
export default function ProductSwatch({ slug, index }: { slug: string; index: number }) {
  const [bgGradient, moundColor] = PALETTES[index % PALETTES.length];
  const initial = slug.charAt(0).toUpperCase();

  return (
    <div className={`texture-noise relative flex h-full w-full items-center justify-center bg-gradient-to-br ${bgGradient} bg-cream`}>
      <div
        className={`absolute h-[62%] w-[62%] rounded-[48%_52%_55%_45%/50%_45%_55%_50%] ${moundColor} mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-105`}
      />
      <span className="relative font-display text-3xl text-warm-ivory/90">{initial}</span>
      <span className="absolute bottom-3 right-3 rounded-full bg-warm-ivory/70 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.15em] text-bark/60 backdrop-blur-sm">
        Photo coming soon
      </span>
    </div>
  );
}

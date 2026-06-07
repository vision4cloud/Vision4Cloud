export default function Home() {
  return (
    <div className="texture-noise mx-auto flex max-w-6xl flex-col gap-6 px-5 py-24 sm:px-8">
      <p className="text-xs uppercase tracking-[0.3em] text-stone">Gate 2 — layout & typography preview</p>
      <h1 className="font-display text-4xl text-deep-sage sm:text-5xl">
        Earthblend
      </h1>
      <p className="max-w-xl text-base text-bark/75">
        Header, fonts (Fraunces display / Manrope body), and design tokens
        (cream, moss, gold, terracotta, deep sage, warm ivory on an 8px grid)
        are wired up. Hero content arrives in Gate 3.
      </p>
    </div>
  );
}

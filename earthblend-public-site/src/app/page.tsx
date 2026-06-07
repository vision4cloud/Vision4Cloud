import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="shop" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-stone">Gate 4 preview</p>
        <h2 className="mt-3 font-display text-3xl text-deep-sage">Product grid arrives next</h2>
      </section>
    </>
  );
}

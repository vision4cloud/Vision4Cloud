import Hero from "@/components/hero";
import ProductGrid from "@/components/product-grid";
import TrustStrip from "@/components/trust-strip";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="py-10 sm:py-14">
        <TrustStrip />
      </div>

      <section id="shop" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-stone">The full ritual range</p>
          <h2 className="mt-3 font-display text-3xl text-deep-sage sm:text-4xl">
            Fourteen blends, ground for face, hair, and body
          </h2>
          <p className="mt-4 text-base leading-relaxed text-bark/65">
            Every Earthblend pack is built around a small set of time-trusted Indian
            botanicals — no long ingredient lists, no guesswork. Pick the ritual that
            matches what your week is asking for.
          </p>
        </div>
        <ProductGrid />
      </section>

      <Testimonials />
    </>
  );
}

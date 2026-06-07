"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE, whatsappLink } from "@/lib/site";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-warm-ivory/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(44,42,36,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-baseline gap-2 group" onClick={() => setMenuOpen(false)}>
          <span className="font-display text-2xl tracking-tight text-deep-sage transition-colors group-hover:text-terracotta">
            Earthblend
          </span>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-stone sm:inline">
            {SITE.legalEntity}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-bark/80 transition-colors hover:text-terracotta"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={whatsappLink("Hi Earthblend, I'd like to know more about your natural powder rituals.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-deep-sage/30 bg-deep-sage px-5 py-2.5 text-sm text-warm-ivory shadow-sm transition-all hover:-translate-y-0.5 hover:bg-terracotta hover:border-terracotta hover:shadow-md"
          >
            Ask on WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-bark/15 md:hidden"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-px w-5 bg-bark"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px w-5 bg-bark"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-px w-5 bg-bark"
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-bark/10 bg-warm-ivory md:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-bark/85 transition-colors hover:bg-cream hover:text-terracotta"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={whatsappLink("Hi Earthblend, I'd like to know more about your natural powder rituals.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-deep-sage px-5 py-3 text-sm text-warm-ivory transition-colors hover:bg-terracotta"
              >
                Ask on WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

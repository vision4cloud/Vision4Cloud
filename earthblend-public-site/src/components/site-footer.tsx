import Link from "next/link";
import { NAV_LINKS, SITE, whatsappLink } from "@/lib/site";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/PLACEHOLDER_earthblend" },
  { label: "Facebook", href: "https://facebook.com/PLACEHOLDER_earthblend" },
  { label: "LinkedIn", href: "https://linkedin.com/company/PLACEHOLDER_prakriti-solutions" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="texture-noise border-t border-bark/8 bg-deep-sage text-warm-ivory">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl">Earthblend</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-warm-ivory/70">
            Natural powder rituals for face, hair, and body — made by Prakriti
            Solutions, ground from ingredients used in traditional Indian beauty
            practices for generations.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-warm-ivory/50">Quick links</p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-warm-ivory/80 transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-warm-ivory/50">Contact</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-warm-ivory/80">
            <li>
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-gold">{SITE.email}</a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">
                WhatsApp · {SITE.whatsappDisplay}
              </a>
            </li>
          </ul>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-warm-ivory/50">Follow along</p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-warm-ivory/80">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-warm-ivory/40">
            (Social handles are placeholders — to be replaced with real profile links before launch.)
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-warm-ivory/50">Stay in the loop</p>
          <p className="mt-4 text-sm leading-relaxed text-warm-ivory/70">
            We&rsquo;re considering an occasional newsletter for ritual guides and
            new launches — no signup form here yet, since we&rsquo;d rather build one
            properly than fake it. Follow us on social for updates in the meantime.
          </p>
        </div>
      </div>

      <div className="border-t border-warm-ivory/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-warm-ivory/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>&copy; {new Date().getFullYear()} {SITE.legalEntity}. {SITE.trademarkNote}.</p>
          <p>{SITE.fssaiPlaceholder}</p>
        </div>
      </div>
    </footer>
  );
}

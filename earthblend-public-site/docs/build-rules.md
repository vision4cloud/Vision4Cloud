# Earthblend Public Site — Build Rules

These rules govern every gate of this build. They are non-negotiable unless the
project owner explicitly changes them in writing in this file.

## Brand
- Brand: Earthblend — natural powder rituals for skin, hair, and body
- Legal entity: Prakriti Solutions
- Trademark: Class 3 (registered)
- Regulatory: FSSAI license number must appear on packaging and site footer
- Sales channels: Amazon India + Flipkart (primary). No on-site checkout.
- Contact: WhatsApp +91 9911755778, email info@earthblend.in

## Hard rules (never violate)
1. Never touch the live earthblend.in site or DNS/hosting. Local build on
   port 3030 only, until the owner explicitly approves a deploy.
2. No medical, cure, or guarantee claims anywhere on the site — including
   product copy, FAQ, alt text, and structured data. Forbidden phrases include
   (non-exhaustive): "cures acne", "guaranteed whitening",
   "hair regrowth guaranteed", "removes pigmentation", "disease cure",
   "medical treatment", "permanent results".
3. No fabricated reviews or testimonials. Testimonial sections must use a
   clearly-labelled placeholder structure ("Verified Amazon Buyer — sample
   placeholder, to be replaced with real review text") until real, sourced
   quotes are supplied.
4. No heavy WebGL/Three.js or animation-heavy libraries beyond Framer Motion.
   Target Lighthouse mobile performance score of 85+ — most Indian customers
   browse on mid-range phones over 3G/4G.
5. No generic AI-template aesthetic: no Inter/Roboto, no purple gradients on
   white backgrounds, no cookie-cutter D2C grid-and-badges layout.

## Approved safe-language vocabulary
Use these (or close variants) in all customer-facing copy instead of medical
or efficacy claims:
"traditional care routine", "DIY face pack", "scalp care routine",
"natural powder", "for external use", "patch test recommended",
"weekly care ritual", "used in traditional Indian beauty practices",
"ingredient-led self-care".

## Aesthetic direction
"Organic-luxury / refined-natural" — calm, premium, ingredient-led.
Reference mood: Aesop meets traditional Indian botanical apothecary.
- Typography: one display serif (organic, not generic) + one refined sans
- Palette: cream / moss / gold base, extended with terracotta, deep sage,
  warm ivory. No purple, neon, or cool-blue greys.
- Motion: Framer Motion only — scroll-triggered fades, staggered reveals,
  soft hover lifts. Restraint over flash.
- Backgrounds: soft noise textures, subtle gradients, generous whitespace —
  never flat solid colour blocks.

## Asset status
Real product photography has not yet been supplied (see
`data/asset-manifest.json`). Build all product surfaces so they degrade
gracefully to a styled placeholder (organic texture + product name) and can
be swapped for real photos by dropping files into `public/products/` with the
filenames already referenced in `data/products.json`.

## Commit discipline
- One commit per approved gate, with a clear message naming the gate.
- Never bundle multiple gates into a single commit.
- Never commit secrets or marketplace API credentials.

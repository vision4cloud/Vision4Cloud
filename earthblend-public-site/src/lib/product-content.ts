export type UsageStep = { title: string; detail: string };

export type ProductContent = {
  tagline: string;
  description: string;
  usageSteps: [UsageStep, UsageStep, UsageStep];
  idealFor: string;
};

const PATCH_TEST =
  "As with any natural powder, do a patch test on your inner arm 24 hours before first use, and discontinue if you notice any discomfort. For external use only.";

const FSSAI_NOTE =
  "Made by Prakriti Solutions in FSSAI-compliant facilities, with the license number printed on every pack — because a natural powder ritual should start with knowing exactly what's going into it.";

export const PRODUCT_CONTENT: Record<string, ProductContent> = {
  "multani-mitti-face-pack": {
    tagline: "The classic clay reset for an oily, overworked day",
    description: `There's a reason multani mitti — fuller's earth — has sat on Indian bathroom shelves for generations: it simply does its quiet job, week after week. Our blend pairs pure multani mitti with rose petal powder and sandalwood, so the clay's mattifying pull is softened with something gentler on the skin's surface. Mixed into a paste with rose water or plain water, it spreads into a cool, grey-green mask that tightens slightly as it dries — a signal to rinse, not to wait it out. People reach for this one after a long, humid day, before an event, or simply on the evening they've set aside for a slower routine. It suits normal-to-oily skin types best and is gentle enough for weekly use as part of a DIY face pack ritual, not a daily one. Three steps: mix a spoon of powder with rose water into a smooth, spreadable paste; apply an even layer to clean, dry skin avoiding the eye area; rinse with lukewarm water after 10–12 minutes, while the mask still feels slightly damp, and follow with your usual moisturiser. The pack contains 100g — enough for several weeks of weekly use depending on how generously you apply it. ${PATCH_TEST} ${FSSAI_NOTE}`,
    usageSteps: [
      { title: "Mix", detail: "Combine 1–2 spoons of powder with rose water (or plain water) into a smooth, spreadable paste — no lumps." },
      { title: "Apply & rest", detail: "Spread an even layer over clean, dry skin, avoiding the eyes and lips. Let it sit for 10–12 minutes." },
      { title: "Rinse & moisturise", detail: "Rinse with lukewarm water while the mask is still slightly damp, pat dry, and follow with your regular moisturiser." },
    ],
    idealFor: "Normal-to-oily skin, looking for a calm weekly reset ritual",
  },
  "neem-tulsi-face-pack": {
    tagline: "A garden-rooted blend for a fresher-feeling complexion",
    description: `Neem and tulsi have shared shelf space in Indian homes for as long as anyone can remember — one for the way it's traditionally used in skin care, the other for the calm it's said to bring to a room as much as a routine. We've ground both leaves fine and folded them into a base of multani mitti, so the powder behaves like a familiar face pack rather than something clinical. When mixed with water or rose water, it turns into an earthy green paste with a herbal scent that lingers pleasantly through the rinse. This is the pack to reach for when your skin feels congested after travel, weather changes, or simply a stretch of late nights — used in traditional Indian beauty practices as a once- or twice-weekly reset rather than a daily habit. Three steps: blend a spoon of powder with water into a smooth paste; apply a thin, even layer over cleansed skin and let it sit until it feels comfortably dry, around 10 minutes; rinse off with lukewarm water using gentle circular motions, then moisturise as usual. Each pack holds 100g, enough to settle into a steady weekly ritual for roughly two months. ${PATCH_TEST} ${FSSAI_NOTE}`,
    usageSteps: [
      { title: "Blend", detail: "Mix a spoon of powder with water or rose water until you have a smooth, lump-free green paste." },
      { title: "Apply & wait", detail: "Spread a thin layer over cleansed skin and leave on for about 10 minutes, until comfortably dry." },
      { title: "Rinse gently", detail: "Massage off with lukewarm water in soft circular motions, then follow with your usual moisturiser." },
    ],
    idealFor: "Anyone wanting a herbal, grounding addition to their weekly routine",
  },
  "turmeric-sandalwood-face-pack": {
    tagline: "An ubtan-style blend for soft, even-toned skin days",
    description: `Long before "glow" became a marketing word, Indian households were grinding turmeric and sandalwood into ubtans for weddings, festivals, and ordinary Sunday mornings alike. Our version keeps that spirit — turmeric and sandalwood powders folded into gram flour (besan), the combination that gives an ubtan its characteristic soft, smoothing texture once mixed with milk, curd, or water. The paste turns a warm golden-yellow and has a mild, earthy fragrance that fades as it dries on the skin. Note: turmeric can leave a faint, temporary tint on very fair or sensitive skin — this fades with a normal rinse and isn't permanent. People use this one before a function, after a tiring week, or simply as the centrepiece of a slow Sunday self-care ritual, the way it's traditionally been used in Indian homes. Three steps: mix a spoon of powder with milk, curd, or water into a thick paste; massage gently onto damp skin in upward circular motions for a minute, then leave on for 8–10 minutes; rinse thoroughly with lukewarm water and pat dry before moisturising. The 100g pack supports a steady weekly ritual for about two months. ${PATCH_TEST} ${FSSAI_NOTE}`,
    usageSteps: [
      { title: "Mix to a paste", detail: "Combine a spoon of powder with milk, curd, or water until you get a thick, even paste." },
      { title: "Massage & rest", detail: "Massage gently onto damp skin for a minute in upward circles, then leave on for 8–10 minutes." },
      { title: "Rinse thoroughly", detail: "Wash off completely with lukewarm water, pat the skin dry, and moisturise to finish the ritual." },
    ],
    idealFor: "Those who enjoy a traditional ubtan-style ritual before special occasions or slow weekends",
  },
  "rose-sandalwood-face-pack": {
    tagline: "A gentle, fragrant pack for an unwinding evening ritual",
    description: `Some packs are about results; this one is just as much about the ten quiet minutes it buys you. Rose petal powder and sandalwood, softened further with a touch of milk powder, come together into a pale pink-beige blend that smells faintly floral and woody — the kind of scent that makes you want to sit still while it works. Mixed into a paste with rose water or milk, it spreads smoothly and dries to a gentle, papery finish rather than a tight, pulling one, which is why people with drier or more reactive skin often prefer it to clay-heavy packs. It's traditionally been used as a soothing, end-of-day ritual — something to do with the lights low and a few minutes carved out, rather than squeezed between errands. Three steps: stir a spoon of powder into rose water or milk until smooth; smooth an even layer over clean skin and let it rest for 10 minutes, breathing through the scent rather than rushing it; rinse with lukewarm water, pat (don't rub) dry, and follow with a calming moisturiser. The 100g pack lasts roughly two months on a once- or twice-weekly rhythm. ${PATCH_TEST} ${FSSAI_NOTE}`,
    usageSteps: [
      { title: "Stir into a paste", detail: "Mix a spoon of powder with rose water or milk until it's smooth and easy to spread." },
      { title: "Apply & breathe", detail: "Smooth an even layer over clean skin and let it rest for 10 minutes — a small, deliberate pause." },
      { title: "Rinse & calm", detail: "Rinse with lukewarm water, pat the skin dry rather than rubbing, and finish with a calming moisturiser." },
    ],
    idealFor: "Drier or sensitive skin, and anyone who wants their ritual to double as a wind-down",
  },
  "activated-charcoal-face-pack": {
    tagline: "A weekly deep-cleanse-feeling ritual for congested-feeling skin",
    description: `For the days your skin feels like it's been through a city commute — because, often, it has — this pack leans on activated charcoal and bentonite clay, two ingredients widely used for their clarifying feel, balanced with multani mitti so the formula doesn't tip into harshness. The powder is a deep charcoal-grey and turns into a smooth, dark paste with water, drying to a firm (but not punishing) layer that signals it's time to rinse. This is designed as an occasional ritual — once a week, or after particularly dusty or sweaty days — rather than a daily habit, which is how it sits most comfortably in a balanced routine. People with normal-to-oily skin tend to enjoy it most as a "reset" before the weekend or after travel. Three steps: mix a spoon of powder with water into a smooth, dark paste; apply an even layer over cleansed, dry skin and let it sit for 10 minutes, avoiding the eye area; rinse off thoroughly with lukewarm water, working in gentle circles, then moisturise generously since clay-and-charcoal blends can feel drying if skipped. The 100g pack supports roughly two months of weekly use. ${PATCH_TEST} ${FSSAI_NOTE}`,
    usageSteps: [
      { title: "Mix to a dark paste", detail: "Combine a spoon of powder with water until smooth, with no dry pockets of charcoal." },
      { title: "Apply evenly", detail: "Spread over cleansed, dry skin avoiding the eye area, and leave on for around 10 minutes." },
      { title: "Rinse & moisturise well", detail: "Rinse thoroughly with lukewarm water in gentle circles, then follow with a generous layer of moisturiser." },
    ],
    idealFor: "Normal-to-oily skin wanting an occasional, deeper-feeling weekly reset",
  },
  "kashmiri-saffron-glow-pack": {
    tagline: "An indulgent, festival-ready ritual blend",
    description: `Some rituals are for every week; this one is for the morning of the wedding, the evening of the festival, the day you've decided to make a little more of. Inspired by traditional Kashmiri beauty rituals, this blend brings together real Kashmiri saffron (kesar), sandalwood, milk powder, and a touch of honey powder — ingredients that have shown up in trousseau boxes and grandmothers' recipes for generations. Mixed with milk or rose water, it turns into a fragrant, golden-cream paste that feels closer to a spa treatment than a quick fix, and is traditionally associated with preparing the skin for special occasions rather than daily upkeep. Because saffron is a premium, slow-grown ingredient, this pack comes in a smaller 50g size — meant to be used sparingly, the way the original rituals intended. Three steps: mix a small spoon of powder with warm milk or rose water into a smooth, fragrant paste; apply a generous layer to clean skin the evening or morning before your occasion, and let it rest for 12–15 minutes; rinse gently with lukewarm water and follow with a nourishing moisturiser to seal in the ritual. ${PATCH_TEST} ${FSSAI_NOTE}`,
    usageSteps: [
      { title: "Mix with warmth", detail: "Stir a small spoon of powder into warm milk or rose water until you have a smooth, fragrant paste." },
      { title: "Apply generously", detail: "Spread a generous layer over clean skin ahead of your occasion and let it rest for 12–15 minutes." },
      { title: "Rinse & seal", detail: "Rinse gently with lukewarm water and follow with a nourishing moisturiser to round off the ritual." },
    ],
    idealFor: "Special-occasion rituals — festivals, weddings, and days you want to slow down for",
  },
  "amla-bhringraj-hair-pack": {
    tagline: "A scalp-care staple drawn from traditional hair rituals",
    description: `If there's one combination that shows up across generations of Indian hair-care routines, it's amla and bhringraj — ingredients that traditional practices have long paired for scalp care, here joined by hibiscus leaf for a rounder, more complete blend. Mixed into a paste with water, yogurt, or your regular hair oil, the powder turns a deep olive-green and carries an earthy, herbal scent. This is meant to be a weekly scalp-care ritual: something you set aside twenty unhurried minutes for, the way many of us watched it being done at home growing up. It suits most hair types, particularly those looking to bring a steadier, more traditional rhythm into their hair-care week rather than relying on quick rinse-and-go products. Three steps: mix two to three spoons of powder with water or yogurt into a smooth, spreadable paste; part the hair into sections and apply from roots to ends, massaging gently into the scalp for a couple of minutes; leave on for 30–40 minutes under a shower cap or old towel, then rinse thoroughly and shampoo as usual. The 100g pack gives you several applications, depending on hair length and thickness. ${PATCH_TEST} ${FSSAI_NOTE}`,
    usageSteps: [
      { title: "Mix to a paste", detail: "Combine 2–3 spoons of powder with water, yogurt, or oil into a smooth, spreadable paste." },
      { title: "Apply & massage", detail: "Section the hair, apply root to ends, and massage gently into the scalp for a couple of minutes." },
      { title: "Rest & rinse", detail: "Leave on for 30–40 minutes under a shower cap, then rinse thoroughly and shampoo as usual." },
    ],
    idealFor: "A weekly scalp care routine, for most hair types looking for a traditional rhythm",
  },
  "hibiscus-fenugreek-hair-pack": {
    tagline: "A nourishing weekly ritual rooted in home hair-care traditions",
    description: `Hibiscus and fenugreek (methi) are two of the most familiar names in traditional Indian hair care — the kind of ingredients many of us remember being soaked, ground, or boiled at home before a wash day. We've combined hibiscus flower-and-leaf powder with fenugreek and amla so the blend carries that same familiar character without the kitchen-counter prep. Mixed with water or yogurt, it forms a thick, slightly mucilaginous green-brown paste (that texture is fenugreek doing what it naturally does) with a warm, herbal scent. It's designed to sit at the centre of a weekly hair ritual — the kind of pause that, for many people, is as much about the twenty minutes of stillness as the routine itself. Suits most hair types looking for a gentler, more traditional addition to their care rhythm. Three steps: mix two to three spoons of powder with water or yogurt and let it sit for 5 minutes to thicken; apply section by section from scalp to ends, massaging the scalp gently; leave on for 30 minutes wrapped in a towel or shower cap, then rinse thoroughly and follow with shampoo. Each 100g pack supports several weeks of ritual use. ${PATCH_TEST} ${FSSAI_NOTE}`,
    usageSteps: [
      { title: "Mix & let it sit", detail: "Combine 2–3 spoons of powder with water or yogurt and let it thicken for about 5 minutes." },
      { title: "Apply section by section", detail: "Work the paste from scalp to ends, massaging the scalp gently as you go." },
      { title: "Wrap, rest, rinse", detail: "Leave on for 30 minutes under a towel or shower cap, then rinse thoroughly and shampoo." },
    ],
    idealFor: "A nourishing weekly scalp ritual for most hair types",
  },
  "onion-curry-leaf-hair-pack": {
    tagline: "A traditional scalp-care blend for a steadier hair routine",
    description: `Onion and curry leaf have become familiar names in modern Indian hair care, but the idea behind them is old: certain kitchen ingredients, ground and applied with intention, have long been part of traditional scalp-care routines. We've combined onion seed powder with curry leaf, fenugreek, and amla into a single blend, so you get the traditional pairing without separately prepping each one. Mixed with water or yogurt, the powder turns into an earthy, faintly pungent paste — the scent fades significantly after rinsing and shampooing, and many people find it a small price for the ritual itself. This is designed as a grounding, weekly scalp-care habit: a fixed twenty minutes that anchors the rest of your hair routine. Works well for most hair types looking to bring more consistency to their care rhythm. Three steps: mix two to three spoons of powder with water or yogurt into a smooth paste; apply directly to the scalp first, working outward to the lengths, and massage in slow circles; leave on for 25–30 minutes, then rinse thoroughly and shampoo, using a fragranced conditioner afterwards if you'd like to soften the scent further. The 100g pack supports a steady weekly rhythm for roughly a month and a half. ${PATCH_TEST} ${FSSAI_NOTE}`,
    usageSteps: [
      { title: "Mix to a paste", detail: "Combine 2–3 spoons of powder with water or yogurt into a smooth, even paste." },
      { title: "Scalp first, then lengths", detail: "Apply to the scalp first, massaging in slow circles, then work outward to the lengths." },
      { title: "Rest, rinse, shampoo", detail: "Leave on for 25–30 minutes, rinse thoroughly, and shampoo — finish with conditioner if you like." },
    ],
    idealFor: "Anyone wanting to build a steady, traditional weekly scalp-care habit",
  },
  "aloe-vera-neem-hair-pack": {
    tagline: "A soothing, lightweight ritual for scalp comfort",
    description: `Where some hair packs lean rich and heavy, this one is built to feel lighter — aloe vera powder and neem leaf, joined by hibiscus, for a blend that's traditionally associated with scalp comfort rather than intensive treatment. Mixed with water, it turns into a smooth, pale-green paste with a mild, fresh, herbal scent — noticeably gentler than charcoal- or onion-based blends, which is why people with more sensitive scalps or finer hair often reach for this one first. It's a good entry point into a weekly hair-care ritual if you're newer to natural powder routines, or simply want something that feels calming rather than "active." Suits most hair types, especially those looking for a gentle, traditional addition to a regular wash-day rhythm. Three steps: mix two spoons of powder with water into a smooth, lightweight paste (less thick than a clay-based pack); apply evenly across the scalp and through the lengths, massaging gently for a minute or two; leave on for 20–25 minutes — less time than richer packs need — then rinse thoroughly and shampoo as usual. The 100g pack is sized for a relaxed, ongoing weekly ritual. ${PATCH_TEST} ${FSSAI_NOTE}`,
    usageSteps: [
      { title: "Mix lightly", detail: "Combine 2 spoons of powder with water into a smooth, lightweight, easy-to-spread paste." },
      { title: "Apply & massage", detail: "Spread evenly across scalp and lengths, massaging gently into the scalp for a minute or two." },
      { title: "Shorter rest, rinse", detail: "Leave on for 20–25 minutes, then rinse thoroughly and shampoo as you normally would." },
    ],
    idealFor: "Sensitive scalps, finer hair, or anyone newer to natural powder hair rituals",
  },
  "ubtan-body-polish-powder": {
    tagline: "The age-old wedding-morning ritual, for any ordinary day",
    description: `Long before "body scrub" entered the vocabulary, Indian households had the ubtan — a blend of gram flour, turmeric, sandalwood, and rose, traditionally applied before weddings and festivals as a shared, almost ceremonial ritual. We've kept that exact spirit in powder form: gram flour (besan) as the base, with turmeric, sandalwood, and rose petal powder folded through. Mixed with milk, yogurt, or water, it becomes a textured golden paste that gently buffs the skin as you rinse it away — less abrasive than sugar- or coffee-based scrubs, and closer to how it's traditionally been used across Indian homes for generations. This is a ritual built for slowing down: a bath-time event rather than a thirty-second step. Suitable for most skin types as an occasional full-body treat. Three steps: mix three to four spoons of powder with milk, yogurt, or water into a thick, spreadable paste; apply all over damp skin and massage in gentle circular motions for a few minutes, paying attention to drier areas like elbows and knees; rinse off thoroughly in the shower or bath, then moisturise while the skin is still slightly damp. The 150g pack lasts for several full-body sessions. ${PATCH_TEST} ${FSSAI_NOTE}`,
    usageSteps: [
      { title: "Mix to a thick paste", detail: "Combine 3–4 spoons of powder with milk, yogurt, or water into a thick, spreadable paste." },
      { title: "Massage all over", detail: "Apply to damp skin and massage in gentle circles for a few minutes, especially on drier areas." },
      { title: "Rinse & moisturise", detail: "Rinse off thoroughly in the shower or bath, then moisturise while the skin is still slightly damp." },
    ],
    idealFor: "An occasional full-body ritual for most skin types — best enjoyed unhurried",
  },
  "coffee-cocoa-body-scrub-powder": {
    tagline: "An invigorating powder scrub for slow Sunday showers",
    description: `For the mornings that need a little more wake-up than usual, this blend leans on coffee and cocoa powders, rounded out with brown sugar and almond powder for texture and a faint, warm fragrance. As a dry powder, it stores beautifully — no oil separation, no clumping in the jar — and you simply mix in a little water, milk, or your regular body wash right before use to control the texture exactly how you like it: looser for a gentler buff, thicker for more polish. The scent is more "morning coffee" than "dessert," and tends to fade to a faint warmth after rinsing. People use this as a once- or twice-weekly addition to shower routines, particularly on days that call for something a little more awake-making than a quick rinse. Suitable for most skin types as a body (not face) treatment. Three steps: mix two to three spoons of powder with a little water, milk, or body wash into a textured paste — adjust thickness to taste; massage onto damp skin in firm, circular motions, focusing on rougher areas like elbows, knees, and heels; rinse thoroughly with warm water and follow with a body moisturiser to lock in softness. The 150g pack supports many sessions. ${PATCH_TEST} ${FSSAI_NOTE}`,
    usageSteps: [
      { title: "Mix to your texture", detail: "Combine 2–3 spoons of powder with water, milk, or body wash, adjusting thickness to your liking." },
      { title: "Massage in circles", detail: "Apply to damp skin and massage firmly in circles, focusing on elbows, knees, and heels." },
      { title: "Rinse & moisturise", detail: "Rinse thoroughly with warm water and follow with a body moisturiser to finish the ritual." },
    ],
    idealFor: "A weekly body-care pick-me-up for most skin types — not for use on the face",
  },
  "rice-honey-brightening-powder": {
    tagline: "A gentle, traditional powder for a soft, refreshed feel",
    description: `Rice powder has quietly anchored beauty rituals across Asia for centuries — ground fine, mixed simply, and used as part of a steady, patient routine rather than a dramatic one. Our blend brings rice powder together with honey powder, milk powder, and a touch of turmeric, echoing both East Asian and Indian traditions in a single, gentle formula. Mixed with water, milk, or yogurt, it forms a smooth, pale-gold paste with a mild, slightly sweet, earthy scent. This is a softness-and-comfort ritual rather than an intensive one — the kind of pack you reach for on an ordinary Tuesday evening as much as before something special, valued for the quiet, unhurried feeling it brings to the skin rather than for any dramatic before-and-after. Works well for most skin types as a gentle, regular addition to a weekly routine. Three steps: mix a spoon of powder with water, milk, or yogurt into a smooth, even paste; apply a thin layer over clean skin and let it rest for 10 minutes, enjoying the mild fragrance; rinse with lukewarm water using gentle circular motions, pat dry, and moisturise to seal the ritual. The 150g pack is generously sized for a long stretch of weekly use. ${PATCH_TEST} ${FSSAI_NOTE}`,
    usageSteps: [
      { title: "Mix to a smooth paste", detail: "Combine a spoon of powder with water, milk, or yogurt into a smooth, even paste." },
      { title: "Apply thinly & rest", detail: "Spread a thin layer over clean skin and let it rest for about 10 minutes." },
      { title: "Rinse & seal", detail: "Rinse with lukewarm water in gentle circles, pat dry, and follow with your usual moisturiser." },
    ],
    idealFor: "A gentle, regular addition to most weekly skin-care routines",
  },
  "lavender-oat-bath-soak-powder": {
    tagline: "A calming bath ritual to help you unwind, end to end",
    description: `Not every product in a routine needs to do something visible — some are simply there to mark the end of a long day. This bath soak blend brings together colloidal oat powder, lavender flower powder, milk powder, and rose petal, inspired by traditional botanical bathing practices found across cultures, from Indian milk-and-rose baths to lavender-scented European soaks. Stirred into warm bath water, it turns the water a soft, milky ivory and releases a gentle floral-herbal fragrance that lingers in the bathroom long after you've stepped out. There's no scrubbing, no rinsing routine to follow — just twenty unhurried minutes that belong entirely to you. This is best thought of as a weekly (or whenever-you-need-it) ritual for winding down, rather than a treatment with a checklist. Suitable for most skin types as an occasional soak. Three steps: dissolve three to four spoons of powder into warm (not hot) bath water and stir until the water turns soft and milky; soak for 15–20 minutes, breathing slowly and letting your shoulders drop; step out, pat your skin dry gently, and follow with a body moisturiser while your skin is still slightly damp. The 200g pack supports many calming soaks. ${PATCH_TEST} ${FSSAI_NOTE}`,
    usageSteps: [
      { title: "Dissolve in warm water", detail: "Stir 3–4 spoons of powder into warm bath water until it turns soft and milky." },
      { title: "Soak slowly", detail: "Settle in for 15–20 minutes, breathing slowly and letting the warmth do the work." },
      { title: "Pat dry & moisturise", detail: "Step out, pat your skin dry gently, and moisturise while it's still slightly damp." },
    ],
    idealFor: "Anyone who wants a weekly wind-down ritual — a pause as much as a product",
  },
};

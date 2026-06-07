export type RitualStep = { title: string; detail: string };

export type Ritual = {
  id: string;
  name: string;
  frequency: string;
  intro: string;
  steps: [RitualStep, RitualStep, RitualStep];
  suggestedPacks: string[];
};

export const RITUALS: Ritual[] = [
  {
    id: "face",
    name: "Face Ritual",
    frequency: "Once or twice a week, 10–15 minutes",
    intro:
      "A face pack ritual is less about a single magic ingredient and more about the pause it forces — the few minutes you sit still while a clay or herb blend does its slow, ordinary work. Indian households have built this rhythm around multani mitti, turmeric, sandalwood, and rose for generations; the routine below is simply that habit, written down.",
    steps: [
      { title: "Cleanse first", detail: "Start with a clean, makeup-free face — damp skin helps the powder blend spread evenly and absorb into a smooth paste." },
      { title: "Mix, apply, rest", detail: "Stir your chosen powder with water, rose water, milk, or yogurt into a smooth paste. Apply an even layer avoiding the eyes, and let it sit for 10–15 minutes — resist the urge to let it dry completely and crack." },
      { title: "Rinse & moisturise", detail: "Rinse with lukewarm water using gentle circular motions while the mask is still slightly damp, pat (don't rub) dry, and follow with your usual moisturiser to lock in comfort." },
    ],
    suggestedPacks: ["Multani Mitti Face Pack", "Turmeric & Sandalwood Face Pack", "Rose & Sandalwood Face Pack"],
  },
  {
    id: "hair",
    name: "Hair & Scalp Ritual",
    frequency: "Weekly, 30–40 minutes including rest time",
    intro:
      "Long before serums and leave-ins, Sunday afternoons in many Indian homes were built around a hair-pack ritual — amla, hibiscus, fenugreek, ground and applied with patience, then left to sit while the rest of the day went on around it. This routine simply brings that same unhurried rhythm back into a weekly habit.",
    steps: [
      { title: "Mix to a spreadable paste", detail: "Combine 2–3 spoons of powder with water, yogurt, or your regular hair oil and let thicker blends (like fenugreek-based ones) sit for a few minutes to loosen up." },
      { title: "Section, apply, massage", detail: "Part your hair into sections and apply from scalp to ends, massaging gently into the scalp in slow circles for a minute or two — this is the part worth not rushing." },
      { title: "Wrap, rest, rinse, shampoo", detail: "Cover with a shower cap or old towel and leave on for 25–40 minutes (check individual pack guidance), then rinse thoroughly and follow with your regular shampoo and conditioner." },
    ],
    suggestedPacks: ["Amla & Bhringraj Hair Pack", "Hibiscus & Fenugreek Hair Pack", "Aloe Vera & Neem Hair Pack"],
  },
  {
    id: "body",
    name: "Body & Polish Ritual",
    frequency: "Weekly or occasional, a slower shower-time ritual",
    intro:
      "The ubtan tradition — gram flour, turmeric, sandalwood, and rose, mixed into a paste and massaged over the whole body — has marked weddings and festivals across India for generations, treated as a shared, almost ceremonial event rather than a quick scrub. This ritual brings that same idea into an ordinary week, at whatever pace you'd like to take it.",
    steps: [
      { title: "Mix to a thick paste", detail: "Combine 3–4 spoons of powder with milk, yogurt, or water into a thick, spreadable paste — thicker than a face pack, since it needs to coat and buff rather than just sit." },
      { title: "Massage all over, unhurried", detail: "Apply to damp skin in the shower or before a bath, and massage in slow circular motions — give extra attention to drier areas like elbows, knees, and heels." },
      { title: "Rinse & moisturise while damp", detail: "Rinse off thoroughly, then moisturise immediately while your skin is still slightly damp — this is when richer creams and oils tend to feel most comfortable." },
    ],
    suggestedPacks: ["Ubtan Body Polish Powder", "Coffee & Cocoa Body Scrub Powder", "Rice & Honey Brightening Powder"],
  },
  {
    id: "bath",
    name: "Bath & Wind-down Ritual",
    frequency: "Whenever the week asks for it, 15–20 minutes",
    intro:
      "Not every ritual needs a checklist. This one is closer to a permission slip — to stop, sit in warm water scented with lavender and rose, and let twenty minutes belong entirely to you. Botanical bathing has a long history across cultures, from milk-and-rose soaks in Indian homes to herb-scented baths elsewhere; this is simply that idea, made easy on a weeknight.",
    steps: [
      { title: "Run a warm (not hot) bath", detail: "Fill the tub or a large basin with comfortably warm water — hot water can be drying and tends to work against the calming intent of this ritual." },
      { title: "Stir in the soak & settle in", detail: "Dissolve 3–4 spoons of bath soak powder into the water and stir until it turns soft and milky. Step in, and resist reaching for your phone." },
      { title: "Soak, breathe, then moisturise", detail: "Stay in for 15–20 minutes, breathing slowly. Step out, pat your skin dry gently, and apply a body moisturiser while it's still slightly damp to finish." },
    ],
    suggestedPacks: ["Lavender & Oat Bath Soak Powder"],
  },
];

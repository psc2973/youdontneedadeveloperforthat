export type Episode = {
  id: string;
  title: string;
  topic: string;
};

export type Format = {
  kind: string;
  title: string;
  description: string;
  aside?: string;
};

export type Rule = {
  title: string;
  text: string;
};

export const episodes: Episode[] = [
  { id: "EP-01", title: "Launch a campaign landing page the same day the idea shows up", topic: "Campaigns" },
  { id: "EP-02", title: "Test two headlines on the homepage and crown a winner", topic: "A/B testing" },
  { id: "EP-03", title: "Greet returning visitors with something new", topic: "Personalization" },
  { id: "EP-04", title: "Run a promo in one region and leave the others alone", topic: "Localization" },
  { id: "EP-05", title: "Fix a campaign page at 4:55pm Friday and still leave on time", topic: "Publishing" },
  { id: "EP-06", title: "Reuse your best section across three brand sites", topic: "Components" },
];

export const formats: Format[] = [
  {
    kind: "Timed challenge",
    title: "Back before lunch",
    description:
      "A real request lands at 11:48. The clock runs. It ships, and the episode ends with the marketer eating lunch outside, phone face down.",
  },
  {
    kind: "Dramatic short",
    title: "The developer who wasn't needed",
    description:
      "Moody lighting, slow zoom, a developer staring at an empty ticket queue in disbelief. Played completely straight, then the reveal: the marketer did it already.",
    aside: "Devs get their afternoon back too.",
  },
  {
    kind: "Weekly win",
    title: "Marketer vs. Monday",
    description: "One everyday headache per episode, from the stale banner to the urgent promo, solved with a grin.",
  },
  {
    kind: "Copy-paste tactic",
    title: "Steal this playbook",
    description: "A personalization rule, a test idea or a campaign structure you can lift and use the same afternoon.",
  },
];

export const rules: Rule[] = [
  { title: "Teach first, sell second", text: "Every video makes the viewer better at their job, whether or not they ever buy." },
  { title: "Celebrate the marketer", text: "They're the hero of every episode. Developers are teammates, never the villain." },
  { title: "Built to be shared", text: "Fun enough to post, useful enough to forward to a CMO as the case for working differently." },
  { title: "Under 90 seconds", text: "If it takes longer to explain than to do, it's the wrong episode." },
];

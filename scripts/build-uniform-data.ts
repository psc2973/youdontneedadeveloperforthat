// One-off generator: writes Uniform component definitions and the home composition
// (seeded with the current page copy) into ./uniform-data for `uniform canvas ... push`.
// Run: node --experimental-strip-types scripts/build-uniform-data.ts
import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { episodes, formats, rules } from "../lib/content.ts";

const OUT = join(import.meta.dirname, "..", "uniform-data");

// Deterministic UUIDs so re-running the generator updates rather than duplicates.
const uuid = (seed: string) => {
  const h = createHash("sha1").update(`marketing-relations:${seed}`).digest("hex");
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-5${h.slice(13, 16)}-a${h.slice(17, 20)}-${h.slice(20, 32)}`;
};

type ParamDef = { id: string; name: string; type?: "text" | "link"; multiline?: boolean };
const param = ({ id, name, type = "text", multiline }: ParamDef) => ({
  id,
  name,
  type,
  typeConfig: type === "text" ? { multiline: !!multiline } : {},
});

const definitions = [
  {
    id: "page",
    name: "Page",
    icon: "screen",
    canBeComposition: true,
    parameters: [],
    slots: [
      {
        id: "content",
        name: "Content",
        allowedComponents: ["siteHeader", "hero", "backlog", "formats", "manifesto", "callToAction", "siteFooter"],
        inheritAllowedComponents: false,
      },
    ],
  },
  {
    id: "siteHeader",
    name: "Site Header",
    icon: "screen",
    titleParameter: "brand",
    parameters: [
      param({ id: "brand", name: "Brand" }),
      param({ id: "brandSuffix", name: "Brand suffix" }),
      param({ id: "eyebrow", name: "Eyebrow" }),
    ],
    slots: [],
  },
  {
    id: "hero",
    name: "Hero",
    icon: "screen",
    titleParameter: "headline",
    parameters: [
      param({ id: "eyebrow", name: "Eyebrow" }),
      param({ id: "headline", name: "Headline" }),
      param({ id: "headlineHighlight", name: "Headline highlight" }),
      param({ id: "tagline", name: "Tagline (handwritten)" }),
      param({ id: "lede", name: "Lede", multiline: true }),
      param({ id: "ledeStrong", name: "Lede emphasis" }),
      param({ id: "ledeAfter", name: "Lede ending", multiline: true }),
      param({ id: "badgeRole", name: "Badge role" }),
      param({ id: "badgeAdded", name: "Badge added role" }),
      param({ id: "badgePill", name: "Badge pill" }),
      param({ id: "calTime", name: "Calendar time" }),
      param({ id: "calTitle", name: "Calendar title" }),
      param({ id: "calNote", name: "Calendar note" }),
      param({ id: "calStatus", name: "Calendar status" }),
    ],
    slots: [],
  },
  {
    id: "backlog",
    name: "Backlog",
    icon: "screen",
    titleParameter: "title",
    parameters: [
      param({ id: "eyebrow", name: "Eyebrow" }),
      param({ id: "title", name: "Title" }),
      param({ id: "intro", name: "Intro", multiline: true }),
    ],
    slots: [{ id: "items", name: "Episodes", allowedComponents: ["episodeCard"], inheritAllowedComponents: false }],
  },
  {
    id: "episodeCard",
    name: "Episode Card",
    icon: "screen",
    titleParameter: "title",
    parameters: [
      param({ id: "episodeId", name: "Episode ID" }),
      param({ id: "status", name: "Status" }),
      param({ id: "title", name: "Title" }),
      param({ id: "topic", name: "Topic" }),
    ],
    slots: [],
  },
  {
    id: "formats",
    name: "Formats",
    icon: "screen",
    titleParameter: "title",
    parameters: [
      param({ id: "eyebrow", name: "Eyebrow" }),
      param({ id: "title", name: "Title" }),
      param({ id: "intro", name: "Intro", multiline: true }),
    ],
    slots: [{ id: "items", name: "Formats", allowedComponents: ["formatCard"], inheritAllowedComponents: false }],
  },
  {
    id: "formatCard",
    name: "Format Card",
    icon: "screen",
    titleParameter: "title",
    parameters: [
      param({ id: "kind", name: "Kind" }),
      param({ id: "title", name: "Title" }),
      param({ id: "description", name: "Description", multiline: true }),
      param({ id: "aside", name: "Handwritten aside" }),
    ],
    slots: [],
  },
  {
    id: "manifesto",
    name: "Manifesto",
    icon: "screen",
    titleParameter: "eyebrow",
    parameters: [
      param({ id: "eyebrow", name: "Eyebrow" }),
      param({ id: "quoteBefore", name: "Quote (before highlight)", multiline: true }),
      param({ id: "quoteHighlight", name: "Quote highlight" }),
      param({ id: "quoteAfter", name: "Quote (after highlight)", multiline: true }),
    ],
    slots: [{ id: "rules", name: "Rules", allowedComponents: ["manifestoRule"], inheritAllowedComponents: false }],
  },
  {
    id: "manifestoRule",
    name: "Manifesto Rule",
    icon: "screen",
    titleParameter: "title",
    parameters: [param({ id: "title", name: "Title" }), param({ id: "text", name: "Text", multiline: true })],
    slots: [],
  },
  {
    id: "callToAction",
    name: "Call To Action",
    icon: "screen",
    titleParameter: "headline",
    parameters: [
      param({ id: "headline", name: "Headline" }),
      param({ id: "body", name: "Body", multiline: true }),
      param({ id: "buttonLabel", name: "Button label" }),
      param({ id: "buttonLink", name: "Button link", type: "link" }),
    ],
    slots: [],
  },
  {
    id: "siteFooter",
    name: "Site Footer",
    icon: "screen",
    parameters: [param({ id: "text", name: "Text" }), param({ id: "status", name: "Status" })],
    slots: [],
  },
];

const text = (value: string) => ({ type: "text", value });
const instance = (type: string, key: string, parameters: Record<string, string>, slots?: Record<string, unknown[]>) => ({
  _id: uuid(key),
  type,
  parameters: Object.fromEntries(Object.entries(parameters).map(([k, v]) => [k, text(v)])),
  ...(slots ? { slots } : {}),
});

const composition = {
  composition: {
    _id: uuid("home"),
    _name: "Home",
    type: "page",
    parameters: {},
    slots: {
      content: [
        instance("siteHeader", "siteHeader", {
          brand: "Marketing Relations",
          brandSuffix: "by Uniform",
          eyebrow: "Short videos · Real marketer wins",
        }),
        instance("hero", "hero", {
          eyebrow: "Congratulations on your new role",
          headline: "You are now",
          headlineHighlight: "the developer.",
          tagline: "One more hat to wear. You'll like this one.",
          lede: "Short, fun videos where marketers build the page, launch the test and ship the promo themselves.",
          ledeStrong: "Same afternoon, no ticket.",
          ledeAfter: "Then they go eat lunch somewhere that isn't their desk.",
          badgeRole: "Marketer",
          badgeAdded: "developer",
          badgePill: "New hat unlocked",
          calTime: "12:00",
          calTitle: "Lunch",
          calNote: "Away from desk. Holiday promo already live.",
          calStatus: "Done",
        }),
        instance(
          "backlog",
          "backlog",
          {
            eyebrow: "Your new job description",
            title: "Things you can do yourself now",
            intro:
              "Each episode takes one everyday request and solves it on screen in about a minute. The skill is the point. The product is just how it gets done.",
          },
          {
            items: episodes.map((e) =>
              instance("episodeCard", `episode:${e.id}`, {
                episodeId: e.id,
                status: "Done by you",
                title: e.title,
                topic: e.topic,
              }),
            ),
          },
        ),
        instance(
          "formats",
          "formats",
          {
            eyebrow: "Formats",
            title: "Four ways to wear the hat",
            intro:
              "Short, screen-first and a little silly, made for LinkedIn and the feeds marketers already scroll. Every format has a shape viewers recognize in the first three seconds.",
          },
          {
            items: formats.map((f) =>
              instance("formatCard", `format:${f.title}`, {
                kind: f.kind,
                title: f.title,
                description: f.description,
                ...(f.aside ? { aside: f.aside } : {}),
              }),
            ),
          },
        ),
        instance(
          "manifesto",
          "manifesto",
          {
            eyebrow: "Why this exists",
            quoteBefore: "DevRel made developers love vendors by teaching them.",
            quoteHighlight: "Marketing relations",
            quoteAfter: "does the same for marketers.",
          },
          { rules: rules.map((r) => instance("manifestoRule", `rule:${r.title}`, { title: r.title, text: r.text })) },
        ),
        {
          ...instance("callToAction", "callToAction", {
            headline: "What would you ship if you didn't have to wait?",
            body: "Tell us. The best ideas become the next episode, built on screen by a marketer, start to finish.",
            buttonLabel: "Try the hat on at uniform.dev",
          }),
        },
        instance("siteFooter", "siteFooter", {
          text: "Marketing Relations · a Uniform series",
          status: "Status: in production",
        }),
      ],
    },
  },
};

// Link parameter for the CTA button.
const cta = composition.composition.slots.content.find((c) => c.type === "callToAction")!;
(cta.parameters as Record<string, unknown>).buttonLink = {
  type: "link",
  value: { type: "url", path: "https://uniform.dev" },
};

mkdirSync(join(OUT, "component"), { recursive: true });
mkdirSync(join(OUT, "composition"), { recursive: true });
// JSON is valid YAML, so the CLI reads these as-is.
for (const def of definitions) {
  writeFileSync(join(OUT, "component", `${def.id}.yaml`), JSON.stringify(def, null, 2) + "\n");
}
writeFileSync(join(OUT, "composition", "home.yaml"), JSON.stringify(composition, null, 2) + "\n");
console.log(`Wrote ${definitions.length} component definitions and 1 composition to ${OUT}`);

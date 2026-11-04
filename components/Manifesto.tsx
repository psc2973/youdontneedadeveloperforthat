import { UniformSlot, UniformText } from "@uniformdev/next-app-router/component";
import type { UniformProps } from "./types";

export default function Manifesto({
  parameters: p,
  component,
  slots,
}: UniformProps<"eyebrow" | "quoteBefore" | "quoteHighlight" | "quoteAfter", "rules">) {
  return (
    <section aria-labelledby="why-h">
      <div className="manifesto">
        <div>
          {p.eyebrow && <UniformText as="div" id="why-h" className="eyebrow" component={component} parameter={p.eyebrow} />}
          <p className="quote">
            {p.quoteBefore && <UniformText component={component} parameter={p.quoteBefore} />}{" "}
            {p.quoteHighlight && <UniformText as="mark" component={component} parameter={p.quoteHighlight} />}{" "}
            {p.quoteAfter && <UniformText component={component} parameter={p.quoteAfter} />}
          </p>
        </div>
        <ul className="rules">
          <UniformSlot slot={slots.rules} />
        </ul>
      </div>
    </section>
  );
}

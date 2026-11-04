import { UniformSlot } from "@uniformdev/next-app-router/component";
import type { UniformProps } from "./types";
import SectionHead from "./SectionHead";

/** Shared shape for the Backlog and Formats sections: a section head plus a grid of child cards. */
function makeListSection(headingId: string, gridClass: string) {
  return function ListSection({ parameters: p, component, slots }: UniformProps<"eyebrow" | "title" | "intro", "items">) {
    return (
      <section aria-labelledby={headingId}>
        <SectionHead id={headingId} component={component} eyebrow={p.eyebrow} title={p.title} intro={p.intro} />
        <div className={gridClass}>
          <UniformSlot slot={slots.items} />
        </div>
      </section>
    );
  };
}

export const Backlog = makeListSection("backlog-h", "backlog");
export const Formats = makeListSection("formats-h", "formats");

import { UniformText } from "@uniformdev/next-app-router/component";
import type { UniformProps } from "./types";

export default function FormatCard({ parameters: p, component }: UniformProps<"kind" | "title" | "description" | "aside">) {
  return (
    <div className="format">
      {p.kind && <UniformText as="div" className="eyebrow" component={component} parameter={p.kind} />}
      {p.title && <UniformText as="h3" component={component} parameter={p.title} />}
      {p.description && <UniformText as="p" component={component} parameter={p.description} isMultiline />}
      {p.aside?.value && <UniformText className="aside" component={component} parameter={p.aside} />}
    </div>
  );
}

import { UniformText } from "@uniformdev/next-app-router/component";
import type { UniformProps } from "./types";

export default function ManifestoRule({ parameters: p, component }: UniformProps<"title" | "text">) {
  return (
    <li>
      <span className="check" aria-hidden="true">
        ✓
      </span>
      <div>
        {p.title && <UniformText as="b" component={component} parameter={p.title} />}
        {p.text && <UniformText className="t" component={component} parameter={p.text} isMultiline />}
      </div>
    </li>
  );
}

import { UniformText } from "@uniformdev/next-app-router/component";
import type { UniformProps } from "./types";

export default function SiteHeader({ parameters: p, component }: UniformProps<"brand" | "brandSuffix" | "eyebrow">) {
  return (
    <header className="bar">
      <div className="brand">
        {p.brand && <UniformText component={component} parameter={p.brand} />}{" "}
        {p.brandSuffix && <UniformText as="span" component={component} parameter={p.brandSuffix} />}
      </div>
      {p.eyebrow && <UniformText as="div" className="eyebrow" component={component} parameter={p.eyebrow} />}
    </header>
  );
}

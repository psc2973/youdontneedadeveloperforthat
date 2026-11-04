import { UniformText } from "@uniformdev/next-app-router/component";
import type { ComponentParameter, ComponentProps } from "@uniformdev/next-app-router/component";
import type { TextParams } from "./types";

type Params = TextParams<"headline" | "body" | "buttonLabel"> & {
  buttonLink?: ComponentParameter<{ type: string; path: string }>;
};

export default function CallToAction({ parameters: p, component }: ComponentProps<Params>) {
  const href = p.buttonLink?.value?.path;
  return (
    <section className="cta-section">
      <div className="cta">
        <div>
          {p.headline && <UniformText as="h2" component={component} parameter={p.headline} />}
          {p.body && <UniformText as="p" component={component} parameter={p.body} isMultiline />}
        </div>
        {p.buttonLabel && (
          <a className="btn" href={href ?? "#"} target="_blank" rel="noopener">
            <UniformText component={component} parameter={p.buttonLabel} />
          </a>
        )}
      </div>
    </section>
  );
}

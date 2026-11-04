import { UniformText } from "@uniformdev/next-app-router/component";
import type { UniformProps } from "./types";

export default function SiteFooter({ parameters: p, component }: UniformProps<"text" | "status">) {
  return (
    <footer>
      {p.text && <UniformText component={component} parameter={p.text} />}
      {p.status && <UniformText className="mono" component={component} parameter={p.status} />}
    </footer>
  );
}

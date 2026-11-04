import { UniformSlot } from "@uniformdev/next-app-router/component";
import type { ComponentProps } from "@uniformdev/next-app-router/component";

export default function Page({ slots }: ComponentProps<Record<string, never>, "content">) {
  return (
    <div className="wrap">
      <UniformSlot slot={slots.content} />
    </div>
  );
}

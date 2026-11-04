import { Suspense } from "react";
import { UniformPlayground, resolvePlaygroundRoute, type PlaygroundParameters } from "@uniformdev/next-app-router";
import { resolveComponent } from "@/components/resolveComponent";

// The playground is draft-only and request-dependent, so it streams inside Suspense
// instead of being prerendered (required with cacheComponents).
async function Playground({ params }: PlaygroundParameters) {
  const { code } = await params;
  return <UniformPlayground code={code} resolveRoute={resolvePlaygroundRoute} resolveComponent={resolveComponent} />;
}

export default function PlaygroundPage(props: PlaygroundParameters) {
  return (
    <Suspense fallback={null}>
      <Playground params={props.params} />
    </Suspense>
  );
}

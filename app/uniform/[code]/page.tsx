import { Suspense } from "react";
import { UniformComposition, type UniformPageParameters } from "@uniformdev/next-app-router";
// With cacheComponents enabled, use the cache-aware route resolver.
import { resolveRouteFromCode } from "@uniformdev/next-app-router/cache";
import { resolveComponent } from "@/components/resolveComponent";

// `code` is only known per request (the middleware encodes the route into it),
// so the composition renders inside Suspense rather than at build time.
async function Composition({ params }: UniformPageParameters) {
  const { code } = await params;
  return <UniformComposition code={code} resolveRoute={resolveRouteFromCode} resolveComponent={resolveComponent} />;
}

export default function UniformPage(props: UniformPageParameters) {
  return (
    <Suspense fallback={null}>
      <Composition params={props.params} />
    </Suspense>
  );
}

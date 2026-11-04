import { UniformText } from "@uniformdev/next-app-router/component";
import type { UniformProps } from "./types";

export default function EpisodeCard({ parameters: p, component }: UniformProps<"episodeId" | "status" | "title" | "topic">) {
  return (
    <article className="item">
      <div className="item-top">
        {p.episodeId && <UniformText className="mono" component={component} parameter={p.episodeId} />}
        {p.status && <UniformText className="pill done" component={component} parameter={p.status} />}
      </div>
      {p.title && <UniformText as="h3" component={component} parameter={p.title} />}
      <div className="item-foot mono">
        <span>Topic</span>
        {p.topic && <UniformText as="b" component={component} parameter={p.topic} />}
      </div>
    </article>
  );
}

import { UniformText } from "@uniformdev/next-app-router/component";
import type { UniformProps } from "./types";
import NameBadge from "./NameBadge";
import CalendarItem from "./CalendarItem";

type Keys =
  | "eyebrow" | "headline" | "headlineHighlight" | "tagline" | "lede" | "ledeStrong" | "ledeAfter"
  | "badgeRole" | "badgeAdded" | "badgePill" | "calTime" | "calTitle" | "calNote" | "calStatus";

export default function Hero({ parameters: p, component }: UniformProps<Keys>) {
  return (
    <div className="hero">
      <div>
        {p.eyebrow && <UniformText as="div" className="eyebrow" component={component} parameter={p.eyebrow} />}
        <h1>
          {p.headline && <UniformText component={component} parameter={p.headline} />}{" "}
          {p.headlineHighlight && <UniformText as="mark" component={component} parameter={p.headlineHighlight} />}
        </h1>
        {p.tagline && <UniformText as="p" className="tagline" component={component} parameter={p.tagline} />}
        <p className="lede">
          {p.lede && <UniformText component={component} parameter={p.lede} />}{" "}
          {p.ledeStrong && <UniformText as="strong" component={component} parameter={p.ledeStrong} />}{" "}
          {p.ledeAfter && <UniformText component={component} parameter={p.ledeAfter} />}
        </p>
      </div>

      <div className="kit">
        <NameBadge role={p.badgeRole?.value} added={p.badgeAdded?.value} pill={p.badgePill?.value} />
        <CalendarItem
          time={p.calTime?.value}
          title={p.calTitle?.value}
          note={p.calNote?.value}
          status={p.calStatus?.value}
        />
      </div>
    </div>
  );
}

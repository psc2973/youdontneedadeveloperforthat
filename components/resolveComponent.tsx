import type { ResolveComponentFunction } from "@uniformdev/next-app-router";
import type { ComponentType } from "react";
import Page from "./Page";
import SiteHeader from "./SiteHeader";
import Hero from "./Hero";
import { Backlog, Formats } from "./ListSection";
import EpisodeCard from "./EpisodeCard";
import FormatCard from "./FormatCard";
import Manifesto from "./Manifesto";
import ManifestoRule from "./ManifestoRule";
import CallToAction from "./CallToAction";
import SiteFooter from "./SiteFooter";

// Keys are the component definition public IDs in the Marketing Relations project.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const components: Record<string, ComponentType<any>> = {
  page: Page,
  siteHeader: SiteHeader,
  hero: Hero,
  backlog: Backlog,
  episodeCard: EpisodeCard,
  formats: Formats,
  formatCard: FormatCard,
  manifesto: Manifesto,
  manifestoRule: ManifestoRule,
  callToAction: CallToAction,
  siteFooter: SiteFooter,
};

export const resolveComponent: ResolveComponentFunction = ({ component }) => ({
  component: components[component.type] ?? null,
});

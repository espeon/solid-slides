import { useSteps } from "solid-slides";
import {
  SlideLayout,
  Headline,
  FeatureGrid,
  type Feature,
} from "../components/slides";

import LinkIcon from "~icons/lucide/link";
import LayersIcon from "~icons/lucide/layers";
import SparklesIcon from "~icons/lucide/sparkles";
import PuzzleIcon from "~icons/lucide/puzzle";

const features: Feature[] = [
  {
    Icon: LinkIcon,
    title: "URL state",
    description: "Slide and step index live in the URL. Deep-linkable by default.",
  },
  {
    Icon: LayersIcon,
    title: "Per-slide steps",
    description: "Reveal content incrementally with useSteps(n).",
  },
  {
    Icon: SparklesIcon,
    title: "View transitions",
    description: "Slide, fade, zoom. Override per slide if you want.",
  },
  {
    Icon: PuzzleIcon,
    title: "Composable",
    description: "useSlideParam() for typed per-slide URL params, auto-cleaned on leave.",
  },
];

export function FeaturesSlide() {
  const step = useSteps(features.length);

  return (
    <SlideLayout>
      <Headline class="max-w-[20ch]">What's in the box</Headline>
      <FeatureGrid features={features} visibleCount={step() + 1} />
    </SlideLayout>
  );
}

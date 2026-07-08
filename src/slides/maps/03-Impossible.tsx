import { SlideLayout, Headline, Lead, Body } from "../../components/slides";

export function MapsImpossible() {
  return (
    <SlideLayout>
      <Headline class="max-w-[22ch]">The impossible problem.</Headline>
      <Lead class="mt-4 max-w-[55ch]">
        You cannot flatten a sphere onto a plane without distorting something. Peel an orange and the peel tears or wrinkles. The sphere's curvature is baked in.
      </Lead>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl">
        {[
          ["Area", "Sizes inflate or shrink"],
          ["Shape", "Outlines stretch"],
          ["Distance", "Routes mislead"],
          ["Direction", "Bearings drift"],
        ].map(([t, d]) => (
          <div class="p-4 rounded-xl bg-bg-elevated border border-border">
            <div class="text-accent font-medium mb-1">{t}</div>
            <Body class="!text-fg-muted">{d}</Body>
          </div>
        ))}
      </div>

      <Body class="mt-8 max-w-[55ch] !text-fg">
        Every projection picks which of these to preserve, and which to sacrifice. That choice is the mapmaker's, not geometry's.
      </Body>
    </SlideLayout>
  );
}

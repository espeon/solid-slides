import { SlideLayout, Headline, Lead, Body } from "../../components/slides";

export function MapsModern() {
  return (
    <SlideLayout>
      <Headline class="max-w-[20ch]">Maps in the wild today.</Headline>
      <Lead class="mt-4 max-w-[55ch]">
        We went from a few authoritative maps to billions of algorithmically generated ones. The persuasion surface changed.
      </Lead>

      <div class="mt-8 flex flex-col gap-3 max-w-3xl">
        {[
          ["Navigation apps", "What they route you past, which businesses get pins, what's rendered versus omitted."],
          ["Election maps", "Land doesn't vote, people do. County-colored maps vastly overstate geographic sweep."],
          ["Data dashboards", "Covid heatmaps shaped public perception in real time through binning and color alone."],
        ].map(([t, d]) => (
          <div class="flex items-baseline gap-5 p-4 rounded-xl bg-bg-elevated border border-border">
            <span class="text-accent font-medium w-40 shrink-0">{t}</span>
            <Body class="!text-fg-muted">{d}</Body>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

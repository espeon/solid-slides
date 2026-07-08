import { SlideLayout, Headline, Body } from "../../components/slides";

const comparisons = [
  {
    bad: "Loading...",
    good: "Syncing 12 files...",
    why: "Context beats a generic verb.",
  },
  {
    bad: "0% → 99% → stuck",
    good: "Uploading · about 20 seconds left",
    why: "Honest estimates beat false precision.",
  },
  {
    bad: "Full-screen spinner for a like",
    good: "Heart fills instantly, syncs in background",
    why: "Optimistic UI matches the action size.",
  },
];

export function ExamplesSlide() {
  return (
    <SlideLayout>
      <Headline class="max-w-[16ch]">Good vs bad.</Headline>

      <div class="mt-8 flex flex-col gap-4 max-w-4xl">
        {comparisons.map((c) => (
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-bg-elevated border border-border items-center">
            <div>
              <div class="text-[0.75rem] text-danger font-medium mb-1">Bad</div>
              <div class="text-fg-subtle">{c.bad}</div>
            </div>
            <div>
              <div class="text-[0.75rem] text-success font-medium mb-1">Good</div>
              <div class="text-fg">{c.good}</div>
            </div>
            <Body class="!text-fg-muted md:col-span-1">{c.why}</Body>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

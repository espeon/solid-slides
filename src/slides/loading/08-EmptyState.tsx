import { useSteps, Step } from "solid-slides";
import { SlideLayout, Headline, Lead } from "../../components/slides";

export function EmptyStateSlide() {
  const step = useSteps(2);

  return (
    <SlideLayout>
      <Headline class="max-w-[20ch]">Empty states & optimistic UI.</Headline>
      <Lead class="mt-4 max-w-[55ch]">
        Two ways to make waiting feel like progress: tell the user what to do next, or pretend the action already worked.
      </Lead>

      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div class="p-6 rounded-2xl border border-border bg-bg-elevated">
          <div class="text-[clamp(2.5rem,4vw,4rem)] leading-none text-fg-subtle">∅</div>
          <div class="mt-3 text-fg font-medium">No projects yet.</div>
          <div class="mt-1 text-fg-muted">Create one to see it appear here.</div>
        </div>

        <Step when={step() >= 1}>
          <div class="p-6 rounded-2xl border border-border bg-bg-elevated">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-fg-inverted font-bold">✓</div>
              <div class="text-fg font-medium">Saved</div>
            </div>
            <div class="mt-2 text-fg-muted">
              The UI updated immediately. The request is finishing in the background.
            </div>
          </div>
        </Step>
      </div>
    </SlideLayout>
  );
}

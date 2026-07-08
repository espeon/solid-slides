import { SlideLayout, Headline, Lead } from "../../components/slides";

export function EmptyStateSlide() {
  return (
    <SlideLayout>
      <Headline class="max-w-[18ch]">The empty state</Headline>
      <Lead class="mt-6 max-w-[50ch]">
        Loading's smarter cousin. It does not pretend something is coming. It tells you what to do next.
      </Lead>

      <div class="mt-12 p-8 rounded-2xl border border-border bg-bg-elevated max-w-2xl">
        <div class="text-[clamp(3rem,6vw,6rem)] leading-none text-fg-subtle">∅</div>
        <div class="mt-4 text-fg font-medium">Nothing here yet.</div>
        <div class="mt-1 text-fg-muted">Add a project to see it load for real.</div>
      </div>
    </SlideLayout>
  );
}

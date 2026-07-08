import { SlideLayout, Headline, Lead, Body } from "../../components/slides";

export function MapsDenominator() {
  return (
    <SlideLayout>
      <Headline class="max-w-[22ch]">The denominator problem.</Headline>
      <Lead class="mt-4 max-w-[55ch]">
        A map of total crime, total cases, or total votes is mostly a map of population. Big places with big crowds dominate every category.
      </Lead>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div class="p-6 rounded-xl bg-bg-elevated border border-border">
          <div class="text-danger font-medium mb-2">Raw counts</div>
          <Body class="!text-fg-muted">
            Shows where the most people are. Reads as intensity. Mistakes density for severity.
          </Body>
        </div>
        <div class="p-6 rounded-xl bg-bg-elevated border border-border">
          <div class="text-success font-medium mb-2">Per-capita</div>
          <Body class="!text-fg-muted">
            Shows rates, not totals. Often flips the story entirely. Small places can dominate honestly.
          </Body>
        </div>
      </div>

      <Body class="mt-8 max-w-[55ch] !text-fg">
        Always ask: counts, or rates? The same data tells opposite stories depending on the denominator.
      </Body>
    </SlideLayout>
  );
}

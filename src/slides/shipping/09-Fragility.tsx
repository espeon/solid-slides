import { SlideLayout, Headline, Lead, Body } from "../../components/slides";

export function ShippingFragility() {
  return (
    <SlideLayout>
      <Headline class="max-w-[22ch]">Fragility, the flip side.</Headline>
      <Lead class="mt-4 max-w-[55ch]">
        The system optimized for cost, not resilience. One stuck ship, one port backlog, one canal blockage — billions in cargo back up overnight.
      </Lead>

      <div class="mt-8 flex flex-col gap-3 max-w-3xl">
        {[
          ["Ever Given, 2021", "A single vessel wedged across the Suez Canal held up roughly 12% of global trade for six days."],
          ["Covid backlogs", "Port closures cascaded. Ships anchored for weeks off Los Angeles."],
          ["Single points of failure", "One modern ship can carry a billion dollars of cargo. Lose it and the chain snaps."],
        ].map(([t, d]) => (
          <div class="flex items-baseline gap-5 p-4 rounded-xl bg-bg-elevated border border-border">
            <span class="text-accent font-medium w-44 shrink-0">{t}</span>
            <Body class="!text-fg-muted">{d}</Body>
          </div>
        ))}
      </div>

      <Body class="mt-8 max-w-[55ch] !text-fg">
        Hyper-efficiency and hyper-fragility are the same design decision, viewed from different days.
      </Body>
    </SlideLayout>
  );
}

import { SlideLayout, Headline, Lead, Body } from "../../components/slides";

export function ShippingBefore() {
  return (
    <SlideLayout>
      <Headline class="max-w-[22ch]">The world before the box.</Headline>
      <Lead class="mt-4 max-w-[55ch]">
        Break-bulk shipping. Longshoremen hand-loaded barrels, sacks, and crates. A ship could sit in port for a week.
      </Lead>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
        {[
          ["Theft", "'A little for the ship, a little for me.' Cargo walked off the docks."],
          ["Damage", "Hand-handled goods broke. Insurance baked the cost into everything."],
          ["Clustering", "Factories sat near ports because distance was expensive. Global trade meant luxuries."],
        ].map(([t, d]) => (
          <div class="p-5 rounded-xl bg-bg-elevated border border-border">
            <div class="text-accent font-medium mb-1">{t}</div>
            <Body class="!text-fg-muted">{d}</Body>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

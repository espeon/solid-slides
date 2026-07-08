import { SlideLayout, Headline, Lead, Body } from "../../components/slides";

export function ShippingStandardization() {
  return (
    <SlideLayout>
      <Headline class="max-w-[22ch]">The boring middle that mattered most.</Headline>
      <Lead class="mt-4 max-w-[55ch]">
        The ISO fights of the 1960s. Corner fittings, twist locks, 20ft and 40ft lengths. Genuinely dramatic committee politics.
      </Lead>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
        <div class="p-5 rounded-xl bg-bg-elevated border border-border">
          <div class="text-accent font-medium mb-2">One company's box</div>
          <Body class="!text-fg-muted">A convenience. Saves that firm some time, fits that firm's cranes.</Body>
        </div>
        <div class="p-5 rounded-xl bg-bg-elevated border border-border">
          <div class="text-accent font-medium mb-2">Everyone's box</div>
          <Body class="!text-fg-muted">An economy. The value of a network standard is superlinear.</Body>
        </div>
      </div>

      <Body class="mt-8 max-w-[55ch] !text-fg">
        Vietnam accelerated it. The military's logistics nightmare made containerization a national priority, and paid McLean to prove it at scale.
      </Body>
    </SlideLayout>
  );
}

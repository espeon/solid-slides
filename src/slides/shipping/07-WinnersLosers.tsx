import { useSteps, Step } from "solid-slides";
import { SlideLayout, Headline, Body } from "../../components/slides";

export function ShippingWinnersLosers() {
  const step = useSteps(2);

  return (
    <SlideLayout>
      <Headline class="max-w-[22ch]">Destruction and creation.</Headline>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        <Step when={step() >= 0}>
          <div class="p-5 rounded-xl bg-bg-elevated border border-border h-full">
            <div class="text-danger font-medium mb-3">The losers</div>
            <div class="flex flex-col gap-2">
              <Body class="!text-fg-muted">Longshore jobs collapsed. Automation displaced whole communities.</Body>
              <Body class="!text-fg-muted">Old ports died. Manhattan's piers emptied; Newark and SeaTac won.</Body>
              <Body class="!text-fg-muted">Factories no longer needed to sit near docks.</Body>
            </div>
          </div>
        </Step>
        <Step when={step() >= 1}>
          <div class="p-5 rounded-xl bg-bg-elevated border border-border h-full">
            <div class="text-success font-medium mb-3">The winners</div>
            <div class="flex flex-col gap-2">
              <Body class="!text-fg-muted">Singapore, Rotterdam, Shenzhen. Places that bet early on cranes and deep water.</Body>
              <Body class="!text-fg-muted">Manufacturers anywhere with a port. The world became the supply chain.</Body>
              <Body class="!text-fg-muted">Consumers. Prices fell as distance approached free.</Body>
            </div>
          </div>
        </Step>
      </div>
    </SlideLayout>
  );
}

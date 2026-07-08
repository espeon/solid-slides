import { useSteps, Step } from "solid-slides";
import { SlideLayout, Headline, Body } from "../../components/slides";

const beats = [
  {
    year: "1937",
    text: "A trucker named Malcom McLean waits all day at a New Jersey pier, watching stevedores move cargo piece by piece. He thinks: why not lift the whole truck body?",
  },
  {
    year: "April 26, 1956",
    text: "The Ideal-X sails from Newark with 58 containers stacked on deck. The per-ton loading cost drops by roughly 97% versus break-bulk.",
  },
  {
    year: "The twist",
    text: "McLean was a trucker, not a shipping man. Outsiders see the system; insiders see the parts.",
  },
];

export function ShippingMcLean() {
  const step = useSteps(beats.length);

  return (
    <SlideLayout>
      <Headline class="max-w-[20ch]">The protagonist.</Headline>

      <div class="mt-8 flex flex-col gap-4 max-w-4xl">
        {beats.map((b, i) => (
          <Step when={step() >= i}>
            <div class="flex items-baseline gap-6 p-4 rounded-xl bg-bg-elevated border border-border">
              <span class="text-accent font-medium w-44 shrink-0">{b.year}</span>
              <Body class="!text-fg-muted">{b.text}</Body>
            </div>
          </Step>
        ))}
      </div>
    </SlideLayout>
  );
}

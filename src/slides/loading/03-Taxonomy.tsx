import { useSteps, Step } from "solid-slides";
import { SlideLayout, Headline, Body } from "../../components/slides";

const states = [
  { name: "Spinner", use: "unknown duration", risk: "anxiety" },
  { name: "Skeleton", use: "known layout", risk: "content shift" },
  { name: "Progress", use: "long download", risk: "stalling" },
  { name: "Shimmer", use: "placeholder list", risk: "noise" },
  { name: "Empty", use: "no data yet", risk: "dead end" },
];

export function TaxonomySlide() {
  const step = useSteps(states.length);

  return (
    <SlideLayout>
      <Headline class="max-w-[18ch]">Five ways to wait.</Headline>

      <div class="mt-8 grid grid-cols-1 gap-3 max-w-4xl">
        <div class="grid grid-cols-3 gap-4 text-[0.75rem] font-medium text-fg-subtle pb-2 border-b border-border">
          <span>Pattern</span>
          <span>Best for</span>
          <span>Watch out for</span>
        </div>
        {states.map((s, i) => (
          <Step when={step() >= i}>
            <div class="grid grid-cols-3 gap-4 py-3 border-b border-border text-[clamp(0.95rem,1.25vw,1.15rem)]">
              <span class="text-accent font-medium">{s.name}</span>
              <span class="text-fg-muted">{s.use}</span>
              <span class="text-fg-subtle">{s.risk}</span>
            </div>
          </Step>
        ))}
      </div>

      <Step when={step() >= 4}>
        <Body class="mt-6 max-w-[55ch]">
          Each pattern is a different contract with the user about time, structure, and intent.
        </Body>
      </Step>
    </SlideLayout>
  );
}

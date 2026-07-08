import {
  SlideLayout,
  Headline,
  CodeBlock,
  StatGroup,
  type StatItem,
} from "../../components/slides";

const stats: StatItem[] = [
  {
    value: "1rem",
    label: "The floor",
    description: "Respects the user's preferred font-size, so accessibility settings still apply.",
  },
  {
    value: "1.5vmin",
    label: "The scaling",
    description: "1.5% of the smaller viewport dimension — 16px at 1080p, 24px at 4K.",
  },
  {
    value: "1.5rem",
    label: "The ceiling",
    description: "Caps at 1.5× the floor so the deck doesn't grow unboundedly on a TV.",
  },
];

export function SizingMath() {
  return (
    <SlideLayout>
      <Headline class="max-w-[16ch]">
        Three numbers, one job each.
      </Headline>

      <CodeBlock class="mt-8 max-w-3xl">
        font-size: clamp(<span class="text-accent">1rem</span>,{" "}
        <span class="text-accent">1.5vmin</span>,{" "}
        <span class="text-accent">1.5rem</span>);
      </CodeBlock>

      <StatGroup stats={stats} class="mt-10 max-w-4xl" />
    </SlideLayout>
  );
}

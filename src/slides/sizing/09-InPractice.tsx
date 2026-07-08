import {
  SlideLayout,
  Headline,
  Lead,
  CodeBlock,
  Body,
} from "../../components/slides";

const outcomes = [
  "Below 1080p, the user's font-size wins.",
  "Between 1080p and 4K, the deck scales with the room.",
  "Above 4K, the deck stops scaling.",
];

export function SizingInPractice() {
  return (
    <SlideLayout>
      <Headline class="max-w-[16ch]">The default in this library.</Headline>

      <CodeBlock class="mt-8 max-w-3xl">
        <span class="text-fg-subtle">{"// src/styles.css"}</span>
        {"\n"}
        .slides-root {"{"}
        {"\n"}
        &nbsp;&nbsp;font-size: <span class="text-accent">clamp(1rem, 1.5vmin, 1.5rem)</span>;
        {"\n"}
        {"}"}
      </CodeBlock>

      <Lead class="mt-10 max-w-[55ch]">
        Three things happen, all at once:
      </Lead>

      <ul class="mt-4 flex flex-col gap-2 max-w-2xl">
        {outcomes.map((o) => (
          <li class="flex items-start gap-3 text-[clamp(1rem,1.3vw,1.25rem)] text-fg">
            <span class="text-accent mt-1.5">·</span>
            <Body>{o}</Body>
          </li>
        ))}
      </ul>
    </SlideLayout>
  );
}

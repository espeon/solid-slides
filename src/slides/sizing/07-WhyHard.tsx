import {
  SlideLayout,
  Headline,
  Lead,
  Body,
} from "../../components/slides";

const primitives = [
  { term: "vw · vh · vmin · vmax", desc: "viewport-relative units" },
  { term: "em · rem", desc: "font-relative units" },
  { term: "container queries", desc: "component-level responsiveness" },
];

export function SizingWhyHard() {
  return (
    <SlideLayout>
      <Headline class="max-w-[22ch]">
        CSS has no{" "}
        <code class="text-accent font-mono">"scale to room"</code> property.
      </Headline>

      <Lead class="mt-6 max-w-[55ch]">
        What it has is a small toolbox. There is no single property that says
        "this should be 1% of the room." So we compose the primitives
        ourselves. <code class="text-accent font-mono">clamp()</code> is the
        composition.
      </Lead>

      <ul class="flex flex-col gap-3 mt-10 max-w-2xl">
        {primitives.map((p) => (
          <li class="flex items-baseline gap-3 text-[clamp(1rem,1.3vw,1.25rem)]">
            <span class="text-accent font-mono">{p.term}</span>
            <span class="text-fg-subtle">— {p.desc}</span>
          </li>
        ))}
      </ul>
    </SlideLayout>
  );
}

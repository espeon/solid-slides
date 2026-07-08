import { Show, For } from "solid-js";
import { useSteps } from "solid-slides";
import {
  SlideLayout,
  Headline,
  Lead,
  CodeBlock,
} from "../components/slides";

const blocks = [
  {
    label: "Mount a presentation",
    code: `<Presentation
  slides={[TitleSlide, FeaturesSlide]}
/>`,
  },
  {
    label: "Incremental steps",
    code: `const step = useSteps(3)

<Show when={step() >= 1}>...</Show>
<Show when={step() >= 2}>...</Show>`,
  },
  {
    label: "Per-slide URL params",
    code: `const [q, setQ] = useSlideParam('q', {
  defaultValue: '',
  persistent: false, // cleaned on nav
})`,
  },
];

export function ApiSlide() {
  const step = useSteps(3);

  return (
    <SlideLayout>
      <Headline class="max-w-[18ch]">Three primitives</Headline>
      <Lead class="mt-4 max-w-[55ch]">
        Everything else is built from these three pieces.
      </Lead>

      <div class="flex flex-col gap-4 mt-8 max-w-3xl">
        <For each={blocks}>
          {(b, i) => (
            <Show when={step() >= i()}>
              <div class="bg-bg-elevated border border-border rounded-xl overflow-hidden transition-opacity duration-500">
                <div class="px-5 py-3 border-b border-border text-fg-subtle text-sm font-medium font-sans">
                  {b.label}
                </div>
                <CodeBlock class="border-0 bg-transparent rounded-none text-accent">
                  {b.code}
                </CodeBlock>
              </div>
            </Show>
          )}
        </For>
      </div>
    </SlideLayout>
  );
}

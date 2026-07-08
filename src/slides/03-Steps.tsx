import { Show, For } from "solid-js";
import { useSteps, StepTransition } from "solid-slides";
import {
  SlideLayout,
  Headline,
  Lead,
  CodeBlock,
  Caption,
} from "../components/slides";

const steps = [
  {
    n: 0,
    text: "This is always visible — step 0 is the default.",
    muted: false,
  },
  {
    n: 1,
    text: "Space / → advances to the next step.",
    muted: false,
  },
  {
    n: 2,
    text: "← goes back through steps before changing slides.",
    muted: false,
  },
  {
    n: 3,
    text: "Step index is stored in the URL: ?step=3",
    muted: true,
  },
];

export function StepsSlide() {
  const step = useSteps(4);

  return (
    <SlideLayout>
      <Headline class="max-w-[18ch]">Incremental reveals</Headline>
      <Lead class="mt-4 max-w-[55ch]">
        Break a single slide into substeps. The URL tracks progress, and the
        library handles back/forward for you.
      </Lead>

      <CodeBlock class="mt-8 max-w-2xl">
        <span class="text-fg-subtle">{"// inside your slide component"}</span>
        {"\n"}
        <span class="text-accent">const</span>
        <span class="text-fg"> step = </span>
        <span class="text-accent">useSteps</span>
        <span class="text-fg">(4)</span>
      </CodeBlock>

      <div class="flex flex-col gap-3 mt-8 max-w-2xl">
        <For each={steps}>
          {(s, i) => (
            <StepTransition name={`step-item-${i()}`}>
              <Show when={step() >= i()}>
                <div
                  class={`flex items-center gap-4 text-[clamp(1rem,1.4vw,1.35rem)] transition-opacity duration-500 ${
                    s.muted ? "text-fg-subtle" : "text-fg"
                  }`}
                >
                  <span class="w-8 h-8 rounded-full bg-bg-strong border border-border flex items-center justify-center text-sm font-semibold shrink-0 text-accent">
                    {s.n}
                  </span>
                  <span>{s.text}</span>
                </div>
              </Show>
            </StepTransition>
          )}
        </For>
      </div>

      <Caption class="mt-10">
        current step: <span class="text-accent font-medium">{step()}</span> / 3
      </Caption>
    </SlideLayout>
  );
}

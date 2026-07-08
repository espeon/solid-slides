import { useSteps, Step } from "solid-slides";
import { SlideLayout, Headline, Lead, CodeBlock } from "../../components/slides";

export function SpinnerSlide() {
  const step = useSteps(3);

  return (
    <SlideLayout>
      <Headline class="max-w-[16ch]">The spinner</Headline>
      <Lead class="mt-4 max-w-[50ch]">
        The oldest loading state. It says "something is happening" and nothing else.
      </Lead>

      <div class="mt-6 flex items-center gap-8">
        <div class="w-16 h-16 rounded-full border-4 border-border border-t-accent animate-spin" />
        <Step when={step() >= 1}>
          <div class="flex flex-col gap-2 text-fg-muted text-[clamp(0.95rem,1.25vw,1.15rem)] max-w-md">
            <p>Good for: quick actions under ~1 second.</p>
            <p>Bad for: anything where the user needs orientation.</p>
          </div>
        </Step>
      </div>

      <Step when={step() >= 2}>
        <CodeBlock class="mt-6 max-w-2xl">
          <span class="text-fg-subtle">{"// after 1s, tell them what is slow"}</span>
          {"\n"}
          <span class="text-accent">{"if"}</span>
          <span class="text-fg"> {"(elapsed > 1000) "}</span>
          <span class="text-fg-subtle">{"showContextualMessage()"}</span>
        </CodeBlock>
      </Step>
    </SlideLayout>
  );
}

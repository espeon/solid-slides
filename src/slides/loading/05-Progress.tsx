import { useSteps, Step } from "solid-slides";
import { SlideLayout, Headline, Lead } from "../../components/slides";

export function ProgressSlide() {
  const step = useSteps(2);

  return (
    <SlideLayout>
      <Headline class="max-w-[18ch]">The progress bar</Headline>
      <Lead class="mt-6 max-w-[50ch]">
        The most honest loading state. It admits that time is passing.
      </Lead>

      <div class="mt-12 w-full max-w-3xl">
        <div class="h-3 rounded-full bg-bg-strong overflow-hidden">
          <div
            class="h-full bg-accent rounded-full transition-all duration-1000"
            style={{ width: step() >= 1 ? "78%" : "34%" }}
          />
        </div>
        <Step when={step() >= 1}>
          <Lead class="mt-6 !text-fg-subtle max-w-[45ch]">
            Until it stalls at 99% and the user learns that progress, too, can lie.
          </Lead>
        </Step>
      </div>
    </SlideLayout>
  );
}

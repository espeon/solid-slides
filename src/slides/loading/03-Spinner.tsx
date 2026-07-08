import { useSteps, Step } from "solid-slides";
import { SlideLayout, Headline, Lead } from "../../components/slides";

export function SpinnerSlide() {
  const step = useSteps(2);

  return (
    <SlideLayout>
      <Headline class="max-w-[16ch]">The spinner</Headline>
      <Lead class="mt-6 max-w-[50ch]">
        It says: "Something is happening." It does not say how long, or why.
      </Lead>

      <div class="mt-12 flex items-center gap-6">
        <div class="w-16 h-16 rounded-full border-4 border-border border-t-accent animate-spin" />
        <Step when={step() >= 1}>
          <Lead class="!text-fg-subtle max-w-[40ch]">
            After three seconds, it becomes a confession that nobody asked for.
          </Lead>
        </Step>
      </div>
    </SlideLayout>
  );
}

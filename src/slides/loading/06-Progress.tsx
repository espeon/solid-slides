import { useSteps, Step } from "solid-slides";
import { SlideLayout, Headline, Lead, Body } from "../../components/slides";

export function ProgressSlide() {
  const step = useSteps(3);

  return (
    <SlideLayout>
      <Headline class="max-w-[18ch]">The progress bar</Headline>
      <Lead class="mt-4 max-w-[50ch]">
        The most honest state. It admits duration exists and gives the user a sense of scale.
      </Lead>

      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div>
          <div class="text-[0.75rem] font-medium text-fg-subtle mb-2">Determinate</div>
          <div class="h-3 rounded-full bg-bg-strong overflow-hidden">
            <div
              class="h-full bg-accent rounded-full transition-all duration-1000"
              style={{ width: step() >= 1 ? "78%" : "34%" }}
            />
          </div>
          <Body class="mt-2 !text-fg-subtle">Use when you know the total.</Body>
        </div>

        <div>
          <div class="text-[0.75rem] font-medium text-fg-subtle mb-2">Indeterminate</div>
          <div class="h-3 rounded-full bg-bg-strong overflow-hidden relative">
            <div
              class="h-full bg-accent rounded-full absolute animate-[indeterminate_1.5s_ease-in-out_infinite]"
              style={{ width: "40%" }}
            />
          </div>
          <Body class="mt-2 !text-fg-subtle">Use when the total is unknown.</Body>
        </div>
      </div>

      <Step when={step() >= 2}>
        <Lead class="mt-6 !text-fg-subtle max-w-[55ch]">
          The 99% stall is worse than no bar at all. If you cannot estimate honestly, use a pulse or spinner instead.
        </Lead>
      </Step>

      <style>{`
        @keyframes indeterminate {
          0% { left: -40%; }
          100% { left: 100%; }
        }
      `}</style>
    </SlideLayout>
  );
}

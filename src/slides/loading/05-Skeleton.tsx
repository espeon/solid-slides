import { useSteps, Step } from "solid-slides";
import { SlideLayout, Headline, Lead } from "../../components/slides";

export function SkeletonSlide() {
  const step = useSteps(2);

  return (
    <SlideLayout>
      <Headline class="max-w-[16ch]">The skeleton</Headline>
      <Lead class="mt-4 max-w-[50ch]">
        A preview of structure without content. It reduces perceived blank-screen time.
      </Lead>

      <div class="mt-6 flex flex-col gap-3 max-w-2xl">
        <div class="h-8 rounded-lg bg-bg-strong w-2/3" />
        <div class="h-4 rounded-lg bg-bg-soft w-full" />
        <div class="h-4 rounded-lg bg-bg-soft w-5/6" />
        <div class="flex gap-3 mt-1">
          <div class="h-20 rounded-lg bg-bg-soft w-1/3" />
          <div class="flex-1 flex flex-col gap-2">
            <div class="h-4 rounded-lg bg-bg-soft w-full" />
            <div class="h-4 rounded-lg bg-bg-soft w-4/5" />
            <div class="h-4 rounded-lg bg-bg-soft w-3/5" />
          </div>
        </div>
      </div>

      <Step when={step() >= 1}>
        <Lead class="mt-6 !text-fg-subtle max-w-[55ch]">
          The trap: if the real layout diverges from the skeleton, the shift feels like a bug. Match the structure exactly, or do not use it.
        </Lead>
      </Step>
    </SlideLayout>
  );
}

import { useSteps, Step } from "solid-slides";
import { SlideLayout, Headline, Lead } from "../../components/slides";

export function SkeletonSlide() {
  const step = useSteps(2);

  return (
    <SlideLayout>
      <Headline class="max-w-[16ch]">The skeleton</Headline>
      <Lead class="mt-6 max-w-[50ch]">
        It previews the shape of content that has not arrived. A promise of structure.
      </Lead>

      <div class="mt-12 flex flex-col gap-4 max-w-2xl">
        <div class="h-8 rounded-lg bg-bg-strong w-3/4" />
        <div class="h-4 rounded-lg bg-bg-soft w-full" />
        <div class="h-4 rounded-lg bg-bg-soft w-5/6" />
        <div class="h-4 rounded-lg bg-bg-soft w-4/6" />
        <Step when={step() >= 1}>
          <Lead class="mt-4 !text-fg-subtle max-w-[45ch]">
            The lie is that it looks like the page is already there. The truth is that it is a ghost.
          </Lead>
        </Step>
      </div>
    </SlideLayout>
  );
}

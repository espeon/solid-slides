import { useSteps, Step } from "solid-slides";
import { SlideLayout, Headline, Lead } from "../../components/slides";

export function ShimmerSlide() {
  const step = useSteps(2);

  return (
    <SlideLayout>
      <Headline class="max-w-[16ch]">The shimmer</Headline>
      <Lead class="mt-6 max-w-[50ch]">
        Motion without meaning. A gradient that slides forever, pretending work is happening.
      </Lead>

      <div class="mt-12 flex flex-col gap-4 max-w-2xl">
        <div class="h-6 rounded-lg bg-bg-strong w-2/3 shimmer" />
        <div class="h-4 rounded-lg bg-bg-strong w-full shimmer" />
        <div class="h-4 rounded-lg bg-bg-strong w-5/6 shimmer" />
        <Step when={step() >= 1}>
          <Lead class="mt-4 !text-fg-subtle max-w-[45ch]">
            It is the spinner wearing a tuxedo. The anxiety is the same.
          </Lead>
        </Step>
      </div>

      <style>{`
        .shimmer {
          background: linear-gradient(
            90deg,
            var(--color-bg-strong) 25%,
            var(--color-bg-soft) 50%,
            var(--color-bg-strong) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </SlideLayout>
  );
}

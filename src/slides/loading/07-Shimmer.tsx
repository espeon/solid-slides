import { useSteps, Step } from "solid-slides";
import { SlideLayout, Headline, Lead } from "../../components/slides";

export function ShimmerSlide() {
  const step = useSteps(2);

  return (
    <SlideLayout>
      <Headline class="max-w-[16ch]">The shimmer</Headline>
      <Lead class="mt-4 max-w-[50ch]">
        A skeleton with motion. It buys another second of patience by pretending activity.
      </Lead>

      <div class="mt-6 flex flex-col gap-3 max-w-2xl">
        <div class="h-6 rounded-lg bg-bg-strong w-2/3 shimmer" />
        <div class="h-4 rounded-lg bg-bg-strong w-full shimmer" />
        <div class="h-4 rounded-lg bg-bg-strong w-5/6 shimmer" />
        <div class="h-4 rounded-lg bg-bg-strong w-4/6 shimmer" />
      </div>

      <Step when={step() >= 1}>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          <div class="p-4 rounded-xl bg-bg-elevated border border-border">
            <div class="text-accent font-medium mb-1">Use it</div>
            <div class="text-fg-muted">For content feeds where the layout is obvious and the wait is short.</div>
          </div>
          <div class="p-4 rounded-xl bg-bg-elevated border border-border">
            <div class="text-danger font-medium mb-1">Avoid it</div>
            <div class="text-fg-muted">For forms, dashboards, or anything that needs precise structure.</div>
          </div>
        </div>
      </Step>

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

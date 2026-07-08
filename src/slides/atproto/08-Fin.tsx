import { usePresentationContext } from "solid-slides";
import {
  SlideLayout,
  Headline,
  Body,
} from "../../components/slides";

const checks = [
  ["Personal use (1–10 accounts) — DO limits are fine", true],
  ["Zero ops — wrangler deploy and you're federated", true],
  ["Great learning project — you'll understand ATProto deeply", true],
  ["Multi-user hosting or large repos — use a real server", false],
  ["Anything that needs account migration — still awkward", false],
];

export function FinSlide() {
  const { goTo } = usePresentationContext();

  return (
    <SlideLayout variant="title">
      <Headline class="max-w-[18ch]">Should you do this?</Headline>

      <div class="flex flex-col gap-3 mt-8 max-w-2xl text-left w-full">
        {checks.map(([text, good]) => (
          <div class="flex gap-3 text-[clamp(1rem,1.3vw,1.25rem)] text-fg-muted">
            <span class={good ? "text-success shrink-0" : "text-danger shrink-0"}>
              {good ? "✓" : "✗"}
            </span>
            {text}
          </div>
        ))}
      </div>

      <div class="flex flex-wrap gap-3 mt-10">
        <a
          href="https://github.com/skyware-js/pds"
          target="_blank"
          rel="noopener"
          class="px-4 py-2 bg-bg-soft border border-border rounded-lg text-fg text-sm hover:border-border-strong hover:bg-bg-strong transition-colors font-mono"
        >
          skyware-js/pds
        </a>
        <a
          href="https://atproto.com/guides/self-hosting"
          target="_blank"
          rel="noopener"
          class="px-4 py-2 bg-bg-elevated border border-border rounded-lg text-fg-muted text-sm hover:border-border-strong hover:text-fg transition-colors font-mono"
        >
          atproto.com/guides/self-hosting
        </a>
      </div>

      <button
        onClick={() => goTo(0)}
        class="text-fg-subtle text-xs hover:text-fg transition-colors font-sans mt-8"
      >
        ↩ Back to start
      </button>
    </SlideLayout>
  );
}

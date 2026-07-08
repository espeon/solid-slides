import { useSteps, Step } from "solid-slides";
import {
  SlideLayout,
  Headline,
  CodeBlock,
} from "../../components/slides";

const pairs = [
  ["Single-writer append-only log", "Single-instance actor — all writes serialised"],
  ["Consistent CID chain per commit", "Transactional KV storage, atomic per-object"],
  ["Durable MST node storage", "Persistent across evictions, survives cold starts"],
  ["WebSocket firehose", "WebSocket hibernation API — free while idle"],
];

export function DurableObjectsSlide() {
  const step = useSteps(pairs.length);

  return (
    <SlideLayout>
      <Headline class="max-w-[24ch]">
        The repo needs exactly what DOs give
      </Headline>

      <div class="flex flex-col gap-3 mt-8 max-w-5xl">
        <div class="grid grid-cols-2 gap-x-8 text-[0.75rem] font-medium text-fg-subtle font-sans mb-2">
          <span>ATProto repo needs</span>
          <span>Durable Object gives</span>
        </div>
        {pairs.map(([need, gives], i) => (
          <Step when={step() >= i}>
            <div class="grid grid-cols-2 gap-x-8 text-[clamp(0.95rem,1.25vw,1.15rem)] py-3 border-t border-border">
              <span class="text-fg-muted">{need}</span>
              <span class="text-accent">{gives}</span>
            </div>
          </Step>
        ))}
      </div>

      <Step when={step() >= 3}>
        <CodeBlock class="mt-8 max-w-3xl">
          <span class="text-accent">export class</span>
          <span class="text-fg"> AtprotoRepo </span>
          <span class="text-accent">extends</span>
          <span class="text-fg"> DurableObject {"{"}</span>
          {"\n"}
          &nbsp;&nbsp;
          <span class="text-fg-subtle">
            // this.ctx.storage holds the entire MST, keyed by CID
          </span>
          {"\n"}
          &nbsp;&nbsp;
          <span class="text-fg-subtle">
            // WebSocket subscribers stay connected via hibernation
          </span>
          {"\n"}
          <span class="text-fg">{"}"}</span>
        </CodeBlock>
      </Step>
    </SlideLayout>
  );
}

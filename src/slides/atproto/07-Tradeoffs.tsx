import { useSteps, Step } from "solid-slides";
import {
  SlideLayout,
  Headline,
  Body,
} from "../../components/slides";

const works = [
  "XRPC endpoints — just HTTP handlers in a Worker",
  "MST commits — DO storage keyed by CID, writes serialised",
  "Blob upload — streams straight to R2, CID stored in repo",
  "DID resolution — /.well-known/did.json served from Worker edge",
];

const cursed = [
  "Firehose WebSocket — DO hibernation saves you, but barely",
  "CAR export — streaming a large repo hits DO memory limits fast",
  "Account migration — full repo export from DO storage is awkward",
  "Storage limits — 128KB per value, 1GB total per DO",
];

export function TradeoffsSlide() {
  const step = useSteps(2);

  return (
    <SlideLayout>
      <Headline class="max-w-[18ch]">Tradeoffs</Headline>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl">
        <div class="flex flex-col gap-3">
          <div class="text-[0.75rem] font-medium text-success font-sans mb-2">
            Works well
          </div>
          <Step when={step() >= 0}>
            {works.map((item) => (
              <div class="flex gap-3 text-[clamp(0.95rem,1.25vw,1.15rem)] text-fg-muted">
                <span class="text-success shrink-0">✓</span>
                {item}
              </div>
            ))}
          </Step>
        </div>
        <div class="flex flex-col gap-3">
          <div class="text-[0.75rem] font-medium text-danger font-sans mb-2">
            Cursed
          </div>
          <Step when={step() >= 1}>
            {cursed.map((item) => (
              <div class="flex gap-3 text-[clamp(0.95rem,1.25vw,1.15rem)] text-fg-subtle">
                <span class="text-danger shrink-0">⚠</span>
                {item}
              </div>
            ))}
          </Step>
        </div>
      </div>
    </SlideLayout>
  );
}

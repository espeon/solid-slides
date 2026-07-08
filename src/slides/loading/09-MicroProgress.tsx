import { useSteps, Step } from "solid-slides";
import { SlideLayout, Headline, Lead, Body } from "../../components/slides";

const micros = [
  { name: "Button loading", desc: "Disable + spinner inside the action" },
  { name: "Inline saving", desc: "'Saved' badge next to the field" },
  { name: "Breadcrumb progress", desc: "Step dots during multi-step flows" },
  { name: "Lazy image blur", desc: "Tiny placeholder, then reveal" },
];

export function MicroProgressSlide() {
  const step = useSteps(micros.length);

  return (
    <SlideLayout>
      <Headline class="max-w-[20ch]">Micro-progress.</Headline>
      <Lead class="mt-4 max-w-[55ch]">
        Not every wait deserves a full-screen spinner. Match the loading surface to the action surface.
      </Lead>

      <div class="mt-6 flex flex-col gap-3 max-w-3xl">
        {micros.map((m, i) => (
          <Step when={step() >= i}>
            <div class="flex items-center gap-4 p-4 rounded-xl bg-bg-elevated border border-border">
              <div class="text-accent font-medium w-40 shrink-0">{m.name}</div>
              <Body class="!text-fg-muted">{m.desc}</Body>
            </div>
          </Step>
        ))}
      </div>
    </SlideLayout>
  );
}

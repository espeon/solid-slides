import { SlideLayout, Display, Lead } from "../../components/slides";

export function AtprotoTitle() {
  return (
    <SlideLayout variant="title" class="relative overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.04]"
        style={{
          "background-image": `linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)`,
          "background-size": "40px 40px",
        }}
      />
      <div class="relative z-10 flex flex-col items-start text-start">
        <Display class="max-w-[16ch]">
          Running an Atproto PDS{" "}
          <em class="text-accent not-italic">on the edge</em>
        </Display>
        <Lead class="mt-6 max-w-[55ch]">
          Durable Objects, the Merkle Search Tree, and why this probably
          shouldn't actually work.
        </Lead>
      </div>
    </SlideLayout>
  );
}

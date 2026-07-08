import {
  SlideLayout,
  Display,
  Lead,
} from "../../components/slides";

export function SizingMechanism() {
  return (
    <SlideLayout>
      <Display class="max-w-[16ch]">
        <code class="text-accent not-italic font-mono">rem</code> is the bridge.
      </Display>
      <Lead class="mt-8 max-w-[55ch]">
        Every dimension in the deck is set in{" "}
        <code class="text-accent font-mono">rem</code>. That means it inherits
        from one number: the root font-size. Make that one number scale with the
        viewport, and the entire deck breathes with the room.
      </Lead>
      <div class="mt-12 flex items-center gap-6 max-w-2xl text-fg-subtle text-sm font-sans">
        <span>deck</span>
        <div class="flex-1 h-px bg-border-strong" />
        <span>viewport</span>
      </div>
    </SlideLayout>
  );
}

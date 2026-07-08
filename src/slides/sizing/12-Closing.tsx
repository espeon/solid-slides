import {
  SlideLayout,
  Display,
  Lead,
  Caption,
} from "../../components/slides";

export function SizingClosing() {
  return (
    <SlideLayout variant="title">
      <Display class="max-w-[14ch]">
        Make it fit{" "}
        <em class="text-accent not-italic">the room.</em>
      </Display>
      <Lead class="mt-10 max-w-[50ch]">
        Your deck is a portrait. The room is a billboard. Scale the portrait.
      </Lead>
      <div class="mt-16 flex flex-col items-center gap-2">
        <Caption>On Seed Decks · Vol. 02 forthcoming</Caption>
        <Caption class="text-fg-subtle">Next: on steps</Caption>
      </div>
    </SlideLayout>
  );
}

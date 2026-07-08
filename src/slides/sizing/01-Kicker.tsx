import {
  SlideLayout,
  Display,
  Lead,
  Caption,
} from "../../components/slides";

export function SizingKicker() {
  return (
    <SlideLayout>
      <Display class="max-w-[15ch]">
        A thinkpiece in twelve slides{" "}
        <em class="text-fg-subtle not-italic">on the size of the room.</em>
      </Display>
      <Lead class="mt-8 max-w-[55ch]">
        For the founder who has been told their deck "looks weird on the
        partner's laptop." This is for you.
      </Lead>
      <Caption class="mt-12">
        On Seed Decks · Vol. 01 · Proportions · Pixels · The Viewport
      </Caption>
    </SlideLayout>
  );
}

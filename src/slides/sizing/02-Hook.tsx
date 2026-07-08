import {
  SlideLayout,
  Display,
  Lead,
  Caption,
} from "../../components/slides";

export function SizingHook() {
  return (
    <SlideLayout>
      <Display class="max-w-[14ch]">
        The room is bigger than your laptop.
      </Display>
      <Lead class="mt-8 max-w-[55ch]">
        You spent four nights on the deck. The display in the room is 4K. The
        room is dark. Forty investors are looking at a slide they can't
        navigate, and you can't find the next button either.
      </Lead>
      <Caption class="mt-12 max-w-[50ch]">
        A thinkpiece on proportions, pixels, and the size of the room.
      </Caption>
    </SlideLayout>
  );
}

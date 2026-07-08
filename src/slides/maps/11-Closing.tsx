import { SlideLayout, Display, Lead } from "../../components/slides";

export function MapsClosing() {
  return (
    <SlideLayout variant="title">
      <Display class="max-w-[20ch]">
        The map is not the <em class="text-accent not-italic">territory</em>.
      </Display>
      <Lead class="mt-8 max-w-[55ch]">
        And someone always chose the difference. Greenland is still 14 times smaller than it looks.
      </Lead>
    </SlideLayout>
  );
}

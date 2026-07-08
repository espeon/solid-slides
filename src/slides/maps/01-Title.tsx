import { SlideLayout, Display, Lead } from "../../components/slides";

export function MapsTitle() {
  return (
    <SlideLayout variant="title">
      <Display class="max-w-[14ch]">
        How maps <em class="text-accent not-italic">lie</em>.
      </Display>
      <Lead class="mt-8 max-w-[55ch]">
        The hidden persuasion in cartography. Every flat map of a round world is wrong by necessity — but mapmakers choose how they're wrong, and those choices carry power.
      </Lead>
    </SlideLayout>
  );
}

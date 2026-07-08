import { usePresentationContext } from "solid-slides";
import { SlideLayout, Display, Lead, Caption } from "../components/slides";

export function TitleSlide() {
  const { totalSlides } = usePresentationContext();

  return (
    <SlideLayout variant="title">
      <Display>
        Slides, but <em class="text-accent not-italic">solid</em>.
      </Display>
      <Lead class="mt-6">
        SolidJS-powered presentations. URL state, per-slide steps, view
        transitions — all composable.
      </Lead>
      <Caption class="mt-12 text-fg-subtle">
        {totalSlides()} slides · arrow keys or space to navigate
      </Caption>
    </SlideLayout>
  );
}

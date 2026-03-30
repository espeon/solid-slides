import { usePresentationContext } from "../../context/PresentationContext";

export function SimpleCounter() {
  const { currentSlide, totalSlides, prev, next, isFirst, isLast } =
    usePresentationContext();

  return (
    <nav class="simple-slides-nav" aria-label="Slide navigation">
      <span class="slides-nav-count">
        {currentSlide() + 1} / {totalSlides()}
      </span>
    </nav>
  );
}

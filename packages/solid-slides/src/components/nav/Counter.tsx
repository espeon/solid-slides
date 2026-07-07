import { usePresentationContext } from '../../context/PresentationContext'

/**
 * Default nav UI: a pill at the bottom-center with prev/next buttons and a
 * `current / total` readout. Both buttons are disabled at the deck's
 * boundaries (or wrap when `loop` is enabled).
 *
 * Use as the value of `<Presentation nav="counter" />` or pass to `nav`
 * directly. Reading state from {@link usePresentationContext}.
 */
export function Counter() {
  const { currentSlide, totalSlides, prev, next, isFirst, isLast } = usePresentationContext()

  return (
    <nav class="slides-nav" aria-label="Slide navigation">
      <button class="slides-nav-btn" onClick={prev} disabled={isFirst()} aria-label="Previous">←</button>
      <span class="slides-nav-count">{currentSlide() + 1} / {totalSlides()}</span>
      <button class="slides-nav-btn" onClick={next} disabled={isLast()} aria-label="Next">→</button>
    </nav>
  )
}

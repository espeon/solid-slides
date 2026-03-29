import { usePresentationContext } from '../../context/PresentationContext'

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

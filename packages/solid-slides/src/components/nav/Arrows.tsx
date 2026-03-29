import { usePresentationContext } from '../../context/PresentationContext'

export function Arrows() {
  const { prev, next, isFirst, isLast } = usePresentationContext()

  return (
    <>
      <button
        class="slides-nav-arrow slides-nav-arrow--prev"
        onClick={prev}
        disabled={isFirst()}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        class="slides-nav-arrow slides-nav-arrow--next"
        onClick={next}
        disabled={isLast()}
        aria-label="Next slide"
      >
        ›
      </button>
    </>
  )
}

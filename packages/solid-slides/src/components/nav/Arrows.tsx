import { usePresentationContext } from '../../context/PresentationContext'

/**
 * Two large circular prev/next buttons anchored to the left and right edges
 * of the viewport. They fade to 10% opacity at the deck's boundaries (or
 * wrap when `loop` is enabled).
 *
 * Use as the value of `<Presentation nav="arrows" />`.
 */
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

import { For } from 'solid-js'
import { usePresentationContext } from '../../context/PresentationContext'

/**
 * One dot per slide, with the active dot stretched to indicate position.
 * Click a dot to jump to that slide. Each dot has an `aria-label` of the
 * form `Go to slide N`.
 *
 * Use as the value of `<Presentation nav="dots" />`.
 */
export function Dots() {
  const { currentSlide, totalSlides, goTo } = usePresentationContext()

  return (
    <nav class="slides-nav-dots" aria-label="Slide navigation">
      <For each={Array.from({ length: totalSlides() })}>
        {(_, i) => (
          <button
            class="slides-nav-dot"
            classList={{ 'slides-nav-dot--active': currentSlide() === i() }}
            onClick={() => goTo(i())}
            aria-label={`Go to slide ${i() + 1}`}
            aria-current={currentSlide() === i() ? 'true' : undefined}
          />
        )}
      </For>
    </nav>
  )
}

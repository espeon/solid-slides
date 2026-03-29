import { For } from 'solid-js'
import { usePresentationContext } from '../../context/PresentationContext'

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

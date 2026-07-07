import { usePresentationContext } from '../../context/PresentationContext'

/**
 * Full-width progress bar pinned to the bottom of the viewport. Click
 * anywhere on it to jump to the corresponding slide. `ArrowLeft` /
 * `ArrowRight` work when the bar is focused.
 *
 * Use as the value of `<Presentation nav="bar" />`.
 */
export function Bar() {
  const { currentSlide, totalSlides, goTo, prev, next } = usePresentationContext()

  const progress = () => (currentSlide() / Math.max(totalSlides() - 1, 1)) * 100

  function handleClick(e: MouseEvent) {
    const bar = e.currentTarget as HTMLElement
    const { left, width } = bar.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (e.clientX - left) / width))
    goTo(Math.round(ratio * (totalSlides() - 1)))
  }

  return (
    <div
      class="slides-nav-bar"
      role="slider"
      aria-label="Slide progress"
      aria-valuenow={currentSlide() + 1}
      aria-valuemin={1}
      aria-valuemax={totalSlides()}
      tabindex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') prev()
        if (e.key === 'ArrowRight') next()
      }}
    >
      <div class="slides-nav-bar-fill" style={{ width: `${progress()}%` }} />
    </div>
  )
}

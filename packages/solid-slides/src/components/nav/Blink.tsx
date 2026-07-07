import { usePresentationContext } from '../../context/PresentationContext'

/**
 * A small blinking caret at the bottom-center, hinting that the deck
 * advances. Stops blinking and dims to 20% opacity on the last slide so
 * it does not suggest more content is coming.
 *
 * Use as the value of `<Presentation nav="blink" />`.
 */
export function Blink() {
  const { isLast } = usePresentationContext()

  return (
    <div
      class="slides-nav-blink"
      classList={{ 'slides-nav-blink--end': isLast() }}
      aria-hidden="true"
    />
  )
}

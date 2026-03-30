import { usePresentationContext } from '../../context/PresentationContext'

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

import { onCleanup, onMount } from 'solid-js'
import type { PresentationContextValue } from '../types'

/**
 * Bind global keyboard shortcuts to a presentation context.
 *
 * @param getCtx - Accessor that returns the current presentation context. The
 *   accessor (not the value) is captured so the handler always reads the
 *   latest state.
 *
 * @remarks
 * Bound keys:
 * - `ArrowRight`, `ArrowDown`, `Space`, `PageDown` → {@link PresentationContextValue.next next}
 * - `ArrowLeft`, `ArrowUp`, `PageUp` → {@link PresentationContextValue.prev prev}
 * - `Home` → `goTo(0, 0)`
 * - `End` → `goTo(totalSlides() - 1)`
 *
 * Keys are ignored when the event target is an `<input>` or `<textarea>`, so
 * presenters can still type into a slide without advancing the deck.
 *
 * @internal
 */
export function useKeyboard(getCtx: () => Pick<PresentationContextValue, 'next' | 'prev' | 'goTo' | 'totalSlides'>) {
  onMount(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault()
          getCtx().next()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          getCtx().prev()
          break
        case 'Home':
          e.preventDefault()
          getCtx().goTo(0, 0)
          break
        case 'End':
          e.preventDefault()
          getCtx().goTo(getCtx().totalSlides() - 1)
          break
      }
    }

    window.addEventListener('keydown', handler)
    onCleanup(() => window.removeEventListener('keydown', handler))
  })
}

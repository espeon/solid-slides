import { onCleanup, onMount } from 'solid-js'
import type { PresentationContextValue } from '../types'

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

export type TransitionDirection = 'forward' | 'backward'

const supportsVT = typeof document !== 'undefined' && 'startViewTransition' in document

export function applyViewTransition(
  transitionType: string,
  direction: TransitionDirection,
  update: () => void,
) {
  document.documentElement.dataset.transition = transitionType
  document.documentElement.dataset.direction = direction

  if (supportsVT && transitionType !== 'none') {
    ;(document as Document & { startViewTransition: (cb: () => void) => unknown }).startViewTransition(update)
  } else {
    update()
  }
}

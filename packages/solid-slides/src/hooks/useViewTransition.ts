/** Direction the presenter is moving through the deck. Used to pick the matching CSS animation. */
export type TransitionDirection = 'forward' | 'backward'

/** True when the current browser supports the View Transitions API. */
const supportsVT = typeof document !== 'undefined' && 'startViewTransition' in document

/**
 * Run a navigation update inside a View Transition when the browser supports
 * it, otherwise run it synchronously.
 *
 * Sets `data-transition` and `data-direction` on `<html>` before the update
 * so the bundled CSS can pick the correct keyframes.
 *
 * @param transitionType - One of the {@link TransitionType} values. `"none"`
 *   bypasses the View Transition API and runs `update` immediately.
 * @param direction - `"forward"` or `"backward"`, used by the CSS to pick
 *   direction-aware animations.
 * @param update - The callback that actually mutates state (and the URL).
 *
 * @internal
 */
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

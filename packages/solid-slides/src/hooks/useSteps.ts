import { useInternalPresentationContext } from '../context/PresentationContext'
import { useSlideIndex } from '../context/SlideIndexContext'

/**
 * Declare that this slide has `count` steps.
 * Returns a reactive accessor for the current step index (0-based).
 *
 * Must be called unconditionally at the top of the slide component.
 *
 * @example
 * const step = useSteps(3)
 * <Show when={step() >= 1}>Revealed at step 1</Show>
 */
export function useSteps(count: number): () => number {
  const ctx = useInternalPresentationContext()
  const slideIndex = useSlideIndex()

  ctx.registerSteps(slideIndex, count)

  return ctx.currentStep
}

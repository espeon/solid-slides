import { useInternalPresentationContext } from '../context/PresentationContext'
import { useSlideIndex } from '../context/SlideIndexContext'

/**
 * Declare that the current slide has a fixed number of sub-steps and get a
 * reactive accessor for the current step index.
 *
 * The step counter is global (it lives in the URL), so the returned accessor
 * reflects whichever step the presenter has advanced to within this slide.
 * Steps are 0-based: passing `count = 3` means steps 0, 1, and 2 are valid.
 *
 * @param count - Total number of steps on this slide. Drives `isLast` and
 *   makes `next()` roll over to the next slide on the last step.
 * @returns A reactive accessor for the current step index, 0-based.
 * @throws Error if called outside a `<Presentation>`.
 *
 * @remarks
 * Must be called unconditionally at the top of the slide component. Like
 * other Solid hooks, calling it inside a `Show` or `Switch` branch will
 * produce a warning and the registration will be lost on re-render.
 *
 * @example
 * const step = useSteps(3)
 * return (
 *   <>
 *     <Step when={step() >= 1}>Revealed at step 1</Step>
 *     <Step when={step() >= 2}>Revealed at step 2</Step>
 *   </>
 * )
 */
export function useSteps(count: number): () => number {
  const ctx = useInternalPresentationContext()
  const slideIndex = useSlideIndex()

  ctx.registerSteps(slideIndex, count)

  return ctx.currentStep
}

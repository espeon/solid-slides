import { createContext, useContext } from 'solid-js'
import type { InternalPresentationContextValue, PresentationContextValue } from '../types'

/**
 * Reactivity context that holds the live presentation state. The
 * {@link Presentation} component is the only writer; slide components and
 * nav components read from it via {@link usePresentationContext}.
 *
 * Typed as {@link InternalPresentationContextValue} so the `register*` methods
 * can live here without leaking into the public type.
 */
export const PresentationContext = createContext<InternalPresentationContextValue>()

/**
 * Read the current presentation state from any component rendered inside a
 * `<Presentation>`.
 *
 * @returns The {@link PresentationContextValue} with accessors for
 *   `currentSlide`, `currentStep`, `totalSlides`, navigation methods
 *   (`goTo`, `next`, `prev`), and the `isFirst` / `isLast` predicates.
 * @throws Error if called outside a `<Presentation>`.
 *
 * @example
 * const { currentSlide, totalSlides, next, prev } = usePresentationContext()
 * return <button onClick={next}>{currentSlide() + 1} / {totalSlides()}</button>
 */
export function usePresentationContext(): PresentationContextValue {
  const ctx = useContext(PresentationContext)
  if (!ctx) throw new Error('usePresentationContext must be called inside a <Presentation>')
  return ctx
}

/**
 * Like {@link usePresentationContext} but also exposes the internal
 * `register*` methods used by `useSteps` and `useSlideParam`.
 *
 * @internal
 * @throws Error if called outside a `<Presentation>`.
 */
export function useInternalPresentationContext(): InternalPresentationContextValue {
  const ctx = useContext(PresentationContext)
  if (!ctx) throw new Error('useSteps / useSlideParam must be called inside a <Presentation>')
  return ctx
}

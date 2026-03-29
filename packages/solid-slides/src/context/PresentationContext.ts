import { createContext, useContext } from 'solid-js'
import type { InternalPresentationContextValue, PresentationContextValue } from '../types'

// Typed as internal so Presentation can store register methods without exposing them publicly
export const PresentationContext = createContext<InternalPresentationContextValue>()

export function usePresentationContext(): PresentationContextValue {
  const ctx = useContext(PresentationContext)
  if (!ctx) throw new Error('usePresentationContext must be called inside a <Presentation>')
  return ctx
}

// Used by useSteps / useSlideParam — returns the full internal shape
export function useInternalPresentationContext(): InternalPresentationContextValue {
  const ctx = useContext(PresentationContext)
  if (!ctx) throw new Error('useSteps / useSlideParam must be called inside a <Presentation>')
  return ctx
}

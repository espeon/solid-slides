import { createContext, useContext } from 'solid-js'

// Provides the index of the currently rendered slide to useSteps / useSlideParam
export const SlideIndexContext = createContext<() => number>(() => 0)

export function useSlideIndex(): number {
  return useContext(SlideIndexContext)()
}

import './styles.css'

export { Presentation } from './components/Presentation'
export { Step } from './components/Step'
export { StepTransition } from './components/StepTransition'
export { Counter, Bar, Dots, Arrows, Blink } from './components/nav'
export { usePresentationContext } from './context/PresentationContext'
export { useSteps } from './hooks/useSteps'
export { useSlideParam } from './hooks/useSlideParam'
export type {
  SlideEntry,
  SlideDefinition,
  TransitionType,
  NavVariant,
  PresentationProps,
  PresentationContextValue,
  UseSlideParamOptions,
} from './types'

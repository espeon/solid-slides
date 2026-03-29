import type { Component } from 'solid-js'

export type TransitionType = 'slide' | 'fade' | 'zoom' | 'none'

export type NavVariant = 'counter' | 'bar' | 'dots' | 'arrows' | 'none'

export interface SlideDefinition {
  component: Component
  transition?: TransitionType
  stepTransition?: TransitionType
  meta?: Record<string, unknown>
}

export type SlideEntry = Component | SlideDefinition

export interface PresentationProps {
  slides: SlideEntry[]
  transition?: TransitionType
  stepTransition?: TransitionType
  router?: 'hash' | 'memory' | null
  loop?: boolean
  class?: string
  /** Navigation UI. Built-in variant name, a custom component, or 'none'. Defaults to 'counter'. */
  nav?: NavVariant | Component
}

export interface PresentationContextValue {
  currentSlide: () => number
  currentStep: () => number
  totalSlides: () => number
  goTo: (slideIndex: number, step?: number) => void
  next: () => void
  prev: () => void
  isFirst: () => boolean
  isLast: () => boolean
}

// Not exported — only used internally by useSteps / useSlideParam
export interface InternalPresentationContextValue extends PresentationContextValue {
  registerSteps: (slideIndex: number, count: number) => void
  registerSlideParam: (slideIndex: number, key: string, persistent: boolean) => void
}

export interface UseSlideParamOptions<T = string> {
  defaultValue?: T
  persistent?: boolean
  parse?: (raw: string) => T
  serialize?: (value: T) => string
}

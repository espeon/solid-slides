import { createMemo } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { HashRouter, MemoryRouter, useSearchParams } from '@solidjs/router'
import { PresentationContext } from '../context/PresentationContext'
import { useKeyboard } from '../hooks/useKeyboard'
import { applyViewTransition } from '../hooks/useViewTransition'
import { SlideRenderer } from './SlideRenderer'
import { resolveNav } from './nav'
import type { InternalPresentationContextValue, PresentationProps, SlideEntry, TransitionType } from '../types'

function resolveTransition(entry: SlideEntry, fallback: TransitionType): TransitionType {
  return typeof entry === 'function' ? fallback : (entry.transition ?? fallback)
}


function PresentationInner(props: PresentationProps) {
  const [params, setParams] = useSearchParams<{ slide: string; step: string }>()

  // Plain maps — not reactive signals, only read during navigation events
  const registeredSteps = new Map<number, number>()
  const slideParams = new Map<number, Map<string, boolean>>()

  const currentSlide = createMemo(() => {
    const n = parseInt(params.slide ?? '0', 10)
    return isNaN(n) ? 0 : Math.max(0, Math.min(n, props.slides.length - 1))
  })

  const currentStep = createMemo(() => {
    const n = parseInt(params.step ?? '0', 10)
    return isNaN(n) ? 0 : Math.max(0, n)
  })

  const stepsForSlide = (index: number) => registeredSteps.get(index) ?? 0

  function cleanupSlideParams(slideIndex: number) {
    const paramMap = slideParams.get(slideIndex)
    if (!paramMap) return
    const cleanup: Record<string, undefined> = {}
    for (const [key, persistent] of paramMap) {
      if (!persistent) cleanup[key] = undefined
    }
    if (Object.keys(cleanup).length) setParams(cleanup)
  }

  function goTo(slideIndex: number, step = 0) {
    const total = props.slides.length
    const clamped = props.loop
      ? ((slideIndex % total) + total) % total
      : Math.max(0, Math.min(slideIndex, total - 1))

    const direction = clamped >= currentSlide() ? 'forward' : 'backward'
    const entry = props.slides[clamped]
    const transition = resolveTransition(entry, props.transition ?? 'slide')
    const oldSlide = currentSlide()

    applyViewTransition(transition, direction, () => {
      cleanupSlideParams(oldSlide)
      setParams({
        slide: clamped === 0 ? undefined : String(clamped),
        step: step === 0 ? undefined : String(step),
      })
    })
  }

  function next() {
    const slide = currentSlide()
    const step = currentStep()
    const totalSteps = stepsForSlide(slide)

    if (step < totalSteps - 1) {
      // Step components handle their own CSS transitions — just update the param
      setParams({ step: String(step + 1) })
    } else {
      goTo(slide + 1, 0)
    }
  }

  function prev() {
    const slide = currentSlide()
    const step = currentStep()

    if (step > 0) {
      setParams({ step: step === 1 ? undefined : String(step - 1) })
    } else {
      if (slide === 0) {
        if (props.loop) goTo(props.slides.length - 1)
        return
      }
      const prevIndex = slide - 1
      const prevLastStep = Math.max(0, stepsForSlide(prevIndex) - 1)
      goTo(prevIndex, prevLastStep)
    }
  }

  const ctx: InternalPresentationContextValue = {
    currentSlide,
    currentStep,
    totalSlides: () => props.slides.length,
    goTo,
    next,
    prev,
    isFirst: () => currentSlide() === 0 && currentStep() === 0,
    isLast: () =>
      currentSlide() === props.slides.length - 1 &&
      currentStep() >= Math.max(0, stepsForSlide(currentSlide()) - 1),
    registerSteps(slideIndex, count) {
      registeredSteps.set(slideIndex, count)
    },
    registerSlideParam(slideIndex, key, persistent) {
      if (!slideParams.has(slideIndex)) slideParams.set(slideIndex, new Map())
      slideParams.get(slideIndex)!.set(key, persistent)
    },
  }

  useKeyboard(() => ctx)

  const NavComponent = resolveNav(props.nav)

  return (
    <PresentationContext.Provider value={ctx}>
      <div class={`slides-root ${props.class ?? ''}`}>
        <SlideRenderer slides={props.slides} currentSlide={currentSlide()} />
        {NavComponent && <Dynamic component={NavComponent} />}
      </div>
    </PresentationContext.Provider>
  )
}

export function Presentation(props: PresentationProps) {
  if (props.router === null) {
    return <PresentationInner {...props} />
  }

  if (props.router === 'memory') {
    return (
      <MemoryRouter root={() => <PresentationInner {...props} />} />
    )
  }

  return (
    <HashRouter root={() => <PresentationInner {...props} />} />
  )
}

import { Component, createMemo } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { SlideIndexContext } from '../context/SlideIndexContext'
import type { SlideEntry } from '../types'

function resolveComponent(entry: SlideEntry): Component {
  return typeof entry === 'function' ? entry : entry.component
}

interface SlideRendererProps {
  slides: SlideEntry[]
  currentSlide: number
}

export function SlideRenderer(props: SlideRendererProps) {
  const component = createMemo(() => resolveComponent(props.slides[props.currentSlide]))

  return (
    <SlideIndexContext.Provider value={() => props.currentSlide}>
      <div class="slide-content" style={{ 'view-transition-name': 'slide-content' }}>
        <Dynamic component={component()} />
      </div>
    </SlideIndexContext.Provider>
  )
}

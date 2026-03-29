import { Presentation } from 'solid-slides'
import type { SlideEntry } from 'solid-slides'
import { AtprotoTitle } from './slides/atproto/01-Title'
import { AtprotoExplainer } from './slides/atproto/02-Atproto'
import { WhatPdsDoes } from './slides/atproto/03-WhatPdsDoes'
import { NormalWay } from './slides/atproto/04-NormalWay'
import { InsaneWay } from './slides/atproto/05-InsaneWay'
import { DurableObjectsSlide } from './slides/atproto/06-DurableObjects'
import { TradeoffsSlide } from './slides/atproto/07-Tradeoffs'
import { FinSlide } from './slides/atproto/08-Fin'

const slides: SlideEntry[] = [
  AtprotoTitle,
  AtprotoExplainer,
  WhatPdsDoes,
  NormalWay,
  { component: InsaneWay, transition: 'zoom' },
  DurableObjectsSlide,
  { component: TradeoffsSlide, transition: 'slide' },
  { component: FinSlide, transition: 'fade' },
]

export default function App() {
  return (
    <Presentation
      slides={slides}
      transition="slide"
      stepTransition="fade"
    />
  )
}

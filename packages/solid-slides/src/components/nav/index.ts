import type { Component } from 'solid-js'
import type { NavVariant } from '../../types'
import { Counter } from './Counter'
import { Bar } from './Bar'
import { Dots } from './Dots'
import { Arrows } from './Arrows'

export { Counter, Bar, Dots, Arrows }

const variants: Record<NavVariant, Component | null> = {
  counter: Counter,
  bar: Bar,
  dots: Dots,
  arrows: Arrows,
  none: null,
}

export function resolveNav(nav: NavVariant | Component | undefined): Component | null {
  if (nav === undefined) return Counter
  if (typeof nav === 'function') return nav
  return variants[nav]
}

import type { Component } from "solid-js";
import type { NavVariant } from "../../types";
import { Counter } from "./Counter";
import { SimpleCounter } from "./SimpleCounter";
import { Bar } from "./Bar";
import { Dots } from "./Dots";
import { Arrows } from "./Arrows";
import { Blink } from "./Blink";

export { Counter, Bar, Dots, Arrows, Blink, SimpleCounter };

const variants: Record<NavVariant, Component | null> = {
  counter: Counter,
  simple: SimpleCounter,
  bar: Bar,
  dots: Dots,
  arrows: Arrows,
  blink: Blink,
  none: null,
};

export function resolveNav(
  nav: NavVariant | Component | undefined,
): Component | null {
  if (nav === undefined) return Counter;
  if (typeof nav === "function") return nav;
  return variants[nav];
}

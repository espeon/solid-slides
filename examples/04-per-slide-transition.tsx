// 04-per-slide-transition.tsx
// Wrap a slide in { component, transition } to override the deck-level
// default for that one slide. Useful when a specific slide deserves a
// different feel — e.g. a "big reveal" that zooms in instead of fading.

import type { JSX } from "solid-js";
import { Presentation, type SlideEntry, type TransitionType } from "solid-slides";
import { c, center } from "./styles";

const DeckTransition: TransitionType = "fade";

const cardStyle = (borderColor: string): JSX.CSSProperties => ({
  ...center,
  border: `2px solid ${borderColor}`,
  margin: "2rem",
  "border-radius": "1.5rem",
});

const Title = () => (
  <div style={cardStyle(c.border)}>
    <h1 style={{ "font-size": "clamp(2rem, 4vw, 4rem)", margin: 0, "font-weight": 600 }}>
      Fades in <span style={{ color: c.muted }}>(default)</span>
    </h1>
  </div>
);

const BigReveal = () => (
  <div style={cardStyle(c.accent)}>
    <h1 style={{ "font-size": "clamp(2rem, 4vw, 4rem)", margin: 0, "font-weight": 600 }}>
      Zooms in <span style={{ color: c.accent }}>(override)</span>
    </h1>
  </div>
);

const Slidy = () => (
  <div style={cardStyle(c.soft)}>
    <h1 style={{ "font-size": "clamp(2rem, 4vw, 4rem)", margin: 0, "font-weight": 600 }}>
      Slides in <span style={{ color: c.muted }}>(override)</span>
    </h1>
  </div>
);

const slides: SlideEntry[] = [
  Title,
  { component: BigReveal, transition: "zoom" },
  { component: Slidy, transition: "slide" },
];

export default function App() {
  return <Presentation slides={slides} transition={DeckTransition} nav="counter" />;
}

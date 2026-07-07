// 04-per-slide-transition.tsx
// Wrap a slide in { component, transition } to override the default
// transition for that one slide. Useful when a specific slide deserves
// a different feel — e.g. a "big reveal" that zooms in instead of sliding.

import { Presentation, type SlideEntry, type TransitionType } from "solid-slides";

const Slide: TransitionType = "slide";

const Title = () => (
  <div style={{ display: "flex", "align-items": "center", "justify-content": "center", height: "100%", "background": "#0a0a0a", color: "white" }}>
    <h1 style={{ "font-size": "4rem", margin: 0 }}>Plain slide</h1>
  </div>
);

const BigReveal = () => (
  <div style={{ display: "flex", "align-items": "center", "justify-content": "center", height: "100%", "background": "#0a0a0a", color: "white" }}>
    <h1 style={{ "font-size": "4rem", margin: 0 }}>Zoomed reveal</h1>
  </div>
);

const Soft = () => (
  <div style={{ display: "flex", "align-items": "center", "justify-content": "center", height: "100%", "background": "#0a0a0a", color: "white" }}>
    <h1 style={{ "font-size": "4rem", margin: 0 }}>Soft fade</h1>
  </div>
);

const slides: SlideEntry[] = [
  Title,
  { component: BigReveal, transition: "zoom" },
  { component: Soft, transition: "fade" },
];

export default function App() {
  return <Presentation slides={slides} transition={Slide} nav="counter" />;
}

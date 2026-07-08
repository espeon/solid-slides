// 02-steps.tsx
// useSteps(n) declares that a slide has n sub-steps. The returned accessor
// is a 0-based reactive number. Pair it with <Step> for a no-layout-shift
// fade, or with <Show> for a hard reveal.
//
// Keyboard: space / → advances to the next step, then the next slide.
// URL: ?step=N persists the current step on this slide.

import { Show, type JSX } from "solid-js";
import { Presentation, Step, useSteps, type SlideEntry } from "solid-slides";
import { c, center } from "./styles";

const slideStyle: JSX.CSSProperties = {
  padding: "clamp(2rem, 5vw, 5rem)",
  height: "100%",
  background: c.bg,
  color: c.fg,
  "box-sizing": "border-box",
  display: "flex",
  "flex-direction": "column",
  "justify-content": "center",
};

const Reveal = () => {
  const step = useSteps(3);

  return (
    <div style={slideStyle}>
      <h2 style={{ "font-size": "clamp(1.75rem, 3.5vw, 3.5rem)", margin: "0 0 2rem", "font-weight": 600 }}>
        Step {step() + 1} of 3
      </h2>

      <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
        <Step when={step() >= 1}>
          <span style={{ "font-size": "clamp(1.1rem, 1.6vw, 1.6rem)", color: c.fg }}>
            First reveal (fades in at step 1)
          </span>
        </Step>
        <Step when={step() >= 2}>
          <span style={{ "font-size": "clamp(1.1rem, 1.6vw, 1.6rem)", color: c.fg }}>
            Second reveal (fades in at step 2)
          </span>
        </Step>
        <Step when={step() >= 3}>
          <span style={{ "font-size": "clamp(1.1rem, 1.6vw, 1.6rem)", color: c.fg }}>
            Final reveal (fades in at step 3)
          </span>
        </Step>
      </div>

      <Show when={step() === 0}>
        <p style={{ "margin-top": "2rem", color: c.muted }}>
          Press → or space to reveal the next bullet.
        </p>
      </Show>
    </div>
  );
};

const End = () => (
  <div style={center}>
    <p style={{ "font-size": "clamp(1.25rem, 2vw, 2rem)", color: c.muted }}>
      That's the whole deck.
    </p>
  </div>
);

const slides: SlideEntry[] = [Reveal, End];

export default function App() {
  return <Presentation slides={slides} nav="counter" />;
}

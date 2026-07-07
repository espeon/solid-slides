// 02-steps.tsx
// useSteps(n) declares that a slide has n sub-steps. The returned accessor
// is a 0-based reactive number. Pair it with <Step> for a no-layout-shift
// fade, or with <Show> for a hard reveal.
//
// Keyboard: space / → advances to the next step, then the next slide.
// URL: ?step=N persists the current step on this slide.

import { Show } from "solid-js";
import { Presentation, Step, useSteps, type SlideEntry } from "solid-slides";

const Reveal = () => {
  const step = useSteps(3);

  return (
    <div style={{ padding: "4rem", height: "100%", background: "#0a0a0a", color: "white", "box-sizing": "border-box" }}>
      <h2 style={{ "font-size": "2.5rem", "margin-bottom": "2rem" }}>
        Step {step() + 1} of 3
      </h2>

      <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
        <Step when={step() >= 1}>First reveal (fades in at step 1)</Step>
        <Step when={step() >= 2}>Second reveal (fades in at step 2)</Step>
        <Step when={step() >= 3}>Final reveal (fades in at step 3)</Step>
      </div>

      <Show when={step() === 0}>
        <p style={{ "margin-top": "2rem", opacity: 0.6 }}>
          Press → or space to reveal the next bullet.
        </p>
      </Show>
    </div>
  );
};

const End = () => (
  <div style={{ display: "flex", "align-items": "center", "justify-content": "center", height: "100%", "background": "#0a0a0a", color: "white" }}>
    <p>That's the whole deck.</p>
  </div>
);

const slides: SlideEntry[] = [Reveal, End];

export default function App() {
  return <Presentation slides={slides} nav="counter" />;
}

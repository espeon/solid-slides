// 01-minimal.tsx
// The smallest useful Presentation. Two slides, no steps, no per-slide params.
// Drop this in your App.tsx and you have a working deck.
//
// Keyboard: arrow keys, space, Home/End. URL: ?slide=N.

import { Presentation, usePresentationContext } from "solid-slides";

const Title = () => (
  <div style={{ display: "flex", "align-items": "center", "justify-content": "center", height: "100%", "background": "#0a0a0a", color: "white" }}>
    <h1 style={{ "font-size": "4rem", margin: 0 }}>Hello</h1>
  </div>
);

const Body = () => {
  const { totalSlides } = usePresentationContext();
  return (
    <div style={{ display: "flex", "align-items": "center", "justify-content": "center", height: "100%", "background": "#0a0a0a", color: "white" }}>
      <p style={{ "font-size": "1.25rem" }}>
        A {totalSlides()}-slide deck. Refresh and you'll be back here.
      </p>
    </div>
  );
};

export default function App() {
  return <Presentation slides={[Title, Body]} nav="dots" />;
}

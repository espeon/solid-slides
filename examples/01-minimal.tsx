// 01-minimal.tsx
// The smallest useful Presentation. Two slides, no steps, no per-slide params.
// Drop this in your App.tsx and you have a working deck.
//
// Keyboard: arrow keys, space, Home/End. URL: ?slide=N.

import { Presentation, usePresentationContext } from "solid-slides";
import { c, center } from "./styles";

const Title = () => (
  <div style={center}>
    <h1 style={{ "font-size": "clamp(2.5rem, 5vw, 5rem)", margin: 0, "font-weight": 600 }}>
      Hello
    </h1>
  </div>
);

const Body = () => {
  const { totalSlides } = usePresentationContext();
  return (
    <div style={center}>
      <p style={{ "font-size": "clamp(1.1rem, 1.6vw, 1.6rem)", color: c.muted }}>
        A {totalSlides()}-slide deck. Refresh and you'll be back here.
      </p>
    </div>
  );
};

export default function App() {
  return <Presentation slides={[Title, Body]} nav="dots" />;
}

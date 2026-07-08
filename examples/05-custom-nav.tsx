// 05-custom-nav.tsx
// Pass a Solid component to the `nav` prop to replace the built-in nav.
// Your component receives no props — read state from usePresentationContext.

import { Show, type JSX } from "solid-js";
import {
  Presentation,
  usePresentationContext,
  type SlideEntry,
} from "solid-slides";
import { c, center } from "./styles";

function PillNav() {
  const { currentSlide, totalSlides, next, prev, isFirst, isLast, goTo } =
    usePresentationContext();

  return (
    <nav
      style={{
        position: "fixed",
        bottom: "1.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "0.5rem",
        alignItems: "center",
        background: c.elevated,
        "backdrop-filter": "blur(10px)",
        border: `1px solid ${c.border}`,
        padding: "0.4rem 0.5rem",
        "border-radius": "9999px",
        "z-index": 50,
      }}
    >
      <button
        onClick={prev}
        disabled={isFirst()}
        style={{
          background: "transparent",
          color: c.fg,
          border: "none",
          padding: "0.4rem 0.8rem",
          cursor: "pointer",
          "border-radius": "9999px",
          opacity: isFirst() ? 0.35 : 1,
        }}
      >
        ←
      </button>

      <Show
        when={totalSlides() <= 6}
        fallback={
          <span
            style={{
              color: c.fg,
              padding: "0.4rem 0.6rem",
              "font-variant-numeric": "tabular-nums",
              opacity: 0.7,
            }}
          >
            {currentSlide() + 1} / {totalSlides()}
          </span>
        }
      >
        {Array.from({ length: totalSlides() }).map((_, i) => (
          <button
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: "8px",
              height: "8px",
              "border-radius": "9999px",
              border: "none",
              padding: 0,
              cursor: "pointer",
              background: currentSlide() === i ? c.accent : c.subtle,
              transition: "background 0.2s",
            }}
          />
        ))}
      </Show>

      <button
        onClick={next}
        disabled={isLast()}
        style={{
          background: "transparent",
          color: c.fg,
          border: "none",
          padding: "0.4rem 0.8rem",
          cursor: "pointer",
          "border-radius": "9999px",
          opacity: isLast() ? 0.35 : 1,
        }}
      >
        →
      </button>
    </nav>
  );
}

const slideStyle: JSX.CSSProperties = {
  padding: "clamp(2rem, 5vw, 5rem)",
  background: c.bg,
  color: c.fg,
  height: "100%",
  "box-sizing": "border-box",
  display: "flex",
  "flex-direction": "column",
  "justify-content": "center",
};

const slides: SlideEntry[] = [
  () => (
    <div style={slideStyle}>
      <h1 style={{ "font-size": "clamp(2rem, 4vw, 4rem)", margin: 0 }}>Custom nav</h1>
    </div>
  ),
  () => (
    <div style={slideStyle}>
      <h1 style={{ "font-size": "clamp(2rem, 4vw, 4rem)", margin: "0 0 1rem" }}>
        Switches layout
      </h1>
      <p style={{ color: c.muted, "font-size": "clamp(1rem, 1.4vw, 1.4rem)", "max-width": "55ch" }}>
        Shows a counter fallback when there are more than 6 slides.
      </p>
    </div>
  ),
  () => (
    <div style={slideStyle}>
      <h1 style={{ "font-size": "clamp(2rem, 4vw, 4rem)", margin: "0 0 1rem" }}>
        Reads context
      </h1>
      <p style={{ color: c.muted, "font-size": "clamp(1rem, 1.4vw, 1.4rem)", "max-width": "55ch" }}>
        All state comes from usePresentationContext.
      </p>
    </div>
  ),
];

export default function App() {
  return <Presentation slides={slides} nav={PillNav} />;
}

// 05-custom-nav.tsx
// Pass a Solid component to the `nav` prop to replace the built-in nav.
// Your component receives no props — read state from usePresentationContext.

import { Show } from "solid-js";
import { Presentation, usePresentationContext, type SlideEntry } from "solid-slides";

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
        background: "rgba(0,0,0,0.5)",
        "backdrop-filter": "blur(8px)",
        padding: "0.4rem 0.5rem",
        "border-radius": "9999px",
        "z-index": 50,
      }}
    >
      <button
        onClick={prev}
        disabled={isFirst()}
        style={{ background: "transparent", color: "white", border: "none", padding: "0.4rem 0.8rem", cursor: "pointer", "border-radius": "9999px" }}
      >
        ←
      </button>

      <Show when={totalSlides() <= 6} fallback={
        <span style={{ color: "white", padding: "0.4rem 0.6rem", "font-variant-numeric": "tabular-nums" }}>
          {currentSlide() + 1} / {totalSlides()}
        </span>
      }>
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
              background: currentSlide() === i ? "white" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </Show>

      <button
        onClick={next}
        disabled={isLast()}
        style={{ background: "transparent", color: "white", border: "none", padding: "0.4rem 0.8rem", cursor: "pointer", "border-radius": "9999px" }}
      >
        →
      </button>
    </nav>
  );
}

const slides: SlideEntry[] = [
  () => <div style={{ padding: "4rem", background: "#0a0a0a", color: "white", height: "100%", "box-sizing": "border-box" }}><h1>Custom nav</h1></div>,
  () => <div style={{ padding: "4rem", background: "#0a0a0a", color: "white", height: "100%", "box-sizing": "border-box" }}><h1>Switches layout</h1><p>Show fallback when there are more than 6 slides.</p></div>,
  () => <div style={{ padding: "4rem", background: "#0a0a0a", color: "white", height: "100%", "box-sizing": "border-box" }}><h1>Reads context</h1><p>All state comes from usePresentationContext.</p></div>,
];

export default function App() {
  return <Presentation slides={slides} nav={PillNav} />;
}

// 03-slide-param.tsx
// useSlideParam(key, options) is a useState-shaped hook for URL search
// params scoped to the current slide. The param is removed from the URL
// automatically when you leave the slide (unless persistent: true).
//
// This example also shows the typed form: pass a type parameter and a
// parse function to narrow the raw URL string.

import { For } from "solid-js";
import { Presentation, useSlideParam, type SlideEntry } from "solid-slides";
import { c, center } from "./styles";

type Filter = "all" | "frontend" | "backend";

const filters: readonly Filter[] = ["all", "frontend", "backend"] as const;

const items = [
  { label: "SolidJS reactivity", tag: "frontend" as const },
  { label: "URL search params", tag: "backend" as const },
  { label: "View Transitions", tag: "frontend" as const },
  { label: "TypeScript types", tag: "frontend" as const },
  { label: "Routing", tag: "backend" as const },
];

const FilterSlide = () => {
  const [filter, setFilter] = useSlideParam<Filter>("filter", {
    defaultValue: "all",
    parse: (raw) => (filters.includes(raw as Filter) ? (raw as Filter) : "all"),
  });

  const visible = () =>
    filter() === "all" ? items : items.filter((i) => i.tag === filter());

  return (
    <div
      style={{
        padding: "clamp(2rem, 5vw, 5rem)",
        height: "100%",
        background: c.bg,
        color: c.fg,
        "box-sizing": "border-box",
      }}
    >
      <h2 style={{ "font-size": "clamp(1.75rem, 3.5vw, 3.5rem)", margin: "0 0 1.5rem", "font-weight": 600 }}>
        Filter the list
      </h2>

      <div style={{ display: "flex", gap: "0.5rem", "margin-bottom": "1.5rem" }}>
        <For each={filters}>
          {(f) => (
            <button
              onClick={() => setFilter(f)}
              style={{
                padding: "0.4rem 0.9rem",
                "border-radius": "9999px",
                border: `1px solid ${filter() === f ? c.accent : c.border}`,
                cursor: "pointer",
                background: filter() === f ? c.accent : c.elevated,
                color: filter() === f ? c.bg : c.muted,
                "font-weight": 500,
              }}
            >
              {f}
            </button>
          )}
        </For>
      </div>

      <ul style={{ "list-style": "none", padding: 0, display: "grid", "grid-template-columns": "repeat(2, 1fr)", gap: "0.75rem", "max-width": "50rem" }}>
        <For each={visible()}>
          {(item) => (
            <li
              style={{
                background: c.elevated,
                border: `1px solid ${c.border}`,
                padding: "0.75rem 1rem",
                "border-radius": "0.75rem",
              }}
            >
              <div style={{ color: c.fg, "font-weight": 500 }}>{item.label}</div>
              <div style={{ "font-size": "0.75rem", color: c.subtle, "margin-top": "0.25rem" }}>
                {item.tag}
              </div>
            </li>
          )}
        </For>
      </ul>

      <p style={{ "margin-top": "1.5rem", "font-size": "0.85rem", color: c.muted }}>
        URL: <span style={{ color: c.accent }}>?filter={filter()}</span> (cleared when you leave this slide)
      </p>
    </div>
  );
};

const Outro = () => (
  <div style={center}>
    <p style={{ "font-size": "clamp(1.1rem, 1.6vw, 1.6rem)", color: c.muted }}>
      The ?filter param was cleared on the way here.
    </p>
  </div>
);

const slides: SlideEntry[] = [FilterSlide, Outro];

export default function App() {
  return <Presentation slides={slides} nav="counter" />;
}

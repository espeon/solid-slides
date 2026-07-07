// 03-slide-param.tsx
// useSlideParam(key, options) is a useState-shaped hook for URL search
// params scoped to the current slide. The param is removed from the URL
// automatically when you leave the slide (unless persistent: true).
//
// This example also shows the typed form: pass a type parameter and a
// parse function to narrow the raw URL string.

import { For } from "solid-js";
import { Presentation, useSlideParam, type SlideEntry } from "solid-slides";

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
    <div style={{ padding: "4rem", height: "100%", background: "#0a0a0a", color: "white", "box-sizing": "border-box" }}>
      <h2 style={{ "font-size": "2rem", "margin-bottom": "1.5rem" }}>Filter the list</h2>

      <div style={{ display: "flex", gap: "0.5rem", "margin-bottom": "1.5rem" }}>
        <For each={filters}>
          {(f) => (
            <button
              onClick={() => setFilter(f)}
              style={{
                padding: "0.4rem 0.9rem",
                "border-radius": "9999px",
                border: "none",
                cursor: "pointer",
                background: filter() === f ? "#06b6d4" : "#27272a",
                color: filter() === f ? "white" : "#a1a1aa",
              }}
            >
              {f}
            </button>
          )}
        </For>
      </div>

      <ul style={{ "list-style": "none", padding: 0, display: "grid", "grid-template-columns": "repeat(2, 1fr)", gap: "0.75rem" }}>
        <For each={visible()}>
          {(item) => (
            <li style={{ background: "#18181b", padding: "0.75rem 1rem", "border-radius": "0.5rem" }}>
              <div>{item.label}</div>
              <div style={{ "font-size": "0.75rem", opacity: 0.5, "font-family": "monospace" }}>{item.tag}</div>
            </li>
          )}
        </For>
      </ul>

      <p style={{ "margin-top": "1.5rem", "font-family": "monospace", "font-size": "0.85rem", opacity: 0.5 }}>
        URL: ?filter={filter()} (cleared when you leave this slide)
      </p>
    </div>
  );
};

const Outro = () => (
  <div style={{ display: "flex", "align-items": "center", "justify-content": "center", height: "100%", background: "#0a0a0a", color: "white" }}>
    <p>The ?filter param was cleared on the way here.</p>
  </div>
);

const slides: SlideEntry[] = [FilterSlide, Outro];

export default function App() {
  return <Presentation slides={slides} nav="counter" />;
}

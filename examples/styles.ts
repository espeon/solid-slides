// Shared example styling tokens.
// These mirror the demo's design system but are hardcoded so each example
// stays copy-pasteable without pulling in the demo's Tailwind config.

import type { JSX } from "solid-js";

export const c = {
  bg: "oklch(0.145 0.012 35)",
  elevated: "oklch(0.19 0.014 35)",
  soft: "oklch(0.24 0.016 35)",
  fg: "oklch(0.96 0.006 35)",
  muted: "oklch(0.62 0.015 35)",
  subtle: "oklch(0.45 0.018 35)",
  accent: "oklch(0.64 0.15 35)",
  border: "oklch(0.28 0.018 35)",
};

export const center: JSX.CSSProperties = {
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
  height: "100%",
  background: c.bg,
  color: c.fg,
  "box-sizing": "border-box",
};

export const stack: JSX.CSSProperties = {
  display: "flex",
  "flex-direction": "column",
  gap: "1.5rem",
};

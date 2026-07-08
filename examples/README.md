# examples

Focused, copy-paste-ready snippets for `solid-slides`. One concept per file.

## Files

| File | Concept |
| --- | --- |
| `01-minimal.tsx` | Bare `<Presentation>` with two slides |
| `02-steps.tsx` | `useSteps(n)` paired with `<Step>` and `<Show>` |
| `03-slide-param.tsx` | Typed `useSlideParam` with a `parse` function |
| `04-per-slide-transition.tsx` | `SlideDefinition` with a per-slide transition override |
| `05-custom-nav.tsx` | A custom nav component built from `usePresentationContext` |

## Running

These are meant to be dropped into a Solid app, not run as a standalone app. To try one in this repo, replace the import in `src/App.tsx`:

```tsx
// Before
import Example from "./slides/.../...";

// After
import Example from "../examples/02-steps";
```

Then `pnpm dev` from the workspace root.

## Using in your own project

Each file is a Solid component default-exported as `App`. The simplest setup is a Vite + Solid project:

```bash
pnpm create solid
pnpm add solid-slides @solidjs/router solid-js
```

Then in `src/App.tsx`:

```tsx
import Example from "./examples/02-steps";
export default Example;
```

Each example imports a small `styles.ts` file in this folder for colors and layout helpers. If you copy an example into your own project, either copy `styles.ts` alongside it or replace the imported values with your own palette.

The styling uses warm OKLCH values and fluid sizing so the examples look polished without requiring Tailwind.

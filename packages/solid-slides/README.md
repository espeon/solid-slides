# solid-slides

A presentation framework for SolidJS. URL-driven slide and step state, per-slide steps, View Transitions for animation, and composable nav.

```bash
pnpm add solid-slides @solidjs/router solid-js
```

## Quick start

```tsx
import { Presentation } from "solid-slides";

const Title = () => <h1>Hello</h1>;
const Body = () => <p>Two slides, one Presentation.</p>;

export default function App() {
  return <Presentation slides={[Title, Body]} nav="dots" />;
}
```

That renders two slides, with arrow keys, space, and a dot nav. The current slide lives at `?slide=1` in the URL, so a refresh returns you to the same slide.

## What's in the box

- **URL state** for the current slide and step. Deep-linkable, refresh-safe.
- **`useSteps(n)`** for incremental reveals inside a single slide.
- **`useSlideParam(key, options)`** for nuqs-style per-slide URL params. Non-persistent params are auto-cleaned when you leave the slide.
- **View Transitions** for slide-to-slide animation. Three built-in styles, overridable per slide.
- **Six built-in nav variants**, or pass your own component.

## API

### `<Presentation>`

The root component. Wraps the slide list in a router, provides the presentation context, binds keyboard navigation, and renders the chosen nav.

```tsx
<Presentation
  slides={[...]}
  transition="slide"      // "slide" | "fade" | "zoom" | "none", default "slide"
  nav="counter"            // variant name, custom Component, or "none"
  loop={false}             // wrap at the ends
  router="hash"            // "hash" | "memory" | null
/>
```

A slide is either a Solid component or a `{ component, transition? }` object:

```tsx
const slides = [
  TitleSlide,
  { component: BigReveal, transition: "zoom" },
];
```

`router: null` skips the router entirely. URL-driven features (deep linking, `useSlideParam`) become inert, which is useful for embedded previews.

### `useSteps(count)`

Declare that the current slide has `count` sub-steps. Returns a reactive accessor for the current step index.

```tsx
const step = useSteps(3);
return (
  <>
    <Step when={step() >= 1}>First reveal</Step>
    <Step when={step() >= 2}>Second reveal</Step>
  </>
);
```

Call it unconditionally at the top of the slide component.

### `useSlideParam(key, options)`

A `useState`-shaped hook for URL search params scoped to the current slide.

```tsx
const [filter, setFilter] = useSlideParam<"all" | "frontend" | "backend">(
  "filter",
  { defaultValue: "all" }
);
```

By default the param is removed from the URL on navigation away. Set `persistent: true` to keep it across slides. Pass `parse` and `serialize` for non-string values.

### `<Step>`

Like `<Show>` but cross-fades with opacity instead of mounting/unmounting. Children stay in the DOM, so there is no layout shift between states.

```tsx
<Step when={step() >= 1} hiddenOpacity={0.2}>
  Dimmed at step 1, full at step 2.
</Step>
```

### `<StepTransition>`

Wraps content with a `view-transition-name` so the View Transitions API can morph it across step changes.

```tsx
<StepTransition name="code-block">
  <pre>...</pre>
</StepTransition>
```

### Nav

Built-in variants: `"counter"`, `"simple"`, `"bar"`, `"dots"`, `"arrows"`, `"blink"`, `"none"`. Each ships with sensible default styling that you can override in your own CSS.

To roll your own, pass a component and read state from `usePresentationContext`:

```tsx
import { usePresentationContext } from "solid-slides";

function MyNav() {
  const { currentSlide, totalSlides, next, prev } = usePresentationContext();
  return (
    <div>
      <button onClick={prev}>‹</button>
      <span>{currentSlide() + 1} / {totalSlides()}</span>
      <button onClick={next}>›</button>
    </div>
  );
}

<Presentation slides={...} nav={MyNav} />
```

## Examples

The `examples/` directory at the root of this monorepo has focused, runnable snippets, one per concept:

- `01-minimal.tsx` — bare `<Presentation>` with two slides
- `02-steps.tsx` — `useSteps` with `<Step>` reveals
- `03-slide-param.tsx` — typed `useSlideParam` with a parser
- `04-per-slide-transition.tsx` — `SlideDefinition` with a transition override
- `05-custom-nav.tsx` — building your own nav component

To run one, replace the import in this repo's `src/App.tsx` with the example, or copy the example into your own Solid app.

## Browser support

Slide-to-slide animation uses the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API). On browsers without support, navigation still works, it just snaps instead of animating. Everything else (URL state, steps, params, nav) works everywhere.

`document.startViewTransition` is feature-detected at runtime in `useViewTransition.ts`.

## Customization

The package ships its CSS in `src/styles.css`, imported automatically when you import from `solid-slides`. All class names are prefixed with `slides-` or `slide-`. Override them in your own stylesheet after the import:

```css
@import "solid-slides";

.slides-nav {
  background: var(--my-color);
}
```

## Sizing

The deck scales fluidly with the viewport. `.slides-root` sets:

```css
font-size: clamp(1rem, 1.5vmin, 1.5rem);
```

Every nav dimension is in `rem`, so the dots, bar, arrows, and blink all stay proportional to the screen. The deck looks the same at 1080p, 1440p, and 4K (up to 1.5x the user-set base font). On phones and small screens, the user's preferred font-size is respected as a floor, so accessibility settings still apply.

To override the scaling, just set your own `font-size` on `.slides-root` and the rest cascades:

```css
.slides-root {
  font-size: 1.2vw; /* pure vw scaling, no clamp */
}
```

## License

MIT.

import type { Component } from "solid-js";

/**
 * The visual style used when navigating from one slide to another.
 *
 * - `"slide"`: horizontal translate, direction-aware (left for back, right for forward).
 * - `"fade"`: cross-fade. Direction is ignored.
 * - `"zoom"`: scale + opacity. Direction reverses the in/out curves.
 * - `"none"`: no animation. Useful when wrapping slides in your own view transition.
 */
export type TransitionType = "slide" | "fade" | "zoom" | "none";

/**
 * Built-in navigation UI shipped with the package.
 *
 * - `"counter"`: pill with prev/next buttons and a `current / total` readout.
 * - `"simple"`: bare `current / total` text, no buttons.
 * - `"bar"`: full-width progress bar that supports click-to-seek.
 * - `"dots"`: one dot per slide, current dot is wider.
 * - `"arrows"`: large circular prev/next buttons anchored to the viewport sides.
 * - `"blink"`: a single blinking caret near the bottom, fades out on the last slide.
 * - `"none"`: no nav UI.
 *
 * Pass a custom {@link Component} instead of a string to render your own nav.
 */
export type NavVariant =
  | "counter"
  | "simple"
  | "bar"
  | "dots"
  | "arrows"
  | "blink"
  | "none";

/**
 * Rich form of a slide entry, used when a slide needs per-slide configuration.
 *
 * @remarks
 * The bare {@link Component} form is a shortcut for `{ component }`. Use
 * {@link SlideDefinition} whenever you need to override the transition for a
 * single slide or attach metadata for a custom nav component.
 */
export interface SlideDefinition {
  /** The Solid component that renders this slide. */
  component: Component;
  /** Transition used when entering or leaving this slide. Overrides the `transition` prop on `<Presentation>`. */
  transition?: TransitionType;
  /** Reserved for future per-slide step transition. Currently unused. */
  stepTransition?: TransitionType;
  /** Arbitrary data exposed to custom nav components. The package does not read this. */
  meta?: Record<string, unknown>;
}

/**
 * A single slide in a presentation. Either a bare {@link Component} or a
 * {@link SlideDefinition} for per-slide overrides.
 *
 * @example
 * const slides: SlideEntry[] = [
 *   TitleSlide,
 *   { component: BigRevealSlide, transition: "zoom" },
 * ]
 */
export type SlideEntry = Component | SlideDefinition;

/**
 * Props accepted by the {@link Presentation} component.
 */
export interface PresentationProps {
  /** Ordered list of slides. Index 0 is the first slide shown. */
  slides: SlideEntry[];
  /**
   * Default slide-to-slide transition. Individual slides can override this
   * with a {@link SlideDefinition} that sets `transition`.
   * @defaultValue "slide"
   */
  transition?: TransitionType;
  /** Reserved for future use. Currently has no effect. */
  stepTransition?: TransitionType;
  /**
   * Which router to wrap the presentation in.
   *
   * - `"hash"` (default): reads from and writes to the URL hash, so the browser
   *   never reloads. Best for slides embedded in another app.
   * - `"memory"`: in-memory only. The URL does not change. Best for previews
   *   or when the host page owns the URL.
   * - `null`: skip the router entirely. `useSearchParams` will not work and
   *   URL-driven features (deep linking, per-slide params) will be inert.
   *
   * @defaultValue "hash"
   */
  router?: "hash" | "memory" | null;
  /**
   * When `true`, `next()` on the last step wraps to the first slide and
   * `prev()` on the first slide wraps to the last.
   * @defaultValue false
   */
  loop?: boolean;
  /** Extra class names appended to the root `.slides-root` element. */
  class?: string;
  /**
   * Navigation UI. A built-in variant name, a custom component, or `"none"`
   * to render no nav. The custom component receives no props and must read
   * state from {@link usePresentationContext}.
   * @defaultValue "counter"
   */
  nav?: NavVariant | Component;
}

/**
 * Public surface of the presentation context. Available anywhere inside a
 * `<Presentation>` via {@link usePresentationContext}.
 */
export interface PresentationContextValue {
  /** Reactive accessor for the current slide index (0-based). */
  currentSlide: () => number;
  /** Reactive accessor for the current step index within the active slide (0-based). */
  currentStep: () => number;
  /** Reactive accessor for the total number of slides. */
  totalSlides: () => number;
  /**
   * Navigate to a specific slide, optionally at a specific step.
   * Out-of-range indices are clamped unless `loop` is enabled on the
   * `<Presentation>`.
   */
  goTo: (slideIndex: number, step?: number) => void;
  /**
   * Advance to the next step, or the next slide if already on the last step.
   * No-op on the final slide+step unless `loop` is enabled.
   */
  next: () => void;
  /**
   * Go back one step, or to the previous slide's last step if currently at
   * step 0. No-op on slide 0 step 0 unless `loop` is enabled.
   */
  prev: () => void;
  /** `true` when on slide 0, step 0. */
  isFirst: () => boolean;
  /** `true` when on the last slide, at or past its last step. */
  isLast: () => boolean;
}

/**
 * Internal context shape used by the package's own hooks. The `register*`
 * methods exist so `useSteps` and `useSlideParam` can tell the `<Presentation>`
 * about the current slide without prop-drilling.
 *
 * Not exported from the package entry point.
 */
export interface InternalPresentationContextValue extends PresentationContextValue {
  /** Records how many steps a slide has so `next`/`prev`/`isLast` know when to roll over. */
  registerSteps: (slideIndex: number, count: number) => void;
  /**
   * Registers a URL param as owned by a slide. Non-persistent params are
   * cleared from the URL when navigating away from that slide.
   */
  registerSlideParam: (
    slideIndex: number,
    key: string,
    persistent: boolean,
  ) => void;
}

/**
 * Options for {@link useSlideParam}.
 */
export interface UseSlideParamOptions<T = string> {
  /** Returned by the getter when the param is not present in the URL. */
  defaultValue?: T;
  /**
   * If `false` (the default), the param is removed from the URL on navigation
   * away from the slide that registered it. Set to `true` to keep the param
   * across slides.
   * @defaultValue false
   */
  persistent?: boolean;
  /** Custom deserializer. Receives the raw URL string. */
  parse?: (raw: string) => T;
  /** Custom serializer. Receives the value before it is written to the URL. */
  serialize?: (value: T) => string;
}

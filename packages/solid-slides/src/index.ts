/**
 * solid-slides — a presentation framework for SolidJS.
 *
 * The whole API is built around a single root component, {@link Presentation},
 * plus a few small primitives for the things presentations actually need:
 *
 * - **URL state** for the current slide and step. Share a link, refresh the
 *   page, jump straight back to where you were.
 * - **Per-slide steps** via {@link useSteps} for incremental reveals without
 *   leaving the current slide.
 * - **Per-slide URL params** via {@link useSlideParam}, a tiny nuqs-style hook
 *   that cleans itself up when you leave the slide.
 * - **View Transitions** for slide-to-slide animation, with three built-in
 *   styles (`slide`, `fade`, `zoom`) that can be overridden per slide.
 * - **Composable nav**. Six built-in variants, or pass your own component
 *   and read state from {@link usePresentationContext}.
 *
 * @example
 * import { Presentation, useSteps, Step, useSlideParam } from "solid-slides";
 *
 * const Title = () => <h1>Hello</h1>;
 *
 * const Reveal = () => {
 *   const step = useSteps(2);
 *   return (
 *     <>
 *       <Step when={step() >= 1}>First reveal</Step>
 *       <Step when={step() >= 2}>Second reveal</Step>
 *     </>
 *   );
 * };
 *
 * export default function App() {
 *   return <Presentation slides={[Title, Reveal]} nav="dots" />;
 * }
 *
 * @packageDocumentation
 */

import './styles.css'

export { Presentation } from './components/Presentation'
export { Step } from './components/Step'
export { StepTransition } from './components/StepTransition'
export { Counter, Bar, Dots, Arrows, Blink } from './components/nav'
export { usePresentationContext } from './context/PresentationContext'
export { useSteps } from './hooks/useSteps'
export { useSlideParam } from './hooks/useSlideParam'
export type {
  SlideEntry,
  SlideDefinition,
  TransitionType,
  NavVariant,
  PresentationProps,
  PresentationContextValue,
  UseSlideParamOptions,
} from './types'

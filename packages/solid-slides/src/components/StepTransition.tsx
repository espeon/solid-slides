import { JSX, splitProps } from 'solid-js'

interface StepTransitionProps {
  /**
   * The CSS `view-transition-name` to assign to the wrapper. Must be unique
   * on the page (the package reserves `slide-content` and `slides-nav`).
   */
  name: string
  children: JSX.Element
  /** Class names forwarded to the wrapper `<div>`. */
  class?: string
}

/**
 * Wrap a piece of slide content so the View Transitions API animates it
 * independently when the step changes.
 *
 * The package's step transitions are not wired up yet, but the `name` is
 * already attached to the element. Once enabled, two `<StepTransition>`s
 * with the same `name` across a step change will be morphed by the browser
 * instead of being torn down and re-mounted.
 *
 * @example Morph a code block between steps
 * <StepTransition name="code-block">
 *   <pre>const x = 1</pre>
 * </StepTransition>
 *
 * @example
 * // Use the same name in two different versions of the same element so the
 * // browser can morph between them on a step change.
 * <Show when={step() >= 1} fallback={<StepTransition name="title"><h1>One</h1></StepTransition>}>
 *   <StepTransition name="title"><h1>Two</h1></StepTransition>
 * </Show>
 */
export function StepTransition(props: StepTransitionProps) {
  const [local, rest] = splitProps(props, ['name', 'children', 'class'])
  return (
    <div
      class={local.class}
      style={{ 'view-transition-name': local.name }}
      {...rest}
    >
      {local.children}
    </div>
  )
}

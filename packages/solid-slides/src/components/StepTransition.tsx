import { JSX, splitProps } from 'solid-js'

interface StepTransitionProps {
  /** Used as the CSS view-transition-name — must be unique on the page */
  name: string
  children: JSX.Element
  class?: string
}

/**
 * Wraps content that should animate independently during step transitions.
 * Assigns a stable `view-transition-name` so the browser can capture and
 * animate just this element.
 *
 * @example
 * <StepTransition name="code-block">
 *   <pre>...</pre>
 * </StepTransition>
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

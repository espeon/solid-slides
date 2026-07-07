import { JSX, splitProps } from 'solid-js'

interface StepProps {
  /** Whether this step is currently active. While `false`, the content stays in the DOM but fades to the hidden opacity. */
  when: boolean
  children: JSX.Element
  /** Class names forwarded to the wrapper `<div>`. */
  class?: string
  /**
   * Opacity applied while `when` is `false`. Defaults to `0` (fully hidden).
   * Use a value like `0.2` for a "dimmed preview" that is still legible.
   * @defaultValue 0
   */
  hiddenOpacity?: number
}

/**
 * Like `<Show>` but cross-fades with opacity instead of mounting/unmounting.
 *
 * The children stay in the DOM, which means no layout shift between states
 * and no re-mount cost. Useful for incremental reveals inside a single slide.
 *
 * The fade is `0.4s ease`. If you need a different curve, use a plain
 * `<div>` with a CSS transition of your own.
 *
 * @example
 * const step = useSteps(3)
 * return (
 *   <>
 *     <Step when={step() >= 1}>Fades in at step 1</Step>
 *     <Step when={step() >= 2} hiddenOpacity={0.2}>Dimmed at step 2, full at step 3</Step>
 *   </>
 * )
 */
export function Step(props: StepProps) {
  const [local, rest] = splitProps(props, ['when', 'children', 'class', 'hiddenOpacity'])
  return (
    <div
      class={local.class}
      style={{
        opacity: local.when ? '1' : String(local.hiddenOpacity ?? 0),
        transition: 'opacity 0.4s ease',
      }}
      {...rest}
    >
      {local.children}
    </div>
  )
}

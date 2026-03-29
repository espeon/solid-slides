import { JSX, splitProps } from 'solid-js'

interface StepProps {
  when: boolean
  children: JSX.Element
  class?: string
  /** Opacity when not yet revealed. Defaults to 0. Use e.g. 0.2 for a "dimmed preview" effect. */
  hiddenOpacity?: number
}

/**
 * Like <Show> but uses opacity instead of mounting/unmounting.
 * Content stays in the DOM (no layout shift) and fades in smoothly.
 *
 * @example
 * const step = useSteps(3)
 * <Step when={step() >= 1}>Fades in at step 1</Step>
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

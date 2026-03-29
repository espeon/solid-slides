import { Show } from 'solid-js'
import { useSteps } from 'solid-slides'

export function ApiSlide() {
  const step = useSteps(3)

  const blocks = [
    {
      label: 'Mount a presentation',
      code: `<Presentation
  slides={[TitleSlide, FeaturesSlide]}
  transition="slide"
  stepTransition="fade"
/>`,
    },
    {
      label: 'Incremental steps',
      code: `const step = useSteps(3)

<Show when={step() >= 1}>...</Show>
<Show when={step() >= 2}>...</Show>`,
    },
    {
      label: 'Per-slide URL params',
      code: `const [q, setQ] = useSlideParam('q', {
  defaultValue: '',
  persistent: false, // cleaned on nav
})`,
    },
  ]

  return (
    <div class="h-full flex flex-col justify-center bg-zinc-950 text-white p-20 gap-8">
      <div>
        <div class="text-sm uppercase tracking-widest text-emerald-400 font-mono mb-3">API</div>
        <h2 class="text-4xl font-bold tracking-tight">Three primitives</h2>
      </div>

      <div class="flex flex-col gap-4">
        {blocks.map((b, i) => (
          <Show when={step() >= i}>
            <div class="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
              <div class="px-4 py-2 border-b border-zinc-800 text-zinc-400 text-xs font-mono">
                {b.label}
              </div>
              <pre class="px-4 py-3 text-sm text-emerald-300 overflow-x-auto">{b.code}</pre>
            </div>
          </Show>
        ))}
      </div>
    </div>
  )
}

import { Show } from 'solid-js'
import { useSteps } from 'solid-slides'

const features = [
  { icon: '🔗', title: 'URL state', desc: 'Slide + step index live in the URL. Deep-linkable by default.' },
  { icon: '🪜', title: 'Per-slide steps', desc: 'Reveal content incrementally with useSteps(n).' },
  { icon: '✨', title: 'CSS transitions', desc: 'View Transitions API — slide, fade, zoom. Per-slide overrides.' },
  { icon: '🧩', title: 'Composable', desc: 'useSlideParam() for per-slide URL params, auto-cleaned on leave.' },
]

export function FeaturesSlide() {
  const step = useSteps(features.length)

  return (
    <div class="h-full flex flex-col justify-center bg-zinc-950 text-white p-20 gap-10">
      <h2 class="text-4xl font-bold tracking-tight">What's in the box</h2>
      <ul class="grid grid-cols-2 gap-6">
        {features.map((f, i) => (
          <Show when={step() >= i}>
            <li class="flex gap-4 items-start bg-zinc-900 rounded-xl p-5 border border-zinc-800">
              <span class="text-3xl">{f.icon}</span>
              <div>
                <div class="font-semibold text-white">{f.title}</div>
                <div class="text-zinc-400 text-sm mt-1">{f.desc}</div>
              </div>
            </li>
          </Show>
        ))}
      </ul>
    </div>
  )
}

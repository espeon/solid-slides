import { For } from 'solid-js'
import { useSlideParam } from 'solid-slides'

const filters = ['all', 'frontend', 'backend', 'devops'] as const
type Filter = (typeof filters)[number]

const items = [
  { label: 'SolidJS reactivity', tag: 'frontend' },
  { label: 'View Transitions API', tag: 'frontend' },
  { label: 'URL search params', tag: 'backend' },
  { label: 'Vite build pipeline', tag: 'devops' },
  { label: 'TypeScript types', tag: 'frontend' },
  { label: 'pnpm workspaces', tag: 'devops' },
]

export function ParamsSlide() {
  const [filter, setFilter] = useSlideParam<Filter>('filter', { defaultValue: 'all' })

  const visible = () =>
    filter() === 'all' ? items : items.filter((i) => i.tag === filter())

  return (
    <div class="h-full flex flex-col justify-center bg-zinc-950 text-white p-20 gap-8">
      <div>
        <div class="text-sm uppercase tracking-widest text-cyan-400 font-mono mb-3">useSlideParam()</div>
        <h2 class="text-4xl font-bold tracking-tight">Per-slide URL state</h2>
        <p class="text-zinc-400 mt-2">
          Params live in the URL and are cleaned up when you leave the slide.
        </p>
      </div>

      <div class="flex gap-2">
        <For each={filters}>
          {(f) => (
            <button
              onClick={() => setFilter(f)}
              class={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter() === f
                  ? 'bg-cyan-500 text-white'
                  : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
              }`}
            >
              {f}
            </button>
          )}
        </For>
      </div>

      <ul class="grid grid-cols-3 gap-3">
        <For each={visible()}>
          {(item) => (
            <li class="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm">
              <div class="text-white">{item.label}</div>
              <div class="text-zinc-500 text-xs mt-1 font-mono">{item.tag}</div>
            </li>
          )}
        </For>
      </ul>

      <div class="text-zinc-600 text-sm font-mono">
        URL: <span class="text-cyan-400">?slide=3&amp;filter={filter()}</span>
        {' · '}
        <span class="text-zinc-500">navigating away clears ?filter</span>
      </div>
    </div>
  )
}

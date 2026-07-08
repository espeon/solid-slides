import { For } from 'solid-js'
import { useSlideParam } from 'solid-slides'
import {
  SlideLayout,
  Headline,
  Lead,
  Caption,
} from "../components/slides";

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
    <SlideLayout>
      <Headline class="max-w-[18ch]">Per-slide URL state</Headline>
      <Lead class="mt-4 max-w-[55ch]">
        Params live in the URL and are cleaned up when you leave the slide.
      </Lead>

      <div class="flex flex-wrap gap-2 mt-8">
        <For each={filters}>
          {(f) => (
            <button
              onClick={() => setFilter(f)}
              class={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                filter() === f
                  ? 'bg-accent text-fg-inverted border-accent'
                  : 'bg-bg-elevated text-fg-muted border-border hover:border-border-strong hover:text-fg'
              }`}
            >
              {f}
            </button>
          )}
        </For>
      </div>

      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6 max-w-4xl">
        <For each={visible()}>
          {(item) => (
            <li class="bg-bg-elevated border border-border rounded-xl px-5 py-4">
              <div class="text-fg font-medium">{item.label}</div>
              <div class="text-fg-subtle text-xs mt-1 font-sans">{item.tag}</div>
            </li>
          )}
        </For>
      </ul>

      <Caption class="mt-10">
        URL: <span class="text-accent font-medium">?slide=3&amp;filter={filter()}</span>
        {' · '}
        navigating away clears ?filter
      </Caption>
    </SlideLayout>
  )
}

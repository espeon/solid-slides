import { usePresentationContext } from 'solid-slides'

export function FinSlide() {
  const { goTo } = usePresentationContext()

  return (
    <div class="h-full flex flex-col items-center justify-center bg-[#0a0a0f] text-white gap-8 p-20 relative overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.03]"
        style={{
          'background-image': 'radial-gradient(circle, #818cf8 1px, transparent 1px)',
          'background-size': '32px 32px',
        }}
      />
      <div class="relative z-10 flex flex-col gap-6 max-w-xl w-full">
        <h2 class="text-5xl font-bold tracking-tight">Should you do this?</h2>
        <div class="flex flex-col gap-3 text-sm">
          <div class="flex gap-3 text-zinc-300"><span class="text-emerald-400 shrink-0">✓</span> Personal use (1–10 accounts) — DO limits are fine</div>
          <div class="flex gap-3 text-zinc-300"><span class="text-emerald-400 shrink-0">✓</span> Zero ops — <code class="text-orange-300">wrangler deploy</code> and you're federated</div>
          <div class="flex gap-3 text-zinc-300"><span class="text-emerald-400 shrink-0">✓</span> Great learning project — you'll understand ATProto deeply</div>
          <div class="flex gap-3 text-zinc-500"><span class="text-rose-500 shrink-0">✗</span> Multi-user hosting or large repos — use a real server</div>
          <div class="flex gap-3 text-zinc-500"><span class="text-rose-500 shrink-0">✗</span> Anything that needs account migration — still awkward</div>
        </div>
        <div class="flex gap-3 mt-2">
          <a
            href="https://github.com/skyware-js/pds"
            target="_blank"
            rel="noopener"
            class="px-4 py-2 bg-indigo-500/15 border border-indigo-500/25 rounded-lg text-indigo-300 text-sm hover:bg-indigo-500/25 transition-colors font-mono"
          >
            skyware-js/pds
          </a>
          <a
            href="https://atproto.com/guides/self-hosting"
            target="_blank"
            rel="noopener"
            class="px-4 py-2 bg-zinc-800/60 border border-zinc-700 rounded-lg text-zinc-400 text-sm hover:bg-zinc-700/60 transition-colors font-mono"
          >
            atproto.com/guides/self-hosting
          </a>
        </div>
        <button
          onClick={() => goTo(0)}
          class="text-zinc-700 text-xs hover:text-zinc-500 transition-colors font-mono text-left mt-2"
        >
          ↩ back to start
        </button>
      </div>
    </div>
  )
}

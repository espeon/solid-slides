import { useSteps, Step } from 'solid-slides'

const pairs = [
  ['Single-writer append-only log', 'Single-instance actor — all writes serialised'],
  ['Consistent CID chain per commit', 'Transactional KV storage, atomic per-object'],
  ['Durable MST node storage', 'Persistent across evictions, survives cold starts'],
  ['WebSocket firehose', 'WebSocket hibernation API — free while idle'],
]

export function DurableObjectsSlide() {
  const step = useSteps(pairs.length)

  return (
    <div class="h-full flex flex-col justify-center bg-[#0a0a0f] text-white p-20 gap-10">
      <div>
        <div class="text-sm uppercase tracking-widest text-orange-400 font-mono mb-2">Why it works</div>
        <h2 class="text-4xl font-bold tracking-tight">The repo needs exactly what DOs give</h2>
      </div>
      <div class="flex flex-col gap-3">
        <div class="grid grid-cols-2 gap-x-8 text-xs uppercase tracking-widest text-zinc-600 font-mono mb-1">
          <span>ATProto repo needs</span>
          <span>Durable Object gives</span>
        </div>
        {pairs.map(([need, gives], i) => (
          <Step when={step() >= i}>
            <div class="grid grid-cols-2 gap-x-8 text-sm py-2 border-t border-zinc-800/60">
              <span class="text-zinc-300">{need}</span>
              <span class="text-orange-300">{gives}</span>
            </div>
          </Step>
        ))}
      </div>
      <Step when={step() >= 3}>
        <div class="font-mono text-xs bg-zinc-900/60 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-400">
          <span class="text-orange-400">export class</span> AtprotoRepo <span class="text-orange-400">extends</span> DurableObject {'{'}<br />
          {'  '}<span class="text-zinc-500">// this.ctx.storage holds the entire MST, keyed by CID</span><br />
          {'  '}<span class="text-zinc-500">// WebSocket subscribers stay connected via hibernation</span><br />
          {'}'}
        </div>
      </Step>
    </div>
  )
}

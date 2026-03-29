import { useSteps, Step } from 'solid-slides'

const works = [
  'XRPC endpoints — just HTTP handlers in a Worker',
  'MST commits — DO storage keyed by CID, writes serialised',
  'Blob upload — streams straight to R2, CID stored in repo',
  'DID resolution — /.well-known/did.json served from Worker edge',
]

const cursed = [
  'Firehose WebSocket — DO hibernation saves you, but barely',
  'CAR export — streaming a large repo hits DO memory limits fast',
  'Account migration — full repo export from DO storage is awkward',
  'Storage limits — 128KB per value, 1GB total per DO',
]

export function TradeoffsSlide() {
  const step = useSteps(2)

  return (
    <div class="h-full flex flex-col justify-center bg-[#0a0a0f] text-white p-20 gap-8">
      <div>
        <div class="text-sm uppercase tracking-widest text-rose-400 font-mono mb-2">Reality check</div>
        <h2 class="text-4xl font-bold tracking-tight">Tradeoffs</h2>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <div class="flex flex-col gap-3">
          <div class="text-xs uppercase tracking-widest text-emerald-500/60 font-mono mb-1">Works well</div>
          <Step when={step() >= 0}>
            {works.map((item) => (
              <div class="flex gap-2 text-sm text-zinc-300 mb-2">
                <span class="text-emerald-500 shrink-0">✓</span>
                {item}
              </div>
            ))}
          </Step>
        </div>
        <div class="flex flex-col gap-3">
          <div class="text-xs uppercase tracking-widest text-rose-500/60 font-mono mb-1">Cursed</div>
          <Step when={step() >= 1}>
            {cursed.map((item) => (
              <div class="flex gap-2 text-sm text-zinc-400 mb-2">
                <span class="text-rose-500 shrink-0">⚠</span>
                {item}
              </div>
            ))}
          </Step>
        </div>
      </div>
    </div>
  )
}

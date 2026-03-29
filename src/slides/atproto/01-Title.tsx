export function AtprotoTitle() {
  return (
    <div class="h-full flex flex-col items-center justify-center bg-[#0a0a0f] text-white gap-6 p-16 relative overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.04]"
        style={{
          'background-image':
            'linear-gradient(#818cf8 1px, transparent 1px), linear-gradient(90deg, #818cf8 1px, transparent 1px)',
          'background-size': '40px 40px',
        }}
      />
      <div class="relative z-10 flex flex-col items-center gap-6 text-center">
        <div class="flex items-center gap-2 text-sm uppercase tracking-widest text-indigo-400 font-mono">
          <span class="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          cloudflare workers
        </div>
        <h1 class="text-6xl font-bold tracking-tight leading-tight">
          Running an ATProto PDS<br />
          <span class="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
            on the edge
          </span>
        </h1>
        <p class="text-xl text-zinc-400 max-w-xl">
          Durable Objects, the Merkle Search Tree, and why this probably shouldn't work — but does.
        </p>
      </div>
    </div>
  )
}

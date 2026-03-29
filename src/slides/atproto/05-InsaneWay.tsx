import { useSteps, Step } from 'solid-slides'

export function InsaneWay() {
  const step = useSteps(3)

  return (
    <div class="h-full flex flex-col justify-center bg-[#0a0a0f] text-white p-20 gap-8">
      <div>
        <div class="text-sm uppercase tracking-widest text-orange-400 font-mono mb-2">Option B</div>
        <h2 class="text-4xl font-bold tracking-tight">
          The{' '}
          <span class="bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">insane</span>
          {' '}way
        </h2>
      </div>
      <div class="font-mono text-sm bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 leading-7">
        <div class="text-zinc-500"># wrangler.toml</div>
        <div><span class="text-orange-400">name</span> = <span class="text-emerald-400">"my-pds"</span></div>
        <div><span class="text-orange-400">main</span> = <span class="text-emerald-400">"src/index.ts"</span></div>
        <Step when={step() >= 0}>
          <div class="mt-3 text-zinc-500">[[durable_objects.bindings]]</div>
          <div><span class="text-orange-400">name</span> = <span class="text-emerald-400">"REPO"</span>         <span class="text-zinc-600"># one DO per DID</span></div>
          <div><span class="text-orange-400">name</span> = <span class="text-emerald-400">"SESSIONS"</span>     <span class="text-zinc-600"># auth state</span></div>
        </Step>
        <Step when={step() >= 1}>
          <div class="mt-3 text-zinc-500">[[r2_buckets]]</div>
          <div><span class="text-orange-400">binding</span> = <span class="text-emerald-400">"BLOBS"</span>     <span class="text-zinc-600"># images, video</span></div>
        </Step>
        <Step when={step() >= 2}>
          <div class="mt-3 text-zinc-500">[[kv_namespaces]]</div>
          <div><span class="text-orange-400">binding</span> = <span class="text-emerald-400">"DID_CACHE"</span> <span class="text-zinc-600"># resolved DIDs</span></div>
        </Step>
      </div>
      <Step when={step() >= 2}>
        <p class="text-zinc-400 text-sm">
          No server. No database to provision.{' '}
          <span class="text-orange-400">wrangler deploy</span> and you're federated.
        </p>
      </Step>
    </div>
  )
}

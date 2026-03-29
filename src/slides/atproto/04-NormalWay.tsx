export function NormalWay() {
  return (
    <div class="h-full flex flex-col justify-center bg-[#0a0a0f] text-white p-20 gap-10">
      <div>
        <div class="text-sm uppercase tracking-widest text-zinc-500 font-mono mb-2">Option A</div>
        <h2 class="text-4xl font-bold tracking-tight">The normal way</h2>
      </div>
      <div class="flex flex-col gap-3 text-sm">
        {[
          ['VPS', 'A Hetzner CAX11 or whatever. ~€4/mo. You manage it forever.'],
          ['SQLite / PG', 'The reference PDS ships with SQLite. Fine for personal use.'],
          ['pds binary', 'The official TypeScript impl. Node process, needs babysitting.'],
          ['S3-compatible', 'For blobs. The reference impl supports S3, Cloudflare R2, etc.'],
        ].map(([label, detail]) => (
          <div class="flex items-baseline gap-4">
            <span class="text-zinc-500 font-mono w-28 shrink-0">{label}</span>
            <span class="text-zinc-300">{detail}</span>
          </div>
        ))}
      </div>
      <div class="flex flex-col gap-2 text-sm text-zinc-500">
        <div><span class="text-emerald-500">✓</span> Works great. Solid, well-documented, actively maintained.</div>
        <div><span class="text-emerald-500">✓</span> Full firehose, blob storage, account migration — all of it.</div>
        <div><span class="text-zinc-700">–</span> You own a server now. Ops, backups, uptime. Congrats.</div>
      </div>
    </div>
  )
}

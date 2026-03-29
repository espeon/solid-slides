import { useSteps, Step } from 'solid-slides'

const responsibilities = [
  { label: 'Identity', detail: 'Serves /.well-known/did.json, handles DID doc key rotation.' },
  { label: 'Auth', detail: 'OAuth 2 + DPoP. Issues access/refresh tokens scoped to sessions.' },
  { label: 'Repo CRUD', detail: 'com.atproto.repo.* XRPC endpoints. Creates signed MST commits.' },
  { label: 'Blob storage', detail: 'uploadBlob stores images/video, returns a CID reference.' },
  { label: 'Firehose', detail: '/xrpc/com.atproto.sync.subscribeRepos — WebSocket emitting every commit.' },
]

export function WhatPdsDoes() {
  const step = useSteps(responsibilities.length)

  return (
    <div class="h-full flex flex-col justify-center bg-[#0a0a0f] text-white p-20 gap-10">
      <div>
        <div class="text-sm uppercase tracking-widest text-sky-400 font-mono mb-2">PDS</div>
        <h2 class="text-4xl font-bold tracking-tight">What your PDS actually does</h2>
      </div>
      <div class="flex flex-col gap-4">
        {responsibilities.map((r, i) => (
          <Step when={step() >= i}>
            <div class="flex items-baseline gap-4">
              <span class="text-sky-400 font-mono text-sm w-28 shrink-0">{r.label}</span>
              <span class="text-zinc-300 text-sm">{r.detail}</span>
            </div>
          </Step>
        ))}
      </div>
      <Step when={step() >= 4}>
        <p class="text-amber-500/70 text-sm">
          The firehose is the spicy one — every relay in the world will try to connect to it.
        </p>
      </Step>
    </div>
  )
}

import { useSteps, Step } from 'solid-slides'

const concepts = [
  { term: 'DID', desc: 'Your identity. did:plc:xyz or did:web:you.com — stable across server moves.' },
  { term: 'Repo', desc: 'A signed, content-addressed Merkle tree of all your records, hosted on your PDS.' },
  { term: 'Lexicon', desc: 'Typed schemas for record kinds. app.bsky.feed.post, app.bsky.actor.profile, etc.' },
  { term: 'Relay', desc: 'Crawls every PDS, aggregates the firehose. BGS → AppView → your feed.' },
]

export function AtprotoExplainer() {
  const step = useSteps(concepts.length)

  return (
    <div class="h-full flex flex-col justify-center bg-[#0a0a0f] text-white p-20 gap-10">
      <div>
        <div class="text-sm uppercase tracking-widest text-indigo-400 font-mono mb-2">ATProto</div>
        <h2 class="text-4xl font-bold tracking-tight">The protocol in 4 concepts</h2>
      </div>
      <div class="flex flex-col gap-4">
        {concepts.map((c, i) => (
          <Step when={step() >= i}>
            <div class="flex items-baseline gap-4">
              <span class="text-indigo-400 font-mono font-bold w-16 shrink-0">{c.term}</span>
              <span class="text-zinc-300">{c.desc}</span>
            </div>
          </Step>
        ))}
      </div>
      <Step when={step() >= 3}>
        <p class="text-zinc-600 font-mono text-sm">
          your PDS ──▶ relay (BGS) ──▶ appview ──▶ bluesky.app
        </p>
      </Step>
    </div>
  )
}

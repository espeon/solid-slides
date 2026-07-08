import { useSteps, Step } from "solid-slides";
import { SlideLayout, Headline, Caption } from "../../components/slides";

const concepts = [
  {
    term: "DID",
    desc: "Your identity. did:plc:xyz or did:web:you.com — stable across server moves.",
  },
  {
    term: "Repo",
    desc: "A signed, content-addressed Merkle tree of all your records, hosted on your PDS.",
  },
  {
    term: "Lexicon",
    desc: "Typed schemas for record kinds. app.bsky.feed.post, app.bsky.actor.profile, etc.",
  },
  {
    term: "Relay",
    desc: "Crawls every PDS, aggregates the firehose. BGS → AppView → your feed.",
  },
];

export function AtprotoExplainer() {
  const step = useSteps(concepts.length);

  return (
    <SlideLayout>
      <Headline class="max-w-[20ch]">The protocol in 4 concepts</Headline>

      <div class="flex flex-col gap-4 mt-8 max-w-4xl">
        {concepts.map((c, i) => (
          <Step when={step() >= i}>
            <div class="flex items-baseline gap-5 text-[clamp(1rem,1.4vw,1.35rem)]">
              <span class="text-accent font-semibold w-20 shrink-0">
                {c.term}
              </span>
              <span class="text-fg-muted">{c.desc}</span>
            </div>
          </Step>
        ))}
      </div>

      <Step when={step() >= 3}>
        <Caption class="mt-10 font-mono">
          your PDS — relay (BGS) — appview — bluesky.app
        </Caption>
      </Step>
    </SlideLayout>
  );
}

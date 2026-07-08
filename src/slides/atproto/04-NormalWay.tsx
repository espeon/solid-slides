import {
  SlideLayout,
  Headline,
  Body,
} from "../../components/slides";

const items = [
  ["VPS", "A Hetzner CAX11 or whatever. ~€4/mo. You manage it forever."],
  [
    "SQLite / PG",
    "The reference PDS ships with SQLite. Fine for personal use.",
  ],
  [
    "pds binary",
    "The official TypeScript impl. Node process, needs babysitting.",
  ],
  [
    "S3-compatible",
    "For blobs. The reference impl supports S3, Cloudflare R2, etc.",
  ],
];

const verdict = [
  ["Works great", "Solid, well-documented, actively maintained.", true],
  [
    "Full firehose",
    "Blob storage, account migration — all of it.",
    true,
  ],
  [
    "You own a server now",
    "Ops, backups, uptime. Congrats.",
    false,
  ],
];

export function NormalWay() {
  return (
    <SlideLayout>
      <Headline class="max-w-[18ch]">The normal way</Headline>

      <div class="flex flex-col gap-3 mt-8 max-w-4xl">
        {items.map(([label, detail]) => (
          <div class="flex items-baseline gap-5 text-[clamp(1rem,1.3vw,1.25rem)]">
            <span class="text-fg-subtle text-sm font-medium w-32 shrink-0">
              {label}
            </span>
            <span class="text-fg-muted">{detail}</span>
          </div>
        ))}
      </div>

      <div class="flex flex-col gap-2 mt-10 max-w-4xl text-[clamp(0.9rem,1.2vw,1.1rem)]">
        {verdict.map(([title, detail, good]) => (
          <div class="flex gap-3 items-baseline">
            <span
              class={
                good ? "text-success shrink-0" : "text-fg-subtle shrink-0"
              }
            >
              {good ? "✓" : "–"}
            </span>
            <Body class="!text-fg">
              <span class="font-semibold">{title}</span> — {detail}
            </Body>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

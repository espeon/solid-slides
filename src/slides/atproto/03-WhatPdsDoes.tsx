import { useSteps, Step } from "solid-slides";
import { SlideLayout, Headline, Body } from "../../components/slides";

const responsibilities = [
  {
    label: "Identity",
    detail: "Serves /.well-known/did.json, handles DID doc key rotation.",
  },
  {
    label: "Auth",
    detail: "OAuth 2 + DPoP. Issues access/refresh tokens scoped to sessions.",
  },
  {
    label: "Repo CRUD",
    detail: "com.atproto.repo.* XRPC endpoints. Creates signed MST commits.",
  },
  {
    label: "Blob storage",
    detail: "uploadBlob stores images/video, returns a CID reference.",
  },
  {
    label: "Firehose",
    detail:
      "/xrpc/com.atproto.sync.subscribeRepos — WebSocket emitting every commit.",
  },
];

export function WhatPdsDoes() {
  const step = useSteps(responsibilities.length);

  return (
    <SlideLayout>
      <Headline class="max-w-[22ch]">
        What your PDS actually does
      </Headline>

      <div class="flex flex-col gap-4 mt-8 max-w-4xl">
        {responsibilities.map((r, i) => (
          <Step when={step() >= i}>
            <div class="flex items-baseline gap-5 text-[clamp(1rem,1.3vw,1.25rem)]">
              <span class="text-accent text-sm font-medium w-32 shrink-0">
                {r.label}
              </span>
              <span class="text-fg-muted">{r.detail}</span>
            </div>
          </Step>
        ))}
      </div>

      <Step when={step() >= 4}>
        <Body class="mt-8 text-accent">
          The firehose is the spicy one — every relay in the world will try to
          connect to it.
        </Body>
      </Step>
    </SlideLayout>
  );
}

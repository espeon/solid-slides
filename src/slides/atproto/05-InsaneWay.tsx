import { useSteps, Step } from "solid-slides";
import {
  SlideLayout,
  Headline,
  CodeBlock,
  Body,
} from "../../components/slides";

export function InsaneWay() {
  const step = useSteps(3);

  return (
    <SlideLayout>
      <Headline class="max-w-[18ch]">
        The <em class="text-accent not-italic">insane</em> way
      </Headline>

      <CodeBlock class="mt-8 max-w-3xl">
        <span class="text-fg-subtle"># wrangler.toml</span>
        {"\n"}
        <span class="text-accent">name</span> ={" "}
        <span class="text-fg">"my-pds"</span>
        {"\n"}
        <span class="text-accent">main</span> ={" "}
        <span class="text-fg">"src/index.ts"</span>
        {"\n"}
        <Step when={step() >= 0}>
          <span class="text-fg-subtle">[[durable_objects.bindings]]</span>
          {"\n"}
          <span class="text-accent">name</span> ={" "}
          <span class="text-fg">"REPO"</span>
          {"     "}
          <span class="text-fg-subtle"># one DO per DID</span>
          {"\n"}
          <span class="text-accent">name</span> ={" "}
          <span class="text-fg">"SESSIONS"</span>
          {" "}
          <span class="text-fg-subtle"># auth state</span>
          {"\n"}
        </Step>
        <Step when={step() >= 1}>
          <span class="text-fg-subtle">[[r2_buckets]]</span>
          {"\n"}
          <span class="text-accent">binding</span> ={" "}
          <span class="text-fg">"BLOBS"</span>
          {"    "}
          <span class="text-fg-subtle"># images, video</span>
          {"\n"}
        </Step>
        <Step when={step() >= 2}>
          <span class="text-fg-subtle">[[kv_namespaces]]</span>
          {"\n"}
          <span class="text-accent">binding</span> ={" "}
          <span class="text-fg">"DID_CACHE"</span>
          <span class="text-fg-subtle"> # resolved DIDs</span>
          {"\n"}
        </Step>
      </CodeBlock>

      <Step when={step() >= 2}>
        <Body class="mt-6 max-w-[55ch]">
          No server. No database to provision.{" "}
          <span class="text-accent font-mono">wrangler deploy</span> and you're
          federated.
        </Body>
      </Step>
    </SlideLayout>
  );
}

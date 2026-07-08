import type { JSX } from "solid-js";

interface CodeBlockProps {
  children: JSX.Element;
  class?: string;
}

export function CodeBlock(props: CodeBlockProps) {
  return (
    <pre
      class={`font-mono text-[clamp(1rem,1.4vw,1.4rem)] leading-snug p-6 md:p-8 rounded-xl bg-bg-soft border border-border overflow-x-auto ${props.class ?? ""}`}
    >
      <code>{props.children}</code>
    </pre>
  );
}

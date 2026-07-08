import type { JSX } from "solid-js";

interface TypeProps {
  children: JSX.Element;
  class?: string;
}

export function Display(props: TypeProps) {
  return (
    <h1
      class={`font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] tracking-tight text-fg ${props.class ?? ""}`}
    >
      {props.children}
    </h1>
  );
}

export function Headline(props: TypeProps) {
  return (
    <h2
      class={`font-sans text-[clamp(1.75rem,3.5vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-fg ${props.class ?? ""}`}
    >
      {props.children}
    </h2>
  );
}

export function Lead(props: TypeProps) {
  return (
    <p
      class={`text-[clamp(1.1rem,1.6vw,1.6rem)] leading-relaxed text-fg-muted max-w-[55ch] ${props.class ?? ""}`}
    >
      {props.children}
    </p>
  );
}

export function Body(props: TypeProps) {
  return (
    <p
      class={`text-[clamp(1rem,1.2vw,1.25rem)] leading-relaxed text-fg-muted max-w-[65ch] ${props.class ?? ""}`}
    >
      {props.children}
    </p>
  );
}

export function Caption(props: TypeProps) {
  return (
    <p
      class={`text-[0.75rem] text-fg-subtle font-sans ${props.class ?? ""}`}
    >
      {props.children}
    </p>
  );
}


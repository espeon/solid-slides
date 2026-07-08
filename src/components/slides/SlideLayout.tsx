import type { JSX } from "solid-js";

type LayoutVariant = "default" | "centered" | "split" | "title";

interface SlideLayoutProps {
  children: JSX.Element;
  variant?: LayoutVariant;
  class?: string;
}

const variantClasses: Record<LayoutVariant, string> = {
  default:
    "h-full flex flex-col justify-center px-[6vw] py-[5vh] bg-bg text-fg",
  centered:
    "h-full flex flex-col items-center justify-center text-center px-[8vw] py-[5vh] bg-bg text-fg",
  split:
    "h-full grid grid-cols-1 lg:grid-cols-2 items-center px-[6vw] py-[5vh] gap-[4vw] bg-bg text-fg",
  title:
    "h-full flex flex-col items-center justify-center text-center px-[8vw] py-[5vh] bg-bg text-fg",
};

export function SlideLayout(props: SlideLayoutProps) {
  const variant = () => props.variant ?? "default";

  return (
    <div class={`${variantClasses[variant()]} ${props.class ?? ""}`}>
      {props.children}
    </div>
  );
}

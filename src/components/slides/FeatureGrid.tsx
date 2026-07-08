import type { Component } from "solid-js";

export interface Feature {
  Icon: Component<{ width?: number; height?: number; class?: string }>;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  visibleCount?: number;
}

export function FeatureGrid(props: FeatureGridProps) {
  const visible = () => props.visibleCount ?? props.features.length;

  return (
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {props.features.map((f, i) => (
        <li
          class="flex gap-4 items-start p-5 rounded-xl bg-bg-elevated border border-border transition-opacity duration-500"
          style={{ opacity: visible() > i ? 1 : 0.15 }}
        >
          <span class="text-accent shrink-0 mt-0.5">
            <f.Icon width={26} height={26} aria-hidden />
          </span>
          <div>
            <div class="font-semibold text-fg text-[clamp(1rem,1.3vw,1.25rem)]">
              {f.title}
            </div>
            <div class="text-fg-muted text-[clamp(0.875rem,1.1vw,1.05rem)] mt-1 leading-relaxed">
              {f.description}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

import type { JSX } from "solid-js";

export interface StatItem {
  value: JSX.Element;
  label: string;
  description?: string;
}

interface StatProps {
  stats: StatItem[];
  class?: string;
}

export function StatGroup(props: StatProps) {
  return (
    <div
      class={`grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 ${props.class ?? ""}`}
    >
      {props.stats.map((stat) => (
        <div class="flex flex-col">
          <div class="font-serif text-[clamp(2rem,3.5vw,3.5rem)] leading-none text-fg">
            {stat.value}
          </div>
          <div class="text-sm font-medium text-accent font-sans mt-3">
            {stat.label}
          </div>
          {stat.description && (
            <div class="text-fg-muted text-sm mt-2 leading-relaxed max-w-[35ch]">
              {stat.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

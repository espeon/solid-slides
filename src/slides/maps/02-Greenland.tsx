import { SlideLayout, Headline, StatGroup, type StatItem, Lead } from "../../components/slides";

const stats: StatItem[] = [
  {
    value: "14×",
    label: "Larger",
    description: "Africa's actual area versus Greenland's. On a Mercator map they look roughly equal.",
  },
  {
    value: "≈",
    label: "Actually",
    description: "Greenland's real area is close to Algeria's alone. The visual impression is off by an order of magnitude.",
  },
];

export function MapsGreenland() {
  return (
    <SlideLayout>
      <Headline class="max-w-[20ch]">Greenland vs. Africa.</Headline>
      <Lead class="mt-4 max-w-[55ch]">
        The most common world map makes Greenland look about the same size as Africa. It isn't. Not even close.
      </Lead>
      <StatGroup stats={stats} class="mt-10 max-w-4xl" />
    </SlideLayout>
  );
}

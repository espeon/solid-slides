import { SlideLayout, Headline, Lead, StatGroup, type StatItem } from "../../components/slides";

const stats: StatItem[] = [
  {
    value: "~24,000",
    label: "TEU per ship",
    description: "A modern vessel carries twenty-four thousand twenty-foot-equivalent units.",
  },
  {
    value: "Hours",
    label: "Not weeks",
    description: "Gantry cranes unload in hours what once took stevedores weeks.",
  },
  {
    value: "~20",
    label: "Crew",
    description: "The same ship crosses oceans with a crew smaller than a restaurant's kitchen.",
  },
];

export function ShippingScale() {
  return (
    <SlideLayout>
      <Headline class="max-w-[22ch]">The second-order effect nobody predicted.</Headline>
      <Lead class="mt-4 max-w-[55ch]">
        Cheap, reliable shipping let Toyota-style just-in-time manufacturing go global. The container didn't just move goods — it redesigned how goods are made.
      </Lead>
      <StatGroup stats={stats} class="mt-10 max-w-5xl" />
    </SlideLayout>
  );
}

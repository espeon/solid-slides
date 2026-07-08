import { SlideLayout, Headline, StatGroup, type StatItem, Lead } from "../../components/slides";

const stats: StatItem[] = [
  {
    value: "25%",
    label: "Before 1956",
    description: "Shipping could cost roughly a quarter of a product's value. Trade was for high-margin goods only.",
  },
  {
    value: "≈$0",
    label: "Today",
    description: "Moving a television across the Pacific costs a dollar or two. A rounding error on the retail price.",
  },
];

export function ShippingHook() {
  return (
    <SlideLayout>
      <Headline class="max-w-[20ch]">A provocation.</Headline>
      <Lead class="mt-4 max-w-[55ch]">
        One boring object collapsed the cost of distance by orders of magnitude. The cheapest ideas are often the most disruptive.
      </Lead>
      <StatGroup stats={stats} class="mt-10 max-w-4xl" />
    </SlideLayout>
  );
}

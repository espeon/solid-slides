import {
  SlideLayout,
  Display,
  Lead,
} from "../../components/slides";

export function SizingPrinciple() {
  return (
    <SlideLayout>
      <Display class="max-w-[14ch]">
        Proportions,{" "}
        <em class="text-accent not-italic">not pixels.</em>
      </Display>
      <Lead class="mt-10 max-w-[55ch]">
        A great seed deck is a portrait of the company. A portrait doesn't get
        bigger when the gallery gets bigger. It{" "}
        <em class="text-fg not-italic font-semibold">scales</em>.
      </Lead>
    </SlideLayout>
  );
}

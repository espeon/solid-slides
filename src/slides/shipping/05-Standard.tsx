import { SlideLayout, Display, Lead } from "../../components/slides";

export function ShippingStandard() {
  return (
    <SlideLayout variant="title">
      <Display class="max-w-[16ch]">
        The container isn't a <em class="text-accent not-italic">technology</em>. It's a standard.
      </Display>
      <Lead class="mt-8 max-w-[55ch]">
        Nothing about a steel box is clever. What changed the world was everyone agreeing on the same steel box.
      </Lead>
    </SlideLayout>
  );
}

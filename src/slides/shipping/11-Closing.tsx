import { SlideLayout, Display, Lead } from "../../components/slides";

export function ShippingClosing() {
  return (
    <SlideLayout variant="title">
      <Display class="max-w-[18ch]">
        The future rarely <em class="text-accent not-italic">announces itself</em>.
      </Display>
      <Lead class="mt-8 max-w-[55ch]">
        Sometimes it just gets loaded onto a truck in New Jersey.
      </Lead>
    </SlideLayout>
  );
}

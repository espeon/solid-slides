import { SlideLayout, Display, Lead } from "../../components/slides";

export function ShippingTitle() {
  return (
    <SlideLayout variant="title">
      <Display class="max-w-[14ch]">
        The box that ate the <em class="text-accent not-italic">world</em>.
      </Display>
      <Lead class="mt-8 max-w-[55ch]">
        How a rusty steel container did more to create the modern global economy than the internet.
      </Lead>
    </SlideLayout>
  );
}

import { SlideLayout, Display, Lead } from "../../components/slides";

export function MapsPolitical() {
  return (
    <SlideLayout variant="title">
      <Display class="max-w-[18ch]">
        It enlarges the <em class="text-accent not-italic">global north</em> and shrinks the equator.
      </Display>
      <Lead class="mt-8 max-w-[55ch]">
        Whether or not the intent was colonial, the effect shaped generations' mental geography. Mercator wasn't propaganda — it was a tool used far outside its purpose. The lesson is about misapplication, not villainy.
      </Lead>
    </SlideLayout>
  );
}

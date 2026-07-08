import { SlideLayout, Display, Lead } from "../../components/slides";

export function MapsTradeoff() {
  return (
    <SlideLayout variant="title">
      <Display class="max-w-[16ch]">
        Projection is a <em class="text-accent not-italic">value judgment</em> disguised as geometry.
      </Display>
      <Lead class="mt-8 max-w-[55ch]">
        There is no neutral map. There are only maps that optimized for one truth at the expense of others, made by someone who decided which truth mattered.
      </Lead>
    </SlideLayout>
  );
}

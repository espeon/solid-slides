import { SlideLayout, Display, Lead } from "../../components/slides";

export function LoadingClosing() {
  return (
    <SlideLayout variant="title">
      <Display class="max-w-[16ch]">
        Make the wait <em class="text-accent not-italic">legible</em>.
      </Display>
      <Lead class="mt-8 max-w-[55ch]">
        Users do not hate waiting. They hate not knowing what the wait is for, how long it will last, or whether anything happened at all.
      </Lead>
    </SlideLayout>
  );
}

import { SlideLayout, Display, Lead } from "../../components/slides";

export function LoadingClosing() {
  return (
    <SlideLayout variant="title">
      <Display class="max-w-[16ch]">
        Make the wait <em class="text-accent not-italic">legible</em>.
      </Display>
      <Lead class="mt-8 max-w-[50ch]">
        Users do not hate waiting. They hate not knowing what the wait is for.
      </Lead>
    </SlideLayout>
  );
}

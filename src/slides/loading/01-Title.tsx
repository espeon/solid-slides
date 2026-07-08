import { SlideLayout, Display, Lead } from "../../components/slides";

export function LoadingTitle() {
  return (
    <SlideLayout variant="title">
      <Display class="max-w-[14ch]">
        A field guide to <em class="text-accent not-italic">waiting</em>.
      </Display>
      <Lead class="mt-8 max-w-[55ch]">
        Spinners, skeletons, progress bars, and the small lies we tell users while bytes travel.
      </Lead>
    </SlideLayout>
  );
}

import { SlideLayout, Headline, Lead, Body } from "../../components/slides";

const facts = [
  "Every network request is a broken promise until it resolves.",
  "Perceived performance matters more than actual duration.",
  "A blank screen reads as broken faster than a slow screen.",
];

export function LoadingProblem() {
  return (
    <SlideLayout>
      <Headline class="max-w-[20ch]">The internet is mostly gaps.</Headline>
      <Lead class="mt-6 max-w-[55ch]">
        Between click and result, between upload and confirmation, between search and answer. The wait is where trust is made or lost.
      </Lead>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {facts.map((f) => (
          <div class="p-5 rounded-xl bg-bg-elevated border border-border">
            <Body>{f}</Body>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

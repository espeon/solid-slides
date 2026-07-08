import { SlideLayout, Headline, Body } from "../../components/slides";

const questions = [
  {
    n: "1",
    q: "What is it optimized to preserve?",
    a: "Area, shape, distance, or direction. Every map trades one for others.",
  },
  {
    n: "2",
    q: "What's centered, and what's missing?",
    a: "The frame decides who's central. Omissions are as meaningful as inclusions.",
  },
  {
    n: "3",
    q: "Who made it, and what would they want me to conclude?",
    a: "Every map has an author and a purpose. Read it like an argument, not a photograph.",
  },
];

export function MapsQuestions() {
  return (
    <SlideLayout>
      <Headline class="max-w-[20ch]">Three questions to ask any map.</Headline>

      <div class="mt-8 flex flex-col gap-4 max-w-4xl">
        {questions.map((q) => (
          <div class="flex gap-5 p-5 rounded-xl bg-bg-elevated border border-border">
            <span class="text-accent font-serif text-[clamp(2rem,3vw,3rem)] leading-none shrink-0">{q.n}</span>
            <div>
              <div class="text-fg font-medium text-[clamp(1.05rem,1.4vw,1.3rem)]">{q.q}</div>
              <Body class="mt-1 !text-fg-muted">{q.a}</Body>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

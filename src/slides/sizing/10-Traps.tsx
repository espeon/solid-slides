import {
  SlideLayout,
  Headline,
  Body,
} from "../../components/slides";

const traps = [
  {
    tag: "The floor",
    title: "Below ~720p, the deck becomes a rumor.",
    text: "Don't pretend 240p is real. The clamp()'s min is your friend. Set it to 1rem.",
  },
  {
    tag: "The ceiling",
    title: "Above 4K, the deck becomes a billboard.",
    text: "The cap is your friend. The deck should stop growing before your investors need to sit in the back row to read it.",
  },
  {
    tag: "The 'feels weird' reaction",
    title: "If text looks different on different screens — that's correct.",
    text: "You are not the user. The partner on their laptop is. The room full of investors is. The phone in the hallway is.",
  },
];

export function SizingTraps() {
  return (
    <SlideLayout>
      <Headline class="max-w-[18ch]">Three things that go wrong.</Headline>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl">
        {traps.map((t) => (
          <div class="flex flex-col">
            <div class="text-[0.75rem] font-medium text-accent font-sans mb-2">
              {t.tag}
            </div>
            <h3 class="text-[clamp(1.25rem,1.8vw,1.75rem)] font-semibold text-fg leading-snug mb-3">
              {t.title}
            </h3>
            <Body>{t.text}</Body>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

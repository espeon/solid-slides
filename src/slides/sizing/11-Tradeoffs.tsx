import {
  SlideLayout,
  Headline,
  Body,
} from "../../components/slides";

const items = [
  {
    title: "Print-first designs.",
    text: "CSS print stylesheets are still about fixed pixels. They will be for a while.",
  },
  {
    title: "Fixed-aspect presentations.",
    text: "If you know the screen is 16:9 and nothing else, fixed sizes are fine. You can predict the room.",
  },
  {
    title: "High-stakes pixel grids.",
    text: "Data viz, image grids, anything where alignment matters. There, px is right. Don't fight the pixel.",
  },
  {
    title: "For everything else",
    text: "— pitch decks, keynotes, talks, design reviews — this is the default.",
  },
];

export function SizingTradeoffs() {
  return (
    <SlideLayout>
      <Headline class="max-w-[18ch]">
        Fluid scaling is not for every deck.
      </Headline>

      <ul class="flex flex-col gap-5 mt-10 max-w-3xl">
        {items.map((item) => (
          <li class="flex gap-5 items-baseline">
            <span class="text-accent text-lg leading-none">·</span>
            <Body class="!text-fg">
              <span class="font-semibold text-fg">{item.title}</span>{" "}
              {item.text}
            </Body>
          </li>
        ))}
      </ul>
    </SlideLayout>
  );
}

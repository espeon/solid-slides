import {
  SlideLayout,
  Headline,
  Body,
} from "../../components/slides";

const failures = [
  {
    n: "01",
    title: "Buttons that vanish.",
    text: "A 6-pixel nav on a 3840-pixel screen is a rumor. Investors lean in. You apologize.",
  },
  {
    n: "02",
    title: "Body text as a footnote.",
    text: "A 14-pixel paragraph on a phone is fine. The same paragraph on the partner's monitor is illegible from the second row.",
  },
  {
    n: "03",
    title: "The room fills with apologies.",
    text: "Every fixed pixel is a small bet that the room will be the same size as your laptop. It usually isn't.",
  },
];

export function SizingCost() {
  return (
    <SlideLayout>
      <Headline class="max-w-[18ch]">
        Three failure modes,{" "}
        <em class="text-fg-subtle not-italic">one bad bet.</em>
      </Headline>

      <ul class="flex flex-col gap-5 mt-10 max-w-3xl">
        {failures.map((f) => (
          <li class="flex gap-5 items-baseline">
            <span class="text-accent text-sm font-semibold shrink-0 w-8">
              {f.n}
            </span>
            <Body class="!text-fg">
              <span class="font-semibold text-fg">{f.title}</span>{" "}
              {f.text}
            </Body>
          </li>
        ))}
      </ul>
    </SlideLayout>
  );
}

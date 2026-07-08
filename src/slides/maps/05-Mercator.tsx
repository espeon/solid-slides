import { useSteps, Step } from "solid-slides";
import { SlideLayout, Headline, Lead, Body } from "../../components/slides";

const points = [
  {
    year: "1569",
    text: "Gerardus Mercator publishes a projection built for navigation. It preserves angles, so a compass bearing traces a straight line.",
  },
  {
    year: "The cost",
    text: "Massive area inflation toward the poles. Everything far from the equator balloons. Greenland, Russia, Antarctica grow enormous.",
  },
  {
    year: "The afterlife",
    text: "For centuries it hung in classrooms as the world map, even though almost no one in the room was navigating a ship.",
  },
];

export function MapsMercator() {
  const step = useSteps(points.length);

  return (
    <SlideLayout>
      <Headline class="max-w-[20ch]">The Mercator story.</Headline>
      <Lead class="mt-4 max-w-[55ch]">
        Genuinely brilliant for sailors. Catastrophic as a general-purpose picture of the world.
      </Lead>

      <div class="mt-8 flex flex-col gap-4 max-w-4xl">
        {points.map((p, i) => (
          <Step when={step() >= i}>
            <div class="flex items-baseline gap-6 p-4 rounded-xl bg-bg-elevated border border-border">
              <span class="text-accent font-medium w-32 shrink-0">{p.year}</span>
              <Body class="!text-fg-muted">{p.text}</Body>
            </div>
          </Step>
        ))}
      </div>
    </SlideLayout>
  );
}

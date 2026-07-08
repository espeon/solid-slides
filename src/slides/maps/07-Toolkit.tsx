import { useSteps, Step } from "solid-slides";
import { SlideLayout, Headline, Body } from "../../components/slides";

const tools = [
  {
    technique: "Projection choice",
    example: "What's centered decides who's central and who's peripheral. Why is Europe usually in the middle?",
  },
  {
    technique: "What's on top",
    example: "North-up is a convention, not a law. Flip it and the room gets uncomfortable.",
  },
  {
    technique: "Color & shading",
    example: "Choropleth maps lie with binning. Same data, different ranges, opposite impression.",
  },
  {
    technique: "The denominator",
    example: "Raw counts vs. per-capita. A map of total crime is mostly a map of where people live.",
  },
  {
    technique: "Selective inclusion",
    example: "What gets a label, border, or name. Kashmir, Crimea, Taiwan render differently by country.",
  },
  {
    technique: "Scale & zoom",
    example: "Cropping to make a trend look local, or global, depending on the story.",
  },
];

export function MapsToolkit() {
  const step = useSteps(tools.length);

  return (
    <SlideLayout>
      <Headline class="max-w-[20ch]">The toolkit of persuasion.</Headline>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 max-w-5xl">
        {tools.map((t, i) => (
          <Step when={step() >= i}>
            <div class="p-4 rounded-xl bg-bg-elevated border border-border">
              <div class="text-accent font-medium mb-1">{t.technique}</div>
              <Body class="!text-fg-muted">{t.example}</Body>
            </div>
          </Step>
        ))}
      </div>
    </SlideLayout>
  );
}

import { SlideLayout, Headline, Body } from "../../components/slides";

const rules = [
  {
    rule: "Show structure before data.",
    detail: "A skeleton beats a blank screen. A blank screen beats a wrong layout.",
  },
  {
    rule: "Match the wait to the widget.",
    detail: "Full-screen spinners for page loads. Inline spinners for button clicks.",
  },
  {
    rule: "Never fake progress you cannot measure.",
    detail: "An indeterminate bar is honest. A stuck determinate bar is a lie.",
  },
  {
    rule: "Give users an escape hatch.",
    detail: "Cancel buttons, offline messaging, and retry links reduce helplessness.",
  },
];

export function RulesSlide() {
  return (
    <SlideLayout>
      <Headline class="max-w-[18ch]">Four rules of waiting.</Headline>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
        {rules.map((r, i) => (
          <div class="p-5 rounded-xl bg-bg-elevated border border-border">
            <div class="text-accent font-medium mb-2">{i + 1}. {r.rule}</div>
            <Body class="!text-fg-muted">{r.detail}</Body>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

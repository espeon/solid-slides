import { SlideLayout, Headline, Body } from "../../components/slides";

const standards = [
  ["Shipping pallets", "WWII logistics. The foundation containerized cargo sat on."],
  ["TCP/IP", "The container of the internet. A boring packet format that ate proprietary networks."],
  ["USB", "A plug shape that replaced a dozen peripheral standards."],
  ["Standard rail gauge", "Victorian-era. Still decides which trains can run where."],
];

export function ShippingMetaLesson() {
  return (
    <SlideLayout>
      <Headline class="max-w-[24ch]">The pattern repeats.</Headline>

      <div class="mt-8 flex flex-col gap-3 max-w-4xl">
        {standards.map(([t, d]) => (
          <div class="flex items-baseline gap-5 p-4 rounded-xl bg-bg-elevated border border-border">
            <span class="text-accent font-medium w-48 shrink-0">{t}</span>
            <Body class="!text-fg-muted">{d}</Body>
          </div>
        ))}
      </div>

      <Body class="mt-8 max-w-[55ch] !text-fg">
        Transformative innovation is often subtraction — removing friction — rather than addition. The next container is probably a standardized API, a battery form factor, or a model interchange format.
      </Body>
    </SlideLayout>
  );
}

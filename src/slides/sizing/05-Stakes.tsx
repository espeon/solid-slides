import {
  SlideLayout,
  Display,
  Lead,
} from "../../components/slides";

export function SizingStakes() {
  return (
    <SlideLayout>
      <Display class="max-w-[16ch]">
        It's a <em class="text-accent not-italic">signal</em>.
      </Display>

      <div class="mt-12 max-w-3xl space-y-6">
        <Lead>
          A deck that doesn't scale is a deck that says{" "}
          <span class="text-fg font-semibold">
            "I didn't care enough to test this on your hardware."
          </span>
        </Lead>
        <Lead>
          A deck that does scale is a deck that says{" "}
          <span class="text-fg font-semibold">"I made this with you in mind."</span>
        </Lead>
      </div>

      <p class="text-[clamp(1rem,1.2vw,1.25rem)] leading-relaxed text-fg-muted max-w-2xl mt-12">
        The cost of failing the signal: you have to say it out loud,
        apologetically, in front of forty people.
      </p>
    </SlideLayout>
  );
}

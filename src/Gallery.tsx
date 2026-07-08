import { createSignal, For, onCleanup, onMount } from "solid-js";
import { Presentation } from "solid-slides";
import type { SlideEntry } from "solid-slides";

export interface GalleryDeck {
  key: string;
  name: string;
  slides: SlideEntry[];
}

function SlidePreview(props: { slide: SlideEntry }) {
  let ref: HTMLDivElement | undefined;
  const [scale, setScale] = createSignal(0.2);

  onMount(() => {
    if (!ref) return;
    const update = () => {
      if (ref) setScale(ref.clientWidth / 1920);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(ref);
    onCleanup(() => ro.disconnect());
  });

  return (
    <div
      ref={ref}
      class="w-full aspect-video overflow-hidden bg-bg relative"
    >
      <div
        class="absolute top-0 left-0 origin-top-left"
        style={{
          width: "1920px",
          height: "1080px",
          transform: `scale(${scale()})`,
        }}
      >
        <Presentation slides={[props.slide]} router="memory" nav="none" />
      </div>
    </div>
  );
}

export function Gallery(props: { decks: GalleryDeck[] }) {
  return (
    <div class="h-full overflow-y-auto bg-bg">
      <div class="max-w-6xl mx-auto px-8 md:px-12 py-16 md:py-24">
        <header class="mb-16 md:mb-20">
          <h1 class="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-fg">
            Pick a deck.
          </h1>
          <p class="text-[clamp(1rem,1.4vw,1.35rem)] leading-relaxed text-fg-muted max-w-2xl mt-4">
            Each preview is a live slide rendered with the same component the
            deck uses. Click one to enter.
          </p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <For each={props.decks}>
            {(deck) => (
              <a
                href={`?deck=${deck.key}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `?deck=${deck.key}`;
                }}
                class="group block focus:outline-none"
                data-testid={`deck-box-${deck.key}`}
              >
                <div class="overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-md transition-all duration-300 group-hover:border-border-strong group-hover:shadow-lg group-focus:border-accent">
                  <SlidePreview slide={deck.slides[0]} />
                </div>
                <div class="mt-5 flex items-baseline justify-between px-1">
                  <h2 class="text-[clamp(1.25rem,1.8vw,1.75rem)] font-semibold text-fg group-hover:text-accent transition-colors">
                    {deck.name}
                  </h2>
                  <span class="text-[0.65rem] text-fg-subtle font-sans">
                    {deck.slides.length} slides
                  </span>
                </div>
              </a>
            )}
          </For>
        </div>

        <footer class="mt-16 md:mt-24 pt-8 border-t border-border">
          <div class="text-[0.65rem] text-fg-subtle font-sans">
            Arrow keys, space, home/end · or click a deck
          </div>
        </footer>
      </div>
    </div>
  );
}

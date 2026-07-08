import { createSignal, For, onCleanup, onMount, Show } from "solid-js";
import { Presentation } from "solid-slides";
import type { SlideEntry } from "solid-slides";
import { Gallery, type GalleryDeck } from "./Gallery";

import { TitleSlide } from "./slides/01-Title";
import { FeaturesSlide } from "./slides/02-Features";
import { StepsSlide } from "./slides/03-Steps";
import { ParamsSlide } from "./slides/04-Params";
import { ApiSlide } from "./slides/05-Api";

import { AtprotoTitle } from "./slides/atproto/01-Title";
import { AtprotoExplainer } from "./slides/atproto/02-Atproto";
import { WhatPdsDoes } from "./slides/atproto/03-WhatPdsDoes";
import { NormalWay } from "./slides/atproto/04-NormalWay";
import { InsaneWay } from "./slides/atproto/05-InsaneWay";
import { DurableObjectsSlide } from "./slides/atproto/06-DurableObjects";
import { TradeoffsSlide } from "./slides/atproto/07-Tradeoffs";
import { FinSlide } from "./slides/atproto/08-Fin";

import { SizingKicker } from "./slides/sizing/01-Kicker";
import { SizingHook } from "./slides/sizing/02-Hook";
import { SizingCost } from "./slides/sizing/03-Cost";
import { SizingPrinciple } from "./slides/sizing/04-Principle";
import { SizingStakes } from "./slides/sizing/05-Stakes";
import { SizingMechanism } from "./slides/sizing/06-Mechanism";
import { SizingWhyHard } from "./slides/sizing/07-WhyHard";
import { SizingMath } from "./slides/sizing/08-Math";
import { SizingInPractice } from "./slides/sizing/09-InPractice";
import { SizingTraps } from "./slides/sizing/10-Traps";
import { SizingTradeoffs } from "./slides/sizing/11-Tradeoffs";
import { SizingClosing } from "./slides/sizing/12-Closing";
import { Fin } from "./slides/fin";

import { LoadingTitle } from "./slides/loading/01-Title";
import { LoadingProblem } from "./slides/loading/02-Problem";
import { TaxonomySlide } from "./slides/loading/03-Taxonomy";
import { SpinnerSlide } from "./slides/loading/04-Spinner";
import { SkeletonSlide } from "./slides/loading/05-Skeleton";
import { ProgressSlide } from "./slides/loading/06-Progress";
import { ShimmerSlide } from "./slides/loading/07-Shimmer";
import { EmptyStateSlide } from "./slides/loading/08-EmptyState";
import { MicroProgressSlide } from "./slides/loading/09-MicroProgress";
import { RulesSlide } from "./slides/loading/10-Rules";
import { ExamplesSlide } from "./slides/loading/11-Examples";
import { LoadingClosing } from "./slides/loading/12-Closing";

import { MapsTitle } from "./slides/maps/01-Title";
import { MapsGreenland } from "./slides/maps/02-Greenland";
import { MapsImpossible } from "./slides/maps/03-Impossible";
import { MapsTradeoff } from "./slides/maps/04-Tradeoff";
import { MapsMercator } from "./slides/maps/05-Mercator";
import { MapsPolitical } from "./slides/maps/06-Political";
import { MapsToolkit } from "./slides/maps/07-Toolkit";
import { MapsDenominator } from "./slides/maps/08-Denominator";
import { MapsModern } from "./slides/maps/09-Modern";
import { MapsQuestions } from "./slides/maps/10-Questions";
import { MapsClosing } from "./slides/maps/11-Closing";

import { ShippingTitle } from "./slides/shipping/01-Title";
import { ShippingHook } from "./slides/shipping/02-Hook";
import { ShippingBefore } from "./slides/shipping/03-Before";
import { ShippingMcLean } from "./slides/shipping/04-McLean";
import { ShippingStandard } from "./slides/shipping/05-Standard";
import { ShippingStandardization } from "./slides/shipping/06-Standardization";
import { ShippingWinnersLosers } from "./slides/shipping/07-WinnersLosers";
import { ShippingScale } from "./slides/shipping/08-Scale";
import { ShippingFragility } from "./slides/shipping/09-Fragility";
import { ShippingMetaLesson } from "./slides/shipping/10-MetaLesson";
import { ShippingClosing } from "./slides/shipping/11-Closing";

type DeckKey = "intro" | "atproto" | "sizing" | "loading" | "maps" | "shipping" | "all";

const DECK_KEYS: DeckKey[] = ["intro", "atproto", "sizing", "loading", "maps", "shipping", "all"];

const decks: Record<DeckKey, { name: string; slides: SlideEntry[] }> = {
  intro: {
    name: "Library tour",
    slides: [TitleSlide, FeaturesSlide, StepsSlide, ParamsSlide, ApiSlide, Fin],
  },
  atproto: {
    name: "ATProto talk",
    slides: [
      AtprotoTitle,
      AtprotoExplainer,
      WhatPdsDoes,
      NormalWay,
      { component: InsaneWay, transition: "zoom" },
      DurableObjectsSlide,
      TradeoffsSlide,
      FinSlide,
      Fin,
    ],
  },
  sizing: {
    name: "Sizing thinkpiece",
    slides: [
      SizingKicker,
      SizingHook,
      SizingCost,
      SizingPrinciple,
      SizingStakes,
      SizingMechanism,
      SizingWhyHard,
      SizingMath,
      SizingInPractice,
      SizingTraps,
      SizingTradeoffs,
      SizingClosing,
      Fin,
    ],
  },
  loading: {
    name: "Field guide to waiting",
    slides: [
      LoadingTitle,
      LoadingProblem,
      TaxonomySlide,
      SpinnerSlide,
      SkeletonSlide,
      ProgressSlide,
      ShimmerSlide,
      EmptyStateSlide,
      MicroProgressSlide,
      RulesSlide,
      ExamplesSlide,
      LoadingClosing,
      Fin,
    ],
  },
  maps: {
    name: "How maps lie",
    slides: [
      MapsTitle,
      MapsGreenland,
      MapsImpossible,
      MapsTradeoff,
      MapsMercator,
      MapsPolitical,
      MapsToolkit,
      MapsDenominator,
      MapsModern,
      MapsQuestions,
      MapsClosing,
      Fin,
    ],
  },
  shipping: {
    name: "The box that ate the world",
    slides: [
      ShippingTitle,
      ShippingHook,
      ShippingBefore,
      ShippingMcLean,
      ShippingStandard,
      ShippingStandardization,
      ShippingWinnersLosers,
      ShippingScale,
      ShippingFragility,
      ShippingMetaLesson,
      ShippingClosing,
      Fin,
    ],
  },
  all: {
    name: "All slides",
    slides: [
      AtprotoTitle,
      AtprotoExplainer,
      WhatPdsDoes,
      NormalWay,
      { component: InsaneWay, transition: "zoom" },
      DurableObjectsSlide,
      TradeoffsSlide,
      FinSlide,
      SizingKicker,
      SizingHook,
      SizingCost,
      SizingPrinciple,
      SizingStakes,
      SizingMechanism,
      SizingWhyHard,
      SizingMath,
      SizingInPractice,
      SizingTraps,
      SizingTradeoffs,
      SizingClosing,
      LoadingTitle,
      LoadingProblem,
      TaxonomySlide,
      SpinnerSlide,
      SkeletonSlide,
      ProgressSlide,
      ShimmerSlide,
      EmptyStateSlide,
      MicroProgressSlide,
      RulesSlide,
      ExamplesSlide,
      LoadingClosing,
      MapsTitle,
      MapsGreenland,
      MapsImpossible,
      MapsTradeoff,
      MapsMercator,
      MapsPolitical,
      MapsToolkit,
      MapsDenominator,
      MapsModern,
      MapsQuestions,
      MapsClosing,
      ShippingTitle,
      ShippingHook,
      ShippingBefore,
      ShippingMcLean,
      ShippingStandard,
      ShippingStandardization,
      ShippingWinnersLosers,
      ShippingScale,
      ShippingFragility,
      ShippingMetaLesson,
      ShippingClosing,
      Fin,
    ],
  },
};

const galleryDecks: GalleryDeck[] = DECK_KEYS.map((key) => ({
  key,
  name: decks[key].name,
  slides: decks[key].slides,
}));

function getDeckFromUrl(): DeckKey {
  if (typeof window === "undefined") return "atproto";
  const raw = new URLSearchParams(window.location.search).get("deck");
  return raw && (DECK_KEYS as string[]).includes(raw)
    ? (raw as DeckKey)
    : "atproto";
}

function isDeckRequested(): boolean {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).has("deck");
}

function syncDeckToUrl(key: DeckKey) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (key === "atproto") {
    url.searchParams.delete("deck");
  } else {
    url.searchParams.set("deck", key);
  }
  url.hash = "";
  window.history.pushState({}, "", url.toString());
}

function DeckPicker(props: {
  current: () => DeckKey;
  onSelect: (key: DeckKey) => void;
}) {
  const [open, setOpen] = createSignal(false);
  let containerRef: HTMLDivElement | undefined;

  onMount(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (containerRef && containerRef.contains(target)) return;
      const inSlideArea = (target as Element).closest?.(".slides-root");
      if (inSlideArea) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    onCleanup(() => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    });
  });

  return (
    <div ref={containerRef} class="relative">
        <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        class="flex items-center gap-3 px-4 py-2 rounded-full bg-bg-elevated border border-border text-sm font-sans text-fg-muted hover:text-fg hover:border-border-strong transition-colors"
        data-testid="deck-picker-button"
      >
        <span class="text-fg font-medium">{decks[props.current()].name}</span>
        <span class="text-[10px]">{open() ? "▴" : "▾"}</span>
      </button>

      <Show when={open()}>
        <div class="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-bg-elevated border border-border p-2 shadow-lg">
          <For each={DECK_KEYS}>
            {(key) => (
              <button
                type="button"
                onClick={() => {
                  props.onSelect(key);
                  setOpen(false);
                }}
                class="w-full text-left px-3 py-2.5 rounded-xl text-sm text-fg hover:bg-bg-soft transition-colors flex items-center justify-between gap-3"
                classList={{ "bg-bg-soft": props.current() === key }}
              >
                <span class="flex items-center gap-3">
                  <span
                    class="w-2 h-2 rounded-full"
                    classList={{
                      "bg-accent": props.current() === key,
                      "bg-fg-subtle": props.current() !== key,
                    }}
                  />
                  {decks[key].name}
                </span>
                <span class="text-[10px] text-fg-subtle font-sans">
                  {decks[key].slides.length} slides
                </span>
              </button>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
}

function DeckView() {
  const [current, setCurrent] = createSignal<DeckKey>(getDeckFromUrl());

  function selectDeck(key: DeckKey) {
    setCurrent(key);
    syncDeckToUrl(key);
  }

  return (
    <>
      <div class="absolute top-4 left-4 z-50 flex items-center gap-2">
        <a
          href="?"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "?";
          }}
          class="px-4 py-2 rounded-full bg-bg-elevated border border-border text-sm font-sans text-fg-muted hover:text-fg hover:border-border-strong transition-colors"
          data-testid="back-to-gallery"
        >
          ← Gallery
        </a>
        <DeckPicker current={current} onSelect={selectDeck} />
      </div>
      <Show when={current()} keyed>
        {(deck) => <Presentation slides={decks[deck].slides} nav="simple" />}
      </Show>
    </>
  );
}

export default function App() {
  return (
    <div class="relative w-full h-full">
      <Show
        when={isDeckRequested()}
        fallback={<Gallery decks={galleryDecks} />}
      >
        <DeckView />
      </Show>
    </div>
  );
}

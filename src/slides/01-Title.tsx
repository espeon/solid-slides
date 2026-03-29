import { usePresentationContext } from 'solid-slides'

export function TitleSlide() {
  const { totalSlides } = usePresentationContext()

  return (
    <div class="h-full flex flex-col items-center justify-center bg-zinc-950 text-white gap-6 p-16">
      <div class="text-sm uppercase tracking-widest text-zinc-500 font-mono">solid-slides</div>
      <h1 class="text-6xl font-bold tracking-tight text-center">
        Slides, but{' '}
        <span class="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          solid
        </span>
      </h1>
      <p class="text-xl text-zinc-400 text-center max-w-lg">
        SolidJS-powered presentations. URL state, per-slide steps, CSS transitions — all composable.
      </p>
      <div class="mt-8 text-zinc-600 text-sm">
        {totalSlides()} slides · arrow keys or space to navigate
      </div>
    </div>
  )
}

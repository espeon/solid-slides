import { Show } from 'solid-js'
import { useSteps, StepTransition } from 'solid-slides'

export function StepsSlide() {
  const step = useSteps(4)

  return (
    <div class="h-full flex flex-col justify-center bg-zinc-950 text-white p-20 gap-8">
      <div>
        <div class="text-sm uppercase tracking-widest text-violet-400 font-mono mb-3">useSteps()</div>
        <h2 class="text-4xl font-bold tracking-tight">Incremental reveals</h2>
      </div>

      <div class="font-mono text-sm bg-zinc-900 rounded-xl p-6 border border-zinc-800 leading-relaxed">
        <span class="text-zinc-500">{'// inside your slide component'}</span>
        <br />
        <span class="text-cyan-400">const</span>
        <span class="text-white"> step = </span>
        <span class="text-violet-400">useSteps</span>
        <span class="text-white">(4)</span>
      </div>

      <div class="flex flex-col gap-3">
        <StepTransition name="step-item-0">
          <Show when={step() >= 0}>
            <div class="flex items-center gap-3 text-lg">
              <span class="w-7 h-7 rounded-full bg-violet-500 flex items-center justify-center text-sm font-bold shrink-0">0</span>
              <span>This is always visible — step 0 is the default</span>
            </div>
          </Show>
        </StepTransition>

        <StepTransition name="step-item-1">
          <Show when={step() >= 1}>
            <div class="flex items-center gap-3 text-lg">
              <span class="w-7 h-7 rounded-full bg-cyan-500 flex items-center justify-center text-sm font-bold shrink-0">1</span>
              <span>Space / → advances to the next step</span>
            </div>
          </Show>
        </StepTransition>

        <StepTransition name="step-item-2">
          <Show when={step() >= 2}>
            <div class="flex items-center gap-3 text-lg">
              <span class="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-sm font-bold shrink-0">2</span>
              <span>← goes back through steps before changing slides</span>
            </div>
          </Show>
        </StepTransition>

        <StepTransition name="step-item-3">
          <Show when={step() >= 3}>
            <div class="flex items-center gap-3 text-lg text-zinc-400">
              <span class="w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center text-sm font-bold shrink-0">3</span>
              <span>Step index is stored in the URL: <code class="text-violet-300">?step=3</code></span>
            </div>
          </Show>
        </StepTransition>
      </div>

      <div class="text-zinc-600 text-sm font-mono">
        current step: <span class="text-violet-400">{step()}</span> / 3
      </div>
    </div>
  )
}

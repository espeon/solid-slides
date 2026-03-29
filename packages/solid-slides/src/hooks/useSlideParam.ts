import { useSearchParams } from '@solidjs/router'
import { useInternalPresentationContext } from '../context/PresentationContext'
import { useSlideIndex } from '../context/SlideIndexContext'
import type { UseSlideParamOptions } from '../types'

/**
 * A nuqs-like hook for per-slide URL state.
 * The param is automatically removed from the URL when navigating away from the slide,
 * unless `persistent: true` is set.
 *
 * @example
 * const [filter, setFilter] = useSlideParam('filter', { defaultValue: 'all' })
 */
export function useSlideParam<T = string>(
  key: string,
  options: UseSlideParamOptions<T> = {},
): [() => T | undefined, (value: T | undefined) => void] {
  const [params, setParams] = useSearchParams()
  const ctx = useInternalPresentationContext()
  const slideIndex = useSlideIndex()

  ctx.registerSlideParam(slideIndex, key, options.persistent ?? false)

  const getValue = (): T | undefined => {
    const raw = params[key]
    if (raw === undefined || raw === null) return options.defaultValue
    if (options.parse) return options.parse(raw as string)
    return raw as unknown as T
  }

  const setValue = (value: T | undefined) => {
    if (value === undefined || value === null) {
      setParams({ [key]: undefined })
    } else {
      const serialized = options.serialize ? options.serialize(value) : String(value)
      setParams({ [key]: serialized })
    }
  }

  return [getValue, setValue]
}

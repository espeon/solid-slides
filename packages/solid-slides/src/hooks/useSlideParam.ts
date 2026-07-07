import { useSearchParams } from '@solidjs/router'
import { useInternalPresentationContext } from '../context/PresentationContext'
import { useSlideIndex } from '../context/SlideIndexContext'
import type { UseSlideParamOptions } from '../types'

/**
 * A `useState`-shaped hook for URL search params scoped to the current slide.
 *
 * The returned getter reads the param from the URL, falling back to
 * `options.defaultValue` when it is absent. The setter writes the value back
 * to the URL (serialized via `options.serialize` if provided).
 *
 * By default the param is removed from the URL automatically when the
 * presenter navigates away from the slide that registered it. Pass
 * `persistent: true` to keep the value across slide changes.
 *
 * @typeParam T - The value type. Defaults to `string`.
 * @param key - The URL search-param key.
 * @param options - See {@link UseSlideParamOptions}.
 * @returns A `[get, set]` tuple. `get` returns `T | undefined` (or
 *   `defaultValue` if the param is missing); `set` accepts `T | undefined`,
 *   where `undefined` clears the param from the URL.
 * @throws Error if called outside a `<Presentation>`.
 *
 * @example Basic string param
 * const [filter, setFilter] = useSlideParam('filter', { defaultValue: 'all' })
 *
 * @example Typed enum with a parser
 * type Filter = 'all' | 'frontend' | 'backend'
 * const [filter, setFilter] = useSlideParam<Filter>('filter', {
 *   defaultValue: 'all',
 *   parse: (raw) => raw as Filter,
 * })
 *
 * @example Numeric param that survives slide changes
 * const [page, setPage] = useSlideParam<number>('page', {
 *   defaultValue: 1,
 *   persistent: true,
 *   parse: Number,
 *   serialize: String,
 * })
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

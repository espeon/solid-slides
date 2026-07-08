# Local fonts

Drop the actual font files here so they are served at the root (`/fonts/...`).

Expected files:

- `ValleySans[wght].woff2` (and optionally `ValleySans-Italic[wght].woff2`)
- `clarab.otf`, `clarabi.otf`, `clarar.otf`, `clarai.otf` (Clara family)
- `wst-romance.ttf` (Wollstonecraft Romance, fallback display face)
- `IoskeleyMono-{Regular,Italic,Bold,BoldItalic}.woff2` (and additional weights as needed)

The `@font-face` declarations in `src/index.css` reference these paths. If a file is missing, the browser falls back to the next face in the stack, then system fonts.

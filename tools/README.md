# tools

Development utilities. Not part of the published package.

## `screenshot.mjs`

Launches the demo (or attaches to a running `pnpm dev`) and captures a PNG of the deck at a given slide and step. Built so an agent can see what the deck looks like.

```bash
pnpm screenshot -- --slide=2 --step=1
# → screenshots/slide-2-step-1.png
```

Useful flags:

| flag | default | what it does |
| --- | --- | --- |
| `--slide=N` | 0 | which slide to show |
| `--step=N` | 0 | which step within the slide |
| `--width=N` | 1920 | viewport width |
| `--height=N` | 1080 | viewport height |
| `--wait=N` | 900 | ms to wait after load for the view transition to settle |

Env vars:

| var | default | what it does |
| --- | --- | --- |
| `SCREENSHOT_PORT` | 3000 | port to expect the dev server on |
| `SCREENSHOT_URL` | `http://localhost:$PORT` | full base URL, overrides the port |
| `SCREENSHOT_OUT` | `screenshots/slide-<n>-step-<m>.png` | output path |
| `SCREENSHOT_SPAWN` | `true` | set to `false` to require a running server |

Behavior: if nothing is listening on the port, the script spawns `pnpm dev` and tears it down on exit. If a server is already running, it attaches. The output path is printed on the last line of stdout for easy parsing.

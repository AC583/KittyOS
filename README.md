# KittyOS 🐱

A whimsical, cat-themed desktop environment simulator — built entirely in vanilla HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies. Just open and play.

![screenshot](https://img.shields.io/badge/status-purr--ing-brightgreen)

## Features

### Desktop Environment
- **Draggable desktop icons** with grid-snap and collision avoidance
- **Right-click context menu** — open, pin, rename, sort, and more
- **6 built-in wallpapers** (Sunbeam, Midnight, Catnip Fields, Paw Prints, Tuna Sunset, Whisker Wonderland) plus **custom upload**
- **Desktop widgets** — toggleable Calendar and Weather from Settings
- **State persistence** via `localStorage` — icon positions, pinned apps, wallpapers, notes, and settings survive refresh

### Taskbar
- Pinned apps (left) and running apps (middle) with active/minimized indicators
- System tray (right) with live clock and Settings button
- Inline rename for taskbar apps

### Window Manager
- Draggable, stackable windows with title bars
- Click-to-focus (raises z-index)
- Minimize/restore and close
- Animated open/close transitions

### Built-in Apps

| App | Description |
|---|---|
| **Meow Terminal** (`💻`) | Interactive shell with ASCII art banner. Commands: `help`, `ls`, `cat`, `meow`, `purr`, `neofetch`, `sudo`, `echo`, `date`, `weather`, `clear`, and more |
| **Whisker Notes** (`📝`) | Auto-saving text editor |
| **Cat Explorer** (`🗂️`) | File browser with a fictional cat-themed filesystem (`/treats/`, `/naps/`, `/home/whiskers/`) |
| **PurrClock** (`🕐`) | Analog clock with live digital readout |
| **Settings** (`⚙️`) | Wallpaper picker + custom upload + widget toggles |

## Quick Start

Open the file directly in any modern browser:

```bash
open index.html
```

Or serve locally (recommended for `module` script support):

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

No installation, no `npm install`, no build step required.

## Tech Stack

- **HTML5** — single-page document
- **CSS3** — custom properties, `backdrop-filter`, grid, flexbox, keyframe animations
- **Vanilla JavaScript** (ES Modules) — pure DOM manipulation, `localStorage`, `FileReader` API
- **Zero dependencies** — no frameworks, no libraries, no CDN links

## Project Structure

```
KittyOS/
├── index.html      # Entry point (28 lines)
├── style.css       # All styling (736 lines)
└── script.js       # All application logic (1101 lines)
```

Everything is self-contained in three files.

## Development

Edit any file and refresh the browser. No bundler, no watcher, no compilation step. The app uses a simple app-registration pattern — apps are defined as objects in a central dictionary with `id`, `title`, `icon`, dimensions, and an `onReady` callback.

## License

MIT

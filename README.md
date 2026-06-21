# KittyOS 🐱

A whimsical, cat-themed desktop environment simulator — built entirely in vanilla HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies. Just open and play.

![screenshot](https://img.shields.io/badge/status-purr--ing-brightgreen)

## Features

### Desktop Environment
- **Draggable desktop icons** with grid-snap and collision avoidance
- **Right-click context menu** — open, pin, rename, sort, and more
- **6 built-in cat image wallpapers** (Sunbeam Cat, White Cat, Orange Tabby, Gray Whiskers, Peek-a-boo, Grumpy Cat) plus **custom upload**
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

### Chibi Cat Character

A calico cat lives on the desktop and responds to interaction:

- **Pet the cat** — Click on it to pet (+5 happiness, heart floats up, speech bubble)
- **Feed the cat** — Use `treat` in the terminal to spawn a fish, then drag it near the cat (+20 happiness)
- **4 expressions** — Cycles based on happiness: sleepy, idle, happy, very_happy
- **Expression cycling** — The cat naturally blinks and shifts expressions every few seconds
- **Happiness decays** by 1 every 30 seconds
- **Draggable** — Click and drag to reposition the cat anywhere on the desktop
- **State persisted** in localStorage across sessions

### Built-in Apps

| App | Description |
|---|---|
| **Meow Terminal** (`💻`) | Interactive shell with ASCII art banner. Commands: `help`, `ls`, `cat`, `meow`, `purr`, `neofetch`, `sudo`, `echo`, `date`, `weather`, `treat`, `clear`, and more |
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
├── style.css       # All styling (870 lines)
├── script.js       # All application logic (1376 lines)
├── happy.png       # Cat expression
├── idle.png        # Cat expression
├── sleepy.png      # Cat expression
├── very_happy.png  # Cat expression
└── fish.jpeg       # Treat food
```

Everything is self-contained in three files.

## Development

Edit any file and refresh the browser. No bundler, no watcher, no compilation step. The app uses a simple app-registration pattern — apps are defined as objects in a central dictionary with `id`, `title`, `icon`, dimensions, and an `onReady` callback.

## License

MIT

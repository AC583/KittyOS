const GRID = {
  GAP_X: 88,
  GAP_Y: 98,
  START_X: 20,
  START_Y: 20,
  COLS: 6,
}

const WALLPAPERS = {
  sunbeam: {
    name: 'Sunbeam',
    css: `radial-gradient(circle at 20% 30%, rgba(255,159,67,0.12) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(255,107,107,0.10) 0%, transparent 50%),
          linear-gradient(160deg, #FFF5E6 0%, #FFE4C4 40%, #FFD699 100%)`,
  },
  midnight: {
    name: 'Midnight',
    css: `radial-gradient(circle at 30% 40%, rgba(147,129,255,0.15) 0%, transparent 50%),
          radial-gradient(circle at 70% 60%, rgba(255,107,157,0.10) 0%, transparent 50%),
          linear-gradient(160deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)`,
  },
  catnip: {
    name: 'Catnip Fields',
    css: `radial-gradient(circle at 40% 30%, rgba(107,255,147,0.12) 0%, transparent 50%),
          radial-gradient(circle at 60% 70%, rgba(159,255,107,0.10) 0%, transparent 50%),
          linear-gradient(160deg, #e8f5e9 0%, #c8e6c9 40%, #a5d6a7 100%)`,
  },
  paws: {
    name: 'Paw Prints',
    css: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,159,67,0.04) 20px, rgba(255,159,67,0.04) 40px),
          linear-gradient(160deg, #FFF5E6 0%, #FFE4C4 50%, #FFD699 100%)`,
  },
  sunset: {
    name: 'Tuna Sunset',
    css: `radial-gradient(circle at 50% 0%, rgba(255,200,100,0.2) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(255,100,50,0.15) 0%, transparent 40%),
          linear-gradient(160deg, #FF6B35 0%, #FF8C42 30%, #FFB347 60%, #FFD699 100%)`,
  },
  wonderland: {
    name: 'Whisker Wonderland',
    css: `radial-gradient(circle at 30% 20%, rgba(200,150,255,0.12) 0%, transparent 40%),
          radial-gradient(circle at 70% 80%, rgba(255,150,200,0.10) 0%, transparent 40%),
          linear-gradient(160deg, #f3e5f5 0%, #e8d5f5 30%, #fce4ec 60%, #fff3e0 100%)`,
  },
}

const WEATHER_CONDITIONS = [
  { icon: '☀️', temp: 72, desc: 'Purrfectly sunny' },
  { icon: '⛅', temp: 68, desc: 'Nice nap weather' },
  { icon: '☁️', temp: 65, desc: 'Cozy and cloudy' },
  { icon: '🌧️', temp: 60, desc: 'Good window-gazing' },
  { icon: '🌈', temp: 70, desc: 'Chase the rainbow!' },
]

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAY_NAMES = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

const FILE_TREE = {
  '/': [
    { name: 'home', icon: '📁' },
    { name: 'treats', icon: '📁' },
    { name: 'naps', icon: '💤' },
    { name: 'README.txt', icon: '📄' },
  ],
  '/home': [{ name: 'whiskers', icon: '📁' }],
  '/home/whiskers': [
    { name: 'documents', icon: '📁' },
    { name: 'pictures', icon: '📁' },
    { name: 'toys', icon: '📁' },
    { name: 'treats', icon: '📁' },
  ],
  '/home/whiskers/documents': [
    { name: 'treat-schedule.txt', icon: '📄' },
    { name: 'nap-notes.txt', icon: '📄' },
    { name: 'humans-are-ok.txt', icon: '📄' },
    { name: 'favorite-spots.txt', icon: '📄' },
  ],
  '/home/whiskers/pictures': [
    { name: 'cute-paws.jpg', icon: '🖼️' },
    { name: 'window-view.jpg', icon: '🖼️' },
    { name: 'sunbeam-selfie.png', icon: '🖼️' },
  ],
  '/home/whiskers/toys': [
    { name: 'red-dot-laser.txt', icon: '🔴' },
    { name: 'feather-wand.txt', icon: '🪶' },
    { name: 'cardboard-box.txt', icon: '📦' },
  ],
  '/home/whiskers/treats': [
    { name: 'tuna-flavor.txt', icon: '🐟' },
    { name: 'catnip-special.txt', icon: '🌿' },
  ],
  '/treats': [
    { name: 'salmon-bites.txt', icon: '🐟' },
    { name: 'chicken-deli.txt', icon: '🍗' },
  ],
  '/naps': [
    { name: 'sunbeam-spot.txt', icon: '☀️' },
    { name: 'lap-nap.txt', icon: '💤' },
    { name: 'box-nap.txt', icon: '📦' },
  ],
}

function runCommand(cmd, outputEl) {
  const parts = cmd.split(' ')
  const name = parts[0].toLowerCase()
  const args = parts.slice(1).join(' ')

  const commands = {
    help() {
      return `<span class="info">Available commands:</span>
  <span class="prompt">help</span>     - Show this message
  <span class="prompt">whoami</span>   - Discover who you are
  <span class="prompt">ls</span>       - List files
  <span class="prompt">meow</span>     - Make a cat sound
  <span class="prompt">purr</span>     - The cat purrs
  <span class="prompt">date</span>     - Show current date
  <span class="prompt">weather</span>  - Check the weather
  <span class="prompt">cat</span>      - Display a cat
  <span class="prompt">neofetch</span> - Show system info
  <span class="prompt">nap</span>      - Take a nap
  <span class="prompt">treat</span>    - Get a treat
  <span class="prompt">sudo</span>     - Try admin powers
  <span class="prompt">clear</span>    - Clear the terminal
  <span class="prompt">echo</span>     - Repeat text
  <span class="prompt">pwd</span>      - Show current directory`
    },
    whoami() { return '<span class="success">You are a wonderful human. The cat says so. 🐱</span>' },
    ls() { return '<span class="meow">Documents/  Pictures/  Toys/  Treats/  Naps/  RedDot.exe</span>' },
    meow() { return '<span class="meow">Meow... meow... PURR! 🐱</span>' },
    purr() { return '<span class="meow">rrrrrrrrrRRRRRRR Purrrrr~ ✨</span>' },
    date() { return `<span class="info">${new Date().toLocaleString()}</span>` },
    weather() {
      const c = WEATHER_CONDITIONS[Math.floor(Math.random() * WEATHER_CONDITIONS.length)]
      return `<span class="info">${c.icon} ${c.desc}</span>`
    },
    cat() {
      return `<span class="meow">
  ╱|、
 (˚ˎ 。7
  |、˜〵
  じしˍ,)ノ
 </span><span class="info">  A wild cat appears!</span>`
    },
    neofetch() {
      return `<span class="info">        ████████████        </span>
<span class="info">      ██            ██      </span>
<span class="info">    ██  🐱  🐱  🐱  ██    </span>
<span class="info">    ██  KittyOS 2.0  ██    </span>
<span class="info">    ██  Purr Edition ██    </span>
<span class="info">      ██            ██      </span>
<span class="info">        ████████████        </span>
<span class="success">OS:</span> KittyOS 2.0 Purr Edition
<span class="success">Kernel:</span> 4.20.69-Whiskers
<span class="success">Uptime:</span> ${Math.floor(Math.random() * 100)} hours
<span class="success">Shell:</span> Purr Bash 3.2
<span class="success">Theme:</span> Catppuccino 🧋`
    },
    nap() {
      const list = ['💤 Zzz... cat is napping...', '💤 zZzZz... dreaming of tuna...', '💤 *twitches whiskers in sleep*', '💤 zzz... 5 more minutes...']
      return `<span class="meow">${list[Math.floor(Math.random() * list.length)]}</span>`
    },
    treat() {
      const list = ['🐟 Here\'s a tuna treat! Nom nom!', '🍗 Chicken treat! You earned it!', '🌿 Catnip! Going wild!', '🧀 Cheese bit! Purr!']
      return `<span class="success">${list[Math.floor(Math.random() * list.length)]}</span>`
    },
    sudo() { return '<span class="warn">Nice try. You\'re already the admin here. 🐱</span>' },
    clear() { outputEl.innerHTML = ''; return '' },
    echo() { return `<span class="success">${args}</span>` },
    pwd() { return '<span class="info">/home/whiskers</span>' },
  }

  const handler = commands[name]
  if (handler) {
    const result = handler()
    if (result) {
      outputEl.innerHTML += `<div>${result}</div>`
    }
  } else if (name) {
    outputEl.innerHTML += `<div><span class="error">meow?</span> Unknown command: "${name}". Try <span class="prompt">help</span></div>`
  }
}

const STATE_KEY = 'kittyos-state'

const state = {
  windows: {},
  nextId: 1,
  zIndex: 100,
  winDrag: null,
  iconDrag: null,
  icons: {},
  pinnedApps: ['explorer'],
  clipboard: null,
  settings: {
    wallpaper: 'sunbeam',
    customWallpaper: null,
    widgets: { calendar: false, weather: false },
    gridSnap: false,
  },
  labels: {},
  renamingApp: null,
  contextTarget: null,
}

function saveState() {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify({
      desktopIcons: state.icons,
      pinnedApps: state.pinnedApps,
      settings: state.settings,
      taskbarLabels: state.labels,
    }))
  } catch {
    /* storage full or unavailable */
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STATE_KEY)
    if (!raw) return
    const data = JSON.parse(raw)
    if (data.desktopIcons) state.icons = data.desktopIcons
    if (data.pinnedApps) state.pinnedApps = data.pinnedApps
    if (data.settings) {
      if (data.settings.wallpaper) state.settings.wallpaper = data.settings.wallpaper
      if (data.settings.customWallpaper) state.settings.customWallpaper = data.settings.customWallpaper
      if (data.settings.widgets) state.settings.widgets = data.settings.widgets
      if (data.settings.gridSnap != null) state.settings.gridSnap = data.settings.gridSnap
    }
    if (data.taskbarLabels) state.labels = data.taskbarLabels
  } catch {
    /* corrupted state */
  }
}

const $ = {
  desktop: document.getElementById('desktop'),
  pinned: document.getElementById('taskbar-pinned'),
  running: document.getElementById('taskbar-running'),
  widgets: document.getElementById('widgets'),
  menu: document.getElementById('context-menu'),
  clock: document.getElementById('clock'),
  settingsBtn: document.getElementById('settings-btn'),
}

setInterval(() => {
  $.clock.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}, 1000)

function setWallpaper(key) {
  const wp = WALLPAPERS[key]
  if (!wp) return
  $.desktop.style.background = wp.css
  state.settings.wallpaper = key
  state.settings.customWallpaper = null
  saveState()
}

function setCustomWallpaper(dataUrl) {
  $.desktop.style.background = `url(${dataUrl}) center/cover no-repeat`
  state.settings.wallpaper = 'custom'
  state.settings.customWallpaper = dataUrl
  saveState()
}

function renderIcons() {
  $.desktop.querySelectorAll('.desktop-icon').forEach(el => el.remove())
  for (const [id, data] of Object.entries(state.icons)) {
    const el = document.createElement('div')
    el.className = 'desktop-icon'
    el.dataset.app = id
    el.style.left = data.x + 'px'
    el.style.top = data.y + 'px'
    el.innerHTML = `<span class="icon">${data.icon}</span><span class="label">${data.label}</span>`
    el.addEventListener('dblclick', () => launchApp(id))
    initIconDrag(el, id)
    $.desktop.appendChild(el)
  }
}

function addIcon(icon, label, id, x, y) {
  if (state.icons[id]) return
  const pos = x != null ? { x, y } : nextIconPosition()
  state.icons[id] = { icon, label, appId: id, x: pos.x, y: pos.y }
  renderIcons()
  saveState()
}

function removeIcon(id) {
  if (!state.icons[id]) return
  delete state.icons[id]
  renderIcons()
  saveState()
}

function nextIconPosition() {
  const count = Object.keys(state.icons).length
  return {
    x: GRID.START_X + (count % GRID.COLS) * GRID.GAP_X,
    y: GRID.START_Y + Math.floor(count / GRID.COLS) * GRID.GAP_Y,
  }
}

function initIconDrag(el, appId) {
  el.addEventListener('mousedown', e => {
    if (e.button !== 0) return
    state.iconDrag = {
      appId,
      startX: e.clientX,
      startY: e.clientY,
      origX: parseInt(el.style.left) || 0,
      origY: parseInt(el.style.top) || 0,
    }
    el.classList.add('dragging')
  })
}

document.addEventListener('mousemove', e => {
  if (state.iconDrag) {
    const d = state.iconDrag
    const dx = e.clientX - d.startX
    const dy = e.clientY - d.startY
    const el = document.querySelector(`.desktop-icon[data-app="${d.appId}"]`)
    if (el) {
      let x = d.origX + dx
      let y = d.origY + dy
      if (state.settings.gridSnap) {
        const snapped = snapPosition(x, y)
        x = snapped.x
        y = snapped.y
      }
      el.style.left = x + 'px'
      el.style.top = y + 'px'
    }
  }

  if (state.winDrag) {
    const d = state.winDrag
    d.el.style.left = (d.origX + e.clientX - d.startX) + 'px'
    d.el.style.top = (d.origY + e.clientY - d.startY) + 'px'
  }
})

document.addEventListener('mouseup', () => {
  if (state.iconDrag) {
    const d = state.iconDrag
    const el = document.querySelector(`.desktop-icon[data-app="${d.appId}"]`)
    if (el) {
      el.classList.remove('dragging')
      let x = parseInt(el.style.left) || 0
      let y = parseInt(el.style.top) || 0
      if (state.settings.gridSnap) {
        const snapped = snapPosition(x, y, d.appId)
        x = snapped.x
        y = snapped.y
        el.style.left = x + 'px'
        el.style.top = y + 'px'
      }
      if (state.icons[d.appId]) {
        state.icons[d.appId].x = x
        state.icons[d.appId].y = y
        saveState()
      }
    }
    state.iconDrag = null
  }

  if (state.winDrag) {
    state.winDrag = null
  }
})

function snapPosition(x, y, excludeId) {
  let col = Math.round((x - GRID.START_X) / GRID.GAP_X)
  let row = Math.round((y - GRID.START_Y) / GRID.GAP_Y)
  col = Math.max(0, col)
  row = Math.max(0, row)

  if (!excludeId) {
    return { x: GRID.START_X + col * GRID.GAP_X, y: GRID.START_Y + row * GRID.GAP_Y }
  }

  function occupied(c, r) {
    return Object.entries(state.icons)
      .filter(([id]) => id !== excludeId)
      .some(([, icon]) => {
        const ic = Math.round((icon.x - GRID.START_X) / GRID.GAP_X)
        const ir = Math.round((icon.y - GRID.START_Y) / GRID.GAP_Y)
        return ic === c && ir === r
      })
  }

  if (!occupied(col, row)) {
    return { x: GRID.START_X + col * GRID.GAP_X, y: GRID.START_Y + row * GRID.GAP_Y }
  }

  for (let radius = 1; radius < 50; radius++) {
    for (let dc = -radius; dc <= radius; dc++) {
      for (let dr = -radius; dr <= radius; dr++) {
        if (Math.abs(dc) !== radius && Math.abs(dr) !== radius) continue
        const c = Math.max(0, col + dc)
        const r = Math.max(0, row + dr)
        if (!occupied(c, r)) {
          return { x: GRID.START_X + c * GRID.GAP_X, y: GRID.START_Y + r * GRID.GAP_Y }
        }
      }
    }
  }

  return { x: GRID.START_X + col * GRID.GAP_X, y: GRID.START_Y + row * GRID.GAP_Y }
}

function arrangeGrid() {
  const entries = Object.entries(state.icons)
  entries.forEach(([id, data], i) => {
    data.x = GRID.START_X + (i % GRID.COLS) * GRID.GAP_X
    data.y = GRID.START_Y + Math.floor(i / GRID.COLS) * GRID.GAP_Y
  })
  renderIcons()
  saveState()
}

function sortIcons(mode) {
  const entries = Object.entries(state.icons)
  if (mode === 'name') {
    entries.sort((a, b) => a[1].label.localeCompare(b[1].label))
  } else if (mode === 'type') {
    entries.sort((a, b) => a[1].icon.localeCompare(b[1].icon) || a[1].label.localeCompare(b[1].label))
  }
  entries.forEach(([id, data], i) => {
    data.x = GRID.START_X + (i % GRID.COLS) * GRID.GAP_X
    data.y = GRID.START_Y + Math.floor(i / GRID.COLS) * GRID.GAP_Y
  })
  state.icons = Object.fromEntries(entries)
  renderIcons()
  saveState()
}

function pasteIcon() {
  if (!state.clipboard) return
  const { appId, action } = state.clipboard
  const app = apps[appId]
  if (!app) return
  if (action === 'cut' || action === 'copy') {
    const pos = {
      x: state.contextTarget?.pasteX || 100,
      y: state.contextTarget?.pasteY || 100,
    }
    addIcon(app.icon, app.title, appId, pos.x, pos.y)
    if (action === 'cut') state.clipboard = null
  }
}

function renderWidgets() {
  $.widgets.innerHTML = ''
  if (state.settings.widgets.calendar) renderCalendarWidget()
  if (state.settings.widgets.weather) renderWeatherWidget()
}

function renderCalendarWidget() {
  const el = document.createElement('div')
  el.className = 'widget widget-calendar'
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const today = now.getDate()

  let html = `<div class="w-cal-header"><span>${MONTHS[month]} ${year}</span></div><div class="w-cal-grid">`
  DAY_NAMES.forEach(d => { html += `<div class="day-name">${d}</div>` })
  for (let i = 0; i < firstDay; i++) html += '<div class="day other"></div>'
  for (let d = 1; d <= daysInMonth; d++) {
    html += `<div class="day${d === today ? ' today' : ''}">${d}</div>`
  }
  html += '</div>'
  el.innerHTML = html
  $.widgets.appendChild(el)
}

function renderWeatherWidget() {
  const el = document.createElement('div')
  el.className = 'widget widget-weather'
  const c = WEATHER_CONDITIONS[Math.floor(Math.random() * WEATHER_CONDITIONS.length)]
  el.innerHTML = `<div class="w-weather-content">
    <div class="w-icon">${c.icon}</div>
    <div class="w-temp">${c.temp}°F</div>
    <div class="w-desc">${c.desc}</div>
  </div>`
  $.widgets.appendChild(el)
}

function createWindow(app) {
  const id = 'win-' + state.nextId++
  const desktopW = $.desktop.clientWidth
  const desktopH = $.desktop.clientHeight
  const w = Math.min(app.width, desktopW - 40)
  const h = Math.min(app.height, desktopH - 60)

  const offsetX = Math.min(60 + (state.nextId * 20) % 200, desktopW - w - 20)
  const offsetY = Math.min(40 + (state.nextId * 15) % 150, desktopH - h - 20)
  const x = Math.max(20, offsetX)
  const y = Math.max(20, offsetY)

  const el = document.createElement('div')
  el.className = 'window'
  el.id = id
  el.style.cssText = `left:${x}px; top:${y}px; width:${w}px; height:${h}px; z-index:${++state.zIndex}`

  el.innerHTML = `
    <div class="title-bar">
      <span class="win-icon">${app.icon}</span>
      <span class="win-title">${app.title}</span>
      <button class="win-btn minimize" title="Minimize">─</button>
      <button class="win-btn close" title="Close">✕</button>
    </div>
    <div class="win-body"></div>
  `

  el.querySelector('.win-btn.minimize').addEventListener('click', () => minimizeWindow(id))
  el.querySelector('.win-btn.close').addEventListener('click', () => closeWindow(id))
  initWindowDrag(el)

  $.desktop.appendChild(el)
  state.windows[id] = { id, appId: app.id, el, minimized: false }
  renderTaskbar()
  focusWindow(id)

  if (app.onReady) {
    app.onReady(id, el.querySelector('.win-body'))
  }

  return id
}

function closeWindow(id) {
  const w = state.windows[id]
  if (!w) return
  w.el.remove()
  delete state.windows[id]
  renderTaskbar()
}

function minimizeWindow(id) {
  const w = state.windows[id]
  if (!w) return
  w.minimized = !w.minimized
  w.el.classList.toggle('minimized')
  renderTaskbar()
}

function focusWindow(id) {
  const w = state.windows[id]
  if (!w) return
  if (w.minimized) {
    minimizeWindow(id)
    return
  }
  w.el.style.zIndex = ++state.zIndex
  w.el.parentNode.appendChild(w.el)
  renderTaskbar()
}

function initWindowDrag(el) {
  const bar = el.querySelector('.title-bar')
  bar.addEventListener('mousedown', e => {
    if (e.target.closest('.win-btn')) return
    focusWindow(el.id)
    state.winDrag = {
      el,
      startX: e.clientX,
      startY: e.clientY,
      origX: el.offsetLeft,
      origY: el.offsetTop,
    }
  })
}

function launchApp(appId) {
  hideMenu()
  const existing = Object.values(state.windows).find(w => w.appId === appId)
  if (existing) {
    focusWindow(existing.id)
    return
  }
  const app = apps[appId]
  if (app) createWindow(app)
}

function renderTaskbar() {
  if (state.renamingApp) return
  $.pinned.innerHTML = ''
  $.running.innerHTML = ''

  for (const appId of state.pinnedApps) {
    const app = apps[appId]
    if (!app) continue
    const isRunning = Object.values(state.windows).some(w => w.appId === appId)
    const btn = taskbarButton(app, appId)
    btn.classList.add('pinned')
    if (isRunning) btn.classList.add('running')
    btn.addEventListener('click', () => launchApp(appId))
    $.pinned.appendChild(btn)
  }

  for (const w of Object.values(state.windows)) {
    if (state.pinnedApps.includes(w.appId)) continue
    const app = apps[w.appId]
    if (!app) continue
    const btn = taskbarButton(app, w.appId)
    btn.classList.add('running')
    btn.dataset.win = w.id
    if (w.minimized) btn.classList.add('minimized')
    btn.addEventListener('click', () => {
      if (w.minimized) {
        minimizeWindow(w.id)
        focusWindow(w.id)
      } else if (w.el.style.zIndex == state.zIndex) {
        minimizeWindow(w.id)
      } else {
        focusWindow(w.id)
      }
    })
    $.running.appendChild(btn)
  }
}

function taskbarButton(app, appId) {
  const btn = document.createElement('button')
  btn.className = 'tb-btn'
  btn.dataset.app = appId
  const label = state.labels[appId] || app.title
  btn.innerHTML = `<span class="tb-icon">${app.icon}</span>${label}`
  btn.addEventListener('contextmenu', e => {
    e.preventDefault()
    e.stopPropagation()
    showAppMenu(appId, e.clientX, e.clientY, 'taskbar')
  })
  return btn
}

function togglePin(appId) {
  const idx = state.pinnedApps.indexOf(appId)
  if (idx >= 0) {
    state.pinnedApps.splice(idx, 1)
  } else {
    state.pinnedApps.push(appId)
  }
  renderTaskbar()
  saveState()
}

function startRename(appId) {
  hideMenu()
  state.renamingApp = appId
  const btn = $.pinned.querySelector(`[data-app="${appId}"]`) || $.running.querySelector(`[data-app="${appId}"]`)
  if (!btn) {
    state.renamingApp = null
    return
  }

  const current = state.labels[appId] || (apps[appId] ? apps[appId].title : appId)
  btn.innerHTML = ''
  const input = document.createElement('input')
  input.type = 'text'
  input.value = current
  input.className = 'rename-input'
  btn.appendChild(input)
  input.focus()
  input.select()

  function finish() {
    const val = input.value.trim()
    if (val && val !== (apps[appId]?.title || appId)) {
      state.labels[appId] = val
    } else {
      delete state.labels[appId]
    }
    state.renamingApp = null
    saveState()
    renderTaskbar()
  }

  input.addEventListener('blur', finish)
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { input.blur(); e.preventDefault() }
    if (e.key === 'Escape') { state.renamingApp = null; renderTaskbar(); e.preventDefault() }
  })
}

$.desktop.addEventListener('contextmenu', e => {
  e.preventDefault()
  const iconEl = e.target.closest('.desktop-icon')
  if (iconEl) {
    const id = iconEl.dataset.app
    showAppMenu(id, e.clientX, e.clientY, 'icon')
  } else {
    state.contextTarget = {
      appId: null,
      source: 'desktop',
      pasteX: e.clientX,
      pasteY: e.clientY - $.desktop.getBoundingClientRect().top,
    }
    showDesktopMenu(e.clientX, e.clientY)
  }
})

$.settingsBtn.addEventListener('click', () => launchApp('settings'))

function showMenu(items, x, y) {
  hideMenu()
  $.menu.innerHTML = items.map((item, i) => {
    if (item.separator) return '<div class="cm-separator"></div>'
    return `<button class="cm-item" data-index="${i}">
      <span class="cm-icon">${item.icon || ''}</span>
      <span class="cm-label">${item.label}</span>
    </button>`
  }).join('')
  $.menu.classList.add('show')

  const pad = 8
  const rect = $.menu.getBoundingClientRect()
  let left = Math.min(x, window.innerWidth - rect.width - pad)
  let top = Math.min(y, window.innerHeight - rect.height - pad)
  left = Math.max(pad, left)
  top = Math.max(pad, top)
  $.menu.style.left = left + 'px'
  $.menu.style.top = top + 'px'

  $.menu.querySelectorAll('.cm-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index)
      const action = items[idx].action
      hideMenu()
      if (action) performAction(action)
    })
  })
}

function hideMenu() {
  $.menu.classList.remove('show')
  $.menu.innerHTML = ''
}

document.addEventListener('click', e => {
  if (!e.target.closest('#context-menu')) hideMenu()
})

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') hideMenu()
})

function showAppMenu(appId, x, y, source) {
  state.contextTarget = { appId, source }
  const isPinned = state.pinnedApps.includes(appId)
  showMenu([
    { label: 'Open', action: 'open', icon: '🚀' },
    { label: isPinned ? 'Unpin from dock' : 'Keep in dock', action: 'pin', icon: '📌' },
    { label: 'Rename', action: 'rename', icon: '✏️' },
    { label: 'Cut', action: 'cut', icon: '✂️' },
    { label: 'Copy', action: 'copy', icon: '📋' },
    { label: 'Delete', action: 'delete', icon: '🗑️' },
  ], x, y)
}

function showDesktopMenu(x, y) {
  state.contextTarget = { appId: null, source: 'desktop' }
  const items = [
    { label: 'Clean Up', action: 'cleanup', icon: '🧹' },
    { label: 'Sort By Name', action: 'sort-name', icon: '🔤' },
    { label: 'Sort By Type', action: 'sort-type', icon: '🏷️' },
    { separator: true },
    { label: state.settings.gridSnap ? '✅ Snap to Grid' : '⬜ Snap to Grid', action: 'toggle-grid-snap', icon: '' },
  ]
  if (state.clipboard) {
    items.push({ separator: true })
    items.push({ label: 'Paste', action: 'paste', icon: '📋' })
  }
  showMenu(items, x, y)
}

function performAction(action) {
  const target = state.contextTarget
  if (!target) return

  switch (action) {
    case 'open':
      launchApp(target.appId)
      break
    case 'pin':
      togglePin(target.appId)
      break
    case 'rename':
      startRename(target.appId)
      break
    case 'cut':
      state.clipboard = { appId: target.appId, action: 'cut' }
      removeIcon(target.appId)
      break
    case 'copy':
      state.clipboard = { appId: target.appId, action: 'copy' }
      break
    case 'delete':
      removeIcon(target.appId)
      state.pinnedApps = state.pinnedApps.filter(id => id !== target.appId)
      renderTaskbar()
      saveState()
      break
    case 'cleanup':
      arrangeGrid()
      break
    case 'sort-name':
      sortIcons('name')
      break
    case 'sort-type':
      sortIcons('type')
      break
    case 'paste':
      pasteIcon()
      break
    case 'toggle-grid-snap':
      state.settings.gridSnap = !state.settings.gridSnap
      saveState()
      break
  }

  state.contextTarget = null
}

const apps = {
  terminal: {
    id: 'terminal',
    title: 'Meow Terminal',
    icon: '💻',
    width: 620,
    height: 400,
    onReady(id, body) {
      body.innerHTML = `
        <div class="terminal">
          <div class="term-output">
            <div><span class="meow">╭━━━━━━━━━━━━━━━━━━━━━━━━━━╮</span></div>
            <div><span class="meow">│      KittyOS v2.0        │</span></div>
            <div><span class="meow">│   Type <span class="info">help</span> for commands   │</span></div>
            <div><span class="meow">╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯</span></div>
            <div>&nbsp;</div>
          </div>
          <div class="term-input-line">
            <span class="prompt">❯</span>
            <input type="text" spellcheck="false" placeholder="type a command..." autofocus>
          </div>
        </div>
      `
      const output = body.querySelector('.term-output')
      const input = body.querySelector('input')
      input.focus()
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          const cmd = input.value.trim()
          input.value = ''
          output.innerHTML += `<div><span class="prompt">❯</span> ${cmd}</div>`
          runCommand(cmd, output)
          output.scrollTop = output.scrollHeight
        }
      })
    },
  },
  notes: {
    id: 'notes',
    title: 'Whisker Notes',
    icon: '📝',
    width: 500,
    height: 400,
    onReady(id, body) {
      body.innerHTML = '<div class="notes-body"><textarea placeholder="Start typing your purrs..."></textarea></div>'
      const ta = body.querySelector('textarea')
      const saved = localStorage.getItem('kittyos-notes')
      if (saved) ta.value = saved
      ta.addEventListener('input', () => localStorage.setItem('kittyos-notes', ta.value))
    },
  },
  explorer: {
    id: 'explorer',
    title: 'Cat Explorer',
    icon: '🗂️',
    width: 640,
    height: 440,
    onReady(id, body) {
      body.innerHTML = `
        <div class="explorer-body">
          <div class="explorer-sidebar">
            <div class="tree-item folder" data-path="/">📁 KittyOS</div>
            <div class="tree-indent">
              <div class="tree-item folder" data-path="/home">📁 home</div>
              <div class="tree-indent">
                <div class="tree-item folder active" data-path="/home/whiskers">📁 whiskers</div>
                <div class="tree-indent">
                  <div class="tree-item" data-path="/home/whiskers/documents">📁 documents</div>
                  <div class="tree-item" data-path="/home/whiskers/pictures">📁 pictures</div>
                  <div class="tree-item" data-path="/home/whiskers/toys">📁 toys</div>
                  <div class="tree-item" data-path="/home/whiskers/treats">📁 treats</div>
                </div>
              </div>
              <div class="tree-item folder" data-path="/treats">📁 treats</div>
              <div class="tree-item folder" data-path="/naps">💤 naps</div>
            </div>
          </div>
          <div class="explorer-content" id="explorer-content-${id}">
            <div style="font-size:14px;font-weight:600;color:#2D1B0E;margin-bottom:8px;">📁 /home/whiskers</div>
            <div class="file-list">
              <div class="file-row"><span class="file-icon">📄</span> treat-schedule.txt</div>
              <div class="file-row"><span class="file-icon">📄</span> nap-notes.txt</div>
              <div class="file-row"><span class="file-icon">📄</span> humans-are-ok.txt</div>
              <div class="file-row"><span class="file-icon">📄</span> favorite-spots.txt</div>
              <div class="file-row"><span class="file-icon">📄</span> daily-routine.txt</div>
            </div>
          </div>
        </div>
      `
      const content = body.querySelector('.explorer-content')
      body.querySelectorAll('.tree-item').forEach(item => {
        item.addEventListener('click', () => {
          body.querySelectorAll('.tree-item').forEach(t => t.classList.remove('active'))
          item.classList.add('active')
          const path = item.dataset.path
          const files = FILE_TREE[path]
          if (files) {
            const label = path.replace(/^\//, '')
            content.innerHTML = `<div style="font-size:14px;font-weight:600;color:#2D1B0E;margin-bottom:8px;">📁 ${label || 'KittyOS'}</div>
              <div class="file-list">
                ${files.map(f => `<div class="file-row"><span class="file-icon">${f.icon || '📄'}</span> ${f.name}</div>`).join('')}
              </div>`
          }
        })
        if (item.classList.contains('folder')) {
          item.addEventListener('dblclick', () => {
            const next = item.nextElementSibling
            if (next && next.classList.contains('tree-indent')) {
              next.style.display = next.style.display === 'none' ? '' : 'none'
            }
          })
        }
      })
    },
  },
  clock: {
    id: 'clock',
    title: 'PurrClock',
    icon: '🕐',
    width: 320,
    height: 360,
    onReady(id, body) {
      body.innerHTML = `
        <div class="clock-body">
          <div class="clock-face">
            <div class="hand hour" id="hour-hand-${id}"></div>
            <div class="hand minute" id="minute-hand-${id}"></div>
            <div class="hand second" id="second-hand-${id}"></div>
            <div class="center"></div>
          </div>
          <div class="digital-time" id="digital-${id}"></div>
          <div class="clock-label">𐂃 Meowdnight 𐂃</div>
        </div>
      `
      function tick() {
        const now = new Date()
        const h = now.getHours() % 12
        const m = now.getMinutes()
        const s = now.getSeconds()
        document.getElementById(`hour-hand-${id}`).style.transform = `translateX(-50%) rotate(${h * 30 + m * 0.5}deg)`
        document.getElementById(`minute-hand-${id}`).style.transform = `translateX(-50%) rotate(${m * 6 + s * 0.1}deg)`
        document.getElementById(`second-hand-${id}`).style.transform = `translateX(-50%) rotate(${s * 6}deg)`
        document.getElementById(`digital-${id}`).textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      }
      tick()
      setInterval(tick, 1000)
    },
  },
  settings: {
    id: 'settings',
    title: 'Settings',
    icon: '⚙️',
    width: 520,
    height: 420,
    onReady(id, body) {
      body.innerHTML = `
        <div class="settings-body">
          <div class="settings-tabs">
            <button class="active" data-tab="wallpaper">Wallpaper</button>
            <button data-tab="widgets">Widgets</button>
          </div>
          <div class="settings-panel" id="settings-panel-${id}"></div>
        </div>
      `
      const panel = body.querySelector('.settings-panel')
      body.querySelectorAll('.settings-tabs button').forEach(btn => {
        btn.addEventListener('click', () => {
          body.querySelectorAll('.settings-tabs button').forEach(b => b.classList.remove('active'))
          btn.classList.add('active')
          renderSettingsTab(btn.dataset.tab, panel, id)
        })
      })
      renderSettingsTab('wallpaper', panel, id)
    },
  },
}

function renderSettingsTab(tab, panel, winId) {
  if (tab === 'wallpaper') renderWallpaperTab(panel, winId)
  else if (tab === 'widgets') renderWidgetsTab(panel)
}

function renderWallpaperTab(panel, winId) {
  let html = '<div class="wp-grid">'
  for (const [key, wp] of Object.entries(WALLPAPERS)) {
    const active = state.settings.customWallpaper ? false : state.settings.wallpaper === key
    html += `<div class="wp-card${active ? ' active' : ''}" data-wp="${key}" style="background:${wp.css}">
      <span class="wp-label">${wp.name}</span>
    </div>`
  }
  const isCustom = !!state.settings.customWallpaper
  html += `<div class="wp-card${isCustom ? ' active' : ''}" data-wp="custom" style="background:${isCustom ? `url(${state.settings.customWallpaper}) center/cover` : '#ddd'}">
    <span class="wp-label">${isCustom ? 'Custom ✓' : 'Custom'}</span>
  </div>`
  html += '</div><div class="wp-upload-area"><label class="wp-upload-btn">📁 Upload Image<input type="file" accept="image/*" style="display:none" id="wp-file-' + winId + '"></label></div>'
  panel.innerHTML = html

  panel.querySelectorAll('.wp-card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.wp
      if (key === 'custom' && state.settings.customWallpaper) {
        panel.querySelectorAll('.wp-card').forEach(c => c.classList.remove('active'))
        card.classList.add('active')
        setCustomWallpaper(state.settings.customWallpaper)
      } else if (key !== 'custom') {
        panel.querySelectorAll('.wp-card').forEach(c => c.classList.remove('active'))
        card.classList.add('active')
        setWallpaper(key)
      }
    })
  })

  const fileInput = panel.querySelector(`#wp-file-${winId}`)
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = e => {
      setCustomWallpaper(e.target.result)
      renderWallpaperTab(panel, winId)
    }
    reader.readAsDataURL(file)
  })
}

function renderWidgetsTab(panel) {
  const widgets = [
    { id: 'calendar', icon: '📅', name: 'Calendar', desc: 'Show month calendar on desktop' },
    { id: 'weather', icon: '☀️', name: 'Weather', desc: 'Show weather widget on desktop' },
  ]

  panel.innerHTML = '<div class="widget-toggles">' + widgets.map(w => `
    <div class="wt-row">
      <div class="wt-info">
        <span class="wt-icon">${w.icon}</span>
        <div><div class="wt-name">${w.name}</div><div class="wt-desc">${w.desc}</div></div>
      </div>
      <button class="toggle${state.settings.widgets[w.id] ? ' on' : ''}" data-widget="${w.id}"></button>
    </div>
  `).join('') + '</div>'

  panel.querySelectorAll('.toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const wid = toggle.dataset.widget
      state.settings.widgets[wid] = !state.settings.widgets[wid]
      toggle.classList.toggle('on')
      saveState()
      renderWidgets()
    })
  })
}

loadState()
setWallpaper(state.settings.wallpaper)
renderIcons()
renderTaskbar()
renderWidgets()

const DEFAULT_ICONS = [
  { icon: '💻', label: 'Terminal', id: 'terminal' },
  { icon: '📝', label: 'Notes', id: 'notes' },
  { icon: '🗂️', label: 'Explorer', id: 'explorer' },
  { icon: '🕐', label: 'Clock', id: 'clock' },
  { icon: '⚙️', label: 'Settings', id: 'settings' },
]

for (const def of DEFAULT_ICONS) {
  if (!state.icons[def.id]) addIcon(def.icon, def.label, def.id)
}

setTimeout(() => launchApp('terminal'), 300)

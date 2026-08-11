# Muchlis.dev

Personal portfolio & digital playground.

Live: https://muchlis-dev.heymuchlis.workers.dev/

## 🚀 Development Progress

### v1.1.0 — Portfolio UI
- ✨ Redesigned portfolio interface
- 🌑 Modern dark + green visual identity
- 📱 Responsive mobile navigation
- 👋 New hero section
- 👤 About section
- 🧰 Skills / toolbox section
- 💼 Projects section
- 📬 Contact CTA
- ⚡ Lightweight CSS animations and hover states
- ☁️ Keeps Cloudflare Workers Static Assets deployment
- 📝 README changelog introduced

### v1.0.2 — Cloudflare Deployment Fix
- ☁️ Cloudflare Workers Static Assets configuration
- 🔧 Removed Wrangler from app dependencies
- 🛠️ Fixed Bun / Miniflare dependency resolution failure
- 🚀 GitHub → Cloudflare automatic deployment

### v1.0.1 — Initial Deployment
- ⚛️ React + Vite
- 🔥 Firebase foundation
- 🎨 Initial portfolio structure
- ☁️ First Cloudflare deployment

## 🗺️ Roadmap

- [x] Initial portfolio
- [x] GitHub integration
- [x] Cloudflare deployment
- [x] Portfolio UI v1.1
- [ ] Firebase Firestore
- [ ] Contact / guestbook
- [ ] GitHub API integration
- [ ] Analytics
- [ ] Telegram notifications
- [ ] Custom domain
- [ ] SEO / Open Graph
- [ ] Performance polish

## 🛠️ Stack

- React
- Vite
- Firebase
- Cloudflare Workers Static Assets
- GitHub

## Development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

Cloudflare Workers Builds:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`

> Wrangler is intentionally not listed in `package.json`; Cloudflare's deploy command provides it through `npx`.

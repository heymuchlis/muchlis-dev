# Muchlis.dev

Personal portfolio & digital playground.

Live: https://muchlis-dev.heymuchlis.workers.dev/

## 🚀 Development Progress

### v1.2.0 — Firebase Guestbook
- 🔥 Firebase Web SDK connected
- 🗄️ Firestore guestbook integration
- 📬 Contact / guestbook form
- ✍️ Write-only message flow from the website
- 🔒 Firestore rules deny public reads, updates and deletes
- ⏳ Loading, success and error states
- 📝 Version/changelog updated
- ☁️ Keeps Cloudflare Workers Static Assets deployment

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
- [x] Firebase Firestore
- [x] Contact / guestbook
- [ ] Firebase App Check / anti-spam hardening
- [ ] GitHub API integration
- [ ] Analytics
- [ ] Telegram notifications
- [ ] Custom domain
- [ ] SEO / Open Graph
- [ ] Performance polish

## 🛠️ Stack

- React
- Vite
- Firebase Firestore
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

## 🔐 Firebase notes

The browser uses the Firebase Web SDK configuration. This config is designed to be present in client-side code.

Firestore rules are intentionally write-only for the public guestbook:
- public read: denied
- create: allowed only for valid `name`, `message`, and `createdAt`
- update/delete: denied

Do not add Firebase Admin SDK credentials or service-account private keys to this repository.

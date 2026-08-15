# Muchlis.dev

Personal portfolio & digital playground.

Live: https://muchlis-dev.heymuchlis.workers.dev/

## 🚀 Development Progress

### v1.3.2 — Admin Firestore Access Fix
- 🔐 Admin read access restricted to `heymuchlis@gmail.com`
- ✅ Requires verified Firebase Authentication email
- 🔄 Admin refreshes Auth user/token before reading Firestore
- 📬 Guestbook remains public-create / private-read
- 🚫 Update/delete remain disabled


### v1.3.1 — Admin Entry Point
- 🔐 Added visible **Admin** link to the main navigation
- 👤 `/admin` now has a clear sign-in entry point
- 🔒 Firestore admin read access locked to `heymuchlis@gmail.com`
- 📝 Version/changelog updated

### v1.3.0 — Admin Guestbook Foundation
- 🔐 Firebase Authentication email/password login foundation
- 🛡️ `/admin` private dashboard route
- 📬 Admin message list with latest 50 guestbook entries
- ✅ Email verification check
- 🚪 Admin sign-out and session handling
- 🔒 Firestore read access remains denied until the exact admin email is placed in `firestore.rules`
- 📝 README changelog updated

### v1.2.1 — Firebase App Check
- 🛡️ Firebase App Check registered for the web app
- 🤖 reCAPTCHA Enterprise provider integrated
- 🔄 App Check token auto-refresh enabled
- ☁️ Compatible with Cloudflare Workers Static Assets
- ⚠️ Enforcement intentionally left OFF until production validation

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
- [x] Firebase App Check registration + client integration
- [x] Admin Authentication foundation
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

## Admin setup

1. In Firebase Console, enable **Authentication → Sign-in method → Email/Password**.
2. Create one admin user in **Authentication → Users**.
3. Verify the admin email.
4. Replace `REPLACE_WITH_ADMIN_EMAIL` in `firestore.rules` with that exact verified email, then Publish the rules.
5. Open `https://muchlis-dev.heymuchlis.workers.dev/admin` and sign in.

The admin page uses Firebase Authentication for identity and Firestore Rules for authorization. A signed-in user is not automatically granted guestbook read access; the rule must match the verified admin email. Firebase recommends using Authentication together with Security Rules for user/role-based access control.

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

# Muchlis Portfolio

A modern personal developer portfolio built with React + Vite, Firebase and Cloudflare Pages.

## Stack

- React
- Vite
- Firebase Firestore
- Cloudflare Pages
- GitHub

## Run locally

```bash
npm install
npm run dev
```

## Firebase setup

1. Create a Firebase project.
2. Enable Firestore Database.
3. Copy `.env.example` to `.env.local`.
4. Fill the Firebase web app credentials.
5. Run the project again.

The guestbook writes to:

`guestbook/{autoId}`

For production, configure Firestore Security Rules so writes are validated and abuse is controlled.

## Cloudflare Pages

Connect the GitHub repository to Cloudflare Pages.

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

Add the same `VITE_FIREBASE_*` variables in Cloudflare Pages → Settings → Environment variables.

## Customize

Edit:

- `src/data.js` for profile and projects
- `src/App.jsx` for page sections
- `src/styles.css` for design

## GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/muchlis-portfolio.git
git push -u origin main
```


## Cloudflare Workers build

This project is configured for Cloudflare Workers Static Assets.

Cloudflare Workers Builds:
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`

Important: Wrangler is intentionally NOT listed in `package.json`.
Cloudflare's deploy command uses `npx wrangler`, avoiding an app-level Wrangler/Miniflare dependency conflict during `bun install`.

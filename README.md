# Sandeep Jindal Portfolio

Premium personal portfolio for [sandeepjindal.github.io](https://sandeepjindal.github.io), built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Static Export

This site is configured for GitHub Pages with `output: "export"` in `next.config.ts`.

Build the static site:

```bash
npm run build
```

The exported site is written to `out/`.

## Deployment

GitHub Actions deploys automatically when changes land on `main`.

The workflow:

1. Installs dependencies with `npm ci`.
2. Builds the static export with `npm run build`.
3. Uploads `out/` as a Pages artifact.
4. Deploys via GitHub Pages.

In repository settings, set Pages source to **GitHub Actions**.

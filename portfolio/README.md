# Naveenkumar V — Portfolio

A fast, responsive personal portfolio built with plain HTML, CSS and JavaScript.
No build step, no dependencies, no API keys.

## Run it

Option 1: double-click `index.html`.

Option 2 (recommended): serve it locally.

```bash
cd portfolio
python -m http.server 5500
# open http://localhost:5500
```

Or with VS Code, install the "Live Server" extension and click "Go Live".

## Make it yours

All content is in the first part of `script.js`:

| What | Where |
| --- | --- |
| Email and social links | `PROFILE` |
| Projects (name, summary, bullets, stack, GitHub links) | `PROJECTS` |
| Skills grouped by area | `STACK` |

Other text (hero line, About paragraphs, status badge) is in `index.html`.
Colours and fonts are CSS variables at the top of `style.css`
(`--accent` changes the whole colour scheme).

To add a project, copy one object in `PROJECTS` and edit it. To add a GitHub
button, fill the `links` array: `{ label: "Source", url: "https://github.com/..." }`.

## Before you deploy (checklist)

- [ ] `script.js`: real email, GitHub and LinkedIn links in `PROFILE`
- [ ] `script.js`: project details are accurate; repo links added
- [ ] Optional: copy your `resume.pdf` into this folder and set `resume: "resume.pdf"`
- [ ] Optional: fill `EDUCATION` to show the Education section
- [ ] `index.html`: hero text, status badge and About paragraphs are true for you
- [ ] Open the site on your phone width (browser DevTools → device toolbar)

## Deploy option A: GitHub Pages (free)

Best choice because the site lives next to your code.

1. Create an empty repo on github.com. For a clean address name it
   `<your-username>.github.io`; any other name also works.
2. In this folder run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: repo → Settings → Pages → Source: "Deploy from a branch" →
   Branch `main`, folder `/ (root)` → Save.
4. Wait 1 to 2 minutes. Your site is at
   `https://<your-username>.github.io/` (or `/<repo-name>/` for other names).

Update later: edit files, then `git add . && git commit -m "Update" && git push`.

## Deploy option B: Netlify (fastest)

1. Go to app.netlify.com/drop.
2. Drag the whole `portfolio` folder onto the page.
3. You get a live `*.netlify.app` link immediately. Rename it in Site settings.

## Deploy option C: Vercel

```bash
npm i -g vercel
cd portfolio
vercel --prod
```

## Custom domain (optional)

Buy a domain, then add it in GitHub Pages (Settings → Pages → Custom domain)
or in Netlify (Domain management) and follow the DNS instructions shown there.

## Files

```
portfolio/
├── index.html   structure and static text
├── style.css    design system, light/dark themes, responsive rules
├── script.js    your content + rendering, theme toggle, animations
└── README.md
```

## Features

- Light and dark theme (follows system setting, toggle remembered)
- Expandable project rows, keyboard accessible
- Responsive down to phone width
- Respects reduced-motion settings

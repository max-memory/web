# max-memory-web

The static site at **https://max-memory.com** — Firebase Hosting,
project `max-memory-prod` (`.firebaserc`). Everything served lives
under `public/`; there is no build step, no framework, no bundler:
edit a file, deploy, done.

This repo is one of three that make up Max Memory:

| repo | what it is |
| --- | --- |
| `my-memory` | the iOS app |
| `max-memory` | the Go backend on Cloud Run (the `max-memory-api-…run.app` host) |
| `max-memory-web` | this — the marketing site and the app's web touchpoints |

The DOMAIN points here, not at Cloud Run. That matters because
anything Apple or a browser must fetch from `max-memory.com` (the
AASA file, invite fallback pages) is a static file in this repo, not
a server route.

## What's in `public/`

- `index.html` — the landing page. `product.html` and the `for-*.html`
  audience pages (households, travel, caregivers, sales, memory) are
  linked variants; they and `proposed_index.html` are `noindex` via a
  header rule in `firebase.json` while the product is pre-launch.
- `css/site.css`, `js/site.js` — the whole runtime. `site.js` is
  scroll-reveal plus the "coming soon" beta dialog. **No analytics, no
  third-party requests — ever**; keep it that way, it's a product
  stance, not an omission.
- `robots.txt` — AI/scraper/archive crawlers are told no, at length.
- `404.html` — themed not-found page.
- `.well-known/apple-app-site-association` — the Universal Links
  manifest: invite links (`/invite/*`) open the iOS app when it's
  installed. Served `application/json` by a header rule. NOTE: the
  `ignore` list in `firebase.json` deliberately does NOT use the
  default `**/.*` blanket — that would silently skip this dotted
  directory from deploys (learned 2026-09-01, the hard way avoided).
- `invite.html` — the fallback when the app ISN'T installed: every
  `/invite/**` path rewrites here (`firebase.json` rewrites). It says
  "install, then tap the link again" and offers copy-the-link, which
  feeds the app's paste-a-link backup door. The invite SECRET rides
  the URL fragment, which never reaches this server — the page must
  never send `location.href` anywhere, only copy it to the clipboard.
  Design: `my-memory/feature-docs/invite-flow.md`.

## Private planning

`marketing-strategy.html` is Tom's visual strategy notebook: pricing hypotheses,
trial-cost scenarios, proposed experiments, and a decision log. Open it directly
in a browser. It stays outside `public/` and is not included in Hosting deploys.

## Deploying

Tom deploys. The CLI isn't installed globally; run it through npx
(login token is stored from previous deploys — `npx firebase-tools
login` if it has expired):

```sh
cd ~/git/max-memory-web
npx -y firebase-tools@latest deploy --only hosting
```

Post-deploy sanity checks:

```sh
curl -sI https://max-memory.com/.well-known/apple-app-site-association | grep -i content-type
# → application/json
curl -s https://max-memory.com/invite/i-test | grep -o "<title>[^<]*"
# → the invite page title (the rewrite is live)
```

Apple's CDN caches the AASA file; after changing it, expect hours of
propagation before fresh installs see new Universal Link rules.

## House rules

- Version control is jujutsu (jj), colocated with git. Tom runs all
  VCS commands that modify state.
- `.agents/skills/` + `skills-lock.json` are pinned Firebase
  agent-skill references, not site content.
- Cache headers are set in `firebase.json` (assets 1h, HTML 5m); the
  AASA is 5m so invite-flow changes don't strand behind a long TTL.

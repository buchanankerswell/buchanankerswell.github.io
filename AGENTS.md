# AGENTS.md

## Stack
- Hugo 0.165.0 extended (CI pins `HUGO_VERSION: 0.165.0` in `.github/workflows/hugo.yml:13`) + PaperMod via `themes/PaperMod` submodule (`go.mod` theme `github.com/adityatelange/hugo-PaperMod`).
- Config is `hugo.yml` (YAML). `baseURL: https://buchanankerswell.com/` (`hugo.yml:1`). No `config.toml`.
- Clean break from Jekyll — no `Gemfile`, `_config.yml`, `_posts`, `_pages`, `_data`, `_includes`. Past Jekyll at `tmp/jekyll_backup/`.

## Commands
- `hugo server` — local dev at http://localhost:1313 (live reload). Add `--buildDrafts` if needed.
- `hugo --minify` — prod build to `public/` (CI runs `hugo --minify --baseURL "${{ steps.pages.outputs.base_url }}/"` in `hugo.yml:28`). Verify with `ls public/research/*/` and `grep G-S4DT8TYQ7X public/index.html`.
- `conda run -n opencode python scripts/migrate_jekyll_to_hugo.py` — one-shot Jekyll → Hugo converter (reads `/tmp/jekyll_backup/_posts`, writes `content/{research,teaching}/<slug>/index.md` + localized PDFs). Run only if re-migrating.
- No test/lint/typecheck suite. Only `.markdownlint.json` (disables MD013/MD025/MD045/MD049).

## Structure
- `hugo.yml` — all site params: `pagination.pagerSize:20`, `taxonomies: tag: tags`, `menu.main: [Research, Teaching, CV]`, `params.profileMode` (landing page with Research/Teaching/CV buttons + 6 socialIcons: email/github/googlescholar/orcid/researchgate/osf), `params.math: true`, `params.googleAnalyticsID: G-S4DT8TYQ7X` via `layouts/_partials/extend_head.html:1`.
- `content/research/<slug>/` — 7 research page bundles, each `index.md` + localized `<slug>.pdf` + cover PNG. Slug pattern `<year>-<author>-<abbrev>-<journal>` (e.g. `2024-kerswell-rocmlm-jgr`). Frontmatter `title/date/tags/author/description/summary/cover{image,alt,relative}` (see `content/research/2024-kerswell-rocmlm-jgr/index.md`).
- `content/teaching/` — `_index.md` (links to `/pdf/kerswell-teaching-*.pdf`) + `2023-kerswell-be10-serc/index.md` (+ `be10-problem-setup.png` + localized pdf).
- `content/archive.md` — `layout: archives` (all posts reverse chronological).
- `static/` — **centralized global assets**: `pdf/{kerswell-curriculum-vitae.pdf, kerswell-teaching-*.pdf}`, `CNAME`, `robots.txt`. PaperMod copies to `public/` root. No per-page PDFs remain in `static/` (those are bundle-localized).
- `assets/css/extended/custom.css` — PaperMod extended CSS (profile tweaks). Do not add `assets/css/main.scss` or Node toolchain.
- `layouts/_partials/extend_head.html` — gtag (`G-S4DT8TYQ7X`) + MathJax (mirrors old `_includes/head/custom.html`). PaperMod expects `_partials` (not `partials`) for Hugo ≥0.146.
- `themes/PaperMod` — git submodule; update via `git submodule update --remote themes/PaperMod`.

## Workflow
- `hugo.yml` replaces old `jekyll-deploy.yml`. Push to `main` (or `workflow_dispatch`) triggers Pages deploy (`actions/upload-pages-artifact@v3` with `public/`). Branch `hugo` does **not** auto-deploy — PR to `main` to publish.
- `public/`, `resources/`, `.hugo_build.lock` are gitignored; never commit build output. Keep `static/CNAME` + root `CNAME:1` in sync.
- Do **not** clone `pmichaillat/hugo-website` as a tracked remote — it was used only as a template reference. Patch config/layouts locally instead.

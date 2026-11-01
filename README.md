# My personal website

[https://buchanankerswell.com](https://buchanankerswell.com) — Hugo + PaperMod.

## Development

```bash
git clone --recurse-submodules <url>  # PaperMod theme; or: git submodule update --init
hugo server          # http://localhost:1313
hugo --minify        # prod build to public/
```

Content in `content/research/<slug>/`, `content/teaching/<slug>/`, and `content/software/<slug>/` (page bundles with local figures and PDFs). Global assets in `static/pdf/`.

Deploys via `.github/workflows/hugo.yml` on push to `main`. Checks via `.github/workflows/ci.yml`.

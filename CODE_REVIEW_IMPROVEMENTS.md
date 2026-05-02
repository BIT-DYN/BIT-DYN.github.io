# Code Review Improvements

1. Fix invalid HTML injected by the head include. Remove nested `<html>`/`<head>` tags from `_includes/head.html` and keep only head-safe nodes.
   - Refs: `_includes/head.html:18-21`, `_layouts/default.html:7-10`

2. Remove global `<base target="_blank">` and open only intended external links in new tabs with `rel="noopener noreferrer"`.
   - Refs: `_includes/head.html:20`, `_includes/footer.html:3`

3. Make SEO metadata page-specific instead of hardcoded to homepage values.
   - Refs: `_includes/seo.html:11`, `_includes/seo.html:34`, `_includes/seo.html:42-43`

4. Avoid duplicate/conflicting meta descriptions by keeping one source of truth (prefer `seo.html`-driven description).
   - Refs: `_includes/head.html:2`, `_includes/seo.html:13-16`

5. Gate Google Analytics include on a non-empty tracking ID to avoid loading gtag with an empty `id`.
   - Refs: `_config.yml:21`, `_includes/analytics.html:1-11`

6. Harden Google Scholar stats script: guard against missing DOM nodes/keys and add request-failure handling.
   - Refs: `_includes/fetch_google_scholar_stats.html:8-16`

7. Either add the missing `#total_cit` target and citation placeholders or remove the unused citation-rendering code.
   - Refs: `_includes/fetch_google_scholar_stats.html:10-15`, `_pages/about.md:20-143`

8. Fix missing favicon/manifest assets and extension mismatches, or update references to existing files.
   - Refs: `_includes/head/custom.html:1-8`, `images/site.webmanifest:6-13`, `images/android-chrome-512x512.jpg`

9. Correct `site.webmanifest` icon URLs to the actual image paths in this repo (currently points to root files that do not exist).
   - Refs: `images/site.webmanifest:6-13`, `images/`

10. Modernize crawler workflow: upgrade action versions, set up Python explicitly, and cache dependencies.
   - Refs: `.github/workflows/google_scholar_crawler.yaml:12-20`

11. Make crawler workflow commits resilient: set `user.email`, skip commit when no JSON changes, and avoid unconditional `--force` push.
   - Refs: `.github/workflows/google_scholar_crawler.yaml:23-27`

12. Improve crawler script reliability for local/dev runs by handling missing env vars and removing unused code/imports.
   - Refs: `google_scholar_crawler/main.py:1-10`, `google_scholar_crawler/main.py:7`

13. Prevent internal repo docs from being published by adding them to Jekyll `exclude`.
   - Refs: `_config.yml:86-112`, `AGENTS.md`

14. Clean repository hygiene: remove tracked Finder artifacts and ensure they stay ignored.
   - Refs: `.gitignore:3`, `.DS_Store`

15. Remove or wire up dead collapse assets to reduce maintenance overhead.
   - Refs: `assets/css/collapse.css`, `assets/js/collapse.js`, `_includes/scripts.html:1-4`

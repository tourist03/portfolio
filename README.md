# Vineet Singh — Portfolio

A complete replacement for the previous portfolio, published at **https://tourist03.github.io/portfolio/**.

The site is generated as static HTML with self-hosted fonts, plain CSS, and small JavaScript modules. It has no runtime framework or npm dependencies. Important content and native section navigation work without JavaScript; JavaScript adds themes, mobile navigation, project filters, case-study dialogs, and the architecture explainer.

## Local development

Use Node.js 22 or newer (the deployment uses Node.js 24).

```sh
npm ci
npm test
npm run dev
```

Open http://127.0.0.1:4174/portfolio/. The preview builds on startup. After source edits, restart the preview to rebuild, or run `npm run build` and reload the browser.

## Updating content

- Edit `src/content.js` for experience, projects, links, skills, and contact details.
- Edit `src/render.js` for the HTML layout and `src/styles.css` for design.
- Edit `src/site.js` for interactions. Shared interaction helpers live in `src/lib.js`.
- Replace `public/Vineet_Singh_Resume.pdf` when updating the downloadable résumé.
- Coding ratings are a labeled résumé snapshot; update their values and snapshot date together.
- Fonts are hosted locally; their SIL Open Font License files are in `public/fonts/`.

## Build and deploy

`npm run build` writes only publishable site files to `dist/`, with fingerprinted CSS and JavaScript filenames. The Pages workflow runs tests and builds on pull requests. Merging into `main` publishes the site through GitHub Actions to the existing GitHub Pages URL.

The repository's Pages source must be **GitHub Actions**. The old `gh-pages` branch and original commit history are retained as a record of the previous site.

Old hash-router bookmarks such as `#/experience` and `#/projects` resolve to the corresponding new sections. Unknown paths display the custom 404 page.

The current career content comes from the October 2026 résumé. Supporting project descriptions use public repository descriptions/documentation. No internal datasets, application logs, partner code, credentials, or client screenshots are included.

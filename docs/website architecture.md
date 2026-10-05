# Website Architecture

## General Properties

- this site is a SPA
- it is also a statically generated site
- it can be viewed (tested) locally offline
- it's hosted on github pages
  - the remote main branch is the live website

## Tech Stack

- the tech is vanilla html, css and JS
  - no 3rd party frameworks
  - no 3rd party remote content or services
- css remains [simple and theme-like](working%20with%20css.md)
- we use no cookies, neither 1st nor 3rd party
- we may use local storage

## SPA

- Links
  - links that switch view inside the site point at `#home`, `#projects`, `#team`, `#imprint`, and so on
  - do not point them at a path like `/imprint` or `imprint`. There is no file there, and nothing rewrites that path to `index.html`

## Local Offline Testability

- files must be referenced by relative (instead root-absolute) paths
  - Canonical, Open Graph, and JSON-LD URLs can stay absolute; The browser does not fetch them to draw the page
- Every resource the page needs must live in the repo
  - For example: fonts must be provided by the site (instead via CDNs)
- page content is in `pages.js`, loaded by a script tag
  - do not `fetch` the html files; opening `index.html` directly blocks that
- javascript is loaded with `<script src="...">`, not `<script type="module">`
  - module scripts do not run when you open the html file directly
- no `<base href>` tag
  - it would send every relative link to the wrong place

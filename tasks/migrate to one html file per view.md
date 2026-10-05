# Migrate to one real HTML file per view

Replace the baked-in shell with one complete HTML file per view. `pages/home.html` and `pages/imprint.html` stay the view bodies. A generator wraps each body in the shared shell and writes `index.html` and `imprint.html`. `app.js` keeps the open document on an in-site click by fetching the other file and copying its `<title>` and `#content`.

Today `index.html` is the only document. `pages_js_create.sh` copies every view into `pages.js`, and `page_navigation.js` shows one of them for `#home` or `#imprint`.

## Comparison

| Aspect | One shell, content baked in (current) | One real HTML file per view (target) | Verdict |
| --- | --- | --- | --- |
| Address of a view | The view is `index.html#imprint`. The hash is read by the script. | The view is the file `imprint.html`. | Per view wins |
| Refresh and pasted link | `#imprint` shows Imprint after `pages.js` runs. | `imprint.html` is the Imprint page itself. | Per view wins |
| Title, description, canonical, Open Graph | One `<head>` on `index.html` covers every view. | The generator writes each view's own `<head>`. Crawlers and share cards read that file. | Per view wins |
| JavaScript disabled | `#content` stays empty. The footer links do nothing useful. | The file already contains the shell and the view, so the page is readable. | Per view wins |
| Weight of shipping every page up front | `pages.js` carries the HTML text of every view. Content pages are a few kilobytes of text each. Images, fonts, and PDFs stay separate files. That text never grows into a download that matters. | The first file contains only that view's HTML. Same situation. | Tie |
| Next in-site click | The view is already in memory. The script assigns `innerHTML` and the title. | The script waits for `fetch("imprint.html")`, parses the whole file, and copies `#content` and `<title>`. The fetched header and footer are discarded. On a local server the wait is about a millisecond. On a normal connection it is one round trip. | Baked-in wins |
| No-reload swap from a double-clicked file | Works. `index.html` loads `pages.js` with a script tag, and hash links need no `fetch`. | The swap calls `fetch`, which the browser blocks for a file opened from disk. The link underneath is still `imprint.html`, so letting the click through opens that file as a full page. | Baked-in wins |
| Reading a page from disk | Opening `index.html` works, including view switches. | Opening `index.html` or `imprint.html` works. Each file is a whole page. | Tie |
| No-reload swap with the network off | Works from disk, and from a local static server. | Works from a local static server. The server is still offline. | Baked-in wins |
| GitHub Pages | The hash never asks for a second file, so no rewrite is required. | `imprint.html` is a real file, so no rewrite is required. | Tie |
| Relative image, font, and CSS paths | Every view is shown inside `index.html`, so `team/` and `icons/` resolve from the site root. | A full open of `imprint/index.html` works when that file uses `../team/` and `../styles.css`. The SPA paste needs one more step: resolve those URLs against the fetched file's address before inserting them. Pasting the text unchanged resolves them against the open page instead. | Tie |
| Generator | `pages_js_create.sh` escapes each fragment into `pages.js`. `index.html` is written by hand. | The shell has to become a template. The generator writes `index.html` and `imprint.html`, and it needs a title and description for each view. Home keeps the current head. | Baked-in wins |
| Shell markup | One copy, in `index.html`. | The same header and footer are copied into every generated file. | Baked-in wins |
| Editing one view | Any edit regenerates `pages.js`. At a few kilobytes, re-downloading that file is the same non-issue as the row above. | Regenerating touches that view's file. A shell edit regenerates every file. | Tie |
| Back and forward | `hashchange` does this with no extra code. | The script sets the address with `history.pushState` and handles `popstate`. | Baked-in wins |
| Framework, CDN, modules | Vanilla classic scripts. Fonts and icons are in the repo. | The same. `app.js` stays a classic script, because a module would not run from a double-clicked file. | Tie |

## Verdict

Per view is the better public site because a view gets its own address and its own `<head>`, and the page is still a page with JavaScript off. Baked-in is the better double-click SPA: the no-reload swap works from disk, the generator is smaller, and the next click does no network. Shipping every page inside `pages.js` is not a reason to move. The reason to move is the address and the `<head>`.

## Migration constraints

- `imprint/index.html` is a valid target. In that file the generator writes `../styles.css`, `../logo.svg`, and `../team/…`, so a direct open resolves from the `imprint/` folder. Sibling files (`imprint.html` next to `index.html`) can keep `team/…` unchanged.
- On a SPA click, `app.js` resolves URLs inside the copied `#content` against the fetched file's address, then inserts them. The footer stays on screen, so its links were written for the page you started on. The click handler reads each link's absolute address before `pushState` moves the address bar into `imprint/`.
- Keep view bodies in `pages/*.html`. Add a title and description per view. The generator is what puts them in `<head>`.
- Keep asset references relative. No root-absolute paths and no `<base href>`.
- When `fetch` fails, the script lets the browser open the file.
- `app.js` is a classic script. No framework and no CDN.
- `index.html` becomes generated output, same as `pages.js` is today. The hand-written shell is a template, so a generator run does not wipe hand edits.
- Update `notes/architecture.md`: the hash-link rule and the ban on `fetch` describe the current design.

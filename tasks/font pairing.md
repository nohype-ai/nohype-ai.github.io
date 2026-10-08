# Font pairing

Satoshi is the text face and the title face. Body, nav, paragraphs, footer, and tables use weight 400. `h1` and `h2` use weight 700. SF Pro stays in the stack as the fallback.

The pages that show the second face are the stacked posters (`AI / needs / Nohype`, `we / make / things`, `@ / your / service`, `AI / role / models`) and the 2rem section titles (`Agentic Engineering`, `codeface.io`).

| Face | What it does here | Advantage | Disadvantage | Verdict |
| --- | --- | --- | --- | --- |
| Instrument Serif (Instrument), weight 400 only, roman | Condensed old-style serif on h1 and h2 | Drawn for large sizes. Narrower, so the three-line posters stay poster-like. Italic exists if one line should lean. Small file. | Only weight 400. h1 is bold by default, so the CSS has to set `font-weight: 400` or the browser fakes a bold. Widely used already. | Use if the poster should feel sharper and more "now". |
| Satoshi (Indian Type Foundry), weight 400 and 700 | Grotesque for body text and for h1 and h2 | Real regular and bold, weight axis 300–900. Quieter than the display faces already tried. | Sits close to SF Pro, so the contrast is small. ITF license: self-host on this site, do not redistribute the files as a font download. | Use this for the text and the titles. |

A second neutral grotesque such as Inter, Geist Sans, or Helvetica Now sits even closer to SF Pro.

## h1 only, against Satoshi

Space Grotesk on `h1` is the same kind of face as Satoshi: a normal-width geometric grotesque with an even stroke. The posters need a different proportion.

| Face | What it does here | Advantage | Disadvantage | Verdict |
| --- | --- | --- | --- | --- |
| Big Shoulders Display, weight 800 | Condensed gothic on h1 only | Drawn for sizes above 72px. Narrow and heavy, so the stacked words read as a poster next to Satoshi's regular width. Real weight axis 100–900, lowercase, Latin-ext, OFL. | At 900 it can shout. The current `h1` tracking of -3px may be tight on an already condensed face. | Try this. |
| Bodoni Moda, weight 900, large optical size | Fat Didone on h1 only | Thick strokes against hairline serifs. The contrast with Satoshi is immediate. | Reads as a fashion poster. Unserious next to this site. | Rejected. |
| Source Serif 4, weight 700, opsz 60 | Modern working serif on h1 only | Sturdy serifs, moderate contrast, real bold, display optical size. Serious rather than costume. OFL, Latin-ext. | The terminals are too playful for a magazine or book headline. | Too playful. |
| Literata (TypeTogether), weight 700, opsz 72 | Plain book serif on h1 only | Drawn for long reading. Quieter roman, real bold, display optical size, Latin-ext, OFL. | Less of a poster than a display face. The variable file is large. | Try this. |

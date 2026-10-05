# Working with CSS

## General Goal

A simple true **system** that applies throughout the whole site and is in itself content-agnostic like a **theme definition**. keep the css file simple and small, not a long list of isolated content-specific hacks.

## General Rules

- Use the HTML element that already has the role, and style that element. One declaration block per selector.
- Add a class only for a shape no HTML element expresses. That includes a shape HTML has no tag for, and a second shape of a tag that already exists.
- Use classes as true generic classes of content shapes that are agnostic about actual contents. For excample use `.grid-cell`, not `.app-feature-cell`. The same look is the same rule.
- Apply each property as high in the tree as possible. Start at `body` and go lower only with a reason. Define font color on `body` first; do not invent it on `section` unless that subtree differs. A descendant selector such as `nav a` is that kind of reason. Position in the page is not a reason.
- use variables instead constants. in particular recurring sizes and colors whould follow from one concise system expressed in `:root { ... }` as variables. A class carries a whole pattern; a single step of the scale stays a variable.
- Do not style with IDs or `!important`.

## Responsiveness Rules

- general goal: use innate grid capabilities of modern CSS and HTML, avoid media queries for responsiveness
- Responsiveness comes from the layout shapes themselves. The same markup and the same rules apply at every width.
- Size a page measure, a stack, a row, and a grid from the space they have and from the scale. A track minimum lets a grid wrap. A maximum caps the page measure. Items shrink inside that space.
- No second layout in `@media`.
- The main CSS properties for responsive layouts are `box-sizing`, `display`, `grid-template-columns`, `flex-direction`, `flex`, `gap`, `width`, `max-width`, `height`, and `overflow-wrap`.
  - `box-sizing: border-box`, so a percentage width includes the padding.
  - `display` is `grid` or `flex`.
  - `grid-template-columns: repeat(auto-fit, minmax(...))`. The `...` is `0`, or a minimum from the scale when the grid should wrap.
  - `flex-direction` for a row or a stack. `flex` lets the items shrink inside that space.
  - `gap` between items.
  - `width: 100%` and `max-width: min(<scale>, <viewport>)` for the page measure.
  - `display: block`, `max-width: 100%`, and `height: auto` for images.
  - `overflow-wrap` for long text.

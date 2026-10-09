# Poster layout

Keep the equal inset. The page is one sheet: nav, poster, grid, and footer share the viewport edge, inset by `--site-padding`. A centered 1280px column is the right tool for a page of prose. This site has no such page.

The headline measure is the `<br>` in the `h1`. The paragraph measure is `--grid-column-min-width` (18rem). The right edge is the email in the nav, set with `justify-content: space-between`. The background is one color, so a column max-width would be an invisible wall.

## Comparison

| Aspect | Equal inset, current | Centered column, `max-width: 1280px` and auto margins on `body` | Verdict |
| --- | --- | --- | --- |
| The edge | Nav, poster, grid, and footer share one inset. That inset is the frame. | The shared edge moves inward. Body background and page background are the same `#303030`, so the column has no visible boundary. The email and the last grid cell stop in empty space. | Equal inset. This page has no second color to frame a column. |
| The masthead | The logo and the section links sit on the left inset. `hi@nohype.ai` sits on the right inset. | The email sits on the column's right edge. The wing beside it grows with the window. | Equal inset. The pair is drawn against the window. |
| A wide window | The grid adds columns while each stays at least 18rem. Four columns begin near 1312px of viewport, five near 1632px. | The content box is 1216px after the 32px padding on each side. That fits three columns, and a wider window keeps three. | Equal inset. The track minimum is already the measure. The column cap would freeze every large screen at the laptop layout. |
| Line length in a cell | A cell stays near 18rem while the page has enough cells to fill the row. `auto-fit` drops an empty track, so past about 1952px of viewport the five Services cells stretch across a six-column row. | Lines stay inside the 1280px box, and the grid never gains a fourth column. | Equal inset for ordinary screens. The stretch is an ultrawide case, and it belongs to the grid. |
| Short pages | Home, People, and Imprint stay on the left edge, in line with the logo. The footer still runs the full width. | The same blocks sit inside a margin that grows on both sides. | Equal inset. The shared left edge is the poster. |

## Verdict

Keep the equal inset. Do not cap `body` at 1280px.

The commented `max-width` on `body` would answer a problem this site does not have. Prose does not run across the window. It runs inside a grid track, or it is broken by hand in the poster. The width the window adds should become another column.

## The grid stops at three columns

A definite track maximum is what `auto-fit` counts, so a column is created only at that full width and then never grows. The maximum in `minmax` is `1fr`, so the tracks share the sheet. The grid's `max-width` is three times `--grid-column-max-width` plus the two gaps. At that stop the three tracks are exactly the column maximum. Past it, the sheet stays empty.

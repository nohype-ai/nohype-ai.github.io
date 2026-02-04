# Native Responsive Grids

## Modern CSS Grid Approach (No Media Queries)

Use CSS Grid with `auto-fit` and `minmax()` for fully responsive layouts without media queries.

### Basic Pattern

```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
    gap: 20px;
}
```

- `auto-fit`: Automatically fits as many columns as possible based on available width
- `minmax(350px, 1fr)`: Minimum column width of 350px, grows to fill available space
- `min(350px, 100%)`: Prevents overflow on screens smaller than 350px

### Controlling Maximum Columns

To limit the maximum number of columns (e.g., ~3 on desktop), wrap the grid in a container with `max-width`:

```css
.container {
    max-width: 1200px;
    margin: 0 auto;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
}
```

With 1200px max-width and 350px min column width:
- Desktop: ~3 columns maximum
- Tablet: automatically reduces to 2 columns
- Mobile: automatically reduces to 1 column

### Key Concepts

**Fluid vs Fixed:**
- Fixed columns: `repeat(3, 1fr)` - always exactly 3 columns
- Fluid columns: `repeat(auto-fit, minmax(...))` - variable columns based on space

**auto-fit vs auto-fill:**
- `auto-fit`: Collapses empty tracks, better for most responsive layouts
- `auto-fill`: Keeps empty tracks

The native responsive approach means variable column counts. For exact column counts at specific breakpoints, use media queries instead.

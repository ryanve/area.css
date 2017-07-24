# area.css

```
npm install area.css
```

```css
@import 'node_modules/area.css/area';
```

## [classes](area.css)

### `width`

- `.width-zero` sets width to `0`
- `.width-all` sets width to `100%`
- `.width-em` sets width to `1em`
- `.width-rem` sets width to `1rem`
- `.width-viewport` sets width to `100vw`
- `.width-auto` sets width to `auto`
- `.width-range` keeps within `0` and `100%`

### `height`

- `.height-zero` sets height to `0`
- `.height-all` sets height to `100%`
- `.height-em` sets height to `1em`
- `.height-rem` sets height to `1rem`
- `.height-viewport` sets height to `100vh`
- `.height-auto` sets height to `auto`
- `.height-range` keeps within `0` and `100%`

### `max`
- `.max-none` sets maxes to `none`
- `.max-zero` sets maxes to `0`
- `.max-viewport` sets maxes to viewport size
- `.width-free` sets max-width to `none`
- `.height-free` sets max-height to `none`
- `.width-fit` sets max-width to `100%`
- `.height-fit` sets max-height to `100%`
- `.width-clip` sets max-width to `0`
- `.height-clip` sets max-height to `0`

### `min`
- `.min-zero` sets mins to `0`
- `.min-auto` sets mins to `auto`
- `.min-viewport` sets mins to viewport size
- `.width-force` sets min-width to `100%`
- `.height-force` sets min-height to `100%`

## usage

```html
<img class="width-fit height-auto" src="example.png" alt="example">
```

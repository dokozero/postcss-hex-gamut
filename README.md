# PostCSS Hex gamut

A PostCSS plugin to use an upgraded `HEX` CSS notation with gamut support. Check the [live demo](https://dokozero.github.io/hex-css-gamut-demo/) to see it in action.

The proposal is:

```
#RRGGBB[AA]-GAMUT
```

`GAMUT` can either be `SRGB`, `DISPLAY-P3`, `P3` (same), and `REC2020`.

Exemple: `#00FF00-P3` which means: "I want an RGB color #00FF00 relative to p3 gamut" which the plugin converts to `color(display-p3 0 1 0)`.

This is a work in progress that might change in the future.

## How to use it

The plugin has not yet been published on NPM. To use it, you can download the dist folder and configure your postcss.config.js file to use it.

Check the [demo repo](https://github.com/dokozero/hex-css-gamut-demo) to see how I use it.

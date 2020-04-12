# Twemoji cloudflare worker

A little cloudflare worker that redirects a path containing an emoji to matching the [twemoji]() svg, or png icon.
Special useful for quick favicons.

Inspired by [Lea Verou's idea](https://twitter.com/LeaVerou/status/1241619866475474946).

```html
<link type="icon" href="https://twemoji.confraria.workers.dev/🐧">
```

or png

```html
<link type="icon" href="https://twemoji.confraria.workers.dev/🦊.png">
```


# Fish Around Website

Static, dependency-free five-language website for GitHub Pages.

The version 2 homepage uses optimized local product captures to present the
Spring Pond, the four-theme picker, photo memories, and Halloween Night. It
shares the app's watercolor palette, hand-painted paper surfaces, day/night
color transition, and responsive iPhone/iPad story without loading remote
fonts, frameworks, analytics, or image hosts.

Live site: https://wedoso.github.io/fisharound_official/

App Store: https://apps.apple.com/us/app/fish-around-pond-builder/id6785642342

Source repository: https://github.com/wedoso/fisharound_official

## Deployment

The repository publishes this `website/` directory through the root
`.github/workflows/pages.yml`. Pushing website changes to `main` triggers deployment.

The site has no build command. Open `index.html` directly or serve it locally:

```sh
python3 -m http.server 4173
```

Pages:

- `index.html`
- `privacy.html`
- `support.html`
- `404.html`

Support email: `fisharound_support@icloud.com`

English display text uses Gaegu. Chinese, Japanese, and Korean body text use a lighter system CJK font stack, while the logo retains ZCOOL KuaiLe for a small amount of character.

Product images in `assets/product-*.webp` are web-sized derivatives of the
current English App Store screenshots. Regenerate them when the release
screenshots change rather than editing them by hand.

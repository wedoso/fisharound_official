# Fish Around Website

Static, dependency-free website for GitHub Pages.

Live site: https://wedoso.github.io/fisharound_official/

Source repository: https://github.com/wedoso/fisharound_official

## Deployment

The standalone repository publishes its root through `.github/workflows/pages.yml`. Pushing to `main` triggers deployment.

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

English display text uses Gaegu. Chinese body and headings use a lighter system CJK font stack, while the logo retains ZCOOL KuaiLe for a small amount of character.

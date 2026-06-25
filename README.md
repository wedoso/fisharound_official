# Fish Around Website

Static, dependency-free website for GitHub Pages.

## Publish with GitHub Pages

This folder is also structured so it can be published as the root of a standalone website repository.

1. Push it to GitHub as the repository root.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push to `main`, or manually run **Deploy Fish Around website** from the Actions tab.

The bundled workflow publishes the repository root directly.

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

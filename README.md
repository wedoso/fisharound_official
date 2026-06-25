# Fish Around Website

Static, dependency-free website for GitHub Pages.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push a change under `website/`, or manually run **Deploy Fish Around website** from the Actions tab.

The workflow at `.github/workflows/pages.yml` publishes this folder directly, so it does not need to be renamed to `docs`.

The site has no build command. Open `index.html` directly or serve it locally:

```sh
python3 -m http.server 4173 -d website
```

Pages:

- `index.html`
- `privacy.html`
- `support.html`
- `404.html`

Support email: `fisharound_support@icloud.com`

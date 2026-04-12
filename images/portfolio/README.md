# Portfolio Images

Drop one landscape-ish JPG per project into this folder. The app.js
tiles and detail hero load them as a CSS background layer over the
brand gradient, so:

- If a file exists → real photo is shown.
- If a file is missing → gradient shows through silently, no broken
  image icon.

No code changes are needed when you add or remove files here.

## Expected filenames

Each filename must match the project `id` in `PORTFOLIO` in `app.js`:

| Project               | File                       |
|-----------------------|----------------------------|
| The Icon              | `the-icon.jpg`             |
| The Belaire           | `the-belaire.jpg`          |
| Parsvnath Exotica     | `parsvnath-exotica.jpg`    |
| Palam Vihar Residence | `palam-vihar.jpg`          |
| Experion Windchants   | `experion-windchants.jpg`  |

## Recommended specs

- Format: JPG (smaller) or WebP
- Aspect ratio: roughly 4:3 or 1:1 (tiles are square, hero is 4:3)
- Long edge: 1200–1600 px is plenty for a mobile PWA
- File size: try to keep each under ~200 KB

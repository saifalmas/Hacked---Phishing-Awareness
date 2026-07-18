# Security Awareness Demo — "System Compromised"

A short, self-contained web page built for a live cybersecurity
awareness demonstration. Scanning a QR code that links here shows a
dramatic (but fake) "you've been hacked" screen, which resolves after
a few seconds into a real security lesson: **verify a QR code's
source before you scan it.**

## ⚠️ Important — read before using

- **This page does not collect, store, or transmit any data.**
  There are no forms, no input fields, and no network requests of
  any kind. It is purely a visual/text animation running in the
  visitor's own browser.
- This is intended as a **live, in-person demonstration with a fast
  reveal** (roughly 4 seconds) — not a page meant to fool anyone for
  an extended period. The reveal is automatic and unambiguous by
  design.
- Use responsibly. This was built for a specific, contained
  presentation context (a supervised demo with an immediate
  explanation), not for unsolicited distribution.

## What it does

1. Visitor scans a QR code or opens the link.
2. A dark, glitching "SYSTEM COMPROMISED" screen appears, with a
   typing animation reading *"We now have access to your
   credentials"* and a fake progress bar.
3. After ~4 seconds, the screen automatically transitions to a green
   "Just kidding" reveal explaining the demonstration and the
   real-world lesson behind it.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure and content |
| `style.css` | Visual styling — glitch effect, colors, responsive layout |
| `script.js` | Typing animation and the timed transition to the reveal |

## Hosting on GitHub Pages

1. Upload all three files to the root of this repository (keep them
   in the same folder — do not place `style.css` or `script.js` in
   subfolders, or the links will break).
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select
   **"Deploy from a branch."**
4. Set **Branch** to `main` (or `master`) and folder to **`/ (root)`**,
   then save.
5. Wait 1–2 minutes. Your live URL will appear on the same page,
   formatted as:
   `https://<your-username>.github.io/<repo-name>/`
6. Test the live URL on an actual phone (not just a resized desktop
   browser) before relying on it for a presentation.

## Generating a QR code

Paste your live GitHub Pages URL into any QR code generator (for
example qr-code-generator.com or Google's built-in generator),
download it as a PNG, and use it wherever needed.

## Accessibility note

The glitch and flicker animations are disabled automatically for
visitors with `prefers-reduced-motion` enabled at the system level.

## License

Free to use, modify, and reuse for educational or awareness purposes.

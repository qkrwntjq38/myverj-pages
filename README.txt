Protected static site

This package provides a simple client-side password protection for static pages.

Files:
- index.html : main protected page (includes locker form and content)
- styles.css : basic styling
- protect.js : client-side password checking (SHA-256 hash compare)

Default password: oppa123
Security note: This protection is CLIENT-SIDE only. Anyone can view the source (developer tools) and bypass if they know how. Use only for lightweight privacy. For strong protection, use server-side auth (Cloudflare Workers, Netlify Identity, or a real server).

To deploy:
1) Unzip to your GitHub Pages repo root (replace existing index.html if any).
2) Commit and push to main branch. GitHub Pages will serve the page.
3) To change the password: compute SHA-256 hex of the new password and replace PASS_HASH value in protect.js.

Compute SHA-256: use an online tool or your system's crypto utility.

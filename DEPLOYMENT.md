# ARADHANA INTERIOR — Production Deployment & Domain Guide

## 1. GitHub Repository Setup
- **Recommended Repository Name:** `aradhana-interior`
- **Recommended Description:** `Premium interior design studio website built with React, TypeScript, and Vite.`
- **Default Branch:** `master`

Once you create the empty repository on GitHub, link and push your local `master` branch:

```powershell
git remote add origin https://github.com/<your-username>/aradhana-interior.git
git push -u origin master
```

---

## 2. Vercel Project Configuration
Import the `aradhana-interior` GitHub repository in Vercel with these settings (pre-configured in `vercel.json`):

| Setting | Value |
|---|---|
| Framework Preset | `Vite` |
| Root Directory | `./` |
| Install Command | `npm ci` (uses `package-lock.json`) |
| Build Command | `npm run build` |
| Output Directory | `dist` |

### Environment Variables in Vercel
Configure these in **Project Settings → Environment Variables** (Production & Preview):
- `VITE_SITE_URL` — Active production URL (e.g., `https://your-project.vercel.app` or your custom domain)
- `VITE_CONTACT_PHONE` — Verified studio phone number
- `VITE_WHATSAPP_NUMBER` — Verified WhatsApp Business number (e.g., `9198XXXXXXXX`)
- `VITE_CONTACT_EMAIL` — Verified studio email
- `VITE_STUDIO_ADDRESS` — Verified Tamil Nadu studio address
- `VITE_FORMSPREE_ENDPOINT` — Live Formspree endpoint (`https://formspree.io/f/<form-id>`)

> **Important:** After adding or updating any `VITE_*` variable in Vercel, trigger a **Redeploy** so Vite bakes the updated values into the static bundle.

---

## 3. Custom Domain & HTTPS Readiness (Post-Purchase)
1. **Register Domain:** Purchase your preferred domain with a registrar.
2. **Add Domain in Vercel:** Go to **Vercel → Project Settings → Domains**, add both the root domain and `www` subdomain.
3. **Configure DNS:** Copy the exact `A` / `CNAME` records shown in the Vercel dashboard into your registrar's DNS settings (do not guess record values).
4. **Verify SSL & Redirects:** Wait for DNS propagation; Vercel automatically provisions Let's Encrypt HTTPS certificates and redirects the non-canonical hostname (`www` or apex) to your chosen primary domain.
5. **Update Canonical & Sitemap URLs:**
   - Set `VITE_SITE_URL` in Vercel to your canonical `https://...` domain.
   - Update the `Sitemap:` URL in `public/robots.txt` and `<loc>` URLs in `public/sitemap.xml` to match your confirmed domain, then commit and redeploy.

---

## 4. Post-Deployment Live QA Checklist
- Verify direct access & browser refresh on `/`, `/about`, `/services`, `/projects`, `/projects/coimbatore-ivory-teak-residence`, `/gallery`, `/process`, and `/contact`.
- Verify `/robots.txt` and `/sitemap.xml` return HTTP 200.
- Submit a real test enquiry on `/contact` (once `VITE_FORMSPREE_ENDPOINT` is set) and confirm delivery in Formspree.
- Run Lighthouse on the live HTTPS Vercel URL across Mobile & Desktop.

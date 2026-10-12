# Why Not Try For — Website

Official site of **Why Not Try For**, an independent software studio.
<https://whynottryfor.com>

## Stack

- Static HTML / CSS / JS — zero build
- Deployed on Cloudflare Workers (static assets, global CDN)

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Connected to Cloudflare via Git — every push to `main` deploys automatically.

| Setting | Value |
|---|---|
| Workers project name | `whynottryfor` (must match `wrangler.json` → `name`) |
| Build command | *(empty)* |
| Deploy command | `npx wrangler deploy` |
| Custom domains | `whynottryfor.com`, `www.whynottryfor.com` |

## License

MIT

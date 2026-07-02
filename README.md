# Pintour Bus — Sito multilingua (Astro SSG)

Rifacimento del sito di riferimento (`riferimento/`, originariamente Next.js + React)
in un **sito statico multilingua** generato con [Astro](https://astro.build) e Tailwind CSS v4.

Il compilato (`dist/`) contiene una pagina HTML indipendente per **ogni lingua** e **ogni sezione**:
il risultato è quindi nativamente multilingua e SEO-friendly (URL localizzati, `hreflang`, JSON-LD, sitemap).

## Lingue
🇮🇹 Italiano · 🇬🇧 English · 🇫🇷 Français · 🇩🇪 Deutsch · 🇪🇸 Español

## Struttura URL (compilato)
| Lingua | Home | Chi siamo | Shuttle | Noleggio | Parco mezzi | Contatti |
|-------|------|-----------|---------|----------|-------------|----------|
| it | `/it/` | `/it/chi-siamo/` | `/it/shuttle-bus/` | `/it/noleggio-bus/` | `/it/parco-mezzi/` | `/it/contatti/` |
| en | `/en/` | `/en/about/` | `/en/shuttle-bus/` | `/en/bus-rental/` | `/en/fleet/` | `/en/contacts/` |
| fr | `/fr/` | `/fr/a-propos/` | `/fr/shuttle-bus/` | `/fr/location-bus/` | `/fr/flotte/` | `/fr/contacts/` |
| de | `/de/` | `/de/ueber-uns/` | `/de/shuttle-bus/` | `/de/busvermietung/` | `/de/flotte/` | `/de/kontakte/` |
| es | `/es/` | `/es/quienes-somos/` | `/es/shuttle-bus/` | `/es/alquiler-de-bus/` | `/es/flota/` | `/es/contactos/` |

`/` reindirizza automaticamente a `/it/`.

## Sviluppo
```bash
npm install
npm run dev      # server di sviluppo su http://localhost:4321
npm run build    # genera dist/ multilingua
npm run preview  # anteprima del compilato
```

## Struttura del progetto
```
src/
├─ i18n/
│  ├─ config.ts        # lingue, slug localizzati, helper di routing
│  ├─ translations.ts  # tutte le traduzioni (it/en/fr/de/es)
│  ├─ seo.ts           # title/description per pagina e lingua
│  └─ data.ts          # dati condivisi (azienda, veicoli, icone)
├─ layouts/Layout.astro
├─ components/         # Header, Footer, CookieConsent, Icon
├─ sections/           # Home, About, Shuttle, Rental, Vehicles, Contacts
├─ styles/global.css   # Tailwind v4 + stili custom
└─ pages/
   ├─ index.astro      # redirect → /it/
   └─ [...slug].astro  # genera tutte le pagine (lingua × sezione)
```

Per aggiungere/modificare una traduzione: edita `src/i18n/translations.ts`.
Per cambiare gli URL localizzati: edita `slugs` in `src/i18n/config.ts`.

## CI/CD
`.gitlab-ci.yml` esegue due stage:
1. **build**: `npm run build` → artefatto `dist/`
2. **docker**: build & push dell'immagine sul GitLab Container Registry (su branch `main`)

## Docker
Build e run locali:
```bash
docker build -t pintourbus .
docker run -p 8080:80 pintourbus
# → http://localhost:8080
```
L'immagine finale è `nginx:alpine` che serve il `dist/` statico multilingua (`nginx.conf` incluso).

## Form, email e captcha (self-hosted)
I form (Contatti e Tour) inviano mail reali tramite un microservizio Node (`server/`) che usa SMTP.
Protezione anti-spam: **captcha matematico firmato lato server** + honeypot (nessun servizio terzo).

Deploy completo con `docker compose` (sito + API):
```bash
cp .env.example .env          # compila SMTP_* e CAPTCHA_SECRET
docker compose up -d --build  # sito su :8080, API interna
```
Variabili d'ambiente (vedi `.env.example`):
- `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` — SMTP del provider (es. Aruba `smtp.aruba.it:587`)
- `MAIL_TO` / `MAIL_FROM` — destinatario e mittente delle richieste
- `CAPTCHA_SECRET` — stringa casuale per firmare il captcha

La CI builda due immagini: `pintourbus-web` (nginx) e `pintourbus-api` (Node). I segreti vanno impostati come variabili CI/ambiente sul server, mai committati.

> Senza SMTP configurato il form risponde `{ok:false,error:"config"}`; i log del container `api` mostrano `SMTP_HOST non configurato`.

# my-portfolio

Portafolio personal de Ricardo Arturo Zermeño Saracho (React/Vite).

## Contexto del proyecto
- Sitio desplegado en https://razs.dev
- El contenido de proyectos vive en `projects.json` (NO tocar salvo instrucción explícita, ya está actualizado)
- El contenido narrativo (about, experience, education, skills, summary) puede vivir en JSON, un archivo de 
  datos separado, o hardcodeado en componentes — inspeccionar antes de asumir la estructura
- Posicionamiento profesional objetivo: "Software Engineer — DeFi & Quantitative Systems"
- Roles objetivo: web3 / DeFi / quantitative trading (ej. Wintermute)

## Stack
React + Vite + Tailwind CSS

## Convenciones
- No inventar experiencia ni credenciales que Ricardo no tenga; integrar vocabulario ATS de forma honesta
- Antes de modificar contenido de perfil, mostrar diff/resumen para revisión antes de confirmar
- No incluir instrucciones de testing en los prompts de trabajo — Ricardo prueba de forma independiente

## Servicios relacionados (misma infra, macserver personal)
- job_scraper (FastAPI/Selenium) → api-jobs.razs.dev (puerto 8420)
- job_scraper_frontend (React/Vite) → jobs.razs.dev (puerto 5180)
- cv_download (Fastify/pdfmake, en construcción) → genera y sirve el CV en PDF bajo demanda

## Infra (referencia)
- pm2 vía `ecosystem.config.cjs` (extensión .cjs obligatoria bajo Node 24 para forzar CommonJS)
- Self-hosted GitHub Actions runners por repo bajo `~/actions-runners/`
- Cloudflare Tunnel config en `/etc/cloudflared/config.yml` (root-owned, restart: 
  `sudo launchctl kickstart -k system/com.cloudflare.cloudflared`)
- Symlinks en instalaciones de runner deben ser relativos, no absolutos

### Hexlet tests and linter status:
[![Actions Status](https://github.com/Sgutierrezgf/fullstack-javascript-project-141/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Sgutierrezgf/fullstack-javascript-project-141/actions)

# Gestor de Tareas

Aplicación web para gestionar tareas, usuarios, estados y etiquetas (proyecto Hexlet).

## Aplicación en producción

🔗 [Abrir aplicación en Render](https://fullstack-javascript-project-141-flbw.onrender.com)

## Setup local

```bash
make setup
make start
# http://localhost:5000
```

## Test

```bash
make test
```

## Despliegue en Render (tarea 1)

1. Sube el código a GitHub (`git push`).
2. En [Render](https://dashboard.render.com/): **New +** → **PostgreSQL** (plan Free).
3. **New +** → **Web Service** → conecta este repositorio.
4. Configuración del servicio:
   - **Runtime:** Node
   - **Build Command:** `npm install && npm run build && npx knex migrate:latest`
   - **Start Command:** `npm start`
5. Variables de entorno:
   - `NODE_ENV` = `production`
   - `SESSION_KEY` = una cadena secreta de al menos 32 caracteres
   - `DATABASE_URL` = (desde el panel, vincúlala a la base PostgreSQL creada)
   - `ROLLBAR_ACCESS_TOKEN` = token `post_server_item` de tu proyecto en [Rollbar](https://rollbar.com/)
6. Deploy → copia la URL `https://….onrender.com` y pégala arriba en este README.

## Rollbar (tarea 8)

1. Crea una cuenta gratuita en [Rollbar](https://rollbar.com/) y un proyecto (Node.js).
2. Copia el access token con scope **post_server_item** (Project → Settings → Project Access Tokens).
3. Añade la variable `ROLLBAR_ACCESS_TOKEN` en Render (y opcionalmente en `.env` local).
4. Tras el deploy, visita `https://tu-app.onrender.com/error` para generar un error de prueba.
5. Comprueba en el dashboard de Rollbar que el item aparece en unos segundos.

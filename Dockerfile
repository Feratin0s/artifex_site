# BASE COMPLETA → TEM TUDO QUE O ESBUILD PRECISA
FROM node:latest

WORKDIR /app

# Copia package.json
COPY artifex-site/package*.json ./

# Instala dependências
RUN npm install

# Copia código
COPY artifex-site/ .

# FORÇA PERMISSÃO (defesa extra)
RUN find node_modules -name esbuild -type f -exec chmod +x {} \; || true
RUN chmod +x node_modules/.bin/vite || true

EXPOSE 3000 3001

# Usa npm run dev (carrega vite.config.ts)
CMD node server/index.js & npm run dev -- --host 0.0.0.0 --port 3000

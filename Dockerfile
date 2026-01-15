# Dockerfile otimizado para Next.js com output standalone
FROM node:20-alpine AS base

# 1. Instalar dependências apenas quando necessário
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar package files
COPY package*.json ./
RUN npm ci --ignore-scripts

# 2. Build da aplicação
FROM base AS builder
WORKDIR /app

# Copiar node_modules da etapa anterior
COPY --from=deps /app/node_modules ./node_modules

# Copiar código fonte
COPY . .

# Definir variáveis de build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build da aplicação
RUN npm run build

# 3. Imagem de produção - apenas o necessário
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Criar usuário não-root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copiar apenas o necessário da build (graças ao output: standalone)
COPY --from=builder /app/public ./public

# Copiar output standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Comando para iniciar (standalone já inclui node_modules necessários)
CMD ["node", "server.js"]

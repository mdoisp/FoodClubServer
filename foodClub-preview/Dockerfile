FROM node:20-alpine AS builder

WORKDIR /app

# Instalar dependências necessárias
RUN apk add --no-cache curl

# Instalar o NestJS CLI globalmente
RUN npm i -g @nestjs/cli

COPY package*.json ./
RUN npm ci && npm cache clean --force

COPY . .
RUN npm run build

FROM node:20-alpine

WORKDIR /app

# Instalar curl para healthcheck
RUN apk add --no-cache curl

# Instalar o NestJS CLI globalmente na imagem final também
RUN npm i -g @nestjs/cli

COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

COPY --from=builder /app/dist ./dist

EXPOSE 3000

# Em desenvolvimento, use o comando de desenvolvimento
CMD ["npm", "run", "start:dev"] 
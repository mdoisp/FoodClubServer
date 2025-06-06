# Estágio de build
FROM node:18-alpine AS builder

WORKDIR /app

# Instala dependências necessárias para compilação nativa
RUN apk add --no-cache python3 make g++

# Copia os arquivos de configuração
COPY package*.json ./
COPY .sequelizerc ./

# Instala TODAS as dependências (incluindo devDependencies) para build
RUN npm install --legacy-peer-deps

# Instala o Nest CLI globalmente
RUN npm install -g @nestjs/cli

# Copia os arquivos de configuração do TypeScript e Sequelize
COPY tsconfig*.json ./
COPY config ./config

# Copia o código fonte
COPY . .

# Compila o projeto
RUN npm run build

# Estágio de produção
FROM node:18-alpine

WORKDIR /app

# Copia apenas os arquivos necessários do estágio de build
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.sequelizerc ./
COPY --from=builder /app/config ./config

# Instala apenas as dependências de produção
RUN npm ci --omit=dev || npm install --omit=dev

# Expõe a porta da aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"] 
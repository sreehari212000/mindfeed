FROM node:22-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
FROM node:22-slim
WORKDIR /app
COPY --from=builder /app .
EXPOSE 8000
CMD [ "node", "server.js" ]
FROM node:22-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:22-slim
WORKDIR /app

COPY --from=builder /app .

# Copy startup script
COPY start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 5000

# Replace old CMD
CMD ["/start.sh"]
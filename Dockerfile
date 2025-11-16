#
# Multi-stage Dockerfile for Vite + React (TypeScript)
# Build stage uses Node to compile to static assets, final stage serves via Nginx
#

# 1) Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies first (better caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the source and build
COPY . .
RUN npm run build

# 2) Runtime stage (Nginx to serve static files)
FROM nginx:1.27-alpine AS runner

# Remove default config and add our SPA-friendly config
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



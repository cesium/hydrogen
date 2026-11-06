# syntax=docker/dockerfile:1

ARG BUN_VERSION=1.4
ARG NODE_VERSION=20.11.1

# Build stage
FROM oven/bun:${BUN_VERSION}-slim AS builder

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

# Install node modules
COPY bun.lockb package.json ./
RUN bun install --frozen-lockfile

# Copy application code
COPY . .

# Build application
RUN bun run build


# Final stage for app image
FROM node:${NODE_VERSION}-slim AS runner

# Install curl for the health check
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y curl && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Owned by the runtime user because Next.js writes its cache under .next
COPY --from=builder --chown=node /app/public ./public
COPY --from=builder --chown=node /app/.next/standalone ./
COPY --from=builder --chown=node /app/.next/static ./.next/static

USER node

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --retries=3 --start-period=5s \
  CMD curl -f http://localhost:3000/ || exit 1

CMD [ "node", "server.js" ]

# syntax = docker/dockerfile:1

ARG BUN_VERSION=1.1.30
FROM oven/bun:${BUN_VERSION}-slim AS base

LABEL fly_launch_runtime="Next.js"

# Next.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"


# Throw-away build stage to reduce size of final image
FROM base AS build

# Build arguments
ARG NEXT_PUBLIC_CURRENT_MANDATE="2024-2025"

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential pkg-config python-is-python3

# Install node modules
COPY bun.lockb package.json ./
RUN bun install

# Copy application code
COPY . .

# Build application
RUN bunx next build --experimental-build-mode compile

# Remove development dependencies
RUN rm -rf node_modules && \
    bun install --ci


# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Entrypoint sets up the container.
ENTRYPOINT [ "/app/docker-entrypoint.ts" ]

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "bun", "run", "start" ]

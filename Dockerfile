FROM oven/bun:1 AS base

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY prisma ./prisma
RUN bunx prisma generate

COPY src ./src
COPY scripts ./scripts

EXPOSE 3000

CMD ["sh", "-c", "bunx prisma db push && bun run start"]

import { webhookCallback } from "grammy";
import { bot } from "../bot/bot";
import { env } from "../config/env";
import { logger } from "../utils/logger";

const handleUpdate = webhookCallback(bot, "std/http");

export function startWebhookServer() {
  const server = Bun.serve({
    port: env.PORT,
    async fetch(request) {
      const url = new URL(request.url);

      if (url.pathname === "/health") {
        return new Response("ok");
      }

      if (url.pathname === `/webhook/${env.WEBHOOK_SECRET}` && request.method === "POST") {
        return handleUpdate(request);
      }

      return new Response("Not found", { status: 404 });
    }
  });

  logger.info(`Webhook server started on port ${server.port}`);
  return server;
}

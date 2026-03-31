import { startWebhookServer } from "./webhook/server";
import { logger } from "./utils/logger";
import { prisma } from "./db/prisma";

startWebhookServer();

const shutdown = async () => {
  logger.info("Shutting down...");
  await prisma.$disconnect();
  process.exit(0);
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

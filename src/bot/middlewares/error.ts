import type { Bot } from "grammy";
import type { BotContext } from "../../types/bot";
import { logger } from "../../utils/logger";

export function registerBotErrorHandler(bot: Bot<BotContext>) {
  bot.catch((error) => {
    logger.error("Unhandled bot error", error.error);
  });
}

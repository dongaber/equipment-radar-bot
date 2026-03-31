import { Bot } from "grammy";
import type { BotContext } from "../types/bot";
import { env } from "../config/env";
import { sessionMiddleware } from "./middlewares/session";
import { authMiddleware } from "./middlewares/auth";
import { registerBotErrorHandler } from "./middlewares/error";
import { registerStartCommand } from "./commands/start";
import { registerHelpCommand } from "./commands/help";
import { registerMessageHandler } from "./handlers/message";
import { registerCallbackHandler } from "./handlers/callback";

export const bot = new Bot<BotContext>(env.BOT_TOKEN);

bot.use(sessionMiddleware);
bot.use(authMiddleware);

registerStartCommand(bot);
registerHelpCommand(bot);
registerMessageHandler(bot);
registerCallbackHandler(bot);
registerBotErrorHandler(bot);

bot.start({
  onStart: (botInfo) => {
    console.info(`Bot started as ${botInfo.username}`);
  }
});

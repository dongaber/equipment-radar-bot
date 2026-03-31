import type { Bot } from "grammy";
import type { BotContext } from "../../types/bot";

export function registerHelpCommand(bot: Bot<BotContext>) {
  bot.command("help", async (ctx) => {
    await ctx.reply("Доступные команды: /start, /help");
  });
}

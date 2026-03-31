import type { Bot } from "grammy";
import type { BotContext } from "../../types/bot";

export function registerCallbackHandler(bot: Bot<BotContext>) {
  bot.callbackQuery("help", async (ctx) => {
    await ctx.answerCallbackQuery();
    await ctx.reply("Это раздел помощи.");
  });
}

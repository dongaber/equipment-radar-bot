import type { Bot } from "grammy";
import type { BotContext } from "../../types/bot";

export function registerMessageHandler(bot: Bot<BotContext>) {
  bot.on("message:text", async (ctx) => {
    await ctx.reply(`Вы написали: ${ctx.message.text}`);
  });
}

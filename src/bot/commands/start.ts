import type { Bot } from "grammy";
import type { BotContext } from "../../types/bot";
import { userService } from "../../services/user.service";
import { notificationService } from "../../services/notification.service";
import { mainKeyboard } from "../keyboards/main";

export function registerStartCommand(bot: Bot<BotContext>) {
  bot.command("start", async (ctx) => {
    if (ctx.from) {
      await userService.registerFromTelegramUser(ctx.from);
    }

    await ctx.reply(notificationService.sendWelcomeText(), {
      reply_markup: mainKeyboard
    });
  });
}

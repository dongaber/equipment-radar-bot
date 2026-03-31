import type { MiddlewareFn } from "grammy";
import type { BotContext } from "../../types/bot";

export const authMiddleware: MiddlewareFn<BotContext> = async (ctx, next) => {
  // Hook for ACL or tenant checks.
  await next();
};

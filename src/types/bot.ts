import type { Context, SessionFlavor } from "grammy";

export type SessionData = {
  startedAt: number;
};

export type BotContext = Context & SessionFlavor<SessionData>;

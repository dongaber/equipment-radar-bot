import { session } from "grammy";
import type { SessionData } from "../../types/bot";

const initialSession = (): SessionData => ({
  startedAt: Date.now()
});

export const sessionMiddleware = session({
  initial: initialSession
});

import { config } from "dotenv";
import { z } from "zod";

config();

const envSchema = z.object({
  BOT_TOKEN: z.string().min(1),
  WEBHOOK_URL: z.url(),
  WEBHOOK_SECRET: z.string().min(8),
  DATABASE_URL: z.string().min(1),
  PORT: z.coerce.number().int().positive().default(3000),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development")
});

export const env = envSchema.parse(process.env);

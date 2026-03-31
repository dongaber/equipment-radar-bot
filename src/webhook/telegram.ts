import { env } from "../config/env";

const webhookEndpoint = `${env.WEBHOOK_URL}/webhook/${env.WEBHOOK_SECRET}`;

export async function setTelegramWebhook() {
  await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/setWebhook`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      url: webhookEndpoint,
      secret_token: env.WEBHOOK_SECRET,
      allowed_updates: ["message", "callback_query"]
    })
  });
}

export async function deleteTelegramWebhook() {
  await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/deleteWebhook`, {
    method: "POST"
  });
}

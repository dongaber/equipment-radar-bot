import { prisma } from "../prisma";

export const userRepo = {
  upsertByTelegramId: (input: {
    telegramId: bigint;
    username?: string;
    firstName?: string;
    lastName?: string;
  }) =>
    prisma.user.upsert({
      where: { telegramId: input.telegramId },
      update: {
        username: input.username,
        firstName: input.firstName,
        lastName: input.lastName
      },
      create: {
        telegramId: input.telegramId,
        username: input.username,
        firstName: input.firstName,
        lastName: input.lastName
      }
    })
};

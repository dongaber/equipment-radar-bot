import { userRepo } from "../db/repositories/user.repo";

export const userService = {
  registerFromTelegramUser: async (user: {
    id: number;
    username?: string;
    first_name?: string;
    last_name?: string;
  }) =>
    userRepo.upsertByTelegramId({
      telegramId: BigInt(user.id),
      username: user.username,
      firstName: user.first_name,
      lastName: user.last_name
    })
};

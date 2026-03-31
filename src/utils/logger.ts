export const logger = {
  info: (message: string, extra?: unknown) => {
    console.log(`[INFO] ${message}`, extra ?? "");
  },
  error: (message: string, extra?: unknown) => {
    console.error(`[ERROR] ${message}`, extra ?? "");
  }
};

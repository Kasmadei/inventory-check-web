export enum ErrorCategory {
  Network = "Network",
  Inventory = "Inventory",
}

export class Analytics {}

export const logError = async (
  category: ErrorCategory,
  message: string,
  params?: any
): Promise<void> => {
  console.log(">>>> [ERR] ", message, "");
};

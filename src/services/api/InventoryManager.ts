import { GetAllInventoriesResponse } from "../../shared/payloads/inventoryPayloads";
import GlobalVars from "../../global";
import { handleNetworkResponseAndGetJsonAsync } from "./Network";
import { logError, ErrorCategory } from "./Analytics";

export class InventoryManager {
  static _instance: InventoryManager | null = null;

  static getManager(): InventoryManager {
    if (this._instance === null) {
      this._instance = new InventoryManager();
    }
    return this._instance;
  }

  async fetchAllInventoriesAsync(): Promise<GetAllInventoriesResponse> {
    let response: Response | null;
    const url = `${GlobalVars.SERVER_ENDPOINT}/inventory/all`;
    try {
      response = await fetch(url);
    } catch (e: any) {
      logError(
        ErrorCategory.Inventory,
        "fetchAllInventoriesAsync:: Error executing fetch request"
      );
      throw new Error("Couldn't execute server request.");
    }
    if (response) {
      const data: GetAllInventoriesResponse = await handleNetworkResponseAndGetJsonAsync(
        response
      );
      return data;
    } else {
      logError(
        ErrorCategory.Inventory,
        "fetchAllInventoriesAsync:: No response returned from the server",
        {
          url: url,
        }
      );
      throw new Error("Server error while fetching all inventories");
    }
  }
}

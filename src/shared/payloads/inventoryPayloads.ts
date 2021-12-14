import { InventoryDto, SetInventoryDto } from "../types/InventoryTypes";

// create inventory
export interface CreateInventoryRequest extends SetInventoryDto {}
export interface CreateInventoryResponse extends InventoryDto {}

// update inventory
export interface UpdateInventoryRequest extends SetInventoryDto {
  id: string;
}
export interface UpdateInventoryResponse extends InventoryDto {}

// get single inventory
export interface GetInventoryRequest {
  id: string;
}
export interface GetInventoryResponse extends InventoryDto {}

// get all inventories
export interface GetAllInventoriesResponse {
  inventories: InventoryDto[];
}

// delete inventory
export interface DeleteInventoryRequest {
  id: string;
}

import { ScanDto, SetScanDto } from "../types/scanTypes";

// create scan
export interface CreateScanRequest extends SetScanDto {}
export interface CreateScanResponse extends ScanDto {}

// update scan
export interface UpdateScanRequest extends SetScanDto {
  id: string;
}
export interface UpdateScanResponse extends ScanDto {}

// get single scan
export interface GetScanRequest {
  id: string;
}
export interface GetScanResponse extends ScanDto {}

// get all inventories
export interface GetAllScansResponse {
  scans: ScanDto[];
}

// delete scan
export interface DeleteScanRequest {
  id: string;
}

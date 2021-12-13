export type ScanType = "unit" | "count" | "weight" | "countWeight";
export type ScanUnitType = "kg" | "ks" | "m";

export interface ScanDto {
  id: string;
  createdAt: Date;
  lastModifiedAt: Date;

  /**
   * Customer's product ID
   */
  PCI?: string;
  EAN?: string;
  scanType: ScanType;
  value: number;
  unit: ScanUnitType;
}

export interface SetScanDto
  extends Omit<ScanDto, "id" | "createdAt" | "lastModifiedAt"> {
  locationId: string;
  scannedById: string;
  checkedById?: string;
}

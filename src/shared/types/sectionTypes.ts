export interface SectionDto {
  id: string;
  createdAt: Date;
  lastModifiedAt: Date;
  name: string;
  isForLabeledLocations: boolean;
  locationIntervals: LocationIntervalDto[];
  inventoryId: string;
}

export interface SetSectionDto
  extends Omit<SectionDto, "id" | "createdAt" | "lastModifiedAt"> {}

export interface LocationIntervalDto {
  /**
   * index of the first location in the interval
   */
  startLocation: number;

  /**
   * index of the last location in the interval
   * undefined -> interval contains only one location defined by `startLocation`
   */
  endLocation?: number;
}

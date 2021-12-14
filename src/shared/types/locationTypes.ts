export interface LocationDto {
  id: string;
  createdAt: Date;
  lastModifiedAt: Date;
  /**
   * Set when the location has an existing label on site
   */
  label?: string;
  /**
   * Used in combination with section (section has locations from XX to YY)
   */
  order?: number;
  isEmpty: boolean;
  isFinished: boolean;
  inspectionRequested: boolean;
  isDeleted: boolean;
  sectionId?: string;
}

export interface SetLocationDto
  extends Omit<
    LocationDto,
    "id" | "createdAt" | "lastModifiedAt" | "isEmpty"
  > {}

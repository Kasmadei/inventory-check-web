import { SectionDto, SetSectionDto } from "../types/sectionTypes";

// create section
export interface CreateSectionRequest extends SetSectionDto {}
export interface CreateSectionResponse extends SectionDto {}

// update section
export interface UpdateSectionRequest extends SetSectionDto {
  id: string;
}
export interface UpdateSectionResponse extends SectionDto {}

// get single section
export interface GetSectionRequest {
  id: string;
}
export interface GetSectionResponse extends SectionDto {}

// get all inventories
export interface GetAllSectionsResponse {
  sections: SectionDto[];
}

// delete section
export interface DeleteSectionRequest {
  id: string;
}

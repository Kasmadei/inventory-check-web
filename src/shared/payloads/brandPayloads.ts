import { BrandDto, SetBrandDto } from "../types/brandTypes";

// create brand
export interface CreateBrandRequest extends SetBrandDto {}
export interface CreateBrandResponse extends BrandDto {}

// update brand
export interface UpdateBrandRequest extends SetBrandDto {
  id: string;
}
export interface UpdateBrandResponse extends BrandDto {}

// get single brand
export interface GetBrandRequest {
  id: string;
}
export interface GetBrandResponse extends BrandDto {}

// get all inventories
export interface GetAllBrandsResponse {
  brands: BrandDto[];
}

// delete brand
export interface DeleteBrandRequest {
  id: string;
}

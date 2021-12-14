import { ProductDto, SetProductDto } from "../types/productTypes";

// create product
export interface CreateProductRequest extends SetProductDto {}
export interface CreateProductResponse extends ProductDto {}

// update product
export interface UpdateProductRequest extends SetProductDto {
  id: string;
}
export interface UpdateProductResponse extends ProductDto {}

// get single product
export interface GetProductRequest {
  id: string;
}
export interface GetProductResponse extends ProductDto {}

// get all inventories
export interface GetAllProductsResponse {
  products: ProductDto[];
}

// delete product
export interface DeleteProductRequest {
  id: string;
}

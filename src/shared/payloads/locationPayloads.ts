import { LocationDto, SetLocationDto } from "../types/locationTypes";

// create location
export interface CreateLocationRequest extends SetLocationDto {}
export interface CreateLocationResponse extends LocationDto {}

// update location
export interface UpdateLocationRequest extends SetLocationDto {
  id: string;
}
export interface UpdateLocationResponse extends LocationDto {}

// get single location
export interface GetLocationRequest {
  id: string;
}
export interface GetLocationResponse extends LocationDto {}

// get all inventories
export interface GetAllLocationsResponse {
  locations: LocationDto[];
}

// delete location
export interface DeleteLocationRequest {
  id: string;
}

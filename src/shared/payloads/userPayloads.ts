import { SetUserDto, UserDto } from "../types/userTypes";

// create user
export interface CreateUserRequest extends SetUserDto {}
export interface CreateUserResponse extends UserDto {}

// update user
export interface UpdateUserRequest extends SetUserDto {
  id: string;
}
export interface UpdateUserResponse extends UserDto {}

// get single user
export interface GetUserRequest {
  id: string;
}
export interface GetUserResponse extends UserDto {}

// get all inventories
export interface GetAllUsersResponse {
  users: UserDto[];
}

// delete user
export interface DeleteUserRequest {
  id: string;
}

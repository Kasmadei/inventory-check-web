export const userRoleType = [
  "admin",
  "worker",
  "teamLead",
  "payroll",
  "itManager",
  "generalManager",
  "hr",
] as const;
export type UserRoleType = typeof userRoleType[number];

export interface UserDto {
  id: string;
  createdAt: Date;
  lastModifiedAt: Date;
  name: string;
  userRoles: UserRoleType[];
}

export interface SetUserDto
  extends Omit<UserDto, "id" | "createdAt" | "lastModifiedAt"> {}

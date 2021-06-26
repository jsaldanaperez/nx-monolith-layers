export class UserRole {
    id: string;
    type: UserRoleType;
}

export enum UserRoleType {
    Administrator,
    User
}
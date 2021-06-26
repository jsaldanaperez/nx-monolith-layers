import { Injectable } from '@angular/core';
import { UserRoleType } from '../entities/user-role';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  convertToString(userRoleType: UserRoleType): string {
    switch (userRoleType) {
      case UserRoleType.Administrator:
        return 'Administrator';
      case UserRoleType.User:
        return 'User';
      default: return 'Unknown'
    }
  }
}

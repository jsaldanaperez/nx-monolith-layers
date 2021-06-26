import { Injectable } from '@angular/core';
import { UserRole, UserRoleType } from '@nx-monolith-layers/user-roles/domain';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserRolesFacadeService {
  search(): Observable<UserRole[]> {
    return of([
      { id: '1', type: UserRoleType.Administrator },
      { id: '2', type: UserRoleType.User }
    ]).pipe(delay(2000));
  }
}

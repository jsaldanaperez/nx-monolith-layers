import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '@nx-monolith-layers/users/domain';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  search(): Observable<User[]> {
    return of([
      { id: '1', email: 'johndo@test.com', fullName: 'John Do', userRoleId: '1' },
      { id: '2', email: 'janedo@test.com', fullName: 'Jane Do', userRoleId: '2' }
    ]);
  }

}

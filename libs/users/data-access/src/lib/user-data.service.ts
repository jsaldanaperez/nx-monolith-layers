import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '@nx-monolith-layers/users/domain';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  search(): Observable<User[]> {
    return of([
      { email: 'johndo@test.com', fullName: 'John Do', userRoleId: '1' },
      { email: 'janedo@test.com', fullName: 'Jane Do', userRoleId: '2' }
    ]);
  }

}

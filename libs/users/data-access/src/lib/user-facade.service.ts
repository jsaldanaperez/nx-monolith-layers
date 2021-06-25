import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '@nx-monolith-layers/users/domain';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {
  private usersListSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersListSubject.asObservable();

  constructor(private userDataService: UserDataService) { }

  load(): void {
    this.userDataService.search()
      .subscribe(x => this.usersListSubject.next(x));
  }
}

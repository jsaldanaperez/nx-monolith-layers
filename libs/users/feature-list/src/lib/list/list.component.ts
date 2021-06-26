import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserFacadeService } from '@nx-monolith-layers/users/data-access';
import { UserRolesFacadeService } from '@nx-monolith-layers/user-roles/api';
import { User } from '@nx-monolith-layers/users/domain';
import { UserRoleService } from '@nx-monolith-layers/user-roles/api';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'users-feature-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Output() clicked = new EventEmitter<string>();
  users: User[] = [];
  userRoles: { [key: string]: string } = {};
  

  constructor(
    private userRoleService: UserRoleService,
    private userFacadeService: UserFacadeService, 
    private userRolesFacade: UserRolesFacadeService) { }

  ngOnInit(): void {
    this.userFacadeService.users$
      .pipe(switchMap((users) => {
        this.users = users;
        return this.userRolesFacade.search()
      }))
      .subscribe((userRoles) => {
        this.users.forEach(user => {
          this.userRoles[user.userRoleId] = 
          this.userRoleService
            .convertToString(userRoles.filter(x => x.id == user.userRoleId)[0].type);
        })
      });

    this.userFacadeService.load();
  }
}


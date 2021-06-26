import { Component, OnInit } from '@angular/core';
import { UserRolesFacadeService } from '@nx-monolith-layers/user-roles/data-access';


@Component({
  selector: 'user-roles-feature-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  userRoles$ = this.userRolesFacade.userRoles$;

  constructor(private userRolesFacade: UserRolesFacadeService) { }

  ngOnInit(): void {
    this.userRolesFacade.load();
  }

}

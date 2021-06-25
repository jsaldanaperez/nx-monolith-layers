import { Component, OnInit } from '@angular/core';
import { UserFacadeService } from '@nx-monolith-layers/users/data-access';

@Component({
  selector: 'users-feature-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users$ = this.userFacadeService.users$;

  constructor(private userFacadeService: UserFacadeService) { }

  ngOnInit(): void {
    this.userFacadeService.load();
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UsersDataAccessModule } from '@nx-monolith-layers/users/data-access';
import { UsersUiCardModule } from '@nx-monolith-layers/users/ui-card';

@NgModule({
  imports: [CommonModule, UsersDataAccessModule, UsersUiCardModule],
  declarations: [
    ListComponent
  ],
  exports: [ListComponent]
})
export class UsersFeatureListModule { }

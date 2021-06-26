import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserRolesUiLabelModule } from '@nx-monolith-layers/user-roles/ui-label';

@NgModule({
  imports: [CommonModule, UserRolesUiLabelModule],
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent
  ]
})
export class UserRolesFeatureListModule { }

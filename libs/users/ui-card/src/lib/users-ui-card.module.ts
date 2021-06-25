import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { UserRolesUiLabelModule } from '@nx-monolith-layers/user-roles/api';
@NgModule({
  imports: [CommonModule, UserRolesUiLabelModule],
  declarations: [
    CardComponent
  ],
  exports: [CardComponent]
})
export class UsersUiCardModule { }

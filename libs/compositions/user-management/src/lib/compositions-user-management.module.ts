import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { RouterModule } from '@angular/router';
import { UsersFeatureListModule } from '@nx-monolith-layers/users/feature-list';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    { path: '', component: RootComponent }
  ]),
    UsersFeatureListModule],
  declarations: [
    RootComponent
  ],
})
export class CompositionsUserManagementModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { RouterModule } from '@angular/router';
import { UsersFeatureListModule } from '@nx-monolith-layers/users/feature-list';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    { path: '', component: RootComponent },
    { path: ':id', component: DetailsComponent}
  ]),
    UsersFeatureListModule],
  declarations: [
    RootComponent,
    DetailsComponent
  ],
})
export class CompositionsUserManagementModule { }

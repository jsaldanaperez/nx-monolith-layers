import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([{ path: '', component: RootComponent }])],
  declarations: [
    RootComponent
  ],
})
export class CompositionUsersModule { }

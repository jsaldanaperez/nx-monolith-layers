import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot([
    { path: 'user-management', loadChildren: () => import('@nx-monolith-layers/compositions/user-management').then(m => m.CompositionsUserManagementModule) }
  ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

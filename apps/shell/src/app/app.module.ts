import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot([
    { path: 'users', loadChildren: () => import('@nx-monolith-layers/composition/users').then(m => m.CompositionUsersModule) }
  ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

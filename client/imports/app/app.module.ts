import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginModule } from '../modules/login/login.module';
import { RouterModule } from './app.router';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
  ],
  // Modules
  imports: [
    BrowserModule,
    LoginModule,
    RouterModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {}

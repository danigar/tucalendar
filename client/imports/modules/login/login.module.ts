import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { RouterLogin } from './login.router';


@NgModule({
  imports: [ LoginComponent,
            RouterLogin ],
  declarations: [ LoginComponent ]
})

export class LoginModule {
}

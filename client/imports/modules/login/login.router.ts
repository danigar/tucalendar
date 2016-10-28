import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

let RouterLogin = RouterModule;

export RouterLogin.forChild([
  { path: '', redirect: 'login'},
  { path: 'login', component: LoginComponent }
]);

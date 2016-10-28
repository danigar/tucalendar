import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

export RouterModule.forRoot([
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '/main', component: AppComponent }
]);

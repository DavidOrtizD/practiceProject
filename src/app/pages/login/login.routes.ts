import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login.component';

const login_routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const login_routing = RouterModule.forChild(login_routes);

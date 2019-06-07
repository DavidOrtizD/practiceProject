import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterModule' },
  { path: 'userInfo', loadChildren: './pages/user-info/user-info.module#UserInfoModule' },
  { path: '**', pathMatch: 'full', redirectTo: 'register' }
];

export const app_routing = RouterModule.forRoot(app_routes);

import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'userInfo', loadChildren: () => import('./pages/user-info/user-info.module').then(m => m.UserInfoModule) },
  { path: '**', pathMatch: 'full', redirectTo: 'register' }
];

export const app_routing = RouterModule.forRoot(app_routes);

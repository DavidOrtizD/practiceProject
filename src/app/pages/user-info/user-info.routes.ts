import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './component/user-info.component';

const userInfo_routes: Routes = [
  { path: '', component: UserInfoComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const userInfo_routing = RouterModule.forChild(userInfo_routes);

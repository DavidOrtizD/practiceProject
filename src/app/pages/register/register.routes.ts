import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './component/register.component';

const register_routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const register_routing = RouterModule.forChild(register_routes);

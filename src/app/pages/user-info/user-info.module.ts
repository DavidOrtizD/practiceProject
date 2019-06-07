import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*** User Info Components ***/
import { UserInfoComponent } from './component/user-info.component';

/*** User Info Routes ***/
import { userInfo_routing } from './user-info.routes';

@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    userInfo_routing
  ]
})
export class UserInfoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*** Custom Modules ***/
import { UserFormModule } from '../user-form/user-form.module';

/*** Components ***/
import { LoginComponent } from './component/login.component';

/*** Login Routes ***/
import { login_routing } from './login.routes'

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    login_routing,
    UserFormModule
  ]
})
export class LoginModule { }

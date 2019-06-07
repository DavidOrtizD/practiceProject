import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*** Shared Modules ***/
import { UserFormModule } from '../user-form/user-form.module';

/*** Register Components ***/
import { RegisterComponent } from './component/register.component';

/*** Register routes ***/
import { register_routing } from './register.routes';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    UserFormModule,
    register_routing
  ]
})
export class RegisterModule { }

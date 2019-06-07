import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

/*** Shared Component ***/
import{ UserFormComponent } from './component/user-form.component';
import { ModalComponent } from './component/modal/modal.component';

@NgModule({
  declarations: [UserFormComponent, ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports:[UserFormComponent],
  entryComponents:[ModalComponent]
})
export class UserFormModule { }

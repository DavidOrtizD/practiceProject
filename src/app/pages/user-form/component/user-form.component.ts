import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AuthenticationService } from '../../../providers/authentication.service'
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

  @Input() isLoginPage:boolean;

  loginForm:FormGroup;

  constructor(private _authService : AuthenticationService,
              private router : Router,
              private _modalService : NgbModal) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    if(this.isLoginPage){
      this.loginForm = new FormGroup({
        'email' : new FormControl('', [ Validators.required,
                                        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                      ]),
        'password' : new FormControl(''),
        'rememberUser' : new FormControl('')
      });
    }else{
      this.loginForm = new FormGroup({
        'email' : new FormControl('', [ Validators.required,
                                        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                      ]),
        'password' : new FormControl(''),
        'checkPassword' : new FormControl('', [Validators.required]),
      });
      /*** We need to use bind to pass the form value to our validation ***/
      this.loginForm.controls.checkPassword.setValidators([
        Validators.required,
        this.passwordMatch.bind( this.loginForm )
      ]);
    }
  }

  submitForm(){
    if(this.loginForm.valid){
      let userInformation = {
        email : this.loginForm["controls"].email.value,
        password : this.loginForm["controls"].password.value
      };

      if(this._authService.checkUserCredentials(userInformation)){
        if(this.loginForm["controls"].rememberUser && this.loginForm["controls"].rememberUser.value){
          this._authService.saveSesion();
        }
        this.router.navigate(['userInfo']);
      }else{
        this._modalService.open(ModalComponent);
      }

    }
    console.log(this.loginForm);
  }

  passwordMatch(control : FormControl):{[s:string]:boolean}{
    let form : FormGroup = (this as unknown as FormGroup);
    if(control.value !== form.controls.password.value){
      return{ nomatch:true }
    }else{
      return null;
    }
  }

}

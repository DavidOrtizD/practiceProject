import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedIn : BehaviorSubject<boolean>;

  loggedUser:any;

  constructor() {
    this.loggedIn = new BehaviorSubject<boolean>(false);;
    this.loggedUser = {
      email : "",
      password : ""
    };
  }

  getUserCredentials(user:any):boolean{
    if(user.email.toLowerCase() === "david.ortiz@test.com" && user.password.toLowerCase() === "asd" ){
        this.loggedUser.email = user.email.toLowerCase();
        this.loggedUser.password = user.password.toLowerCase();
        return true;
    }else{
        return false;
    }
  }

  checkUserCredentials(user:any){
    if(this.getUserCredentials(user)){
      this.logIn();
      return true;
    }else{
      return false;
    }
  }

  logIn(){
    this.loggedIn.next(true);
  }

  logOut(){
    localStorage.removeItem("loggedUser");
    this.loggedIn.next(false);
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  loadStorageSesion(){
    if( typeof localStorage ){
      return localStorage.getItem("loggedUser");
    }else{
      console.error("The browser doesn't support localstorage");
    }
  }

  saveSesion(){
      localStorage.setItem("loggedUser",JSON.stringify(this.loggedUser));
  }

}

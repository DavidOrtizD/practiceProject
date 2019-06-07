import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../providers/authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLoggedIn : boolean;

  constructor( private _authService : AuthenticationService,
               private router : Router ) {
     this._authService.isLoggedIn().subscribe((isUserLogged)=>{
       this.userLoggedIn = isUserLogged;
     });
  }

  ngOnInit() {
    let storageUser = JSON.parse( this._authService.loadStorageSesion() );
    if( storageUser ){
        if ( this._authService.checkUserCredentials(storageUser) ){
          this.router.navigate(['userInfo']);
        }
    }
  }

  logOut(){
    this._authService.logOut();
  }

}

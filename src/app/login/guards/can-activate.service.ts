import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Injectable()
export class CanActivateService implements CanActivate {
  private redirect = false;
  constructor(private authService: AuthService, private _router:Router) {}

  canActivate() {
    this.redirect = this.authService.isLoggedIn();
     if(!this.redirect){
       this._router.navigateByUrl('');
     }
    return this.redirect;
  }
}

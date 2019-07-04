import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  private userName: string;
  private isLoggedInValue: boolean= false;


  // tslint:disable-next-line:variable-name
  constructor(private _router: Router) { }


  isLoggedIn(): boolean {
    return this.isLoggedInValue;
  }

  getLoggedIn(value: string) {
    if (value === 'krishna') {
      this.isLoggedInValue=true;
      this._router.navigateByUrl('/home');
    }

  }


}

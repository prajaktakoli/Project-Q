import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthCustomerGuard implements CanActivate {
  constructor(private _router: Router,
    private _auth: AuthService) { }
  canActivate(): boolean {
    if (this._auth.loggedIn()) {
      console.log('In auth guard-customer is true')
      return true
    } else {
      console.log('In auth guard-customer ts true')
      this._router.navigate(['/customerlogin'])
      return false
    }
  }


}

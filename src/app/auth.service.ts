import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _merchantLoginUrl = "http://localhost:3000/api/login"
  private _merchantRegisterUrl = "http://localhost:3000/api/register"
  private _custLoginUrl = "http://localhost:3000/api/customerlogin"
  private _custRegisterUrl = "http://localhost:3000/api/customerregister"
  constructor(private http: HttpClient,
    private _router: Router) { }

  registerMerchant(user) {
    return this.http.post<any>(this._merchantRegisterUrl, user)
  }

  loginMerchant(user) {
    return this.http.post<any>(this._merchantLoginUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
    //this._router.navigate(['/binges'])
  }
  registerCustomer(user) {
    return this.http.post<any>(this._custRegisterUrl, user)
  }

  loginCustomer(user) {
    return this.http.post<any>(this._custLoginUrl, user)
  }

  getToken() {
    return localStorage.getItem('token')
  }

}

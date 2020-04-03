import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _merchantLogin = "http://localhost:3000/api/login"
  private _merchantRegister = "http://localhost:3000/api/register"
  constructor(private http: HttpClient,
    private _router: Router) { }

  registerMerchant(user) {
    return this.http.post<any>(this._merchantRegister, user)
  }

  loginMerchant(user) {
    return this.http.post<any>(this._merchantLogin, user)
  }

  loggedInMerchant() {
    return !!localStorage.getItem('token')
  }

  logoutMerchant() {
    localStorage.removeItem('token')
    this._router.navigate(['/binges'])
  }

  getToken() {
    return localStorage.getItem('token')
  }


}

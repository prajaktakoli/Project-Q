import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginMerchantData = {}
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
  }
  loginMerchant() {
    this._auth.loginMerchant(this.loginMerchantData)
      .subscribe(
        res => {
          console.log(res) 
          localStorage.setItem('token', res.token)
          this._router.navigate(['/merchant'])
        },
        err => console.log(err)
      )
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {
  loginCustomerData = {}
  constructor(private _auth: AuthService,
              private _router:Router) { }

  ngOnInit(): void {
  }

  loginCustomer() {
    this._auth.loginCustomer(this.loginCustomerData)
      .subscribe(
        res =>{ 
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/customer'])
        },
        err => console.log(err)
      )
  }

}

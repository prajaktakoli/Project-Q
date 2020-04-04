import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  registerCustomerData = {}
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
  }
  registerCustomer() {
    this._auth.registerCustomer(this.registerCustomerData)
      .subscribe(
        res => {
          console.log(res),
            localStorage.setItem('token', res.token),
            this._router.navigate(['/customer'])
        },
        err => console.log(err)
      )

  }
}

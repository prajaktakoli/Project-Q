import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cityList =['Pune','Mumbai','Pune City']
  registerMerchantData = {}
  constructor(private _auth: AuthService,
              private _router:Router) { }

  ngOnInit(): void {
  }
  registerMerchant() {
    this._auth.registerMerchant(this.registerMerchantData)
      .subscribe(
        res => {
          console.log(res),         
          localStorage.setItem('token', res.token),
          this._router.navigate(['/merchant'])
        },
        err => {console.log(err)}
      )
  }
}

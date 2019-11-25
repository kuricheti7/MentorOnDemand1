import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginAdminData = {}

  constructor(private _auth: AuthService, private _route: Router) { }

  ngOnInit() {
  }

  loginAdmin() {
    this._auth.loginAdmin(this.loginAdminData)
      .subscribe(
        res => {
          if(res.userInfo.role == 1)
          {
            localStorage.setItem('token',res.token)
            localStorage.setItem('id',res.userInfo.id)
            localStorage.setItem('email',res.userInfo.email)
            localStorage.setItem('firstname',res.userInfo.firstName)
            localStorage.setItem('lastname',res.userInfo.lastName)
            this._route.navigate(['/admindashboard'])
          }
          else{
            console.log("not admin")
          }
          
        },
        err => console.log(err)
      )
  }
}


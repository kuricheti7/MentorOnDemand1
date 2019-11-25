import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {

  loginUserData = {"Role":3};
  body = {};

  constructor(private _auth: AuthService, private route: Router) { }

  ngOnInit() {
  }

  loginUser(){
    
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res);
        if(res.userInfo.role == 3){
          localStorage.setItem('token',res.token)
          localStorage.setItem('id',res.userInfo.id)
          localStorage.setItem('email',res.userInfo.email)
          localStorage.setItem('firstname',res.userInfo.firstName)
          localStorage.setItem('lastname',res.userInfo.lastName)
          this.route.navigate(['/userdb'])
        }
        else{
          console.log("Not Student")
        }
        
      },
      err => console.log(err) 
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentsignup',
  templateUrl: './studentsignup.component.html',
  styleUrls: ['./studentsignup.component.css']
})
export class StudentsignupComponent implements OnInit {

  registerUserData = {"Role":3}

  constructor(private _auth : AuthService, private route: Router) { }

  ngOnInit() {
  }

  registerUser(){
   
   
    
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res)
        this.route.navigate(['/studentlogin'])
      },
      err => console.log(err)
    )
   }
}


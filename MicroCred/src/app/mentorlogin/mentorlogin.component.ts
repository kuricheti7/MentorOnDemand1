import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentorlogin',
  templateUrl: './mentorlogin.component.html',
  styleUrls: ['./mentorlogin.component.css']
})
export class MentorloginComponent implements OnInit {

  loginMentorData = {}
  body


  constructor(private _auth : AuthService, private route: Router) { }

  ngOnInit() {
  }

  loginMentor(){
    
    this._auth.loginMentor(this.loginMentorData)
    .subscribe(
      res =>
      { 
        console.log(res)
        if(res.userInfo.role ==2 )
        {
          this.body = res.mentor
          localStorage.setItem('token',res.token)
          localStorage.setItem('id',res.userInfo.id)
          localStorage.setItem('email',res.userInfo.email)
          localStorage.setItem('firstname',res.userInfo.firstName)
          localStorage.setItem('lastname',res.userInfo.lastName)
          this.route.navigate(['/mentordb'])
        }
        else{
          console.log("Not Mentor")
        }
        
      },
      err => console.log(err)
    )
  }
}

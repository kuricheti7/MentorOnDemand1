import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styleUrls: ['./mentorsignup.component.css']
})
export class MentorsignupComponent implements OnInit {

  registerMentorData = {"Role":2}
  
  constructor(private _auth : AuthService,private route: Router) { }

  ngOnInit() {
  }
 
   registerMentor() {
     this._auth.registerMentor(this.registerMentorData)
    .subscribe(
      res => {
        console.log(res)
        this.route.navigate(['/mentorlogin'])
      },
      err => console.log(err)
    )
   }
  
}

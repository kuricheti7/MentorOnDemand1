import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentorprofile',
  templateUrl: './mentorprofile.component.html',
  styleUrls: ['./mentorprofile.component.css']
})
export class MentorprofileComponent implements OnInit {
  mentordetails
id
  constructor(private _auth: AuthService,private _route: Router) { }

  ngOnInit() {
   
    this.id =  localStorage.getItem('id')
     this._auth.getUserDetails(this.id)
      .subscribe(
        res =>
        {
          console.log(res),
          this.mentordetails = res;
        } ,
        err => console.log(err)
      ) 
  }

  


  editMentor()
  {
   
    this._route.navigateByUrl('/mentordb/editmentor')

  }

}


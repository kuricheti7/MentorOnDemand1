import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentorlist',
  templateUrl: './mentorlist.component.html',
  styleUrls: ['./mentorlist.component.css']
})
export class MentorlistComponent implements OnInit {
  

  constructor(private _auth: AuthService,private _route: Router) { }

  ngOnInit() {
    this.getMentors()
  }

  mentors = []
  getMentors() {
    this._auth.mentorList().subscribe(
      res => {
        console.log(res);
        this.mentors=res;
      },
      err => console.log(err)
    )
  }

  BlockUser(id){
    console.log(id);
    this._auth.updateStatus(id).subscribe(
      res=>{
        this._auth.studentList();
      },
      err=>{
        console.log(err);
      }
    )
  }
}

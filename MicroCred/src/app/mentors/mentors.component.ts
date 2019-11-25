import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  mentors = [];

  ngOnInit() {
    this.getMentors()
  }

  getMentors()
  {
    this._auth.mentorList().subscribe(
      res => {
        console.log(res);
        this.mentors=res;
      },
      err => console.log(err)
    )
  }
}

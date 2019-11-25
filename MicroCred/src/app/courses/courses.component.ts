import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = [];
  constructor(private _auth : AuthService) { }

  ngOnInit() {
    this.getCourses()
  }

  getCourses()
  {
    this._auth.courseList().subscribe(
      res => {
        console.log(res);
        this.courses=res;
      },
      err => console.log(err)
    )
  }
}

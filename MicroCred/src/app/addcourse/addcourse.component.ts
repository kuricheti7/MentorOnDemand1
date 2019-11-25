import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  courseData = {};

  constructor(private _auth: AuthService,private route : Router) { }

  ngOnInit() {
  }

  addCourse(){
    this.courseData["ctimings"] = this.courseData["ctimings"] == "1" ? 1: this.courseData["ctimings"] == "2" ? 2: 3;  
    
    this._auth.addCourse(this.courseData)
    .subscribe(
      res => {
        console.log(res)
        this.route.navigate(['/admindashboard/courselist'])
      },
      err => console.log(err)
    )
   }
}

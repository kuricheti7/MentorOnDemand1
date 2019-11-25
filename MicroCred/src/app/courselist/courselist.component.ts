import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courselist',
  template: `
  <div class="container" style="padding: 20px">
  <h2>Courses List</h2>
  
  <table border="1" cellspacing="0" cellpadding="15">
    <tr><th>ID</th><th>Course Name</th><th>Description</th><th>Slot</th><th>Fee</th><th>Delete</th><th>Update</th></tr>
    <tr *ngFor = "let user of courses">
      <td>{{user.id}}</td>
      <td>{{user.courseName}}</td>
      
      <td>{{user.courseDesc}}</td>
      <td>Slot {{user.cTimings}}</td>
      <td>{{user.fee}}</td>
      <td><a (click) = "deleteCourse(user.id)"><i class="fa fa-remove"></i></a></td>
      <td><button routerLink="/admindashboard/editcourse/{{user.id}}"><i class="fa fa-pencil fa-fw" aria-hidden="true"></i></button></td>
    </tr>
  </table>
     <div>
        <h4>Slot Timings</h4>
        <h5> Slot1 - 11am to 1pm </h5>
        <h5> Slot2 - 2pm to 4pm </h5>
        <h5> Slot3 - 5pm to 7pm </h5>
    </div> 
  </div>
  `,
  styles: []
})
export class CourselistComponent implements OnInit {

  constructor(private _auth: AuthService, private route: Router) { }

  courses = [];

  ngOnInit() {
    this.getCourses()
  }

  getCourses() {

    this._auth.courseList().subscribe(
      res => {
        console.log(res);
        this.courses = res;
      },
      err => console.log(err)
    )
  }
  editCourse(id) {
 
    this.route.navigateByUrl('/admindashboard/editcourse/'+ id);
  }

  deleteCourse(id)
  {
    this._auth.deleteCourse(id).subscribe(
      res => {
        console.log(res);
        console.log("Course Deleted!")
      },
      err => console.log(err)
    )

  }
}

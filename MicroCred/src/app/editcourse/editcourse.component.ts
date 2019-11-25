import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {
  courseUpdateData:any = {}
  userData : any
  id;

  constructor(private _auth: AuthService,private route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.id =  parseInt(this.route.snapshot.paramMap.get('id'))
     this._auth.getCourse(this.id)
      .subscribe(
        res =>
        {
          console.log(res),
          this.courseUpdateData = res;
        } ,
        err => console.log(err)
      ) 
  }

  editCourse()
  {
    this._auth.updateCourse(this.id,this.courseUpdateData)
    .subscribe(
      res => {
        console.log(res)
        this._router.navigate(['/admindashboard/courselist'])
      },
      err => console.log(err)
    )
  }
 }
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent implements OnInit {

  courses: any;
  TrainingData ={id : -1, commissionAmount : 0, startDate : 0, endDate : 0};
  constructor(private _auth: AuthService,private _route: Router) { }

  ngOnInit() {
    this.getCourses()
  }

  getCourses() {
    this._auth.courseList().subscribe(
      res => {
        
        this.courses=res;
      },

      err => console.log(err)
    )
  }


  async addTraining()
  {
    console.log(this.TrainingData)
    this._auth.getCourseById(this.TrainingData.id).subscribe(
      res => {
        
       let record = {
         courseId : res.id,
         CourseName : res.courseName,
         Timings : res.cTimings,
         commissionAmount : this.TrainingData.commissionAmount,
         StartDate : this.TrainingData.startDate,
         EndDate : this.TrainingData.endDate,
         Status : 1,
         mentorId : localStorage.getItem('id'),
         mentorFirstName : localStorage.getItem('firstname'),
         mentorLastName : localStorage.getItem('lastname')
       }

       this._auth.addTraining(record).subscribe(
         res =>
         {
          console.log("Added Successfully!")
          this._route.navigate(["/mentordb"])
         }, 
         err => console.log(err)
       )


      },
      err => console.log(err)
    )
    }
  }
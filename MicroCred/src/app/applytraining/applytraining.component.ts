import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applytraining',
  templateUrl: './applytraining.component.html',
  styleUrls: ['./applytraining.component.css']
})
export class ApplytrainingComponent implements OnInit {

  trainings : any;
  constructor(private _auth: AuthService,private _route:Router) { }

  ngOnInit() {
    this.getTrainings()
  }

  getTrainings()
  {
    this._auth.getStudentUpcomngTrainings().subscribe(
      res =>
      {
        console.log('Retrieved');
        console.log(res)
        this.trainings = res;

      },
      err => console.log(err)   
        )
  }

  applyTraining(id)
  {
    localStorage.setItem('trainingid',id) 
    this._route.navigate(['/userdb/payments'])
  }
}

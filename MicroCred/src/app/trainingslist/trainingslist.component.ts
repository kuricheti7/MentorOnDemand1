import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-trainingslist',
  templateUrl: './trainingslist.component.html',
  styleUrls: ['./trainingslist.component.css']
})
export class TrainingslistComponent implements OnInit {

  trainings;
  constructor(private _auth : AuthService) { }

  ngOnInit() {
    this.getTrainings()
  }

  getTrainings()
  {
    this._auth.TrainingList().subscribe(
      res => this.trainings = res,
      err => console.log(err)
    )
  }

}

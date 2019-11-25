import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-ongoingtrainings',
  templateUrl: './ongoingtrainings.component.html',
  styleUrls: ['./ongoingtrainings.component.css']
})
export class OngoingtrainingsComponent implements OnInit {
  constructor(private _auth: AuthService) { }

  trainings : any;
  ngOnInit() {

    this.getTrainings()
  }

  getTrainings()
  {
    this._auth.getStudentOngoingTrainings(localStorage.getItem('id')).subscribe(
      res => 
      {
        console.log('Loaded Successfully!')
        console.log(res)
        this.trainings = res;
        
      },
      err => console.log(err)

    )
  }

}

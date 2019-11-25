import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-completedtrainings',
  templateUrl: './completedtrainings.component.html',
  styleUrls: ['./completedtrainings.component.css']
})
export class CompletedtrainingsComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  trainings : any;
  ngOnInit() {

    this.getTrainings()
  }

  getTrainings()
  {
    this._auth.getStudentComptdTrainings(localStorage.getItem('id')).subscribe(
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

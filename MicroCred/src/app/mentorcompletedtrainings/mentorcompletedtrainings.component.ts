import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mentorcompletedtrainings',
  templateUrl: './mentorcompletedtrainings.component.html',
  styleUrls: ['./mentorcompletedtrainings.component.css']
})
export class MentorcompletedtrainingsComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  trainings : any;
  ngOnInit() {

    this.getTrainings()
  }

  getTrainings()
  {
    this._auth.getMentorComptdTrainings(localStorage.getItem('id')).subscribe(
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

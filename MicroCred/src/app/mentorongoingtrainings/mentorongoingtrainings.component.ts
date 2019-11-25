import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentorongoingtrainings',
  templateUrl: './mentorongoingtrainings.component.html',
  styleUrls: ['./mentorongoingtrainings.component.css']
})
export class MentorongoingtrainingsComponent implements OnInit {

  constructor(private _auth: AuthService,private _route:Router) { }

  trainings : any;
  model : any;
  ngOnInit() {

    this.getTrainings()
  }

  getTrainings()
  {
    this._auth.getMentorOngoingTrainings(localStorage.getItem('id')).subscribe(
      res => 
      {
        console.log('Loaded Successfully!')
        console.log(res)
        this.trainings = res;
        
      },
      err => console.log(err)

    )
  }

  getProgress(id)
  {
    this._auth.getTrainingById(id).subscribe(data => {
      this.model = data;
    });
    
  }

  updateProgress(id)
  {
    var pro = parseInt(this.model.progress)
    
    this._auth.updateProgress(id,pro).subscribe(
      res => {
        console.log('Successfully!')
        this._route.navigate(["mentordb/mentorongoing"])
      },
      err => console.log(err)
    )
  }

}

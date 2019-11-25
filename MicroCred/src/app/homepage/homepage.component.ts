import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  searchText;
  courses

  constructor(private _auth: AuthService) { }

  ngOnInit() {
    this.getCourse()
  console.log(this.courses)
  
  }


  getCourse()
  {
    this._auth.courseList().subscribe(
      res => {
        console.log(res),
        this.courses = res;
      },
      err => console.log(err)
    )
  }
}

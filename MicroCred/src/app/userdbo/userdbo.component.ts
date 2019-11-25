import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-userdbo',
  templateUrl: './userdbo.component.html',
  styleUrls: ['./userdbo.component.css']
})
export class UserdboComponent implements OnInit {

  
id;
  constructor(private _auth: AuthService) { }

  ngOnInit() {

    this.id=localStorage.getItem('user');
   
  }

}

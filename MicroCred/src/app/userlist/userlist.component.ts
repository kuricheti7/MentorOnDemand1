import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private _auth: AuthService,private _route : Router) { }

  ngOnInit() {
    this.getUsers()
  }

  users = [];
  
  getUsers() {
    this._auth.studentList().subscribe(
      res => {console.log(res); this.users=res;},

      err => console.log(err)
    )
  }

  BlockUser(id){
    console.log(id);
    this._auth.updateStatus(id).subscribe(
      res=>{
        this._auth.studentList();
      },
      err=>{
        console.log(err);
      }
    )
  }
}

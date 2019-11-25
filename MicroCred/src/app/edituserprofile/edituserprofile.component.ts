import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edituserprofile',
  templateUrl: './edituserprofile.component.html',
  styleUrls: ['./edituserprofile.component.css']
})
export class EdituserprofileComponent implements OnInit {

  userdetails
  id

  constructor(private _auth: AuthService,private _route : Router) { }

  ngOnInit() {
   this.id = localStorage.getItem('id');
    this.userdetails = this._auth.getUserDetails(this.id)
    .subscribe(
      res =>
      {
        console.log(res),
        this.userdetails = res;
      } ,
      err => console.log(err)
    ) 
  }

  
  editUserDetails()
  {
    this._auth.updateUser(this.id,this.userdetails).subscribe
    (
      res =>{
        console.log(res)
        this._route.navigateByUrl('/userdb')
      }, 
      err => console.log(err)
    )
  }
}
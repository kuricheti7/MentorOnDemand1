import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userdetails
  id

  constructor(private _auth: AuthService,private route: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
   
    this.id =  localStorage.getItem('id')
     this._auth.getUserDetails(this.id)
      .subscribe(
        res =>
        {
          console.log(res),
          this.userdetails = res;
        } ,
        err => console.log(err)
      ) 
  }

  
 

  editUser()
  {
    this._route.navigateByUrl('/userdb/edituser')
  }

}

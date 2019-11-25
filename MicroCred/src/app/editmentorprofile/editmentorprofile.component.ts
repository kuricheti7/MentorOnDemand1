import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editmentorprofile',
  templateUrl: './editmentorprofile.component.html',
  styleUrls: ['./editmentorprofile.component.css']
})
export class EditmentorprofileComponent implements OnInit {

  mentordetails
  id

  constructor(private _auth: AuthService,private _route : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem('id');
     this.mentordetails = this._auth.getMentorDetails(this.id)
     .subscribe(
       res =>
       {
         console.log(res),
         this.mentordetails = res;
       } ,
       err => console.log(err)
     ) 
   }
 
   
   editMentorDetails()
   {
     this._auth.updateMentor(this.id,this.mentordetails).subscribe
     (
       res =>{
         console.log(res)
         this._route.navigateByUrl('/mentordb')
       }, 
       err => console.log(err)
     )
   }
}
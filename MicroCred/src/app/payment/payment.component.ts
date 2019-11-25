import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  trid : any ;
  paymentdtls;
  trainingData;
  courseDetails;
  PaymentForm : FormGroup;


  constructor(private _auth: AuthService,private _route:Router,private fb: FormBuilder) { }

  ngOnInit() {
    this.getTrainingData()
    
    this.PaymentForm = this.fb.group({
      Name:['',[Validators.required]],
      Card: this.validateMinMax(16,16),
      mm:['',[Validators.required]],
      yy:['',[Validators.required]],
      cvv:['',[Validators.required]]
   });
   
    
  }

  // A helper to DRY the code
  validateMinMax(min, max) {
    return ['', [
      Validators.required,
      Validators.minLength(min),
      Validators.maxLength(max),
      Validators.pattern('[0-9]+')  // validates input is digit
    ]]
  }
  

  getTrainingData(){
    this.trid = localStorage.getItem('trainingid')
    this._auth.getTrainingById(this.trid).subscribe(
      res => {
       
        this.trainingData = res;
        this._auth.getCourseById(res.courseId).subscribe(
          res => {
            
            this.courseDetails = res;

          },
          err => console.log(err)
        )
        
      },
      err => console.log(err)
    )
  }

  savePayment()
  {
   

   var paymentRecord = {
    userId : localStorage.getItem('id'),
    mentorId : this.trainingData.mentorId,
    courseId : this.trainingData.courseId,
    Fee : this.courseDetails.fee,
    commission : this.trainingData.commissionAmount,
    courseName : this.courseDetails.courseName,
    paymentStatus : true,
    trainingDetailsId : parseInt(localStorage.getItem('trainingid'))

   }
  
   this._auth.addPayment(paymentRecord).subscribe(
     res => {
       console.log('Payment Added',res)
       console.log('Waiting for Training updation')
      var trainingUpdate = {
      trainingId : parseInt(localStorage.getItem('trainingid')),
	    UserId : localStorage.getItem('id'),
    	UserFirstName : localStorage.getItem('firstname'),
	    UserLastName : localStorage.getItem('lastname'),
    	Progress : 1,
    	PaymentStatus : true
      }

      console.log(trainingUpdate)


       this._auth.applyTraining(trainingUpdate).subscribe(
         res => {
           console.log('Training Applied.',res)
           localStorage.removeItem('trainingid')
           this._route.navigate(["/userdb/userongoing"])
          },
         err => console.log(err)
       )
     },
     err => console.log(err)
   )

  }

}

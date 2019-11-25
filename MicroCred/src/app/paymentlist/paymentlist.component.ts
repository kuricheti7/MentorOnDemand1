import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymentlistComponent implements OnInit {

  payments;

  constructor(private _auth : AuthService) { }

  ngOnInit() {
    this.getPayments()

  }

  getPayments()
  {
this._auth.paymentsList().subscribe(
  res => this.payments = res,
  err => console.log(err)
)
  }

}

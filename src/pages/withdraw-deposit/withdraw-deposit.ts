import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';


import { PinVerificationPage } from '../pin-verification/pin-verification'

@Component({
  selector: 'page-withdraw-deposit',
  templateUrl: 'withdraw-deposit.html'
})
export class WithdrawDepositPage {

  constructor(public navCtrl: NavController) {


  }

  goToPinVerification(){
    this.navCtrl.push(PinVerificationPage);
  }


}

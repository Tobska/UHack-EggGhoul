import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PinVerificationPage } from '../pin-verification/pin-verification'

@Component({
  selector: 'page-withdraw',
  templateUrl: 'withdraw.html'
})
export class WithdrawPage {

  constructor(public navCtrl: NavController) {
  }

  goToPinVerification(){
    this.navCtrl.push(PinVerificationPage);
  }

}

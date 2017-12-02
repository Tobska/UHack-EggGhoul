import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PinVerificationPage } from '../pin-verification/pin-verification'

@Component({
  selector: 'page-deposit',
  templateUrl: 'deposit.html'
})
export class DepositPage {

  constructor(public navCtrl: NavController) {
  }

  goToPinVerification(){
    this.navCtrl.push(PinVerificationPage);
  }

}

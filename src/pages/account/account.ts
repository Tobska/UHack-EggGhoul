import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PinVerificationPage } from '../pin-verification/pin-verification';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController) {
  }

  goToPinVerification(){
    this.navCtrl.push(PinVerificationPage);
  }

}

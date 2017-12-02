import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PinVerificationPage } from '../pin-verification/pin-verification'

@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html'
})
export class AccountsPage {

  constructor(public navCtrl: NavController) {
  }

  items = [
    'Security Balance',
    'Foreign Balance',
    'Remmitances'
  ];

  accountSelected(item: string) {
    this.navCtrl.push(PinVerificationPage);
  }


}

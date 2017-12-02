import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DepositPage } from '../deposit/deposit';
import { WithdrawPage } from '../withdraw/withdraw';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController) {
  }

  goToDeposit(){
    this.navCtrl.push(DepositPage);
  }
  goToWithdraw(){
    this.navCtrl.push(WithdrawPage);
  }

}

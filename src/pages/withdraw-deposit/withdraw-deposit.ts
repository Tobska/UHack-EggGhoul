import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DepositPage } from '../deposit/deposit';
import { WithdrawPage } from '../withdraw/withdraw';

@Component({
  selector: 'page-withdraw-deposit',
  templateUrl: 'withdraw-deposit.html'
})
export class WithdrawDepositPage {

  constructor(public navCtrl: NavController) {


  }

  goToDeposit(){
    this.navCtrl.push(DepositPage);
  }
  goToWithdraw(){
    this.navCtrl.push(WithdrawPage);
  }

}

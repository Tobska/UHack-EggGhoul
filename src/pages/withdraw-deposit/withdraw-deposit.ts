import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';


import { AccountsPage } from '../accounts/accounts';

@Component({
  selector: 'page-withdraw-deposit',
  templateUrl: 'withdraw-deposit.html'
})
export class WithdrawDepositPage {

  constructor(public navCtrl: NavController) {


  }

  goToAccounts(){
    this.navCtrl.push(AccountsPage);
  }




}

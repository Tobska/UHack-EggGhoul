import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AccountsPage } from '../accounts/accounts';
import { AccountDetailPage } from '../account-detail/account-detail';



@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController) {
  }

  goToAccounts(){
    this.navCtrl.push(AccountsPage);
  }

  items = [
    'Remmitance Account',
    'International Account',
    'Local Account'
  ];

  itemSelected(item: string) {
    this.navCtrl.push(AccountDetailPage);
  }

}

import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AccountPage } from '../account/account';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }

  goToUserAccount(params){
    this.navCtrl.push(AccountPage);
  }

}

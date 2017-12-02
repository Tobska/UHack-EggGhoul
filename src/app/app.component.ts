import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { WithdrawDepositPage } from '../pages/withdraw-deposit/withdraw-deposit';
import { WithdrawPage } from '../pages/withdraw/withdraw';
import { TransactionsPage } from '../pages/transactions/transactions';
import { TransactionHistoryPage } from '../pages/transaction-history/transaction-history';
import { AccountsPage } from '../pages/accounts/accounts'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = AccountPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToAccount(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AccountPage);
  }goToWithdrawDeposit(params){
    if (!params) params = {};
    this.navCtrl.setRoot(WithdrawDepositPage);
  }goToTransactions(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TransactionsPage);
  }goToTransactionHistory(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TransactionHistoryPage);
  }
}

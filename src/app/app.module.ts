import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { WithdrawDepositPage } from '../pages/withdraw-deposit/withdraw-deposit';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { WithdrawPage } from '../pages/withdraw/withdraw';
import { DepositPage } from '../pages/deposit/deposit';
import { PinVerificationPage } from '../pages/pin-verification/pin-verification'
import { CodeViewPage } from '../pages/code-view/code-view';
import { TransactionsPage } from '../pages/transactions/transactions';
import { TransactionHistoryPage } from '../pages/transaction-history/transaction-history';
import { AccountsPage } from '../pages/accounts/accounts';
import { AccountDetailPage } from '../pages/account-detail/account-detail';
import { TransactionDetailPage } from '../pages/transaction-detail/transaction-detail';

import { TransactionComponent } from '../components/transaction/transaction';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    WithdrawDepositPage,
    AccountPage,
    LoginPage,
    CodeViewPage,
    WithdrawPage,
    DepositPage,
    PinVerificationPage,
    TransactionsPage,
    TransactionHistoryPage,
    AccountsPage,
    AccountDetailPage,
    TransactionComponent,
    TransactionDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WithdrawDepositPage,
    AccountPage,
    LoginPage,
    CodeViewPage,
    WithdrawPage,
    DepositPage,
    PinVerificationPage,
    TransactionsPage,
    TransactionHistoryPage,
    AccountsPage,
    AccountDetailPage,
    TransactionDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

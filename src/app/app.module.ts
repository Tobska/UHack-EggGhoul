import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { WithdrawDepositPage } from '../pages/withdraw-deposit/withdraw-deposit';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { WithdrawPage } from '../pages/withdraw/withdraw';
import { DepositPage } from '../pages/desposit/deposit';
import { CodeViewPage } from '../pages/code-view/code-view';


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
    DepositPage
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
    DepositPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

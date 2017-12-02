import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-account-detail',
  templateUrl: 'account-detail.html'
})
export class AccountDetailPage {

  constructor(public navCtrl: NavController) {
  }

  items = [
    'BAYAD CENTER INC. BILLS',
    'SMART GIGA99',
    'MERALCO INC. BILLS'
  ];

  itemSelected(item: string) {
    console.log("pl");
  }


}

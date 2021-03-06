import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TransactionDetailPage } from '../../pages/transaction-detail/transaction-detail'

/**
 * Generated class for the TransactionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'transaction',
  templateUrl: 'transaction.html'
})
export class TransactionComponent {

	@Input('time') inputTime;
  @Input('date') inputDate;
  @Input('currency') inputCurrency;
  @Input('amount') inputAmount;
  @Input('classification') inputClass;
  @Input('code') inputCode;

  time: string;
  currency: string;
  date: string;
  amount = 0;
  classification:string;
  code = 0;

  constructor(public navCtrl: NavController) {
    /*console.log('Hello TransactionComponent Component');
    this.title = 'Hello World';*/
  }

  itemSelected(){
    console.log("Welcome to your life.");
    this.navCtrl.push(TransactionDetailPage);
  }

  ngAfterViewInit() {
    console.log(this.amount);

    this.time = this.inputTime;
    this.currency = this.inputCurrency;
    this.date = this.inputDate;
    this.amount = this.inputAmount;
    this.classification = this.inputClass;
    this.code = this.inputCode;
  }

}

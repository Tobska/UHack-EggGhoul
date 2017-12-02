import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';


import { CodeViewPage } from '../code-view/code-view'


@Component({
  selector: 'page-pin-verification',
  templateUrl: 'pin-verification.html'
})
export class PinVerificationPage {

  constructor(public navCtrl: NavController) {
  }

  goToCodeView(){
    this.navCtrl.push(CodeViewPage);
  }

}

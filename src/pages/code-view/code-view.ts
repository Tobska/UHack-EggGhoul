import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-code-view',
  templateUrl: 'code-view.html'
})
export class CodeViewPage {

  constructor(public navCtrl: NavController) {
  }

  generateCode(){
    console.log("heh");
  }

  finishTransaction(){
    this.navCtrl.popToRoot();
  }

}

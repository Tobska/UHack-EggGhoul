import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-code-view',
  templateUrl: 'code-view.html'
})
export class CodeViewPage {

	codeVisible:boolean = false;

  constructor(public navCtrl: NavController) {
  }

  generateCode(){
	this.codeVisible = true;
    console.log("button generate click");
  }

  finishTransaction(){
    this.navCtrl.popToRoot();
  }

}

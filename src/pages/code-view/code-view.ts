import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Subscription} from 'rxjs';
import {TimerObservable} from 'rxjs/Observable/TimerObservable';

@Component({
  selector: 'page-code-view',
  templateUrl: 'code-view.html'
})
export class CodeViewPage {

	codeVisible:boolean = false;
  ticks = 0;

  private subscription:Subscription;

  constructor(public navCtrl: NavController, ) {
  }

  generateCode(){
	this.codeVisible = true;
  this.startTimer();
  }

  finishTransaction(){
    this.navCtrl.popToRoot();
  }

  startTimer() {
    let timer = TimerObservable.create(2000, 1000);
    this.subscription = timer.subscribe(t => {
      this.ticks = t;
    });
   }

    ngOnDestroy(){
      this.subscription.unsubscribe();
    }

}

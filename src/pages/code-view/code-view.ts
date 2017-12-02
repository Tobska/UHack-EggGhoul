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
  ticks = 60;
  code1 = 2524;
  code2 = 3624;
  code3 = 2525;

  private subscription:Subscription;

  constructor(public navCtrl: NavController ) {
  }

  generateCode(){
	this.codeVisible = true;
  this.startTimer();
  }

  finishTransaction(){
    this.navCtrl.popToRoot();
  }

  startTimer() {
    let timer = TimerObservable.create(0, 1000);
    this.subscription = timer.subscribe(t => {
      this.ticks = 60 - t;
      if(this.ticks == -1) {
         this.generateNewCode();
         this.ticks = 60;
         this.subscription.unsubscribe();
         this.startTimer();
      }
    });
   }

    ngOnDestroy(){
      this.subscription.unsubscribe();
    }

    generateNewCode() {
        this.code1 = this.randomIntFromInterval(1000, 9999);
        this.code2 = this.randomIntFromInterval(1000, 9999);
        this.code3 = this.randomIntFromInterval(1000, 9999);
    }

    randomIntFromInterval(min,max)
    {
    return Math.floor(Math.random()*(max-min+1)+min);
     }

}

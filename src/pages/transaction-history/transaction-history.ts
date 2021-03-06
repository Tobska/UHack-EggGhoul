import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-transaction-history',
  templateUrl: 'transaction-history.html'
})
export class TransactionHistoryPage {

  constructor(public navCtrl: NavController) {
  }

  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }


}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-join',
  templateUrl: 'join.html'
})
export class JoinPage {

  constructor(public navCtrl: NavController) {
  }

  complete() {
    this.navCtrl.pop();
  }

  cancel() {
    this.navCtrl.pop();
  }

}

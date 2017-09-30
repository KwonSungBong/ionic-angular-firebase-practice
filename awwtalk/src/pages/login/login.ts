import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from "ionic-angular";

import { HomePage } from '../home/home';
import { JoinPage } from '../join/join';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, protected app: App) {
  }

  login() {
    this.app.getRootNav().setRoot(HomePage)
  }

  join() {
    this.navCtrl.push(JoinPage);
  }

}

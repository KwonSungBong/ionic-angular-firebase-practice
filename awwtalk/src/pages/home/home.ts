import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from "ionic-angular";

import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, protected app: App) {
  }

  logout() {
    this.app.getRootNav().setRoot(LoginPage)
  }

  openPage() {
  }

  closeMenu() {
  }

}

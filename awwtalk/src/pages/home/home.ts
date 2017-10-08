import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from "ionic-angular";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Observable<any[]>;

  constructor(public navCtrl: NavController,
              protected app: App,
              private afAuth: AngularFireAuth,
              afDB: AngularFireDatabase) {
  }

  logout() {
    this.afAuth.auth.signOut().then(data => {
      this.app.getRootNav().setRoot(LoginPage)
    })
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from "ionic-angular";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';

import { LoginPage } from '../login/login';
import { TalkPage } from '../talk/talk';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // items: Observable<any[]>;
  talks: string[];

  constructor(public navCtrl: NavController,
              protected app: App,
              private afAuth: AngularFireAuth,
              afDB: AngularFireDatabase) {
    this.talks = ["1","2","3","4","5","6",
      "11","22","33","44","55","66",
      "111","222","333","444","555","666",
      "1111","2222","3333","4444","5555","6666",
      "11111","22222","33333","44444","55555","66666",
      "111111","222222","333333","4444444","5555555","666666"]
  }

  logout() {
    this.afAuth.auth.signOut().then(data => {
      this.app.getRootNav().setRoot(LoginPage)
    })
  }

  selectTalk(talk) {
    this.navCtrl.push(TalkPage)
  }

}

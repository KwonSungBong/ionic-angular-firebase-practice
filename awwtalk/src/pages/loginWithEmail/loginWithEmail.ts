import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from "ionic-angular";
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../home/home';
import { JoinWithEmailPage } from '../joinWithEmail/joinWithEmail';
@Component({
  selector: 'page-login-with-email',
  templateUrl: 'loginWithEmail.html'
})
export class LoginWithEmailPage {

  constructor(public navCtrl: NavController,
              protected app: App,
              private afAuth: AngularFireAuth,
              public alertCtrl: AlertController) {
  }

  complete() {
    const email="rnjstjdqhd39@naver.com";
    const password="rnjstjdqhd39@";

    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res)
        this.app.getRootNav().setRoot(HomePage)
      })
      .catch((error) => {
        let alert = this.alertCtrl.create({
          title: error.name,
          subTitle: error.message,
          buttons: ['OK']
        });
        alert.present()
        console.log(error)
      });
  }

  cancel() {
    this.navCtrl.pop();
  }

  JoinWithEmailPage() {
    this.navCtrl.push(JoinWithEmailPage)
  }

}

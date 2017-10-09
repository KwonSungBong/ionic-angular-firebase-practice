import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from "ionic-angular";
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { HomePage } from '../home/home';
import { LoginWithEmailPage } from '../loginWithEmail/loginWithEmail';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              protected app: App,
              private afAuth: AngularFireAuth,
              public alertCtrl: AlertController) {
  }

  loginWithEmail() {
    this.navCtrl.push(LoginWithEmailPage)
  }

  loginWithAnonymous() {
    this.afAuth.auth
      .signInAnonymously()
      .then(res => {
        // console.log(res)
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

  loginWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        // console.log(res)
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

  loginWithGoogle() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        // console.log(res)
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

}

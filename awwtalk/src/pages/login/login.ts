import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from "ionic-angular";
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { HomePage } from '../home/home';
import { JoinPage } from '../join/join';
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

  loginWithAnonymous() {
    this.afAuth.auth
      .signInAnonymously()
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

  loginWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
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

  loginWithGoogle() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
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

  join() {
    this.navCtrl.push(JoinPage)
  }

}

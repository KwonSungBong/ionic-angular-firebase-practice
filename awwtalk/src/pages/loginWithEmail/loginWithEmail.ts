import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from "ionic-angular";
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../home/home';
import { JoinWithEmailPage } from '../joinWithEmail/joinWithEmail';
import { FindEmailPasswordPage } from '../findEmailPassword/findEmailPassword';
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
      .then(user => {
        if(user.emailVerified){
          this.app.getRootNav().setRoot(HomePage);
        } else {
          this.afAuth.auth.signOut().then(() => {
            let alert = this.alertCtrl.create({
              title: "이메일 인증 대기중입니다.",
              subTitle: "이메일 인증링크를 클릭해 주세요.",
              buttons: ['OK']
            });
            alert.present();
          })
        }
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

  joinWithEmailPage() {
    this.navCtrl.push(JoinWithEmailPage)
  }

  findEmailPasswordPage() {
    this.navCtrl.push(FindEmailPasswordPage)
  }

}

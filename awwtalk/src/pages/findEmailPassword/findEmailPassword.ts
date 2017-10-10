import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-find-email-password',
  templateUrl: 'findEmailPassword.html'
})
export class FindEmailPasswordPage {

  constructor(public navCtrl: NavController,
              private afAuth: AngularFireAuth,
              public alertCtrl: AlertController) {
  }

  complete() {
    const email="rnjstjdqhd39@naver.com";
    this.afAuth.auth
      .sendPasswordResetEmail(email)
      .then(() => {
        let alert = this.alertCtrl.create({
          title: "비밀번호 재설정 이메일을 발송하였습니다.",
          subTitle: "이메일을 확인하여 비밀번호를 재설정해주세요.",
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.pop();
      })
      .catch((error) => {
        let alert = this.alertCtrl.create({
          title: error.name,
          subTitle: error.message,
          buttons: ['OK']
        });
        alert.present();
      });
  }

  cancel() {
    this.navCtrl.pop();
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-join-with-email',
  templateUrl: 'joinWithEmail.html'
})
export class JoinWithEmailPage {

  constructor(public navCtrl: NavController,
              private afAuth: AngularFireAuth,
              public alertCtrl: AlertController) {
  }

  complete() {
    const email="rnjstjdqhd39@naver.com";
    const password="rnjstjdqhd39@";
    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        user.sendEmailVerification().then(() => {
          this.afAuth.auth.signOut().then(() => {
            this.navCtrl.pop();
          })
        });
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

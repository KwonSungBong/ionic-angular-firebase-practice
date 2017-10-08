import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-join',
  templateUrl: 'join.html'
})
export class JoinPage {

  constructor(public navCtrl: NavController,
              private afAuth: AngularFireAuth,
              public alertCtrl: AlertController) {
  }

  complete() {
    const email="rnjstjdqhd39@naver.com";
    const password="rnjstjdqhd39@";
    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => this.navCtrl.pop())
      .catch(function(error) {
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

}

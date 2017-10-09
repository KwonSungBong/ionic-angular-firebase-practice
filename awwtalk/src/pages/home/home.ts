import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { App } from "ionic-angular";
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import { LoginPage } from '../login/login';
import { TalkPage } from '../talk/talk';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  itemsRef: FirebaseListObservable<any[]>;
  items: any[] = [];

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              protected app: App,
              private afAuth: AngularFireAuth,
              public afDB: AngularFireDatabase) {
    this.itemsRef = this.afDB.list('talks');
    this.afDB.list('talks').forEach(data => {
      this.items = data.filter(item => item.numberOfConnections == 1);
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(data => {
      this.app.getRootNav().setRoot(LoginPage);
    })
  }

  enterTalk(talk) {
    // this.itemsRef.update(talk.$key, {numberOfConnections:2})
    this.navCtrl.push(TalkPage, talk);
  }

  selectTalk(talk) {
    this.enterTalk(talk);
  }

  selectRandomTalk() {
    const talk = this.items[0];
    this.enterTalk(talk);
  }

  createTalk() {
    let prompt = this.alertCtrl.create({
      title: '대화',
      message: "제목을 입력하세요",
      inputs: [
        {
          name: 'subject',
          placeholder: 'subject'
        },
      ],
      buttons: [
        {
          text: '취소',
          handler: data => {}
        },
        {
          text: '완료',
          handler: data => {
            if(data.subject == "") return false;
            const subject: string = data.subject;
            const createdDate = Date.now();
            const createdUser = this.afAuth.auth.currentUser.uid;
            // const message = {
            //   createdUser: createdUser,
            //   message: "초기"
            // };
            let item = {
              subject: subject,
              createdDate: createdDate,
              createdUser: createdUser,
              numberOfConnections: 1,
              // messages: [message]
            };

            this.itemsRef.push(item).then(data => {
              const result = this.afDB.object('/talks/' + data.key);
              result.forEach(data => item = data);
              this.enterTalk(item);
            });
          }
        }
      ]
    });
    prompt.present();
  }

}

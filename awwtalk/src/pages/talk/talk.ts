import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { Content } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Component({
  selector: 'page-talk',
  templateUrl: 'talk.html'
})
export class TalkPage {
  @ViewChild(Content) content: Content;
  createdUser: any;
  talk: any;
  message: string = "";
  itemsRef: FirebaseListObservable<any[]>;
  items: any[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              public afDB: AngularFireDatabase) {
    console.log("talk", navParams);
    this.createdUser = this.afAuth.auth.currentUser.uid;
    this.talk = navParams.data;
    this.itemsRef = this.afDB.list('messages');

    this.itemsRef.set(this.talk.$key, [{
      createdUser: this.createdUser,
      message: "입장하였습니다.",
      createdDate: Date.now()
    }]);

    this.afDB.object('/messages/' + this.talk.$key).forEach(data => {
      this.items = data;
      console.log(data, this.items);
    });
  }

  ngAfterViewInit() {
    this.content.ionScrollEnd.subscribe((data)=>{
      if(data.scrollTop == 0) {
        console.log("TOP")
      }
    });
  }

  ionViewWillEnter(): void {
    setTimeout(() => {
      this.content.scrollToBottom(0)
    });
  }

  sendMessage() {
    const data = {
      createdUser: this.createdUser,
      message: this.message,
      createdDate: Date.now()
    };

    this.items.push(data);
    this.afDB.object('/messages/' + this.talk.$key).update(this.items);

    setTimeout(() => {
      this.message = "";
      this.content.scrollToBottom(0);
    }, 10);
  }

}

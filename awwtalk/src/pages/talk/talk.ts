import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { Content } from 'ionic-angular';

@Component({
  selector: 'page-talk',
  templateUrl: 'talk.html'
})
export class TalkPage {
  @ViewChild(Content) content: Content;
  talk: any;
  messages: string[];
  message: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("talk", navParams);
    this.talk = navParams.data;
    this.messages = ["1asdasdsad","2asdasdsad","3asdasdsad","4asdasdsad","5asdasdsad",
      "6asdasdsad","7asdasdsad","8asdasdsad","9asdasdsad","10asdasdsad","11asdasdsad",
      "12asdasdsad","13asdasdsad","14asdasdsad","15asdasdsad","16asdasdsad","17asdasdsad",
      "19asdasdsad","20asdasdsad","21asdasdsad","22asdasdsad","23asdasdsad","24asdasdsad",
      "25asdasdsad","26asdasdsad","27asdasdsad","28asdasdsad","29asdasdsad","30asdasdsad"];
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
    this.messages.push(this.message);
    this.message = "";

    setTimeout(() => {
      this.content.scrollToBottom(0)
    }, 10);
  }

}

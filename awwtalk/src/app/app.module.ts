import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { JoinWithEmailPage } from '../pages/joinWithEmail/joinWithEmail';
import { LoginWithEmailPage } from '../pages/loginWithEmail/loginWithEmail';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCnDN6cibXBOK6utAnvv8q7iJ2G2t5_C90",
  authDomain: "awwtalk.firebaseapp.com",
  databaseURL: "https://awwtalk.firebaseio.com",
  projectId: "awwtalk",
  storageBucket: "awwtalk.appspot.com",
  messagingSenderId: "496828433036"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    JoinWithEmailPage,
    LoginWithEmailPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    JoinWithEmailPage,
    LoginWithEmailPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

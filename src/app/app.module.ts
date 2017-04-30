import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddContact} from '../pages/contact/add/add';
import { ContactsService} from '../services/contacts.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { storage } from "../storage/storage";
import { Chat } from "../pages/contact/chat/chat";
import { Detail } from "../pages/contact/detail/detail";
import { AngularFireModule } from  'angularfire2';

export const firebaseConfig = {
   apiKey: "AIzaSyBZlxBE0diDUKCbL3_bhanTD33mcdk9CtQ",
    authDomain: "ionicexample-b3cb4.firebaseapp.com",
    databaseURL: "https://ionicexample-b3cb4.firebaseio.com",
    projectId: "ionicexample-b3cb4",
    storageBucket: "ionicexample-b3cb4.appspot.com",
    messagingSenderId: "1044583983450"
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddContact,
    Chat,
    Detail
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(
      {
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }
    ),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddContact,
    Chat,
    Detail,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactsService,
    storage
  ]
})
export class AppModule {}

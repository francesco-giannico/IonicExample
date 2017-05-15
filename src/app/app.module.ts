import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Login} from '../pages/login/login';
import { ContactsService} from '../services/contacts.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { storage } from "../storage/storage";
import { Chat } from "../pages/contact/chat/chat";
import { Detail } from "../pages/contact/detail/detail";
import { AngularFireModule } from 'angularfire2';
import { FileChooser } from "@ionic-native/file-chooser";
import { FilePath } from "@ionic-native/file-path";
import { File} from "@ionic-native/file";
import { AddContact } from "../pages/contact/add/add";


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
    Login,
    Chat,
    Detail,
    AddContact
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
    Login,
    Chat,
    Detail,
    AddContact
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactsService,
    storage,
    File,
    FileChooser,
    FilePath
  ]
})
export class AppModule {}

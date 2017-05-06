import { Component, Inject, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import {Login} from '../login/login'
import { File}  from '@ionic-native/file';
import firebase from 'firebase';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   firebaseauth= firebase.auth();
    currentUser:any = this.firebaseauth.currentUser;

  constructor(public navCtrl: NavController) {
      console.log(this.currentUser.displayName);
  }

  logout(){
    this.firebaseauth.signOut();
    this.navCtrl.setRoot(Login);
  
  }

}

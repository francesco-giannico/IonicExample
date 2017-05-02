import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Login} from '../login/login'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    window.localStorage.removeItem('currentuser')
      if(!this.isLoggedIn()){
        console.log("you are not logged in");
        this.navCtrl.push(Login);
      }
  }


  isLoggedIn(){
    if(window.localStorage.getItem('currentuser')){
      return true;
    }
  }
}

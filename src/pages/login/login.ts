import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProviders, AuthMethods,AngularFire} from 'angularfire2';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  email:string;
  password:string;
  constructor(public angFire:AngularFire,public navCtrl: NavController, public navParams: NavParams) {
    

 }

 login(credentials){
  this.angFire.auth.login({
      email: credentials.email,
      password: credentials.password
  },
   {
     provider: AuthProviders.Password,
     method:AuthMethods.Password
   }).then((response)=>{
      console.log('Login Success' + JSON.stringify(response));
      let currentuser=  {
        email:response.auth.email,
        picture : response.auth.photoURL
      }
      window.localStorage.setItem('currentuser',JSON.stringify(currentuser));
      this.navCtrl.pop();
   }).catch((errors)=> {
     console.log(errors);
   })
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}

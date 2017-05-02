import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
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
  constructor(public alertCtrl: AlertController,public angFire:AngularFire,public navCtrl: NavController, public navParams: NavParams) {
    

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
       let prompt= this.alertCtrl.create({
        title:'Error',
        message:errors.message
       })
       prompt.present();
   })
  }
  
   signUp(credentials){
    this.angFire.auth.createUser({
        email: credentials.email,
        password: credentials.password})
   }
   logout(){
     this.angFire.auth.logout();
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}

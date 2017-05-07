import { Component, Inject, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { AngularFire} from 'angularfire2';
import { File}  from '@ionic-native/file';
import { FileChooser}  from '@ionic-native/file-chooser';
import {  FilePath}  from '@ionic-native/file-path';

import firebase from 'firebase';
import { TabsPage } from "../tabs/tabs";

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
  name: string;
  surname: string;
  image:any;
  uid:any;
  auth:any;
  firebaseauth= firebase.auth();
  firebasestore = firebase.storage();
   firebasedb = firebase.database();
  nativepath:any;
  imgsource:any;

  constructor(public zone: NgZone, private file: File,private fileChooser: FileChooser,private filePath: FilePath,public alertCtrl: AlertController,public angFire:AngularFire,public navCtrl: NavController, public navParams: NavParams) {
  /*this.firebasestore.ref().child('image.jpg').getDownloadURL().then(url =>{
      this.zone.run(()=>{
        this.imgsource = url;
      })
    })*/
  }



 login(credentials){

  this.firebaseauth.signInWithEmailAndPassword(credentials.email,credentials.password).then((response)=>{
      alert('Login Success' + JSON.stringify(response));
      //this.navCtrl.pop();
      this.navCtrl.setRoot(TabsPage);
      //aggiungi l'utente nel database 
      var userId = this.firebaseauth.currentUser.uid;
/*
      this.firebaseauth.currentUser.updateProfile({
         displayName: "Frankgiak",
          photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(function() {
          // Update successful.
          alert("Update successful.");
        }, function(error) {
          // An error happened.
           alert("Error"+ error);
        });*/
    }).catch((errors)=> {
       let prompt= this.alertCtrl.create({
        title:'Error',
        message:errors.message
       })
       prompt.present();
   })
  }
  
   signUp(){
 //this.navCtrl.push(AddContact);
    let prompt= this.alertCtrl.create({
      title:'Sign up', 
      inputs:[
        {
          name:'name',
          placeholder:"name"
        },
        {
          name:'surname',
          placeholder:"surname"
        },
        
        {
          name:'email',
          placeholder:"email"
        },
         {
          name:'password',
          placeholder:"password",
          type:"password"
        }
      ],
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
        }
      },
      {
        text: 'Sign up',
        handler: data => {  
          this.firebaseauth.createUserWithEmailAndPassword(data.email, data.password)
            .then(()=>{
               firebase.database().ref('users/'+firebase.auth().currentUser.uid).set({
                  name: data.name,
                  surname: data.surname,
                  email:data.email
                }).catch((errors)=> {
                  let prompt= this.alertCtrl.create({
                    title:'Error',
                    message:errors.message
                    })
                   prompt.present();
                })
               let prompt= this.alertCtrl.create({
                    title:'Success',
                    message:"Sign up success"
                })
                prompt.present();
                this.navCtrl.setRoot(TabsPage);
              }).catch((errors)=> {
                  let prompt= this.alertCtrl.create({
                    title:'Error',
                    message:errors.message
                    })
                   prompt.present();
                })
         }
    }
   ]
  })
     prompt.present();            
   }
}

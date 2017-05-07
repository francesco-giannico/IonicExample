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
      if(this.firebaseauth.currentUser.emailVerified){
        this.navCtrl.setRoot(TabsPage);
      }
      else{
        let prompt= this.alertCtrl.create({
          title:'Error',
          message:"This email address is not verified"
        })
        prompt.present();
      }
    }).catch((errors)=> {
       let prompt= this.alertCtrl.create({
        title:'Error',
        message:errors.message
       })
       prompt.present();
   })
  }
  
   signUp(){

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
                this.firebaseauth.currentUser.sendEmailVerification().then(()=>{
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


                //update simple profile
                 this.firebaseauth.currentUser.updateProfile({
                    displayName: data.name+ " " + data.surname,
                   photoURL: "empty"
                  }).catch(function(error) {
                       let prompt= this.alertCtrl.create({
                            title:'Error',
                            message:error.message
                      })
                      prompt.present();
                    });

               let prompt= this.alertCtrl.create({
                    title:'Success',
                    message:"A confirmation email has been sent"
                })
                prompt.present();
     })
              
              }).catch((errors)=> {
                //if the email address already exists
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

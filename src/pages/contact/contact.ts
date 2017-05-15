import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { ContactsService } from "../../services/contacts.service";
import { Person } from "../../models/person";
import { AddContact } from "./add/add";

import { storage } from "../../storage/storage";
import { Chat } from "./chat/chat";
import { Detail } from "./detail/detail";
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import firebase from 'firebase';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {
 private firebaseauth= firebase.auth();
 private firebasestore = firebase.storage();
 private firebasedb = firebase.database();
  contacts : Person[]=[];
  constructor(public alertCtrl:AlertController,public navCtrl: NavController, private contactsService:ContactsService) {         
   
  }

  ionViewDidEnter(){
    var contactsKeys : any[]=[];
    var contacts : Person[]=[];
     this.firebasedb.ref('contacts/'+ this.firebaseauth.currentUser.uid).once('value')
        .then(
         function(snapshot) {
            snapshot.forEach(
                function(childSnapshot) {
                   firebase.database().ref('users/'+childSnapshot.key).once('value').then(
                     function(snapshot){
                           var person: Person = new Person(snapshot.key,snapshot.val().name,snapshot.val().surname,snapshot.val().email);
                            contacts.push(person);
                      }).catch((e)=>{
                        console.log(e.message);
                      })
                  });
                })
           this.contacts=contacts;
  }

  //When you click on "+" button it open new window
  onLoadNewContact():void{
    this.navCtrl.push(AddContact);
  }

  itemSelected(contact){
    this.navCtrl.push(Chat,contact);
  }

  view(contact:Person){
    this.navCtrl.push(Detail,contact);
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

import { ContactsService } from "../../../services/contacts.service";
import { Person } from "../../../models/person";
import firebase from 'firebase';
@IonicPage()
@Component({
  selector: 'page-add-contact',
  templateUrl: 'add.html',
})
export class AddContact {
 private firebasedb = firebase.database();
 private firebaseauth = firebase.auth();
 contacts: Person[]=[];
  constructor(private contactService: ContactsService, private navCtrl:NavController, private navParams: NavParams) {
    var contacts : Person[]=[] ;
      this.firebasedb.ref('users/').once('value')
        .then(function(snapshot):any {
            snapshot.forEach(function(childSnapshot) {
                var person: Person = new Person( childSnapshot.key,childSnapshot.val().name, childSnapshot.val().surname,  childSnapshot.val().email);
               contacts.push(person);
            });
     })
     this.contacts= contacts;
     
  }


   itemSelected(value){
     var key= value.key;
    var ob  = {};
    ob[key] = true; 
      this.firebasedb.ref('contacts/'+this.firebaseauth.currentUser.uid).update(ob);
      this.navCtrl.pop(); 
  }
  
}
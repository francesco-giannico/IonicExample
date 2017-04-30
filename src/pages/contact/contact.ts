import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { ContactsService } from "../../services/contacts.service";
import { Person } from "../../models/person";
import { AddContact } from "./add/add";

import { storage } from "../../storage/storage";
import { Chat } from "./chat/chat";
import { Detail } from "./detail/detail";
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {
 private persons: FirebaseListObservable<any>;
// private storage:storage;
  
 //contacts:Person[]=[];
  constructor(public alertCtrl:AlertController, angFire: AngularFire, storage:storage,public navCtrl: NavController, private contactsService:ContactsService) {         
   /* this.storage=storage;
    this.storage.clear();
   
    this.contacts= this.storage.getContacts();
    this.contacts.push(new Person("francesco","giannico",'frankgiak@gmail.com'));*/
  this.persons=  angFire.database.list('/Contacts');
  angFire.database.list('/Contacts', { preserveSnapshot: true}).subscribe(snapshots => {
        snapshots.forEach(snapshot => {

       //   console.log(snapshot.key, snapshot.val());
        });
    })
    
   
  }

  //When you click on "+" button it open new window
  onLoadNewContact():void{
    //this.navCtrl.push(AddContact);
    let prompt= this.alertCtrl.create({
      title:'Add contact',
      message:'Enter the contact name , surname and e-mail', 
      inputs:[
        {
          name:'name',
          placeholder:"Contact name"
        },
        {
          name:'surname',
          placeholder:"Contact surname"
        },
        {
          name:'email',
          placeholder:"Contact email"
        }
      ],
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Add',
        handler: data => {
          this.persons.push({
            name: data.name,
            surname: data.surname,
            email: data.email,
            ChatId: 'empty'
          })
        }
      }
    ]
    });
    prompt.present();
  }

  itemSelected(contact){
    this.navCtrl.push(Chat,contact);
    
  }

  view(contact:Person){
    this.navCtrl.push(Detail,contact);
  }
}

import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { ContactsService } from "../../services/contacts.service";
import { Person } from "../../models/person";
import { AddContact } from "./add/add";

import { storage } from "../../storage/storage";
import { Chat } from "./chat/chat";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {
 private storage:storage;
  
 contacts:Person[]=[];
  constructor(storage:storage,public navCtrl: NavController, private contactsService:ContactsService) {         
    this.storage=storage;
    this.contacts= this.storage.getContacts();
  }

  //When you click on "+" button it open new window
  onLoadNewContact(){
    this.navCtrl.push(AddContact);
  }

  itemSelected(){
    this.navCtrl.push(Chat);
  }
 
}

import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { ContactsService } from "../../services/contacts.service";
import { Person } from "../../models/person";
import { AddContact } from "./add/add";

import { storage } from "../../storage/storage";
import { Chat } from "./chat/chat";
import { Detail } from "./detail/detail";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {
 private storage:storage;
  
 contacts:Person[]=[];
  constructor(storage:storage,public navCtrl: NavController, private contactsService:ContactsService) {         
    this.storage=storage;
    this.storage.clear();
   
    this.contacts= this.storage.getContacts();
    this.contacts.push(new Person("francesco","giannico",'frankgiak@gmail.com'));

  }

  //When you click on "+" button it open new window
  onLoadNewContact(){
    this.navCtrl.push(AddContact);
  }

  itemSelected(contact:Person){
    this.navCtrl.push(Chat,contact);
  }

  view(contact:Person){
    this.navCtrl.push(Detail,contact);
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactsService } from "../../services/contacts.service";
import { Person } from "../../app/models/person";
import { AddContact } from "./add/add";



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {
 contacts:Person[]=[];
  constructor(public navCtrl: NavController, private contactsService:ContactsService) {

  }

ionViewWillEnter(){
  this.contacts= this.contactsService.getContacts();

}

  onLoadNewContact(){
    this.navCtrl.push(AddContact);
  }

 
}

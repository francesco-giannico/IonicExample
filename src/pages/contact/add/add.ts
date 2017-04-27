import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContactsService } from "../../../services/contacts.service";
import { Person } from "../../../app/models/person";

@IonicPage()
@Component({
  selector: 'page-add-contact',
  templateUrl: 'add.html',
})
export class AddContact {

  constructor(private contactService: ContactsService, private navCtrl:NavController) {

  }

  onAddContact(value:Person){
    this.contactService.addContact(value);
    this.navCtrl.pop(); //torna indietro da solo
  }
  
}
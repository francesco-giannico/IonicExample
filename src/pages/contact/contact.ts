import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { ContactsService } from "../../services/contacts.service";
import { Person } from "../../models/person";
import { AddContact } from "./add/add";



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {
  
 contacts:Person[]=[];
  constructor(public navCtrl: NavController, private contactsService:ContactsService) {         
      
  }



  //get all the contact
  ionViewWillEnter(){
    this.contacts= this.contactsService.getContacts();
  }


  //When you click on "+" button it open new window
  onLoadNewContact(){
    this.navCtrl.push(AddContact);
    
  }

 
}

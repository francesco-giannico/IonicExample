import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Details } from '../details/details';
import { ContactsService } from "../../services/contacts.service";
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 contacts:{title: string}[]=[];
  constructor(public navCtrl: NavController, private contactsService:ContactsService) {
    
  }

ionViewWillEnter(){
  this.contacts= this.contactsService.getContacts();

}

  onLoadNewContact(){
    this.navCtrl.push(Details);
  }

}

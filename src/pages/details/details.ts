import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactsService} from "../../services/contacts.service";
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class Details {

  constructor(private contactService: ContactsService, private navCtrl:NavController) {

  }

  onAddContact(value:{ title:string}){
    this.contactService.addContact(value);
    this.navCtrl.pop(); //torna indietro da solo
  }
}
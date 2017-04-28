
import { Person } from "../models/person";

import { storage } from "../storage/storage";
import { Injectable } from '@angular/core';




@Injectable()
export class ContactsService{
    private contacts: Person[]=[];
    private storage: storage;


    constructor( storage: storage) { 
        this.storage=storage;
        this.contacts=this.storage.getContacts();
    }

    addContact(contact:Person){
        this.contacts.push(contact);
        this.storage.storeContact(contact);
       
    }

    getContacts(){
        return this.contacts.slice();
    }
  
}

   

import { Storage } from '@ionic/storage';
import { Person } from "../models/person";
import { Injectable } from '@angular/core';






@Injectable()
export class ContactsService{
    private contacts: Person[]=[];
    private storage: Storage;
    private key: number =0;


    constructor( storage: Storage) { 
        this.storage=storage;
       
         //recover all contacts
        this.storage.ready().then(() => {
            this.storage.forEach( (value, key, index) => {
                this.contacts.push(JSON.parse(value));
            })
         });

        this.storage.length().then((data)=>{
              this.key=data;
              console.log("numero",this.key);
        })

        //  console.log("numero",this.key); //sappi che chiama prima questo e poi il length se metti sto log in questa posizione e non nel then
    }

    addContact(contact:Person){
        this.contacts.push(contact);
        //storage
        this.storage.ready().then(() => {
            // set a key/value
            this.storage.set(String(this.key),JSON.stringify(contact));
            this.key++;
         });
    }

    getContacts(){
        return this.contacts.slice();
    }
  
   
  }

   

import { Storage } from '@ionic/storage';
import { Person } from "../models/person";
import { Injectable } from '@angular/core';




@Injectable()
export class storage {
   private  num: number=0;
    private contacts: Person[]=[];
    private storage: Storage;
   private key:number=0;

 constructor( storage:Storage){
     this.storage=storage;
      this.storage.length().then((number)=>{
            this.key= number;
        })
     }

   storeContact(contact:Person){
        //storage
        this.storage.ready().then(() => {
            // set a key/value
            this.storage.set(String(this.key),JSON.stringify(contact));
            this.key++;
         });
   }

   getContacts():Person[]{
         //recover all contacts
        this.storage.ready().then(() => {
            this.storage.forEach( (value, key, index) => {
                this.contacts.push(JSON.parse(value));
            })
         });
         return this.contacts;
   }

  clear(){
      this.storage.clear();
  }
}
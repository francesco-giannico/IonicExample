import { Person } from "../app/models/person";

export class ContactsService{
    private contacts: Person[]=[];

    addContact(contact:Person){
        this.contacts.push(contact);
    }

    getContacts(){
        return this.contacts.slice();
    }
}
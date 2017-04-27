export class ContactsService{
    private contacts: { title: string}[]=[];

    addContact(contact:{title:string}){
        this.contacts.push(contact);
    }

    getContacts(){
        return this.contacts.slice();
    }
}
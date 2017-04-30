import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from "angularfire2";


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class Chat {
   private messages: FirebaseListObservable<any>;
   private receiver: string;
  private chats:FirebaseListObservable<any>;
   private myDate: String = new Date().toISOString();
  private chatId:string;
  private angFire: AngularFire;
  private contacts: FirebaseListObservable<any>;
  
  constructor(public navCtrl: NavController, angFire: AngularFire, public navParams: NavParams) {
    this.angFire=angFire;
    this.chats= this.angFire.database.list('/Chats');
    this.contacts= this.angFire.database.list('/Contacts');
    this.messages= this.angFire.database.list('/Chats/'+this.navParams.get('ChatId')+'/messages');

    //recupero la chiave della sessione associata a questa persona
    /*if(this.navParams.get('ChatId')!=''){
      angFire.database.list('/Chats', { preserveSnapshot: true}).subscribe(snapshots => {
          snapshots.forEach(snapshot => {
            if(snapshot.key==this.navParams.get('ChatId')){
                this.chatId=string;
            }
          
          });
    })}*/
  this.chatId=this.navParams.get('ChatId');
 }

 chatSend(message){
    //tenat di recuperare la chat, se non esiste , se invia un messaggio, la crei.
   //se non esiste la chat allora ne creo una nuova e quindi aggiorno anche la chat id per quel contatto altrimenti update 
   if(this.chatId=='empty'){
     //crea la chat
        this.chatId=this.chats.push({
          messages: [{
            sender:"Antonio",
            text: message.chatText,
            date: this.myDate
          }]
        }).key;
        //assegna l'id della chat inerente questo contatto
        this.contacts.update(this.navParams.get('$key'),{
          ChatId: this.chatId
        });
        //creo il binding con i messaggi di questa nuova chat
        this.messages= this.angFire.database.list('/Chats/'+this.chatId+'/messages');
    }

    else{
        //anche se la prima volta che chatty crei una sessione , non vuol dir che nei parametri hai il chat id , in quanto quello resta quello settato prima di cliccare sul contatto
        //altrimenti usi il chat id ottenuto dopo aver creato la chat per la prima volta
     this.messages= this.angFire.database.list('/Chats/'+this.chatId+'/messages');
      this.messages.push({
            sender:"Antonio",
            text: message.chatText,
            date: this.myDate
        })
        
    }
 }

  ionViewDidLoad() {
   this.receiver=this.navParams.get('name') + "  "+ this.navParams.get('surname');
    
  }

}

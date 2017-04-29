import { Component, NgZone, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import * as io from 'socket.io-client';


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class Chat {

  @ViewChild(Content) content: Content;
  messages: any = [];
  socketHost: string = "http://localhost:3000/";
  socket:any;
  chat:any;
  username:string;
  zone:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.socket= io.connect(this.socketHost);
    this.zone= new NgZone({enableLongStackTrace:false});
    this.socket.on("chat message", (msg) => {
      this.zone.run(()=> {
          this.messages.push(msg);
          //this.content.scrollToBottom();
      });
    });

 }

 chatSend(v){
   let data= {
     message: v.chatText,
     username: this.username
   }
   this.socket.emit('new message', data);
   this.chat= '';
 }
  ionViewDidLoad() {
    this.username=this.navParams.get('name') + "  "+ this.navParams.get('surname');
    
  }

}

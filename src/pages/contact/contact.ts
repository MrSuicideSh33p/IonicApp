import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { ChatRoomPage } from '../chat-room/chat-room'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  nickname = '';
  
  constructor(public navCtrl: NavController, private socket: Socket) {

  }
  joinChat() {
    this.socket.connect();
    //Next line for sending message to backend
    this.socket.emit('set-nickname', this.nickname);
    this.navCtrl.push(ChatRoomPage, { nickname: this.nickname });
  }
}

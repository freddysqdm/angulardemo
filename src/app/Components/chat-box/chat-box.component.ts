import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chatbox',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  public username: string;
  public email: string;
  public messageText: string;
  public legalTerm: string;
  public rooms: Array<any>;

  constructor() {
    //[(ngModel)]="username"
    this.username = "";
    //[(ngModel)]="email"
    this.email = "";
    //[(ngModel)]="legalTerm"
    this.legalTerm = "";
    //[(ngModel)]="messageText"
    this.messageText = "";    
    //[(ngModel)]="room"
    this.rooms = null;
   }

  ngOnInit() {
    this.rooms = this.getRooms();
    this.legalTerm = this.getLegalTerm();
  }

  getRooms() {
    return [
      { id: '1', name: 'Room 1' },
      { id: '2', name: 'Room 2' },
      { id: '3', name: 'Room 3' },
      { id: '4', name: 'Room 4' }
    ];
  }

  getLegalTerm() {
    return "Términos legales";
  }

  join(){
    alert("Joined");
  }

  leave(){
    alert("Leaved");
  }

}
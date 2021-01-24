import { Component, OnInit } from '@angular/core';
import { MessageService } from '../modules/shared/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  
  dangerMessages: string[] = [];
  warningMessages: string[] = [];
  successMessages: string[] = [];
  infoMessages: string[] = [];
  
  constructor(private ms: MessageService) { }

  ngOnInit(): void {
    this.ms.messages$.subscribe(message => {
      if (message.type === 'danger') {
        this.dangerMessages.push(message.content);
      } else if (message.type === 'warning') {
        this.warningMessages.push(message.content);
      } else if (message.type === 'success') {
        this.successMessages.push(message.content);
      } else {
        this.infoMessages.push(message.content);
      }
      setTimeout(()=> {
        this.dangerMessages = [];
        this.warningMessages = [];
        this.successMessages = [];
        this.infoMessages = [];
      }, 3000);
    });
  }





}

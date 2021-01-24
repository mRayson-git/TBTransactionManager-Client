
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageSubject: Subject<Message> = new Subject<Message>();
  messages$ = this.messageSubject.asObservable();

  constructor() { }

  addDangerMessage(content: string): void {
    console.log('Adding danger message');
    const message: Message = {
      type: 'danger',
      content: content,
    }
    this.messageSubject.next(message);
  }

  addWarningMessage(content: string): void {
    console.log('Adding warning message');
    const message: Message = {
      type: 'warning',
      content: content,
    }
    this.messageSubject.next(message);
  }

  addSuccessMessage(content: string): void {
    console.log('Adding success message');
    const message: Message = {
      type: 'success',
      content: content,
    }
    this.messageSubject.next(message);
  }

  addInfoMessage(content: string): void {
    console.log('Adding info message');
    const message: Message = {
      type: 'info',
      content: content,
    }
    this.messageSubject.next(message);
  }
}

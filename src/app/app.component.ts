import { Component } from '@angular/core';
import { Message } from './services/messages/message';
import { MessageService } from './services/messages/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PhotoGallery';

  constructor(
    public readonly messageService: MessageService,
  ) { }

  removeMessage(message: Message){
    this.messageService.messages.splice(this.messageService.messages.indexOf(message), 1);
  }
}

import { Component, OnInit } from '@angular/core';
import { BroadcastService } from '@shared/services/broadcast.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  constructor(public BroadcastSvc: BroadcastService) {}
  messages: string[] = [];

  ngOnInit(): void {
    this.BroadcastSvc.messagesHttp.asObservable().subscribe((values) => {
      this.messages = values;
    });
  }

  remove(message: string): void {
    const index = this.messages.indexOf(message);

    if (index >= 0) {
      this.messages.splice(index, 1);
    }
  }
}

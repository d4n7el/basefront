import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BroadcastService {
  public messagesHttp: BehaviorSubject<string[]>;

  constructor() {
    this.messagesHttp = new BehaviorSubject<string[]>([]);
  }
}

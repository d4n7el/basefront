import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.reducer';
import { NAME_STORAGE_AUTH } from '@utils/const';
import { PERSIST_STORE } from '@utils/persistStore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shoping';
  isLogged: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.persistStore();
    this.store.select(NAME_STORAGE_AUTH).subscribe((auth) => {
      this.isLogged = auth.user.isLoggued;
    });
  }

  persistStore = (): void => {
    PERSIST_STORE().forEach((persist: any) => {
      this.store.dispatch(persist.action(persist.data));
    });
  };
}

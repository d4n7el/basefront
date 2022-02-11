import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.reducer';
import { NAME_STORAGE_AUTH } from '@app/utils/const';

@Injectable({
  providedIn: 'root',
})
export class CheckLoginGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(): Observable<boolean> {
    let isLoggued = false;
    this.store.select(NAME_STORAGE_AUTH).subscribe((auth) => {
      isLoggued = auth.user.isLoggued;
    });
    return of(!isLoggued);
  }
}

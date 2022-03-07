import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BroadcastService } from '@shared/services/broadcast.service';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.reducer';
import * as LOGIN_ACTIONS from '@app/pages/login/store/actions/login.actions';
import * as LANGUAGES_ACTIONS from '@app/shared/components/header/store/actions/languages.actions';
import { NAME_STORAGE_AUTH } from '@app/utils/const';
import { AuthService } from '@app/pages/login/services/auth.service';
import { TranslateConfigService } from '@app/shared/services/translate-config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;
  openSidenav: boolean = false;
  current_lang: string = '';
  username: string = '';
  role: string = '';
  @Output() toggleSidenav = new EventEmitter();

  constructor(
    public BroadcastSvc: BroadcastService,
    private router: Router,
    private store: Store<AppState>,
    private AuthScv: AuthService,
    private TranslateConfSrvc: TranslateConfigService
  ) {}

  ngOnInit(): void {
    this.store.select(NAME_STORAGE_AUTH).subscribe((auth) => {
      this.isLogged = auth.user.isLoggued;
      this.username = auth.user.name || '';
      this.role = auth.user.role || '';
    });
    this.store.select('lang').subscribe((language) => {
      this.current_lang = language.lang;
    });
  }

  changeLanguaje(lang: string): void {
    this.TranslateConfSrvc.changeLanguage(lang);
    this.store.dispatch(LANGUAGES_ACTIONS.SET_LANGUAGE({ lang }));
  }

  onToggleSidenav(): void {
    this.toggleSidenav.emit();
    this.openSidenav = !this.openSidenav;
  }
}

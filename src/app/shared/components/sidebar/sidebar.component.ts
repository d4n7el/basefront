import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppState } from '@app/app.reducer';
import { NAME_STORAGE_AUTH } from '@app/utils/const';
import { Store } from '@ngrx/store';
import * as LOGIN_ACTIONS from '@app/pages/login/store/actions/login.actions';
import { AuthService } from '@app/pages/login/services/auth.service';
import { Router } from '@angular/router';
import { TranslateConfigService } from '@app/shared/services/translate-config.service';
import { BroadcastService } from '@app/shared/services/broadcast.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    public BroadcastSvc: BroadcastService,
    private router: Router,

    private AuthScv: AuthService,
    private TranslateConfSrvc: TranslateConfigService
  ) {}
  username: string = '';
  @Output() toggleSidenav = new EventEmitter();

  ngOnInit(): void {
    this.store.select(NAME_STORAGE_AUTH).subscribe((auth: any) => {
      console.log(auth.user.user);

      this.username = auth.user.name || '';
    });
  }

  onToggleSidenav(): void {
    this.toggleSidenav.emit();
    this.logout();
  }

  logout() {
    this.store.dispatch(LOGIN_ACTIONS.LOGOUT_ACTION());
    this.AuthScv.logout();

    this.BroadcastSvc.messagesHttp.next(['the user closed session']);
    this.router.navigate(['/login']);
  }
}

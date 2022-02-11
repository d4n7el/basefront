import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@login/services/auth.service';
import { UserLogin } from '@login/models/user.interface';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.reducer';
import * as LOGIN_ACTIONS from '@app/pages/login/store/actions/login.actions';
import { UserResponseLogin } from '@pages/login/models/user.interface';
import { NAME_STORAGE_AUTH } from '@app/utils/const';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private AuthScv: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}
  isLogged: boolean = false;

  loginUserform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.store.select(NAME_STORAGE_AUTH).subscribe((auth) => {
      this.isLogged = auth.user.isLoggued;
    });
  }

  send = () => {
    const userData: UserLogin = {
      auth: {
        email: this.loginUserform.get('email')?.value,
        password: this.loginUserform.get('password')?.value,
      },
    };
    this.AuthScv.login(userData).subscribe((response: UserResponseLogin) => {
      this.store.dispatch(LOGIN_ACTIONS.LOGIN_ACTION({ user: response }));
      this.router.navigate(['/dashboard']);
    });
  };
}

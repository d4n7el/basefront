import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  message: string = 'Hola desde login';
  isLogged: boolean = false;
  loginUserform: FormGroup;

  constructor(
    private AuthScv: AuthService,
    private store: Store<AppState>,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginUserform = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

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
    this.AuthScv.login(userData).subscribe((user: UserResponseLogin) => {
      this.store.dispatch(LOGIN_ACTIONS.LOGIN_ACTION({ user }));
      this.router.navigate(['/dashboard']);
    });
  };
}

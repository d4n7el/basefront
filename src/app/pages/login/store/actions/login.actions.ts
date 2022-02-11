import { createAction, props } from '@ngrx/store';
import { UserResponseLogin } from '@pages/login/models/user.interface';

export const LOGIN_ACTION = createAction(
  '[Login Component] Login',
  props<{ user: UserResponseLogin }>()
);

export const LOGOUT_ACTION = createAction('[Login Component] Logout');

export const BROWSER_RELOAD = createAction(
  '[Login Component] Browser Reload',
  props<{ user: UserResponseLogin }>()
);

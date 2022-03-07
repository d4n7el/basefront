import { Action, createReducer, on } from '@ngrx/store';
import {
  LOGIN_ACTION,
  LOGOUT_ACTION,
  BROWSER_RELOAD,
} from '@app/pages/login/store/actions/login.actions';

import { UserResponseLogin } from '@pages/login/models/user.interface';

export interface stateLogin {
  user: UserResponseLogin;
}

export const initialState: stateLogin = {
  user: {
    token: null,
    isLoggued: false,
    user_id: null,
    role: null,
    name: null,
  },
};

const _loginReducer = createReducer(
  initialState,
  on(LOGIN_ACTION, BROWSER_RELOAD, (state, { user }) => ({
    ...state,
    user: { ...user },
  })),
  on(LOGOUT_ACTION, (state) => initialState)
);

export function loginReducer(state: stateLogin | undefined, action: Action) {
  return _loginReducer(state, action);
}

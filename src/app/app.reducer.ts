import { ActionReducerMap } from '@ngrx/store';
import * as login from '@app/pages/login/store/reducer/login.reducer';
import * as lang from '@app/shared/components/header/store/reducers/languages.reducers';

export interface AppState {
  auth: login.stateLogin;
  lang: lang.statelang;
}

export const AppReducers: ActionReducerMap<AppState> = {
  auth: login.loginReducer,
  lang: lang.langReducer,
};

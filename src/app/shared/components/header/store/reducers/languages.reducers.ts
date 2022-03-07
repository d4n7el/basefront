import { Action, createReducer, on } from '@ngrx/store';
import {
  SET_LANGUAGE,
  BROWSER_RELOAD_LANG,
} from '@app/shared/components/header/store/actions/languages.actions';

export interface statelang {
  lang: string;
}

export const initialState: statelang = {
  lang: 'en',
};

const _languageReducer = createReducer(
  initialState,
  on(SET_LANGUAGE, BROWSER_RELOAD_LANG, (state, { lang }) => ({
    lang: lang,
  }))
);

export function langReducer(state: statelang | undefined, action: Action) {
  return _languageReducer(state, action);
}

import { ActionCreator } from '@ngrx/store';

import { BROWSER_RELOAD } from '@app/pages/login/store/actions/login.actions';
import { NAME_STORAGE_AUTH } from '@utils/const';

export const PERSIST_STORE = (): {
  data: {};
  action: ActionCreator;
}[] => {
  return [
    {
      data: { user: JSON.parse(localStorage.getItem(NAME_STORAGE_AUTH) || '') },
      action: BROWSER_RELOAD,
    },
  ];
};

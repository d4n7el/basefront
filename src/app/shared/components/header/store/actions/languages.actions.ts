import { createAction, props } from '@ngrx/store';

export const SET_LANGUAGE = createAction(
  '[Header Component] Lang',
  props<{ lang: string }>()
);

export const BROWSER_RELOAD_LANG = createAction(
  '[Header Component] Browser Reload Lang',
  props<{ lang: string }>()
);

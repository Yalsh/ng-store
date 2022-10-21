import {createAction, props} from '@ngrx/store';
import {User} from 'src/app/auth/store/auth';

enum ActionTypes {
  INIT_LOGIN = "[AUTH] Init Login",
  LOGIN_SUCCESS = "[AUTH] Login Success",
  LOGIN_FAIL = "[AUTH] Login Failure"
}

export const initLogin = createAction(
  ActionTypes.INIT_LOGIN,
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ user: User }>()
)

export const loginFail = createAction(
  ActionTypes.LOGIN_FAIL,
  props<{ error: Error }>()
)

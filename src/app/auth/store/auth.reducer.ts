import {createReducer, on} from '@ngrx/store';

import * as AuthActions from "./auth.actions"
import {AuthState} from 'src/app/auth/store/auth';

export const initialState: AuthState = {
  isLoading: false,
  user: null,
  error: null
}

export const authReducer = createReducer(
  initialState,
  on(AuthActions.initLogin, state => ({...state, isLoading: true})),
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    user: action.user
  })),
  on(AuthActions.loginFail, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  }))
)

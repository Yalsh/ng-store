import {AuthState} from 'src/app/auth/store/auth';
import {createFeatureSelector, createSelector} from '@ngrx/store';

const authState = createFeatureSelector<AuthState>('auth');

4
export const isLoading = createSelector(
  authState,
  (state) => state && state.isLoading
);

export const selectUser = createSelector(
  authState,
  (state) => state && state.user)

export const getError = createSelector(
  authState,
  (state) => state && state.error
)

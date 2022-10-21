import {AuthState} from 'src/app/auth/store/auth';
import {createSelector} from '@ngrx/store';

export const selectFeature = (state: AuthState) => state;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const userSelector = createSelector(
  selectFeature,
  (state) => state.user)

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
)

import {Injectable} from '@angular/core';
import {AuthState} from 'src/app/auth/store/auth';
import {select, Store} from '@ngrx/store';
import * as AuthActions from "./auth.actions";
import * as fromAuth from "./auth.selector"

@Injectable({
  providedIn: "root"
})
export class AuthFacade {
  readonly isLoading$ = this.store.pipe(select(fromAuth.isLoading));
  readonly user$ = this.store.pipe(select(fromAuth.selectUser))

  constructor(private store: Store<AuthState>) {
  }

  login(username: string, password: string) {
    this.store.dispatch(AuthActions.initLogin({username, password}));
  }
}

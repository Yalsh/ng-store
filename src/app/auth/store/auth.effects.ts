import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from 'src/app/auth/auth.service';
import * as AuthActions from "./auth.actions";
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {User} from 'src/app/auth/store/auth';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {
  initLogin$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.initLogin),
      switchMap((credentials =>
          this.authService.login(credentials).pipe(
            map((user: User) => AuthActions.loginSuccess({user})),
            catchError(error => of(AuthActions.loginFail({error}))))
      )))
  )

  loginSuccess$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(() => this.router.navigateByUrl("/user"))
    ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {
  }
}

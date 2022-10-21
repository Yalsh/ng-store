import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {User} from 'src/app/auth/store/auth';

const UserMock: User = {
  id: 1,
  username: 'Admin',
  email: 'admin@gmail.com',

}

@Injectable({
  providedIn: "root"
})
export class AuthService {

  login(credentials: { username: string, password: string }): Observable<User> {
    if (credentials.username && credentials.password) {
      return of(UserMock)
    }
    return throwError(() => new Error("Invalid credentials"))
  }
}

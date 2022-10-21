import {Component} from '@angular/core';
import {AuthFacade} from '../store/auth.facade';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  formGroup: FormGroup = new FormGroup({
    username: new FormControl(null,),
    password: new FormControl(null,),
  })

  constructor(private authFacade: AuthFacade) {
  }

  login(): void {
    const {username, password} = this.formGroup.value;
    this.authFacade.login(username, password);
  }
}

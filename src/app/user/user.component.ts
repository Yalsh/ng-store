import {Component, OnInit} from '@angular/core';
import {AuthFacade} from 'src/app/auth/store/auth.facade';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  readonly user$ = this.authFacade.user$;

  constructor(private authFacade: AuthFacade) {
  }

  ngOnInit(): void {
    this.authFacade.isLoading$.subscribe(console.log);
  }

}

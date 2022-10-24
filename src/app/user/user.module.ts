import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from 'src/app/user/user-routing.module';


@NgModule({
  declarations: [AppRoutingModule.components],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class UserModule {
}

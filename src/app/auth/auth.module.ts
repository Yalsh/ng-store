import {StoreModule} from '@ngrx/store';
import {NgModule} from '@angular/core';
import {authReducer} from 'src/app/auth/store/auth.reducer';
import {AuthRoutingModule} from 'src/app/auth/auth.routing.module';
import {AuthEffects} from 'src/app/auth/store/auth.effects';
import {EffectsModule} from '@ngrx/effects';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AuthRoutingModule.components],
  imports: [
    AuthRoutingModule,
    StoreModule.forFeature("auth", authReducer),
    EffectsModule.forFeature([AuthEffects]),
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
})
export class AuthModule {
}

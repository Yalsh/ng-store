import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from 'src/app/app.component';

const routes: Routes = [
  {
    path: "", component: AppComponent, children: [
      {path: "login", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
      {path: "user", loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

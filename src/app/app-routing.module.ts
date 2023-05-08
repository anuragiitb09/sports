import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './mainpage/homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: '', component:LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

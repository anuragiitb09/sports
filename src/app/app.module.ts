import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavbarComponent } from './mainpage/navbar/navbar.component';
import { HomepageComponent } from './mainpage/homepage/homepage.component';
import { ContactComponent } from './mainpage/contact/contact.component';
import { AboutComponent } from './mainpage/about/about.component';
import { SportscardsComponent } from './mainpage/sportscards/sportscards.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavbarComponent,
    HomepageComponent,
    ContactComponent,

    AboutComponent,
     SportscardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

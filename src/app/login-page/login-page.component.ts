import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor( private router: Router) {}

  

  userData: { userid: string; pswd: string;} = {
    userid: '',
    pswd: ''
   
  };
  
  login() {
    if (this.userData.userid == "iitbsports" && this.userData.pswd == "1234") 
    {
      this.router.navigate(['homepage'])
    }

  }
}

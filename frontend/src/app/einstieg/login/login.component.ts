import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import { AuthentifizierungService } from 'src/app/services/authentifizierung.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  falscherLogin = false;

  constructor(
    private userService: UserServiceService,
    private router: Router,
    private authentifizierungService: AuthentifizierungService
  ) { 
    this.user = new User(null, null, null, null, null, null, null, null, null, null);
  }
  
  
  
  ngOnInit() {
  }

  onLogin(){
    if (this.authentifizierungService.authentifizieren(this.user)) 
    {
      if(sessionStorage.getItem('admin') === '1')
        this.router.navigate(['/dozentenliste'])
      else {
        this.router.navigate(['/kalender'])
      }
      this.falscherLogin = false
    } else {
      this.falscherLogin = true
    }
  }
}

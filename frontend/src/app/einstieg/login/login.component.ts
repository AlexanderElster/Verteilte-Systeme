import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import { AuthentifizierungService } from 'src/app/services/authentifizierung.service';
import { LoginUser } from 'src/app/model/loginUser';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  falscherLogin = false;
  loginUser: LoginUser;
  login=  false;

  constructor(
    private userService: UserServiceService,
    private router: Router,
    private authentifizierungService: AuthentifizierungService
  ) { 
    this.user = new User(0, null, null, null, null, null, null, null, null, null);
    this.loginUser= new LoginUser(null,null);
  }
  
  
  
  ngOnInit() {
  }

  onLogin(){
    this.userService.login(this.loginUser).then( (result) => {
      this.user = result;
      console.log(this.user)
      if (this.authentifizierungService.authentifizieren(this.user))
      {
        console.log(this.authentifizierungService.authentifizieren(this.user));
        console.log(sessionStorage.getItem('uid'))
        if(this.user.admin == true)
          this.router.navigate(['/dozentenliste'])
        else {
          this.router.navigate(['/kalender'])
        }
        this.falscherLogin = false
      } else {
        this.falscherLogin = true
      }
    });
  }
}

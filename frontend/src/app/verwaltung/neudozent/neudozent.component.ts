import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthentifizierungService } from 'src/app/services/authentifizierung.service';

@Component({
  selector: 'app-neudozent',
  templateUrl: './neudozent.component.html',
  styleUrls: ['./neudozent.component.scss']
})
export class NeudozentComponent implements OnInit  {

  user: User;
  passwortcheck = '';
  passwortnichtident = false;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserServiceService,
    private loginService: AuthentifizierungService) {
      this.user = new User(null, null, null, null, null, null, null, null, null, null);
      this.passwortnichtident = true;
  }

  ngOnInit(): void {
    if(!this.loginService.istUserEingeloggt()) {
      this.router.navigate(['/login'])
    }

    if (this.passwortcheck === '') {
      this.passwortnichtident = false;
    }
  }

  onSubmit() {
    if(this.passwortcheck === this.user.passwort ) {
      this.passwortnichtident = false;
      this.userService.save(this.user).subscribe(result => this.gotoDozenteliste());
    }
    else {
      this.passwortnichtident = true;
    }
  }

  gotoDozenteliste() {
    this.router.navigate(['/dozentenliste']);
  }

}

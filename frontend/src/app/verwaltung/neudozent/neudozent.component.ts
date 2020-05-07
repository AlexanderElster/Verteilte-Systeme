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

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserServiceService,
    private loginService: AuthentifizierungService) {
      this.user = new User(null, null, null, null, null, null, null, null, null, null);
  }

  ngOnInit(): void {
    if(!this.loginService.istUserEingeloggt()) {
      this.router.navigate(['/login'])
    }
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoDozenteliste());
  }

  gotoDozenteliste() {
    this.router.navigate(['/dozentenliste']);
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthentifizierungService } from 'src/app/services/authentifizierung.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService : AuthentifizierungService) {
  }

  ngOnInit() {
    sessionStorage.setItem('uid', null)
  }

  isLoggedIn() {
    return this.loginService.istUserEingeloggt()
  }
}

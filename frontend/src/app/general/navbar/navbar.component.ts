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
    sessionStorage.setItem('uid', '1')
    sessionStorage.setItem('admin', '0')
  }

  isLoggedIn() {
    return this.loginService.istUserEingeloggt()
  }

  isAdmin() {
    return this.loginService.istUserAdmin()
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import { AuthentifizierungService } from 'src/app/services/authentifizierung.service';



@Component({
  selector: 'app-dozentenliste',
  templateUrl: './dozentenliste.component.html',
  styleUrls: ['./dozentenliste.component.scss']
})
export class DozentenlisteComponent implements OnInit {

  users: User[];

  constructor(private userService: UserServiceService, private loginService: AuthentifizierungService ,private router: Router) { }

  ngOnInit() {
    this.userService.findAll().then(data => {
      this.users = data;
      
      if(!this.loginService.istUserEingeloggt()) {
        this.router.navigate(['/login'])
      }
    });
  }

  deleteUser(user: User){
    this.userService.delete(user.id);
    window.location.reload();
  }

  gotoDozentenListe() {
    this.router.navigate(['/dozentenliste']);
  }

  openUpdateDozent(user: User){
    /* Mockdaten zum Testen der Schnittstelle
    const testuser = new User(5, null, null, null, null, null, null);
    this.userService.update(testuser)
  */
  }
}

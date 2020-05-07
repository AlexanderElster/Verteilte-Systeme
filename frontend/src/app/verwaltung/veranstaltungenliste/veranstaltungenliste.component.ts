import { Component, OnInit } from '@angular/core';
import { Veranstaltung } from 'src/app/model/veranstaltung';
import { VeranstaltungServiceService } from 'src/app/services/veranstaltung-service.service';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { KursServiceService } from 'src/app/services/kurs-service.service';
import { AuthentifizierungService } from 'src/app/services/authentifizierung.service';

@Component({
  selector: 'app-veranstaltungenliste',
  templateUrl: './veranstaltungenliste.component.html',
  styleUrls: ['./veranstaltungenliste.component.scss']
})
export class VeranstaltungenlisteComponent implements OnInit {

  veranstaltungen: Veranstaltung[];

  constructor(private veranstaltungService: VeranstaltungServiceService, private userService: UserServiceService, private kursService: KursServiceService, private router: Router, private loginService: AuthentifizierungService) { }

  ngOnInit(): void {
    this.veranstaltungService.findAll().subscribe(data => {
      this.veranstaltungen = data;

      for (let veranstaltung of this.veranstaltungen) {
        this.userService.findById(veranstaltung.dozentId).subscribe(dozent => 
          veranstaltung.dozent = dozent)
        
        this.kursService.findById(veranstaltung.kursId).subscribe(kurs =>
          veranstaltung.kurs = kurs)
        }
    });

    if(!this.loginService.istUserEingeloggt()) {
      this.router.navigate(['/login'])
    }

  }

  deleteVeranstaltung(veranstaltung: Veranstaltung) {
    this.veranstaltungService.delete(veranstaltung.id);
    window.location.reload();
  }

}

import { Component, OnInit } from '@angular/core';
import { Veranstaltung } from 'src/app/model/veranstaltung';
import { VeranstaltungServiceService } from 'src/app/services/veranstaltung-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veranstaltungenliste',
  templateUrl: './veranstaltungenliste.component.html',
  styleUrls: ['./veranstaltungenliste.component.scss']
})
export class VeranstaltungenlisteComponent implements OnInit {

  veranstaltungen: Veranstaltung[];

  constructor(private veranstaltungService: VeranstaltungServiceService, private router: Router) { }

  ngOnInit(): void {
    this.veranstaltungService.findAll().subscribe(data => {
      this.veranstaltungen = data;
    });
  }

  deleteVeranstaltung(veranstaltung: Veranstaltung) {
    this.veranstaltungService.delete(veranstaltung.id);
    window.location.reload();
  }

}

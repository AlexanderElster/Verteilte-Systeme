import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KursServiceService } from 'src/app/services/kurs-service.service';
import { VeranstaltungServiceService } from 'src/app/services/veranstaltung-service.service';
import { Veranstaltung } from 'src/app/model/veranstaltung';
import { Vorlesungstermin } from 'src/app/model/vorlesungstermin';
import { VorlesungsterminService } from 'src/app/services/vorlesungstermin.service';

@Component({
  selector: 'app-neuvorlesungstermin',
  templateUrl: './neuvorlesungstermin.component.html',
  styleUrls: ['./neuvorlesungstermin.component.scss']
})
export class NeuvorlesungsterminComponent implements OnInit {

  veranstaltungen: Veranstaltung[];
  vorlesungstermin: Vorlesungstermin;

  constructor(
    private router: Router,
    private kursService: KursServiceService,
    private veranstaltungsService: VeranstaltungServiceService,
    private vorlesungsterminsterminService : VorlesungsterminService
  ) {this.vorlesungstermin = new Vorlesungstermin(null, null, null,null,null)}

  ngOnInit(): void {
    this.veranstaltungsService.findAll().subscribe(data => {
      this.veranstaltungen = data;
    })
  }


  onSubmit(){

  }
}

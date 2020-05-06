import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KursServiceService } from 'src/app/services/kurs-service.service';
import { VeranstaltungServiceService } from 'src/app/services/veranstaltung-service.service';
import { Veranstaltung } from 'src/app/model/veranstaltung';
import { Vorlesungstermin } from 'src/app/model/vorlesungstermin';
import { VorlesungsterminService } from 'src/app/services/vorlesungstermin.service';
import { Kurs } from 'src/app/model/kurs';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-neuvorlesungstermin',
  templateUrl: './neuvorlesungstermin.component.html',
  styleUrls: ['./neuvorlesungstermin.component.scss']
})
export class NeuvorlesungsterminComponent implements OnInit {
// veranstaltungen fürs Dropdown
  veranstaltungen: Veranstaltung[];
  kurse: Kurs[];
  users: User[];


  vorlesungstermin: Vorlesungstermin;

  constructor(
    private router: Router,
    private kursService: KursServiceService,
    private veranstaltungsService: VeranstaltungServiceService,
    private userService: UserServiceService,
    private vorlesungsterminsterminService : VorlesungsterminService
  ) {this.vorlesungstermin = new Vorlesungstermin(null, null, null,null,null)}

  ngOnInit(): void {
    this.veranstaltungsService.findAll().subscribe(data => {
      this.veranstaltungen = data;
    });
    this.kursService.findAll().subscribe(data => {
      this.kurse = data;
    });
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
    /*
    console.log(this.veranstaltungen);
    console.log(this.kurse);
    console.log(this.users);
  */
  }


  onSubmit(){
    console.log(this.vorlesungstermin);
    this.vorlesungsterminsterminService.save(this.vorlesungstermin).subscribe(result => this.gotoKalender());
  }

  gotoKalender(){
    this.router.navigate(['/kalender']);
  }
  ausgabe(){
    console.log(this.veranstaltungen);
    console.log(this.kurse);
    console.log(this.users);
  }
}

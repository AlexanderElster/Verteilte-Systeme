import { Component, OnInit } from '@angular/core';
import { Veranstaltung } from 'src/app/model/veranstaltung';
import { Kurs } from 'src/app/model/kurs';
import { User } from 'src/app/model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { KursServiceService } from 'src/app/services/kurs-service.service';
import { VeranstaltungServiceService } from 'src/app/services/veranstaltung-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-neuveranstaltung',
  templateUrl: './neuveranstaltung.component.html',
  styleUrls: ['./neuveranstaltung.component.scss']
})
export class NeuveranstaltungComponent implements OnInit {

  veranstaltung : Veranstaltung;
  kurse:  Kurs[];
  users:  User[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private veranstaltungService: VeranstaltungServiceService,
    private kursService: KursServiceService,
    private userService: UserServiceService
  ) {
    this.veranstaltung = new Veranstaltung(null, null, null, null, null);
   }

  ngOnInit(): void {
    this.kursService.findAll().subscribe(data => {
      this.kurse = data;
    });
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
  
  onSubmit() {
    this.veranstaltungService.save(this.veranstaltung).subscribe(result => this.gotoKursliste());
  }

  gotoKursliste() {
    this.router.navigate(['/veranstaltungenliste']);
  }
}

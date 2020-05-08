import { Component, OnInit } from '@angular/core';
import { Vorlesungstermin } from 'src/app/model/vorlesungstermin';
import { Veranstaltung } from 'src/app/model/veranstaltung';

import { VorlesungsterminService } from 'src/app/services/vorlesungstermin.service';
import { AuthentifizierungService } from 'src/app/services/authentifizierung.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { KursServiceService } from 'src/app/services/kurs-service.service';
import { VeranstaltungServiceService } from 'src/app/services/veranstaltung-service.service';
import { NgIfContext } from '@angular/common';
import { zipAll } from 'rxjs/operators';


@Component({
  selector: 'app-kalender',
  templateUrl: './kalender.component.html',
  styleUrls: ['./kalender.component.scss']
})
export class KalenderComponent implements OnInit {

  months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

  monthCounter
  selectedMonth;

  selectedDate;
  selectedYear;


  user: User;
  vorlTermine: Array<Vorlesungstermin> = [];
  veranstaltungen: Array<Veranstaltung> = [];

  constructor(private vorlesungsterminService: VorlesungsterminService, private veranstaltungService: VeranstaltungServiceService,
    private userService: UserServiceService, private kursService: KursServiceService, private loginService: AuthentifizierungService, private router: Router) {
  }


  ngOnInit(): void {
    if (!this.loginService.istUserEingeloggt()) {
      this.router.navigate(['/login'])
    }

    this.selectedDate = new Date();
    this.monthCounter = this.selectedDate.getMonth();
    this.selectedYear = this.selectedDate.getFullYear();
    this.getSelectedMonth();
    this.loadCalendar();
  }

  getSelectedMonth() {
    let modulo = this.selectedDate.getMonth() % 12;
    for (let i = 0; i < 12; i++) {
      if (modulo == i) {
        this.selectedMonth = this.months[i];
      }
    }
  }

  getSelectedYear() {
    if (this.selectedDate.getMonth() > 11) {
      this.monthCounter = 0;
      this.selectedYear++;
    }
    if (this.monthCounter < 0) {
      this.monthCounter = 11;
      this.selectedYear--;
    }
  }

  loadCalendar() {
    this.userService.findById(parseInt(sessionStorage.getItem('uid'))).then((result) => {
      this.user = result;

      for (let veranstaltung of this.user.veranstaltungen) {
        this.veranstaltungen.push(veranstaltung)
        for (let vorlesungstermin of veranstaltung.vorlesungstermine) {
          this.vorlTermine.push(vorlesungstermin)
        }
      }
      let d = this.selectedDate;
      let m = d.getMonth();
      let y = d.getFullYear();

      let firstD = d;
      firstD.setDate(1);

      let dateDay = firstD.getDay();
      dateDay = (dateDay == 0) ? 7 : dateDay;

      let entry;
      let zahl;

      let dd;
      let ev;
      let hD = new Date();

      for (let i = 1; i <= 42; i++) {
        entry = document.getElementById('k' + i);
        dd = document.getElementById('d' + i);
        ev = document.getElementById('e' + i);
        zahl = (i + 1) - dateDay;

        let dx = new Date(y, m, zahl);

        if (i >= dateDay && this.isValidDate(y, m, zahl)) {

          let od = zahl;
          let om = m + 1;
          let oy = y;
          if (parseInt(od) < 10) {
            od = "0" + od;
          }
          if (parseInt(m) < 10) {
            om = "0" + om;
          }
          let givenDate = oy + "-" + om + "-" + od;

          entry.innerHTML = '<a  href=javascript: putDate(' + zahl + ')>' + zahl + '</a>';
          entry.hidden = false;
          entry.style.visibility = 'visible';
          entry.style.border = 'solid 1px';

          for (let vorlTermin of this.vorlTermine) {
            for(let veranstaltung of this.veranstaltungen){
              if(veranstaltung.id == vorlTermin.veranstaltungsId){
                vorlTermin.veranstaltung = veranstaltung;
              }
            }
            if (givenDate === vorlTermin.datum) {
              entry.innerHTML = '<a  href=javascript: putDate(' + zahl + ')>' + zahl + '</a><br><b>ID</b><br>' + vorlTermin.id + '<br><b>Bezeichnung<br></b> ' + vorlTermin.veranstaltung.bezeichnung+ '<br><b>Beginn<br></b> ' + vorlTermin.anfangszeit + '<br><b>Ende<br></b> ' + vorlTermin.endezeit + '<br>';
            }
          }

          //heutiges Datum hervorheben
          if (hD.getDate() == dx.getDate() &&
            hD.getMonth() == dx.getMonth() &&
            hD.getFullYear() == dx.getFullYear()) {
          }
        }
        else {
          entry.innerHTML = "";

          if (i >= dateDay) {//Wenn Kalenderende
            //Zelle = hidden
            entry.hidden = true;
            entry.style.border = '0px';
          }
          else {
            entry.style.border = '0px';
          }
        }
      }
    }
    );
  }

  isValidDate(y, m, d) {
    let thisDate = new Date(y, m, 1);
    thisDate.setMonth(thisDate.getMonth() + 1);
    thisDate.setTime(thisDate.getTime() - 12 * 3600 * 1000);

    if (d > thisDate.getDate()) {
      return false;
    }
    else {
      return true;
    }
  }

  putDate(n) {
    var d = this.selectedDate;
    d.setDate(n);
    document.forms['myform'].elements['datum'].value = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
  }
  nextMonth() {
    let d = this.selectedDate;
    let m = d.getMonth() + 1;
    let y = d.getFullYear();
    if ((m + 1) > 12) {
      m = 0;
      y = y + 1;
    }
    d = new Date(y, m, 1);
    this.selectedDate = d;
    this.getSelectedMonth();
    this.loadCalendar();
  }
  prevMonth() {
    let d = this.selectedDate;
    let m = d.getMonth() + 1;
    let y = d.getFullYear();
    if ((m - 1) < 1) {
      m = 11;
      y = y - 1;
    }
    else {
      m = m - 2;
    }
    d = new Date(y, m, 1);
    this.selectedDate = d;
    this.getSelectedMonth();
    this.loadCalendar();
  }

  deleteTermin(id: number) {
    this.vorlesungsterminService.delete(id)
    window.location.reload()
  }
}//class
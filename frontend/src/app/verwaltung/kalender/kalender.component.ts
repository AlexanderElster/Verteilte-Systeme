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
  vorlTermine: Vorlesungstermin[];
  testTermin: Vorlesungstermin;

  constructor(private vorlesungsterminService: VorlesungsterminService,private veranstaltungService: VeranstaltungServiceService,
     private userService: UserServiceService, private kursService: KursServiceService, private loginService: AuthentifizierungService, private router: Router) {   
     }

     ausgabe(){
      console.log(this.vorlTermine);
     }

  ngOnInit(): void {

    this.vorlesungsterminService.findById(2004).then((result) => {
      this.testTermin = result;
      console.log(this.testTermin)
    });
    /*
    this.userService.findById(2003).subscribe(data => {
      this.user = data;
      
      let i = 0;
      for(let veranstaltung of this.user.veranstaltungen){
        
        for(let vorlesungstermin of veranstaltung.vorlesungstermine){

          console.log(vorlesungstermin);
          this.vorlTermine.push(vorlesungstermin);
          i++;
        }
      }
      
      //console.log(this.vorlTermine);
    });

    */

    if(!this.loginService.istUserEingeloggt()) {
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
      dd = document.getElementById('d' +i);
      ev = document.getElementById('e'+i);
      console.log(dd)
      zahl = (i + 1) - dateDay;
      
      let dx = new Date(y, m, zahl);

      if (i >= dateDay && this.isValidDate(y, m, zahl)) {
        entry.innerHTML = '<a  href=javascript: putDate(' + zahl + ')>' + zahl + '</a>';
        entry.hidden = false;
        entry.style.visibility = 'visible';
        entry.style.border = 'solid 1px';

        if (!this.getEventtext(y, m, zahl)) { entry.style.color = '000000'; }
        else {/*
          let testtermin = new Vorlesungstermin(1, "09:00", "2020-05-10", "12:00", 2009, new Veranstaltung(null, null, null, null, null, null));
          let VorlArray = [testtermin];
          
          console.log(testtermin);*/
          entry.innerHTML='<a  href=javascript: putDate(' + zahl + ')>' + zahl + '</a><br>Vorlesungstermin';
          //ev.innerHTML = 'Event';
          //dd.innerHTML= this.getEventtext(y, m, zahl);
        }

        //heutiges Datum hervorheben
        if (hD.getDate() == dx.getDate() &&
          hD.getMonth() == dx.getMonth() &&
          hD.getFullYear() == dx.getFullYear() &&
          hD.getMonth() == this.selectedDate.getMonth()) {
          entry.style.fontWeight = 'bold';
        }
      }
      else {
          entry.innerHTML= "";

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

setEvent(y,m,d){

}

  getEventtext(y, m, d) {
    y = parseInt(y);
    m = parseInt(m);
    d = parseInt(d);

    m++;
    //Mockdaten
    var h = new Array(7);
    h[0] = "04.05.2020|Rap Mayhem Festival, München";
    h[1] = "1.2.2014|Spirit Of Goa, Hamburg";
    h[2] = "16.2.2014|Emergenza Acoustic Festival, Berlin";
    h[3] = "2.3.2014|Skarneval Koblenz, Wehdem";
    h[4] = "12.4.2014|Balinger Rockfestival, Dillingen";
    h[5] = "5.7.2014|HipHop Open, Stuttgart";
    h[6] = "19.7.14|Feeling Fine Festival, Espelkamp";
    h[7] = "26.7.14|Beach Party, Duisburg";

    var dH;
    var eH;
    for (var i = 0; i < h.length; i++) {
      //Datum eH[0] von Event eH[1] trennen
      eH = h[i].split("|");
      //Datum trennen > Tag dH[0], Monat dH[1], Jahr dH[2]
      dH = eH[0].split(".");

      if (parseInt(dH[0]) == d && parseInt(dH[1]) == m
        && parseInt(dH[2]) == y) { return eH[1]; }
    }
    return false;
  }
}//class
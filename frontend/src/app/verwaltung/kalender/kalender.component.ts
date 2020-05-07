import { Component, OnInit } from '@angular/core';
import { VorlesungsterminService } from 'src/app/services/vorlesungstermin.service';
import { VeranstaltungServiceService } from 'src/app/services/veranstaltung-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { KursServiceService } from 'src/app/services/kurs-service.service';
import { Vorlesungstermin } from 'src/app/model/vorlesungstermin';
import { User } from 'src/app/model/user';
import { Veranstaltung } from 'src/app/model/veranstaltung';


@Component({
  selector: 'app-kalender',
  templateUrl: './kalender.component.html',
  styleUrls: ['./kalender.component.scss']
})
export class KalenderComponent implements OnInit {

  months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
  events;
  mockEvents = ["22.05.2020|Rap Mayhem Festival, München", "1.5.2020|Spirit Of Goa, Hamburg"];
  monthCounter;
  selectedMonth;

  selectedDate;
  selectedYear;

  user: User;
  vorlTermine: Vorlesungstermin[];
 

  constructor(private vorlesungsterminService: VorlesungsterminService,private veranstaltungService: VeranstaltungServiceService,
     private userService: UserServiceService, private kursService: KursServiceService ) {     
     }

     ausgabe(){
      console.log(this.vorlTermine);
     }

  ngOnInit(): void {
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

    let eventField;

    let hD = new Date();

    for (let i = 1; i <= 42; i++) {
      entry = document.getElementById('k' + i);
      eventField = document.getElementById('e' + i);
      dd = document.getElementById('d' +i); 
      zahl = (i + 1) - dateDay;
      let dx = new Date(y, m, zahl);

      if (i >= dateDay && this.isValidDate(y, m, zahl)) {
        dd.innerHTML = '<a  href=javascript: putDate(' + zahl + ')>' + zahl + '</a>';
        entry.hidden = false;
        entry.style.visibility = 'visible';
        entry.style.border = 'solid 1px';

        if (!this.getEventtext(y, m, zahl)) { entry.style.color = '000000'; }
        else {
          eventField.innerHTML= this.getEventtext(y, m, zahl);
          entry.style.color = '00FF00';
          //Eventtext wird als Tooltip angezeigt
          //entry.title = this.getEventtext(y, m, zahl);
          entry.title = "hier";
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

  getEventtext(y, m, d) {
    //convertieren in int-Zahlen
y = parseInt(y);
m = parseInt(m);
d = parseInt(d);

//Monate fangen bei 0 an zuzählen
m++;
//definieren der Events
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
for ( var i = 0; i < h.length; i++) {
//Datum eH[0] von Event eH[1] trennen
eH = h[i].split("|");
//Datum trennen > Tag dH[0], Monat dH[1], Jahr dH[2]
dH = eH[0].split(".");

if (parseInt(dH[0]) == d && parseInt(dH[1]) == m
&& parseInt(dH[2]) == y)
{return eH[1];}
}
return false;
  }

}//class


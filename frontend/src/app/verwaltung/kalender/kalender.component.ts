import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-kalender',
  templateUrl: './kalender.component.html',
  styleUrls: ['./kalender.component.scss']
})
export class KalenderComponent implements OnInit {

  months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
  monthCounter;
  selectedMonth;

  selectedDate;
  selectedYear;

  constructor() { }

  ngOnInit(): void {
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

    let hD = new Date();

    for (let i = 1; i <= 42; i++) {
      entry = document.getElementById('k' + i);
      zahl = (i + 1) - dateDay;
      let dx = new Date(y, m, zahl);

      if (i >= dateDay && this.isValidDate(y, m, zahl)) {
        entry.innerHTML = '<a  href=javascript: putDate(' + zahl + ')>' + zahl + '</a>';
        entry.hidden = false;
        entry.style.visibility = 'visible';
        entry.style.border = 'solid 1px';

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
}//class


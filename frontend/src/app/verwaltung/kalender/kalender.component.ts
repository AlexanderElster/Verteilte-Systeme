import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-kalender',
  templateUrl: './kalender.component.html',
  styleUrls: ['./kalender.component.scss']
})
export class KalenderComponent implements OnInit {

   months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
   monthCounter;
   monthNumber;
  currentMonth;
  constructor() { }

  ngOnInit(): void {
    let d = new Date();
    this.monthCounter = d.getMonth();
  this.getCurrentMonth();  
  }

  getCurrentMonth(){
    this.monthCounter = this.monthCounter +12000
    this.monthNumber= this.monthCounter % 12;
    console.log(this.monthNumber)
    for(let i=0; i<12; i++){
      if(this.monthNumber == i){
      this.currentMonth= this.months[i];
      console.log(this.currentMonth)
      }
    }
  }

  prev(){
    this.monthCounter--;
    this.getCurrentMonth();
  }
  next(){
    this.monthCounter++;
    this.getCurrentMonth();
  }
}

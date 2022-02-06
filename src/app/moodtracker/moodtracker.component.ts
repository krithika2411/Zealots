import { Component, OnInit } from '@angular/core';
import { weekdays, months as mm } from '../JSONdata/calender';

@Component({
  selector: 'app-moodtracker',
  templateUrl: './moodtracker.component.html',
  styleUrls: ['./moodtracker.component.scss']
})
export class MoodtrackerComponent implements OnInit {
  days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
  // year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  month: number = 0;
  currentday: number = 0;
  currentyear: number = 0;
  offset: number = 0;
  currentmonth: number = 0;
  currentweek: Array<String> = [];
  currentschedule: any = {};
  constructor() { }

  //function to print days in the month 
  daysofmonth(i:number, j:number ){
    let temp = (i * 7) + j + 1 - this.offset;
    if (temp> this.dayscheck(this.month) || temp < 1) {return '';}
    return (i*7) + j + 1 - this.offset;
  }


    //Function to check the number or days in a month
    dayscheck(mont: number) {
      if (mont % 2 == 0 && mont < 7) { return 31; }
      if (mont % 2 == 1 && mont >= 7) { return 31; }
      if (mont == 1 && this.leapyear()) { return 29; }
      if (mont == 1 && !this.leapyear()) { return 28; }
      else { return 30; }
    }

     //Function to check if the year is a leap year
  leapyear() {
    if (this.currentyear % 4 == 0) { return true; }
    else { return false; }
  }
  

  //Function to check if the selected day is the current day we are viewing to mark the selected day
  iscurrent(i: number, j: number) {
    if (this.currentday == this.daysofmonth(i, j) && this.currentyear == this.currentyear && this.currentmonth == this.month) { return true; }
    else { return false; }
  }

  
  //gets current day
  getcurrentday() {
    let WD: any = weekdays;
    return WD[(new Date(this.currentyear, this.currentmonth, this.currentday)).toString().split(" ")[0]];
    // return (this.offset + ((this.currentday - 1)%7))%7;
  }

  //Get week
  getcurrentweek() {
    let temp1 = ((this.currentday - this.getcurrentday()) + this.dayscheck((this.month - 1 + 12) % 12)) % this.dayscheck((this.month - 1 + 12) % 12);
    if (this.currentday - this.getcurrentday() == 0) {
      temp1 = this.dayscheck((this.month - 1 + 12) % 12);
    }
    this.currentweek.push(temp1.toString() + " ")
    if (temp1 > this.currentday) {
      temp1 = (this.month - 1 + 12) % 12;
      this.currentweek[0] += temp1 + " ";
      if (temp1 > this.month) {
        this.currentweek[0] += this.currentyear - 1 + "";
      }
      else {
        this.currentweek[0] += this.currentyear + "";
      }
    }
    else {
      this.currentweek[0] += this.month + " ";
      this.currentweek[0] += this.currentyear + "";
    }

    let temp2 = ((this.currentday + 6 - this.getcurrentday()) % this.dayscheck(this.month));
    this.currentweek.push(temp2.toString() + " ")
    if (temp2 < this.currentday) {
      temp1 = (this.month + 1) % 12;
      this.currentweek[1] += temp1 + " ";
      if (temp2 < this.month) {
        this.currentweek[1] += this.currentyear + 1 + "";
      }
      else {
        this.currentweek[1] += this.currentyear + "";
      }
    }
    else {
      this.currentweek[1] += this.month + " ";
      this.currentweek[1] += this.currentyear + "";
    }
  }

  //select a date
  select(i: number, j: number) {
    let dow = this.daysofmonth(i, j)
    if (dow == '') return;
    this.currentday = Number(dow);
    this.currentyear = this.currentyear;
    this.currentmonth = this.month;
    this.currentweek = [];
  }


  ngOnInit(): void {
  }

  resetcurrent() {
    this.currentschedule = [];
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 48; j++) {
        if (j == 0) {
          this.currentschedule.push([0]);
        }
        else {
          this.currentschedule[i].push(0);
        }
      }
    }
  }
}

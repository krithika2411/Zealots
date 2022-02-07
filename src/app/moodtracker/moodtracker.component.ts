import { Component, OnInit } from '@angular/core';

// import { weekdays, months as mm } from '../JSONdata/calender';

@Component({
  selector: 'app-moodtracker',
  templateUrl: './moodtracker.component.html',
  styleUrls: ['./moodtracker.component.scss']
})
export class MoodtrackerComponent implements OnInit {
  days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  year = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  numberofdays = [31 , 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  currentweek: Array<String> = [];
  currentschedule: any = {};

  constructor() { }
 
  toIst(date: Date){
    return new Date(date).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })
  }
tempvar=new Date( Date.now());
  ngOnInit(): void {
    let unix_timestamp = Date.now();
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp * 1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

// console.log(formattedTime, unix_timestamp); 
// console.log(date+'--'+  hours+'+'+  minutes+'-'+ seconds ); 
 console.log(this.tempvar);
  }
  
}

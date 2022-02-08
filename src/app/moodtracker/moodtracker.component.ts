import { Component, OnInit } from '@angular/core';

import { weekdays, months as mm } from '../JSONdata/calender';

@Component({
  selector: 'app-moodtracker',
  templateUrl: './moodtracker.component.html',
  styleUrls: ['./moodtracker.component.scss']
})
export class MoodtrackerComponent implements OnInit {
  days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
  year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  numberofdays = [31 , 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  currentweek: Array<String> = [];
  currentschedule: any = {};

  constructor() { }
  getDate(){
     
  }

  getMonth(){

  }

  getDay(){

  }

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

console.log(formattedTime, unix_timestamp);
    
  }
 
}

import { Component, OnInit } from '@angular/core';

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
  currentmonth: number = 0;
  currentschedule: any = {};
  constructor() { }

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

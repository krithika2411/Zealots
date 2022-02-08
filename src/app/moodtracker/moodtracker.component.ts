import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// import { weekdays, months as mm } from '../JSONdata/calender';

@Component({
  selector: 'app-moodtracker',
  templateUrl: './moodtracker.component.html',
  styleUrls: ['./moodtracker.component.scss']
})
export class MoodtrackerComponent implements OnInit {
  days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  numberofdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  currentweek: Array<String> = [];
  currentschedule: any = {};
  month: number = 0;
  curryear: number = 0;
  offset: number = 0;
  currentday: number = 0;
  currentyear: number = 0;
  currentmonth: number = 0;
  offsetcurrentmonth: number = 0;
  user: any;
  // referencedate:Date= 
  constructor(private as: AuthService, private router: Router) { }
  
  iscurrent(i: number, j: number) {
    var tempvar1 = new Date(Date.now())
    if (this.month != tempvar1.getMonth()) {
      return false;
    }
    else if(this.currentday == this.daysofweek(i, j)  && this.month ==tempvar1.getMonth()) 
    
    { console.log("current",this.currentday , this.daysofweek(i, j) , this.month,tempvar1.getMonth() )
      return true; }

    else { return false; }
  }


  //Function to print days in the month
  daysofweek(i: number, j: number) {
    this.setoffset(this.month);
    let temp = (i * 7) + j + 1 - this.offsetcurrentmonth;
    if (temp > this.numberofdays[this.month] || temp < 1) { return ''; }
    return (i * 7) + j + 1 - this.offsetcurrentmonth;
    
  }

  checkmonth(m: string) {
    for (let index = 0; index < this.months.length; index++) {
      if (m == this.months[index]) {
        return index;
      }

    }
    return 0;
  }
   
  move(m:string){
    if (m=='b') {
      if (this.month>0) {
        this.month= this.month-1; 
      }
     
    }

    if (m== 'f') {
      if (this.month<11) {
        this.month= this.month+1; 
      }

    }
  }

  setoffset(currmonth: number) 
  {
    console.log(new Date(2022, currmonth, 1).getDay(), "dayy");
    if (new Date(2022, currmonth, 1).getDay() ) {
      this.offsetcurrentmonth=new Date(2022, currmonth, 1).getDay() -1;
      console.log(this.offsetcurrentmonth, "da");
    }
    else {
      this.offsetcurrentmonth=new Date(2022, currmonth, 1).getDay() ;
      console.log(this.offsetcurrentmonth, "day");
    }
    
     

  }
   

  toIst(date: Date) {
    return new Date(date).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })
  }
  tempvar = new Date(Date.now());
  ngOnInit(): void {
    this.tempvar = new Date(Date.now());
    let unix_timestamp = Date.now();
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    this.currentday= this.tempvar.getDate();
    this.currentyear= this.tempvar.getFullYear();
    console.log(formattedTime, unix_timestamp, date);
    // console.log(date+'--'+  hours+'+'+  minutes+'-'+ seconds ); 
    console.log(this.tempvar.getMonth());
    this.offsetcurrentmonth = (new Date(2022, 1, 1).getDay())
    //  this.month=this.checkmonth(this.tempvar.split(' ')[0]);
    this.month = this.tempvar.getMonth();
    console.log(this.month,'month', this.months[this.month]);
    this.setoffset(this.month);
    
        //  console.log(this.offsetcurrentmonth, 'this is date')
        this.as.getUserState().subscribe(res => {
          if (!res) this.router.navigate(['/signin'])
          this.user = res;
        });

     
        // for (let index = 0; index < 5; index++) {
        //  for (let j = 0; j<7; j++){
        //     console.log(this.iscurrent(index, j), index,j ,'hello');
        //  }
          
        // }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { type } from 'os';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { weekdays, months as mm } from '../JSONdata/calender';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-moodtracker',
  templateUrl: './moodtracker.component.html',
  styleUrls: ['./moodtracker.component.scss']
})
export class MoodtrackerComponent implements OnInit {
  user: any;
  days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  numberofdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  currentweek: Array<String> = [];
  periodarray: Array<Date> = [];
  currentschedule: any = {};
  month: number = 0;
  curryear: number = 0;
  offset: number = 0;
  currentday: number = 0;
  currentyear: number = 0;
  currentmonth: number = 0;
  offsetcurrentmonth: number = 0;
  cycle: number = 0;
  flow: number = 0;
  perioddate: Date = new Date(1950, 1, 1);
  periodboolean: boolean = false;
  tempperiod: Date = new Date();
  temperioddate: Date = new Date();
  perioddate1: Date = new Date();
  painboolean:boolean = false;
  pain:string= "0";
  message:string= "0";
  date1: Date = new Date();
  itosave:number=0;
  jtosave:number=0;
  getperioddatadate:string=1+"-"+  this.months[0]+"-"+2022;
  getperioddatastring:any;
  // referencedate:Date= 
  constructor(private as: AuthService, private router: Router,  private db: AngularFirestore) { }
  userprofileForm = new FormGroup({
    cycle: new FormControl(''),
    flow: new FormControl(''),
    date: new FormControl(''),
  })

  
  userForm = new FormGroup({
    pain: new FormControl(''),
  })

onFormsubmit(){
  this.pain = this.userForm.value.pain;
  console.log(this.pain);
 
  this.db.collection("PeriodCal").doc(this.user.uid).collection("Pain").doc(this.itosave + "-" + this.jtosave + "-" + this.month).set(this.userForm.value).then(res => {
    this.painboolean = false; 
  })
  // this.getperioddata(this.itosave,this.jtosave);
}
getperioddata(i:number,j:number){
  this.db.collection("PeriodCal").doc(this.user.uid).collection("Pain").doc(i + "-" + j + "-" + this.month).snapshotChanges().subscribe(res => {  
    
  console.log(res.payload.data());
  
  this.getperioddatadate=this.daysofweek(i,j)+"-"+  this.months[this.month]+"-"+2022;
  this.getperioddatastring=res.payload.data();
  this.getperioddatastring = this.getperioddatastring["pain"];
  
  console.log(this.daysofweek(i,j)+"-"+  this.months[this.month]+"-"+2022);
})
}
  //Function to submit the last periods date 
  onSubmit() {
    // console.log(this.userprofileForm.value);
    this.cycle = this.userprofileForm.value.cycle;
    this.flow = this.userprofileForm.value.flow;
    this.perioddate = this.userprofileForm.value.date;
    // console.log(typeof this.userprofileForm.value.date );
    this.perioddate = new Date(this.perioddate);
    // console.log(typeof this.perioddate1, typeof new Date('2022-4-1'));
    var a = new Date(2022, this.perioddate.getMonth(), this.perioddate.getDate());
    this.temperioddate = new Date(2022, this.perioddate.getMonth(), this.perioddate.getDate());
    a.setDate(a.getDate() + 28)
    for (let index = 0; index < 3 && this.periodarray.length < 3; index++) {

      var a = new Date(2022, this.temperioddate.getMonth(), this.temperioddate.getDate());
      a.setDate(a.getDate() + 28);
      this.temperioddate.setDate(this.temperioddate.getDate() + 28);
      this.periodarray.push(a);

    }
    for (let index = 0; index < 5; index++) {
      for (let j = 0; j < 7; j++) {
      }
    }
    this.periodboolean = true;

  }

  makingbooleantrue(i:number,j:number){
    this.painboolean = true;
    this.itosave=i;
    this.jtosave=j;
    // this.getperioddata(this.itosave,this.jtosave);
  }

  // function to mark the current day on the calender
  iscurrent(i: number, j: number) {
    var tempvar1 = new Date(Date.now())
    if (this.month != tempvar1.getMonth()) {
      return false;
    }
    else if (this.currentday == this.daysofweek(i, j) && this.month == tempvar1.getMonth()) {

      return true;
    }
    else { return false; }
  }


  //Function to print days in the month
  daysofweek(i: number, j: number) {
    this.setoffset(this.month);
    let temp = (i * 7) + j + 1 - this.offsetcurrentmonth;
    if (temp > this.numberofdays[this.month] || temp < 1) { return ''; }
    return (i * 7) + j + 1 - this.offsetcurrentmonth;
  }

  //to check the current month
  checkmonth(m: string) {
    for (let index = 0; index < this.months.length; index++) {
      if (m == this.months[index]) {
        return index;
      }
    }
    return 0;
  }
  //function to move the arrows of calender forward and backward
  move(m: string) {
    if (m == 'b') {
      if (this.month > 0) {
        this.month = this.month - 1;
      }

    }

    if (m == 'f') {
      if (this.month < 11) {
        this.month = this.month + 1;
      }

    }
  }


  setoffset(currmonth: number) {
    if (new Date(2022, currmonth, 1).getDay()) {
      this.offsetcurrentmonth = new Date(2022, currmonth, 1).getDay() - 1;
    }
    else {
      this.offsetcurrentmonth = new Date(2022, currmonth, 1).getDay();
    }
  }

  isCycle(i: number, j: number) {
    if (!this.periodboolean) {
      return false;
    }
    var date: any = this.daysofweek(i, j);
    if (date == '') { return false; }
    var d1: any = new Date(2022, this.month, date);
    var d11: any = new Date(this.perioddate);
    var d2: any = new Date( d11.getFullYear(),  d11.getMonth(), d11.getDate());
    var diff = (d1 - d2);
    if (diff < 0) {
      return false;
    }
    diff = Math.floor(diff / (1000 * 60 * 60 * 24));
    // console.log(diff, date, this.month, 'heyy', d1, d2);
    
    if (diff % this.cycle <this.flow) {
      return true;
    }
    return false;
  }
  
  isOvulation(i:number, j: number){
    if (!this.periodboolean) {
      return false;
    }
    var date: any = this.daysofweek(i, j);
    if (date == '') { return false; }
    var d1: any = new Date(2022, this.month, date);
    var d11: any = new Date(this.perioddate);
    var d2: any = new Date( d11.getFullYear(),  d11.getMonth(), d11.getDate());
    var diff = (d1 - d2);
    if (diff < 0) {
      return false;
    }
    diff = Math.floor(diff / (1000 * 60 * 60 * 24));
    // console.log(diff, date, this.month, 'heyy', d1, d2);
    
    if (diff % this.cycle >= this.flow + 4 && diff % this.cycle < this.flow + 8 ) {
      return true;
    }
    return false;
  }





  tempvar = new Date(Date.now());
  ngOnInit(): void {
console.log(this.painboolean);
    this.as.getUserState().subscribe(res => {
      if (!res) this.router.navigate(['/signin'])
      this.user = res;
    });
    var d1: any = new Date(2022, 2, 22); //"now"
    var d2: any = new Date(2022, 0, 2);  // some date
    var diff = Math.abs(d1 - d2);
    // console.log(diff);
    // console.log(new Date(diff));
    (diff / 1000 * 60 * 60 * 24)
    // console.log(diff / (1000 * 60 * 60 * 24));
    // console.log(((new Date(2022, 2 , 22)) - (new Date(2022,0, 2))));
  
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


    this.currentday = this.tempvar.getDate();
    this.currentyear = this.tempvar.getFullYear();
    this.offsetcurrentmonth = (new Date(2022, 1, 1).getDay());
    this.month = this.tempvar.getMonth();
    this.setoffset(this.month);
    this.periodarray = [];
  }

}

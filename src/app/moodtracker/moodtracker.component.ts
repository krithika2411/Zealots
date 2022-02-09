import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  periodarray:Array<Date> = [];
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
  perioddate= new Date(1950, 1, 1);
  periodboolean: boolean = false;
  tempperiod:Date =new Date( );
  temperioddate:Date = new Date();
  // referencedate:Date= 
  constructor(private as: AuthService, private router: Router) { }
  userprofileForm = new FormGroup({
    cycle: new FormControl(''),
   flow: new FormControl(''),
    date: new FormControl(''),
  })
   
  onSubmit(){
    console.log(this.userprofileForm.value);
    this.cycle= this.userprofileForm.value.cycle;
    this.flow= this.userprofileForm.value.flow;
    this.perioddate= this.userprofileForm.value.date;
    this.periodboolean=true;
    this.perioddate = new Date(this.perioddate);
  
    var a= new Date(2022 , this.perioddate.getMonth(), this.perioddate.getDate());
    this.temperioddate =  new Date(2022 , this.perioddate.getMonth(), this.perioddate.getDate());
    // console.log('myperiodarray', this.perioddate);
    a.setDate(a.getDate()+28)
    // console.log( a , 'kri' );
    for (let index = 0; index < 3 && this.periodarray.length < 3;index++) {
     
      var a= new Date(2022 , this.temperioddate.getMonth(), this.temperioddate.getDate());
      a.setDate(a.getDate()+28);
      this.temperioddate.setDate( this.temperioddate.getDate()+28);
      this.periodarray.push(a);
      // console.log(a);
    }
    // console.log(this.periodarray);



    // if (this.periodarray.length < 4) {
    //   this.tempperiod.setDate(this.perioddate.getDate()+28);
    //      this.periodarray.push(this.tempperiod);
    //      this.perioddate.setDate(this.perioddate.getDate()+28);
    //      }
    //      console.log(this.periodarray);
    // console.log( localDate.getDate(),'hey');
    // console.log( this.perioddate.getDate(),'hey');
    for (let index = 0; index < 5; index++) {
      for (let j = 0; j<7; j++){
        //  console.log(this.oncyclesubmmit1(index, j), index,j ,'hello', this.periodarray);

        console.log(this.oncyclesubmmit1(index, j));
      }
       
     }
    //  console.log('myperiodarray', this.perioddate); 
  }
  iscurrent(i: number, j: number) {
    var tempvar1 = new Date(Date.now())
    if (this.month != tempvar1.getMonth()) {
      return false;
    }
    else if(this.currentday == this.daysofweek(i, j)  && this.month ==tempvar1.getMonth()) 
    
    { 
      // console.log("current",this.currentday , this.daysofweek(i, j) , this.month,tempvar1.getMonth() )
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
    // console.log(new Date(2022, currmonth, 1).getDay(), "dayy");
    if (new Date(2022, currmonth, 1).getDay() ) {
      this.offsetcurrentmonth=new Date(2022, currmonth, 1).getDay() -1;
      // console.log(this.offsetcurrentmonth, "da");
    }
    else {
      this.offsetcurrentmonth=new Date(2022, currmonth, 1).getDay() ;
      // console.log(this.offsetcurrentmonth, "day");
    }
    
     

  }

oncyclesubmmit1(i: number, j: number)
{
   console.log(this.perioddate.getMonth() ,this.month , 'oncycle submmits',this.month > this.perioddate.getMonth() && this.month <= this.perioddate.getMonth()+ 3, this.daysofweek(i, j));
  
  if (this.month > this.perioddate.getMonth() && this.month < this.perioddate.getMonth()+ 3) {
  //  console.log('heloooo');
    for (let k = 0; k< 3; k++){
      console.log(this.month, this.periodarray ,'periodsss');
      
      console.log(typeof this.periodarray);
      if (this.month== this.periodarray[k].getMonth()  )
      {
        
          if (this.periodarray[k].getDate()<= this.daysofweek(i,j)&& this.periodarray[k].getDate() + this.flow >= this.daysofweek(i,j)){}
        return true;
      }

    }
  
    
//     if (this.periodarray.length < 4) {
//  this.tempperiod.setDate(this.perioddate.getDate()+28);
//     this.periodarray.push(this.tempperiod);
//     this.perioddate.setDate(this.perioddate.getDate()+28);
//     }
    
    // this.tempperiod.setDate(this.perioddate.getDate()+28);
    // this.periodarray.push(this.tempperiod);
    // this.tempperiod.setDate(this.perioddate.getDate()+28);
    // this.periodarray.push(this.tempperiod);
    
  }
  return false;
  // console.log(this.periodarray);

}   
  oncyclesubmmit(i: number, j: number){
    // console.log(this.daysofweek(i, j), 'hie');
    // console.log(((this.perioddate.getDate() -3 )<=this.daysofweek(i, j)), 'condition1');
    // console.log(((this.perioddate.getDate() -3 + this.flow )>=this.daysofweek(i, j)),'condition');
    // console.log('perioddate',this.perioddate.getDate() , 'daysofweek' ,this.daysofweek(i, j) ,'flow', this.flow, 'boolean' ,this.periodboolean);
      if (((this.perioddate.getDate() -3 )<=this.daysofweek(i, j)) && ((this.perioddate.getDate() -3 + this.flow )>=this.daysofweek(i, j)) && (this.periodboolean)) {
        // console.log('hello');
        // while ((this.perioddate.getDate() -3 + this.flow )==this.daysofweek(i, j)) {
          
        // }
         return true;
      }
      else {
        return false;
      }
    
    
  }
   

  toIst(date: Date) {
    return new Date(date).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })
  }
  tempvar = new Date(Date.now());


  
  ngOnInit(): void {
    this.as.getUserState().subscribe(res => {
      if (!res) this.router.navigate(['/signin'])
      this.user = res;
    });
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
    // console.log(formattedTime, unix_timestamp, date);
    // console.log(date+'--'+  hours+'+'+  minutes+'-'+ seconds ); 
    // console.log(this.tempvar.getMonth());
    this.offsetcurrentmonth = (new Date(2022, 1, 1).getDay())
    //  this.month=this.checkmonth(this.tempvar.split(' ')[0]);
    this.month = this.tempvar.getMonth();
    // console.log(this.month,'month', this.months[this.month]);
    this.setoffset(this.month);
    
        //  console.log(this.offsetcurrentmonth, 'this is date')
     
        // for (let index = 0; index < 5; index++) {
        //  for (let j = 0; j<7; j++){
        //     console.log(this.oncyclesubmmit1(index, j), index,j ,'hello');
        //  }
          
        // }
        console.log(this.perioddate)
        var a= new Date(2022 , this.tempvar.getMonth(), 1);
        a.setDate(a.getDate()+28)
        console.log(this.tempvar, a , 'kri' )

        this.periodarray=[];
  }

}

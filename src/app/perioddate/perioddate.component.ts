import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-perioddate',
  templateUrl: './perioddate.component.html',
  styleUrls: ['./perioddate.component.scss']
})
export class PerioddateComponent implements OnInit {
   userprofileForm = new FormGroup({
     firstName: new FormControl(''),
     date: new FormControl(''),
   })

   onSubmit(){
     console.log(this.userprofileForm.value.date);
   }
  constructor() { }

  ngOnInit(): void {
  }

}

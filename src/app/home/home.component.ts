import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;
  // us: any;

  constructor(private as: AuthService, private router: Router, private db: AngularFirestore) { }

  // constructor() { }
  
  
  ngOnInit(): void {
    // this.getCreators()
    this.as.getUserState().subscribe(res => {
      if (!res) this.router.navigate(['/signin'])
      this.user = res;
    });
  }
  // getCreators(){
  //   this.db.collection("Products").snapshotChanges().subscribe((res: any) => {
  //     this.us = res;
  //     console.log(this.us);
  //   })
  // }

}
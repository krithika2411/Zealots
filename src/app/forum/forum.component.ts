import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import {commentdata} from '../../JSONdata/forum.ts';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
user: any;


  constructor(private as: AuthService, private router: Router,private db: AngularFirestore) { }
  reviewdata: any;
  comments: any;
  
  ngOnInit(): void {
    // this.reviewdata = commentdata;
    // this.submit();
    this.as.getUserState().subscribe(res => {
      if (!res) this.router.navigate(['/signin'])
      this.user = res;
    });
    this.getComments();
  }

  threadform = new FormGroup({newth: new FormControl()})
  submit(){
    let data = this.threadform.value; 
    if(data["newth"] == "") return;
    data["email"] = this.user.email
    this.db.collection("Comments").add(data).then(res => {
      this.threadform.get("newth")?.setValue("");
    })
  }

  getComments(){
    this.db.collection("Comments").snapshotChanges().subscribe(res => {
      this.comments = res;
    })
  }
}
